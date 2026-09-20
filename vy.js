const lapseRate = 1.981199936601602; // C per 1000 ft
function ias2tas(ias, altitude) { // altitude in 1000s of feet
    return ias * (1 + altitude * 0.02);
}
function speedOfSound(temp) {
    return 38.97408 * Math.sqrt(273.16 + temp);
}
function makeArray(lo, hi, by = 1) {
    let v, a = [];
    for (v = lo; v <= hi; v += by) {
        a.push(v);
    }
    return a;
}
function arrayFill(arr, spotsBetween) {
    let a = [], x1 = 0, x2 = 1;
    while (x2 < arr.length) {
        let v1 = arr[x1],
            v2 = arr[x2],
            dv = (v2 - v1) / (spotsBetween + 1),
            sb = spotsBetween + 1,
            nv = v1;
        while (sb--) {
            a.push(nv);
            nv += dv;
        }
        x1++;
        x2++;
    }
    a.push(arr[arr.length - 1]);
    return a;
}
function last(arr) {
    return arr[arr.length - 1];
}
function filler(sinceBefore, rowsBetween = 4) {
    function fillFun(g) {
        let myArray, myX, beforeMe, afterMe, myFirst, myLast;
        g.some((i, x) => {
            if (i === fillFun) {
                myX = x;
                return true;
            }
            if (i.forEach) {
                beforeMe = i;
            }
        });
        g.slice(myX + 1).some(i => {
            if (i.forEach) {
                afterMe = i;
                return true;
            }
        });
        myFirst = beforeMe[0] + (afterMe[0] - beforeMe[0]) * sinceBefore / (rowsBetween + 1);
        myLast = last(beforeMe) + (last(afterMe) - last(beforeMe)) * sinceBefore / (rowsBetween + 1);
        myArray = [myFirst, myLast];
        g[myX] = () => {
            g[myX] = arrayFill(myArray, beforeMe.length - 2);
        };
    };
    return fillFun;
}
const weights = makeArray(49, 85);
const altitudes = makeArray(5, 25);
let grid = [
    arrayFill([235, 237, 240, 242, 245, 248, 250], 5),
    filler(1), filler(2), filler(3), filler(4),
    arrayFill([226, 232, 235, 237, 240, 244, 247], 5),
    filler(1), filler(2), filler(3), filler(4),
    arrayFill([216, 219, 223, 232, 236, 237, 241], 5),
    filler(1), filler(2), filler(3), filler(4),
    arrayFill([212, 217, 221, 223, 229, 234, 239], 5),
    filler(1), filler(2), filler(3), filler(4),
    arrayFill([210, 212, 218, 222, 226, 229, 233], 5),
];
grid.forEach(i => {
    if (i.apply) {
        i(grid);
    }
});
grid.forEach(i => {
    if (i.apply) {
        i();
    }
});
function lookup(weight, altitude) {
    let wx = weights.indexOf(weight),
        ax = altitudes.indexOf(altitude),
        speed = grid[ax][wx];
    return speed;
}
function ui() {
    let showValues = {};
    let values = {
        weight : 76,
        altitude : 10,
        speed : 242,
    };
    function input(name, list, value) {
        const min = list[0],
              max = last(list);
        return ['div',
                ['style', ['margin', '.5em 0']],
                ['div', name + ': ',
                 ['style',
                  ['fontSize', '1.5em'],
                  ['display', 'inline-block'],
                  ['textAlign', 'right'],
                  ['width', '50%']]],
                ['div',
                 ['style',
                  ['fontSize', '1.5em'],
                  ['display', 'inline-block'],
                  ['textAlign', 'left'],
                  ['width', '50%']],
                 ['with', div => {
                     showValues[name] = () => {
                         div.innerHTML = values[name] + ',000';
                     };
                 }]],
                ['input',
                 ['style',
                  ['width', '100%']],
                 ['attr',
                  ['type', 'range'],
                  ['step', 1],
                  ['min', min],
                  ['max', max],
                  ['value', value]],
                 ['on',
                  ['input', e => {
                      values[name] = +e.target.value;
                      values.speed = Math.round(lookup(values.weight, values.altitude));
                      showValues[name]();
                      showValues.speed();
                  }]]]];
    }
    M(['div',
       ['div',
        ['style',
         ['fontSize', '2em'],
         ['margin', '1em 0 .5em'],
         ['textAlign', 'center']],
        ['with', div => {
            showValues.speed = () => {
                values.stdTemp = 15 - values.altitude * lapseRate;
                values.c = speedOfSound(values.stdTemp);
                values.tas = ias2tas(values.speed, values.altitude);
                const vYMach = values.tas / values.c;
                console.log({ stdTemp : values.stdTemp, c : values.c, tas : values.tas, vYMach }); // DEBUG
                div.innerHTML = 'Vy: ' + values.speed + ' (M' + vYMach.toFixed(2) + ')';
            };
        }]],
       [input, 'weight', weights, 76],
       [input, 'altitude', altitudes, 10],
       ['div',
        `Maintain calculted speed until reaching the
         higher of M0.63 or green dot,
         following that until level off.`]], document.body);
    showValues.weight();
    showValues.altitude();
    showValues.speed();
}
ui();
