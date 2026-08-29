const weights = [
    50000, 52000, 54000, 56000, 58000,
    60000, 62000, 64000, 66000, 68000,
    70000, 72000, 74000, 76000, 78000,
    80000, 82000, 84000, 86000, 88000,
    90000,
];
const vRef = {
    5 : [
        109, 112, 114, 116, 118, 120, 122, 124, 126, 128,
        130, 131, 133, 135, 137, 139, 140, 142, 144, 145, 147,
    ],
    Full : [
        103, 105, 107, 109, 111, 113, 115, 116, 118, 120,
        122, 123, 125, 126, 127, 128, 129, 130, 132, 134, 135,
    ],
};    
const vRefIce = {
    5 : [
        118, 121, 123, 125, 128, 130, 132, 134, 136, 138,
        140, 142, 144, 146, 148, 150, 152, 154, 156, 157, 159,
    ],
    Full : [
        109, 111, 113, 115, 117, 119, 121, 123, 125, 126,
        128, 130, 132, 133, 134, 135, 136, 136, 137, 139, 140,
    ],
};    
const vAC = {
    2 : [
        130, 133, 135, 138, 140, 143, 145, 147, 150, 152,
        154, 156, 158, 161, 163, 165, 167, 169, 171, 173, 175,
    ],
    4 : [
        115, 117, 119, 121, 124, 126, 128, 130, 132, 134,
        136, 138, 140, 142, 143, 145, 147, 149, 151, 152, 154,
    ],
};
const vFS = [
    158, 161, 164, 167, 170, 173, 176, 179, 181, 184,
    187, 190, 192, 195, 197, 200, 202, 205, 207, 210, 212,
];
function momentaryMessage(m) {
    M(['div', m,
       ['with', div => {
           setTimeout(() => {
               div.remove();
           }, 5000);
       }]], document.body);
}
function sq(v) { return v * v; }
function r2d(r) { return r * 180 / 2 / Math.PI; }
function d2r(d) { return d * 2 * Math.PI / 180; }
function between(lo, hi, ratio) {
    return Math.round(lo + (hi - lo) * ratio);
}
const weight2Speeds = (function () {
    let map = {};
    function dig(ndx) {
        const v0 = weights[ndx], v1 = weights[ndx + 1];
        if (v0 === undefined || v1 === undefined) { return; }
    }
    function initMap() {
        let w, k, x, steps = 0;
        for (w = 50000; w <= 90000; w += 100) {
            k = (w / 1000).toFixed(1);
            if (w % 2000) {
                steps += 1;
                map[k] = {
                    vRef : {
                        5 : between(vRef[5][x], vRef[5][x + 1], steps / 20),
                        Full : between(vRef.Full[x], vRef.Full[x + 1], steps / 20),
                    },
                    vRefIce : {
                        5 : between(vRefIce[5][x], vRefIce[5][x + 1], steps / 20),
                        Full : between(vRefIce.Full[x], vRefIce.Full[x + 1], steps / 20),
                    },
                    vAC : {
                        2 : between(vAC[2][x], vAC[2][x + 1], steps / 20),
                        4 : between(vAC[4][x], vAC[4][x + 1], steps / 20),
                    },
                    vFS : between(vFS[x], vFS[x + 1], steps / 20),
                };
            } else {
                steps = 0;
                x = weights.indexOf(w);
                map[k] = {
                    vRef : {
                        5 : vRef[5][x],
                        Full : vRef.Full[x],
                    },
                    vRefIce : {
                        5 : vRefIce[5][x],
                        Full : vRefIce.Full[x],
                    },
                    vAC : {
                        2 : vAC[2][x],
                        4 : vAC[4][x],
                    },
                    vFS : vFS[x],
                };
            }
        }
    }
    initMap();
    return ({ weight, flaps, autoland, ice, wind, gust }) => {
        const wKey = (weight / 1000).toFixed(1),
              wObj = map[wKey],
              goAroundFlaps = flaps === 'Full' ? 4 : 2,
              useIce = autoland || (ice === 'With Ice Accretion'),
              vRef = useIce ? wObj.vRefIce[flaps] : wObj.vRef[flaps],
              vAppAdd = Math.max(useIce ? 0 : 5, Math.min(20, (wind > 0 ? +wind : 0) + (+gust))),
              vApp = vRef + vAppAdd,
              vAC = wObj.vAC[goAroundFlaps],
              vFS = wObj.vFS;
        return {
            vRef,
            vApp,
            vAC,
            vFS,
            useIce,
            wind,
            gust,
            vAppAdd,
        };
    };
})();
function extract(raw) {
    let conditions = [],
        currentCondition,
        brakeSetting;
    function lines(s) {
        return s.trim().split(/[\n\r]+/);
    }
    function matchCondition(line) {
        const regCondition = /^Flaps (\S+) - (\S+ Ice Accretion),(?: Dry)? RWYCC (\d)/,
              m = line.match(regCondition);
        if (!m) { return; }
        currentCondition = {
            flaps : m[1],
            ice : m[2],
            rcc : m[3],
            brakeSettings : {},
        };
        conditions.push(currentCondition);
        return currentCondition;
    }
    function matchAutolandCondition(line) {
        const regCondition = /^Flaps (\S+) - RWYCC (\d)/,
              m = line.match(regCondition);
        if (!m) { return; }
        currentCondition = {
            autoland : true,
            flaps : m[1],
            rcc : m[2],
            brakeSettings : {},
        };
        conditions.push(currentCondition);
        return currentCondition;
    }
    function matchBrake(line) {
        const regBrake = /^(MAX MAN|HI|MED|LO)/,
              m = line.match(regBrake);
        if (!m) { return; }
        brakeSetting = {
            factors : [],
        };
        currentCondition.brakeSettings[m[1]] = brakeSetting;
        return brakeSetting;
    }
    function matchNumber(line) {
        const regNumber = /^(-?\d+)$/,
              m = line.match(regNumber);
        if (!m) { return; }
        brakeSetting.factors.push(+m[1]);
        return m;
    }
    function matchOverweightFactor(line) {
        const reg = /^For overweight landing add (\d+)/,
              m = line.match(reg);
        if (!m) { return; }
        currentCondition.overweightFactor = +m[1];
        return m;
    }
    lines(raw).forEach(line => {
        matchCondition(line) ||
        matchAutolandCondition(line) ||
        matchBrake(line) ||
        matchNumber(line) ||
        matchOverweightFactor(line);
    });
    return conditions;
}
function checkFactorCounts(conditions) {
    conditions.forEach(condition => {
        if (condition.overweightFactor === undefined) {
            console.log({
                error : 'Missing overweight factor',
                auto : !!condition.autoland,
                flaps : condition.flaps,
                ice : condition.ice,
                rcc : condition.rcc,
            }); // DEBUG
        }
        Object.entries(condition.brakeSettings).forEach(([settingName, {factors}]) => {
            if (factors.length < 12) {
                console.log({
                    error : 'Missing factor',
                    auto : !!condition.autoland,
                    flaps : condition.flaps,
                    ice : condition.ice,
                    rcc : condition.rcc,
                    settingName,
                    factors
                }); // DEBUG
            } else if (factors.length > 12) {
                console.log({
                    error : 'Extra factor',
                    auto : !!condition.autoland,
                    flaps : condition.flaps,
                    ice : condition.ice,
                    rcc : condition.rcc,
                    settingName,
                    factors
                }); // DEBUG
            }
        });
    });
}
function printTables(conditions) {
    function th(label, colspan = 1) {
        return ['th', label, ['attr', ['colspan', colspan]]];
    }
    conditions.forEach(condition => {
        M(['div',
           ['div',
            'Flaps ' + condition.flaps + ' - ' +
            (condition.ice ? condition.ice + ', ' : '') +
            'RWYCC ' + condition.rcc,
            ['style',
             ['marginTop', '1em'],
             ['fontSize', '1.5em']]],
           ['table',
            ['attr',
             ['border', 1],
             ['cellspacing', 0],
             ['cellpadding', 5]],
            ['thead',
             ['tr',
              [th, 'Brakes'],
              [th, 'Ref'],
              [th, 'Weight', 2],
              [th, 'Alt'],
              [th, 'Temp', 2],
              [th, 'Wind', 2],
              [th, 'Slope', 2],
              [th, 'Vapp'],
              [th, 'Rev']],
            ['with', table => {
                Object.entries(condition.brakeSettings).forEach(([settingName, {factors}]) => {
                    M(['tr',
                       ['td', settingName],
                       ['with', tr => {
                           factors.forEach(factor => {
                               M(['td', factor], tr);
                           });
                       }]], table);
                });
            }]]],
           ['div', 'Overweight: +' + condition.overweightFactor]], document.body);
    });
}
function eq(...values) {
    if (values.length < 2) { return; }
    const first = values.shift();
    return values.every(value => value === first);
}
function neq(...values) {
    if (values.length < 2) { return; }
    const first = values.shift();
    return values.every(value => value !== first);
}
function findCondition({ autoland, flaps, ice, rcc, conditions, brake }) {
    let matchedCondition, brakeFactors;
    conditions.some(condition => {
        if (neq(condition.autoland, undefined, autoland)) {
            //console.log({ what : 'mismatch', candidateAutoland : condition.autoland, target : autoland });
            return;
        }
        if (neq(condition.flaps, NaN, flaps)) {
            //console.log({ what : 'mismatch', candidateFlaps : condition.flaps, target : flaps });
            return;
        }
        if (neq(condition.ice, undefined, ice)) {
            //console.log({ what : 'mismatch', candidateIce : condition.ice, target : ice });
            return;
        }
        if (neq(+condition.rcc, NaN, +rcc)) {
            //console.log({ what : 'mismatch', candidateRCC : condition.rcc, target : rcc });
            return;
        }
        return matchedCondition = condition;
    });
    if (matchedCondition) {
        /*
        console.log("Condition matched!"); // DEBUG
        console.log({
            autoland, flaps, ice, rcc, brake, matchedCondition,
        }); // DEBUG
        */
        brakeFactors = matchedCondition.brakeSettings[brake].factors;
    } else {
        console.log({ error : 'Condition NOT matched', autoland, flaps, ice, rcc, brake }); // DEBUG
    }
    return { brakeFactors, matchedCondition };
}
function calculateLandingDistance({ conditions, autoland, flaps, ice, rcc, brake, weight, elevation, temperature, wind, slope, vapp, inopReversers }) {
    const foundCondition = findCondition({ autoland, flaps, ice, rcc, conditions, brake }),
          brakeFactorMap = foundCondition.matchedCondition.brakeSettings;
    let brakeDistanceMap = {};
    Object.entries(brakeFactorMap).forEach(([brakeSetting, {factors}]) => {
        const fRef = factors[0],
              fWeightLess = factors[1],
              fWeightMore = factors[2],
              fAltitude = factors[3],
              fTempLo = factors[4],
              fTempHi = factors[5],
              fHeadwind = factors[6],
              fTailwind = factors[7],
              fSlopeUp = factors[8],
              fSlopeDown = factors[9],
              fVapp = factors[10],
              fRev = factors[11],
              mWeight = (weight - 72000) / 1000, // TODO: use over-weight factor if over MLDW
              isaTemp = 15 - 2 * elevation / 1000,
              mTemp = temperature - isaTemp,
              mWind = wind / 5,
              mVapp = vapp / 5,
              tWeight = mWeight > 0 ? mWeight * fWeightMore : mWeight * fWeightMore,
              tAltitude = elevation * fAltitude / 1000,
              tTemp = mTemp > 0 ? mTemp * fTempHi : mTemp * -fTempLo,
              tWind = mWind > 0 ? mWind * fHeadwind : -mWind * fTailwind,
              tSlope = slope > 0 ? slope * fSlopeUp : -slope * fSlopeDown,
              tVapp = mVapp * fVapp,
              tRev = inopReversers * fRev,
              total = fRef +
                      tWeight +
                      tAltitude +
                      tTemp +
                      tWind +
                      tSlope +
                      tVapp +
                      tRev;
        brakeDistanceMap[brakeSetting] = total;
    });
    return brakeDistanceMap;
}
function calculatorUI(conditions) {
    let showSpeedsAndDistances,
        reflectors = {},
        params = {
            conditions,
            autoland : false,
            flaps : 'Full',
            ice : 'Without Ice Accretion',
            rcc : 6,
            brake : 'MED',
            weight : 72000,
            elevation : 0,
            temperature : 15,
            wind : 0,
            gust : 0,
            slope : 0,
            vapp : 5,
            inopReversers : 0,
        };
    function radioButtons(id, labels, values, callback) {
        let checkers = [];
        function runCheckers(newValue) {
            params[id] = newValue;
            checkers.forEach(checker => checker());
        }
        return ['div',
                ['with', div => {
                    let dim;
                    reflectors[id] = runCheckers;
                    labels.forEach((label, ndx) => {
                        const value = values[ndx];
                        let dimMe, liteMe, checkMe;
                        M(['div', label,
                           ['with', btn => {
                               dimMe = () => btn.style.background = 'none';
                               liteMe = () => {
                                   btn.style.background = 'lightgreen';
                                   dim = dimMe;
                               };
                               checkMe = () => {
                                   (params[id] === value ? liteMe : dimMe)();
                               }
                               checkMe();
                               checkers.push(checkMe);
                           }],
                           ['style',
                            ['display', 'inline-block'],
                            ['textAlign', 'center'],
                            ['padding', '5px 10px'],
                            ['margin', '.5em .2em 0 .2em'],
                            ['border', '2px solid lightgray'],
                            ['borderRadius', '8px'],
                            ['cursor', 'pointer']],
                           ['on', ['click', e => {
                               callback(value);
                               dim && dim();
                               liteMe();
                               dim = dimMe;
                           }]]], div);
                    });
                }]];
    }
    function toggleButton(label, id, callback) {
        let on, lite, dim, set, toggle;
        return ['div', label,
                ['with', btn => {
                    lite = () => btn.style.background = 'lightgreen';
                    dim = () => btn.style.background = 'none';
                    set = v => {
                        on = v;
                        (on ? lite : dim)();
                        callback(on);
                    };
                    toggle = () => set(!on);
                    reflectors[id] = set;
                }],
                ['on', ['click', e => {
                    toggle();
                }]],
                ['style',
                 ['display', 'inline-block'],
                 ['cursor', 'pointer'],
                 ['padding', '5px 10px'],
                 ['margin', '.5em .5em 0 .5em'],
                 ['border', '2px solid lightgray'],
                 ['borderRadius', '8px']]];
    }
    function ranges(...specs) {
        let connect, connectKnob, dim;
        function rangeButton(label, id, min, max, step, formatter) {
            let reflectValue, dimMe, liteMe;
            function cage(v) {
                return Math.min(max,
                                Math.max(min,
                                         Math.round(v / step) * step));
            }
            return ['div',
                    ['style',
                     ['display', 'inline-block'],
                     ['cursor', 'pointer'],
                     ['padding', '5px 10px'],
                     ['margin', '.5em .5em 0 .5em'],
                     ['border', '2px solid lightgray'],
                     ['borderRadius', '8px']],
                    ['with', btn => {
                        dimMe = () => btn.style.background = 'none';
                        liteMe = () => btn.style.background = 'lightgreen';
                    }],
                    ['on', ['click', e => {
                        connect([min, max, step, id, v => {
                            params[id] = cage(v);
                            reflectValue(params[id]);
                        }]);
                        connectKnob([min, max, step, id, v => {
                            params[id] = cage(v);
                            reflectValue(params[id]);
                        }]);
                        dim && dim();
                        liteMe();
                        dim = dimMe;
                    }]],
                    ['div', label],
                    ['div', params[id],
                     ['with', div => {
                         reflectValue = v => {
                             const s = formatter ? formatter(v) : v;
                             div.innerHTML = s;
                         };
                     }]]];
        }
        function knob() {
            let touchOn, rotateKnob;
            function radiusLength(cX, cY, rX, rY) {
                const dX = cX - rX,
                      dY = cY - rY;
                return Math.sqrt(dX * dX + dY * dY);
            }
            return ['div',
                    ['style',
                     ['maxWidth', '100%'],
                     ['overflow', 'hidden']],
                    ['img',
                     ['attr', ['src', 'dial.jpg']],
                     ['style',
                      ['width', 'auto'],
                      ['zIndex', '0'],
                      ['height', '400px']],
                     ['with', img => {
                         let rot = 0, lastX, lastY, lastRadius, knobValue, knobMin, knobMax, knobStep, report2btn,
                             degPerStep, unitsPerDeg, paramID;
                         reflectors.knob = v => {
                             knobValue = v;
                             deg = knobValue * degPerStep;
                             rotateKnob(deg, true);
                         };
                         connectKnob = ([min, max, step, id, reporter]) => {
                             knobMin = min;
                             knobMax = max;
                             knobStep = step;
                             knobValue = params[id];
                             paramID = id;
                             let mid = (max + min) / 2,
                                 haf = (max - min) / 2,
                                 degPerHaf = 360,
                                 deg;
                             degPerStep = degPerHaf / haf;
                             unitsPerDeg = haf / 180;
                             deg = knobValue * degPerStep;
                             report2btn = reporter;
                             rotateKnob(deg, true);
                         };
                         rotateKnob = (deg, abs) => {
                             if (abs) {
                                 rot = deg;
                             } else {
                                 rot += deg;
                             }
                             img.style.rotate = rot + 'deg';
                             knobValue = rot / degPerStep;
                             params[paramID] = knobValue;
                             report2btn && report2btn(knobValue);
                             reflectors.slider(knobValue);
                             go();
                         };
                         M(['on',
                            ['mousemove', e => {
                                let oTop, oLeft, width, height, thisX, thisY, centerX, centerY, thisRadius, moveDistance, angle;
                                function quadrant() {
                                    const midX = (lastX + thisX) / 2,
                                          midY = (lastY + thisY) / 2,
                                          fromCenterX = midX - centerX,
                                          fromCenterY = midY - centerY,
                                          q = (fromCenterX >= 0 ?
                                               (fromCenterY >= 0 ? 2 : 1) :
                                               (fromCenterY >= 0 ? 3 : 4));
                                    return q;
                                }
                                function clockwise(dX, dY) {
                                    const q = quadrant(),
                                          useX = Math.abs(dX) > Math.abs(dY),
                                          useY = !useX;
                                    return (q === 1 ?
                                            (useX ?
                                             (dX >= 0 ? true : false) :
                                             (dY >= 0 ? true : false)) :
                                            (q === 2 ?
                                             (useX ?
                                              (dX >= 0 ? false : true) :
                                              (dY >= 0 ? true : false)) :
                                             (q === 3 ?
                                              (useX ?
                                               (dX >= 0 ? false : true) :
                                               (dY >= 0 ? false : true)) :
                                              (q === 4 ?
                                               (useX ?
                                                (dX >= 0 ? true : false) :
                                                (dY >= 0 ? false : true)) :
                                               undefined))));
                                }
                                if (!touchOn) { return; }
                                if (e.target !== img) { return; }
                                e.preventDefault();
                                thisX = e.pageX;
                                thisY = e.pageY;
                                width = e.target.clientWidth;
                                height = e.target.clientHeight;
                                oTop = e.target.offsetTop;
                                oLeft = e.target.offsetLeft;
                                centerX = oLeft + width / 2;
                                centerY = oTop + height / 2;
                                if (lastX !== undefined && lastY !== undefined) {
                                    thisRadius = radiusLength(centerX, centerY, thisX, thisY);
                                    let rads,
                                        dX = thisX - lastX,
                                        dY = thisY - lastY,
                                        cw = clockwise(dX, dY);
                                    moveDistance = Math.sqrt(dX * dX + dY * dY);
                                    rads = Math.acos((sq(lastRadius) + sq(thisRadius) - sq(moveDistance)) /
                                                      (2 * lastRadius * thisRadius));
                                    angle = r2d(rads);
                                    if (isNaN(angle)) { return; }
                                    rotateKnob(cw ? angle : -angle);
                                }
                                lastX = thisX;
                                lastY = thisY;
                                lastRadius = radiusLength(centerX, centerY, lastX, lastY);
                            }],
                            ['touchmove', e => {
                                let oTop, oLeft, width, height, thisX, thisY, centerX, centerY, thisRadius, moveDistance, angle;
                                function quadrant() {
                                    const midX = (lastX + thisX) / 2,
                                          midY = (lastY + thisY) / 2,
                                          fromCenterX = midX - centerX,
                                          fromCenterY = midY - centerY,
                                          q = (fromCenterX >= 0 ?
                                               (fromCenterY >= 0 ? 2 : 1) :
                                               (fromCenterY >= 0 ? 3 : 4));
                                    return q;
                                }
                                function clockwise(dX, dY) {
                                    const q = quadrant(),
                                          useX = Math.abs(dX) > Math.abs(dY),
                                          useY = !useX;
                                    return (q === 1 ?
                                            (useX ?
                                             (dX >= 0 ? true : false) :
                                             (dY >= 0 ? true : false)) :
                                            (q === 2 ?
                                             (useX ?
                                              (dX >= 0 ? false : true) :
                                              (dY >= 0 ? true : false)) :
                                             (q === 3 ?
                                              (useX ?
                                               (dX >= 0 ? false : true) :
                                               (dY >= 0 ? false : true)) :
                                              (q === 4 ?
                                               (useX ?
                                                (dX >= 0 ? true : false) :
                                                (dY >= 0 ? false : true)) :
                                               undefined))));
                                }
                                if (!touchOn) { return; }
                                if (e.target !== img) { return; }
                                e.preventDefault();
                                t = e.changedTouches.item(0);
                                thisX = t.screenX;
                                thisY = t.screenY;
                                width = e.target.clientWidth;
                                height = e.target.clientHeight;
                                oTop = e.target.offsetTop;
                                oLeft = e.target.offsetLeft;
                                centerX = oLeft + width / 2;
                                centerY = oTop + height / 2;
                                if (lastX !== undefined && lastY !== undefined) {
                                    thisRadius = radiusLength(centerX, centerY, thisX, thisY);
                                    let dX = thisX - lastX,
                                        dY = thisY - lastY,
                                        cw = clockwise(dX, dY);
                                    moveDistance = Math.sqrt(dX * dX + dY * dY);
                                    angle = Math.acos((sq(lastRadius) + sq(thisRadius) - sq(moveDistance)) /
                                                      (2 * lastRadius * thisRadius));
                                    angle = r2d(angle);
                                    rotateKnob(cw ? angle : -angle);
                                }
                                lastX = thisX;
                                lastY = thisY;
                                lastRadius = radiusLength(centerX, centerY, lastX, lastY);
                            }],
                            ['touchstart', e => {
                                e.preventDefault();
                                touchOn = true;
                            }],
                            ['touchend', e => {
                                e.preventDefault();
                                touchOn = false;
                                lastX = lastY = undefined;
                            }],
                            ['mousedown', e => {
                                e.preventDefault();
                                touchOn = true;
                            }],
                            ['mouseup', e => {
                                e.preventDefault();
                                touchOn = false;
                                lastX = lastY = undefined;
                            }]], img);
                     }]]];
        }
        function slider() {
            return ['input',
                    ['attr',
                     ['type', 'range']],
                    ['style',
                     ['marginTop', '1em'],
                     ['width', '95%']],
                    ['with', inp => {
                        let report2btn;
                        reflectors.slider = v => {
                            inp.value = v;
                        };
                        connect = ([min, max, step, id, reporter]) => {
                            inp.min = min;
                            inp.max = max;
                            inp.step = step;
                            inp.value = params[id];
                            report2btn = reporter;
                        };
                        M(['on', ['input', e => {
                            if (report2btn) {
                                report2btn(inp.value);
                                reflectors.knob(inp.value);
                                go();
                            }
                        }]], inp);
                    }]];
        }
        return ['div',
                ['with', div => {
                    specs.forEach(([label, id, min, max, step, formatter]) => {
                        M([rangeButton, label, id, min, max, step, formatter], div);
                    });
                }],
                slider, knob];
    }
    function go() {
        const distances = calculateLandingDistance(params);
        const speeds = weight2Speeds(params);
        showSpeedsAndDistances(speeds, distances);
    }
    M(['div',
       ['style',
        ['textAlign', 'center'],
        ['width', '100%']],
       ['div',
        ['style', ['display', 'inline-block'], ['width', '100%']],
        ['table',
         ['attr',
          ['width', '100%'],
          ['cellspacing', '0'],
          ['cellpadding', '5']],
         ['style', ['fontSize', '1.5em']],
         ['with', div => {
             showSpeedsAndDistances = (speeds, distances) => {
                 div.innerHTML = '';
                 [['vRef', 'MAX MAN'], ['vApp', 'HI'], ['vAC', 'MED'], ['vFS', 'LO']].forEach(([speedKey, brakeSetting]) => {
                     const distance = distances[brakeSetting];
                     M(['tr',
                        ['td', speedKey, ['style', ['textAlign', 'right']]],
                        ['td', speeds[speedKey], ['style', ['textAlign', 'left']]],
                        ['td', brakeSetting, ['style', ['textAlign', 'right']]],
                        ['td', Math.round(distance), ['style', ['textAlign', 'right']]]], div);
                 });
             };
             go(); // initialize the display
         }]]],
       ['div',
        [toggleButton, 'Autoland', 'autoland', newSetting => {
            params.autoland = newSetting;
            if (newSetting === true) {
                reflectors.ice(false);
                reflectors.flaps('5');
            }
            go();
        }],
        [toggleButton, 'Ice Accretion', 'ice', newSetting => {
            params.ice = newSetting ? 'With Ice Accretion' : 'Without Ice Accretion';
            if (params.ice === 'With Ice Accretion') {
                reflectors.autoland(undefined);
            }
            go();
        }]],
       [radioButtons, 'flaps',
        ['Flaps Full', 'Flaps 5'],
        ['Full', '5'],
        value => {
            params.flaps = value;
            if (value === 'Full') {
                reflectors.autoland(false);
            }
            go();
        }],
       [radioButtons, 'rcc',
        ['RCC<br>6', 'RCC<br>5', 'RCC<br>4', 'RCC<br>3', 'RCC<br>2', 'RCC<br>1'],
        [6, 5, 4, 3, 2, 1],
        value => {
            params.rcc = value;
            go();
        }],
       ['div',
        [ranges,
         ['Weight', 'weight', 60000, 89000, 100],
         ['Altitude', 'elevation', 0, 8000, 100],
         ['Temperature', 'temperature', -2, 50, 1],
         ['Wind', 'wind', -15, 50, 1],
         ['Gust', 'gust', 0, 30, 1],
         ['Slope', 'slope', -1.5, 1.5, 0.01, v => v.toFixed(2)],
         ['Vapp', 'vapp', 0, 20, 1],
         ['Inop Reversers', 'inopReversers', 0, 2, 1]]]], document.body);
}
fetch('EJ-operational-landing-distance-tables.txt').
    then(r => {
        r.text().then(raw => {
            let conditions = extract(raw);
            console.log(conditions); // DEBUG
            checkFactorCounts(conditions);
            calculatorUI(conditions);
            //printTables(conditions);
            FOO = conditions; // DEBUG
        });
    });
