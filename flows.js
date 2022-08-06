const storageName = 'E175Flows';
var h, w, theMap;
var flows = [{
    name : "Originating",
    stops : [
        //['Overhead Panel',
        // 'Check (see expanded overhead flow)',
        // [35,0.37,64.83,17.47]],
        ['Flightdeck general',
         ['ul',
          ['li', 'Emergency equipment: check'],
          ['li', 'Pins: 3 gear, 1 RAT'],
          ['li', 'Required documents: check'],
          ['li', 'CB Panels: check']],
         [21.53,2.12,33.05,12.74]],
        ['Overhead Panel, Column 1',
         ['ul',
          ['li', 'DVDR Control: check'],
          ['li', 'Cockpit lights: set'],
          ['li', 'Annunciators: check']],
         [35,0.37,40.85,17.47]],
        ['Overhead Panel, Column 2',
         ['ul',
          ['li', 'Engine 1 Fire Handle: stowed'],
          ['li', 'Fuel panel: set'],
          ['li', 'Passenger signs: set']],
         [40.85,0.37,46.95,17.66]],
        ['Overhead Panel, Column 3',
         ['ul',
          ['li', 'Fire extinguisher panel: out and dark'],
          ['li', 'APU Control: as required, guarded and dark'],
          ['li', 'Windshield wiper panel: OFF'],
          ['li', 'External lights: NAV ON, as required']],
         [46.95,0.37,52.80,17.66]],
        ['Overhead Panel, Column 4',
         ['ul',
          ['li', 'Engine 2 Fire Handle: stowed'],
          ['li', 'Hydraulic panel: set'],
          ['li', 'Pressurization: set']],
         [52.88,0.37,58.98,17.57]],
        ['Overhead Panel, Column 5',
         ['ul',
          ['li', 'Windshield heating: all in'],
          ['li', 'Ice protection: in and auto'],
          ['li', 'Air conditioning: all in'],
          ['li', 'Pressurization: auto and dark']],
         [58.98,0.37,64.83,17.57]],
        ['CA Glareshield Lights Panel',
         'As required',
         [14.41,44.80,22.88,41.08,23.05,42.75,14.41,46.28,14.41,44.80]],
        ['IESS',
         'Check',
         [41.95,45.82,45.51,49.72]],
        ['GND PROX TERR INHIB',
         'Out and dark',
         [42.54,56.23,43.47,57.16]],
        ['EICAS Messages',
         'Messages agree with aircraft status',
         [50.51,46.28,53.22,51.21]],
        ['Clock',
         'Select GPS',
         [54.32,45.91,57.97,49.91]],
        ['ELT',
         'ARM',
         [56.86,51.49,58.05,53.90]],
        ['GND PROX G/S INHIB',
         'Dark',
         [55.08,56.32,55.93,57.16]],
        ['LG WRN INHIB',
         'Dark',
         [56.44,56.04,57.63,57.34]],
        ['MCDU 1',
         ['ul',
          ['li', 'Set'],
          ['li', 'Check CB status'],
          ['li', 'Check Nav Database'],
          ['li', 'Check VOR if needed']],
         [41.02,58.77,46.95,67.70]],
        ['MCDU 2',
         ['ul',
          ['li', 'Set'],
          ['li', 'Check CB status'],
          ['li', 'Check Nav Database'],
          ['li', 'Check VOR if needed']],
         [52.80,58.77,58.81,67.70]],
        ['Flight Controls Mode Panel',
         'Guarded and dark',
         [46.95,58.87,52.54,60.63]],
        ['Stall Warning Panel',
         'Out and dark',
         [47.29,61.00,52.37,62.58]],
        ['Ignition Panel',
         'Both AUTO',
         [47.37,65.93,52.37,67.60]],
        ['EICAS Full',
         'As desired',
         [53.05,69.55,54.07,70.67]],
        ['GND PROX FLAP OVRD',
         'Out, guarded, dark',
         [56.61,78.75,57.80,80.06]],
        ['Trim Panel',
         'Check and set',
         [44.07,84.05,49.83,88.70]],
        ['Cockpit Door Control',
         'Test',
         [50.17,84.05,55.59,87.03]],
        ['Elevator Disconnect',
         'In',
         [40.51,88.88,43.39,92.88]],
        ['Aileron Disconnect',
         'In',
         [56.19,88.88,59.24,92.70]],
        ['Alternate Gear Extension Compartment',
         'Check',
         [60.51,71.04,63.64,75.13]]],
}, {
    name : "CA Before Start, Above the Line",
    stops : [
        ['BATT 1',
         'ON',
         [35.34,11.06,36.78,12.83]],
        ['BATT 2',
         'ON',
         [38.81,10.97,40.34,12.83]],
        ['FSTN BELTS',
         'ON',
         [44.83,15.89,45.93,17.01]],
        ['Paperwork',
         'Verify tail number, review AML, review and sign release',
         [12.63,25.48,22.54,32.41]],
        ['Captain Oxygen Mask',
         'Test, 100%',
         [7.03,62.27,10.25,57.90,15.76,59.29,12.71,63.38,7.03,62.27]],
        ['Display Control Panel',
         'Auto, Set',
         [36.19,39.50,41.61,42.47]],
        ['Reversionary Panel',
         'Auto, Normal',
         [17.46,53.35,23.47,56.04]],
        ['Flight Instruments',
         'Check, set',
         [25.25,46.28,31.86,56.32]],
        ['MFD',
         'As desired, TCAS',
         [34.41,46.28,40.85,56.32]],
        ['EICAS Messages',
         'Check for abnormal messages',
         [50.51,46.28,53.22,51.21]],
        ['EICAS Fuel',
         'Verify against Required Fuel',
         [46.61,51.67,50.34,52.79]],
        ['Autobrake',
         'RTO',
         [42.63,50.74,44.92,54.55]],
        ['Parking Brake',
         'Set',
         [40.42,78.85,42.88,85.91]],
        ['Steering Disengage',
         'Press/Check',
         [20.85,56.91,22.88,60.07]],
        ['Thrust Levers',
         'IDLE',
         [47.97,70.76,52.03,79.87]],
        ['Audio Control Panel',
         'Set',
         [43.98,80.15,49.75,83.77]],
        ['MCDU 1',
         'Takeoff/departure briefing, review perf-init',
         [41.02,58.77,46.95,67.70]]],
}, {
    name : "CA Before Start, Below the Line",
    stops : [
        ['Ready for door closure',
         ['ul', ['li', 'In response to same statement from Flight Attendant A']],
         [36.19,24.75,44.92,31.76]],
        ['Takeoff Performance',
         'FO reads, CA enters in MCDU',
         [41.02,58.77,46.95,67.70]],
        ['Set Trims',
         ['ul',
          ['li', 'PITCH trim value from ACARS'],
          ['li', 'YAW and ROLL trims neutral']],
         [44.07,84.05,49.83,88.70]],
        ['Speed Selector Knob',
         'FMS or MANUAL',
         [46.69,40.56,48.22,42.32]],
        ['TOGA Button',
         ['ul',
          ['li', 'Press'],
          ['li', 'Verify LNAV (or HDG) and VNAV']],
         [48.22,75.50,49.32,76.80]],
        ['Flightdeck Window',
         ['ul',
          ['li', 'Handle forward'],
          ['li', 'Red pins seated']],
         [1.10,50.16,7.20,44.86,8.31,50.99,1.36,52.39]],
        ['MFD Doors',
         ['ul',
          ['li', 'Check door indications'],
          ['li', 'Flightdeck door closed and locked']],
         [34.41,46.28,40.85,56.32]],
        ['Sterile',
         'ON',
         [41.86,15.80,42.97,17.29]],
        ['Beacon',
         'ON',
         [50.93,11.34,52.12,12.73]],
        ['HYD Pump 3A',
         ['ul',
          ['li', 'ON'],
          ['li', 'Call "Below the line"']],
         [53.31,10.87,55.08,12.73]]],
}, {
    name : "PM After Takeoff",
    stops : [
        ['SLAT/FLAP Lever',
         ['div',
          ['div', 'Call "Acceleration Height"'],
          ['div', 'When PF calls "Climb Sequence":'],
          ['ul',
           ['li', 'Retract slats/flaps following F-Bug reference'],
           ['li', 'If F-Bug disappears, retract following Green Dot + 10 knots']]],
         [56.10,80.99,58.31,87.49]],
        ['Air Conditioning and Pressurization',
         'Check',
         [58.90,7.34,64.66,14.87]],
        ['APU',
         'OFF or as required by MEL',
         [47.71,5.76,50.00,7.99]]],
}, {
    name : "PM 10,000, Climbing",
    stops : [
        ['Sterile',
         'OFF',
         [41.86,15.80,42.97,17.29]],
        ['FSTN BELTS',
         'OFF at captain discretion',
         [44.83,15.89,45.93,17.01]],
        ['EICAS',
         ['ul',
          ['li', 'Decluttered'],
          ['li', 'if not, investigate']],
         [46.27,45.72,53.56,56.88]],
        ['ACARS',
         'Report delay if needed',
         [40.85,58.77,58.98,67.88]]],
}, {
    name : "PM 18,000, Climbing",
    stops : [
        ['Altimeter (PFD)',
         'STD',
         [36.19,40.19,37.46,41.95]],
        ['IESS altimeter',
         'STD',
         [41.95,45.86,45.51,49.85]],
        ['External Lights',
         ['ul',
          ['li', 'Turn OFF all lights EXCEPT:'],
          ['li', 'Beacon'],
          ['li', 'Strobe'],
          ['li', 'NAV']],
         [46.95,10.97,52.80,17.38]]],
}, {
    name : "PM Cruise",
    stops : [
        ['Altimeters . . . Crosscheck',
         ['ul',
          ['li', 'CA and FO altimeters must be within 200 feet of each other'],
          ['li', 'In RVSM airspace, check at least once each hour'],
          ['li', 'Notify ATC if in RVSM airspace and difference is &gt; 200 ft']],
         [25.51,46.32,32.03,56.82]]],
}, {
    name : "PF Descent",
    stops : [
        ['Flight Instruments',
         ['ul',
          ['li', 'RA/BARO pre-select radios and courses']],
         [36.24,40.45,61.51,42.70]],
        ['Approach briefing',
         'Complete',
         [55.13,25.07,61.69,29.68]]],
}, {
    name : "PM Descent",
    stops : [
        ['MCDU: ATIS',
         ['ul',
          ['li', 'Request ATIS'],
          ['li', 'DLK &rarr; ATS MENU &rarr; ATIS REQ']],
         [40.92,58.77,47.12,63.66]],
        ['Flight Instruments',
         ['ul',
          ['li', 'RA/BARO pre-select radios and courses']],
         [36.24,40.45,61.51,42.70]],
        ['MCDU: Landing Data',
         ['ul',
          ['li', 'Request landing data'],
          ['li', 'DLK &rarr; PERFORMANCE &rarr; LANDING CONDITIONS']],
         [41.02,63.66,46.94,67.78]]],
}, {
    name : "PM 18,000, Descending",
    stops : [
        ['Altimeter (PFD)',
         'Set',
         [36.19,40.19,37.46,41.95]],
        ['IESS altimeter',
         'Set',
         [41.95,45.86,45.51,49.85]],
        ['External Lights',
         ['ul',
          ['li', 'Turn ON all lights EXCEPT:'],
          ['li', 'LOGO (only at night)'],
          ['li', 'INSP (as required)'],
          ['li', 'TAXI (as required)'],
          ['li', 'LANDING (unless it causes a distraction)']],
         [46.95,10.97,52.80,17.38]]],
}, {
    name : "CA After Landing",
    stops : [
        ['External Lights',
         ['ul',
          ['li', 'STROBE OFF'],
          ['li', 'LANDING OFF'],
          ['li', 'TAXI (as required)'],
          ['li', 'Prior to crossing any runway:',
           ['ul',
            ['li', 'NAV ON'],
            ['li', 'STROBE ON'],
            ['li', 'RED BCN ON'],
            ['li', 'LOGO ON'],
            ['li', 'TAXI ON'],
            ['li', 'INSP ON'],
            ['li', 'Landing lights on unless if distracts other crews']]]],
         [46.95,10.97,52.80,17.38]]],
}, {
    name : "CA Parking",
    stops : [
        ['Thrust Levers',
         'IDLE',
         [47.97,70.76,52.03,79.87]],
        ['Parking Brake',
         'Set',
         [40.42,78.85,42.88,85.91]],
        ['GPU',
         'ON if available',
         [35.42,6.78,36.61,7.99]],
        ['APU (Gen)',
         'ON if needed',
         [47.03,5.39,50.00,7.90]],
        ['START/STOP Selectors',
         'STOP',
         [47.12,63.38,52.46,65.61]],
        ['HYD 3A PUMP',
         'OFF',
         [53.31,10.87,55.08,12.73]],
        ['Beacon',
         'OFF',
         [50.93,11.34,52.12,12.73]],
        ['FSTN BELTS',
         'OFF',
         [44.83,15.89,45.93,17.01]],
        ['Sterile',
         'OFF',
         [41.86,15.80,42.97,17.29]]],
}];
function clearScores() {
    localStorage.removeItem(storageName);
}
function setScores(o) {
    localStorage.setItem(storageName, JSON.stringify(o));
}
function getScores() {
    var raw = localStorage.getItem(storageName),
        jso = JSON.parse(raw || '{}');
    return jso;
}
function two(n) { return +n < 10 ? ('0' + (+n)) : ('' + n); }
function ms2ms(ms) {
    var s = Math.round(ms / 1000),
        m = Math.floor(s / 60);
    if (m) {
        s -= 60 * m;
    }
    return [m, s];
}
function ms2ts(ms) {
    var [m, s] = ms2ms(ms);
    return m + ':' + two(s);
}
function nbAlert(message, hint, onDismiss) {
    var bye, showHint;
    M(['div',
       ['style',
        ['background', 'white'],
        ['padding', '2em'],
        ['borderRadius', '1em'],
        ['position', 'absolute'],
        ['top', (window.scrollY + 0) + 'px'],
        ['left', '0px']],
       ['with', div => {
           bye = () => {
               div.remove();
               onDismiss && onDismiss();
           };
       }],
       ['div', message,
        ['style', ['cursor', 'pointer'], ['marginBottom', '1em']],
        ['on', ['click', e => { bye(); }]]],
       ['div', hint ? 'Hint?' : '',
        ['on', ['click', e => { showHint(); }]],
        ['style', ['cursor', 'pointer']],
        ['with', hintDiv => {
            if (!hint) { return; }
            showHint = () => {
                hintDiv.innerHTML = hint;
                setTimeout(bye, 2000);
            };
        }]]], document.body);
    return bye;
}
function processFlows() {
    flows.forEach(flow => {
        flow.stops = flow.stops.map(([name, description, coords]) => {
            return {
                name,
                description,
                coords : coords.map((coord, cx) => {
                    return Math.round(cx % 2 ? h * coord / 100 : w * coord / 100);
                }),
                coordsPct : coords,
            };
        });
    });
}
function useFlow(flow) {
    var dropLastMessage,
        addChecked,
        dropChecked,
        nextStopNdx = 0,
        errors = [],
        areas,
        stopTimer,
        finished,
        hideHinter,
        ndxMap = {};
    function pickAnother() {
        areas.forEach(area => area.remove());
        flowPicker();
    }
    function saveScoreFlow(errors, elapsedMS) {
        let scores = getScores();
        scores[flow.name] = { errors, elapsedMS };
        setScores(scores);
    }
    M(['div',
       ['with', container => {
           dropChecked = () => container.remove();
       }],
       ['style',
        ['position', 'fixed'],
        ['right', '0'],
        ['top', '0'],
        ['borderTopLeftRadius', '5px'],
        ['borderBottomLeftRadius', '5px'],
        ['paddingRight', '1em'],
        ['paddingLeft', '1em'],
        ['background', 'white']],
       ['div', flow.name,
        ['style', ['fontWeight', 'bold']]],
       ['ol',
        ['with', olChecked => {
            addChecked = (stop, description) => {
                var label, toggleDescription;
                M(['li',
                   ['div', stop,
                    ['style', ['cursor', 'pointer']],
                    ['on', ['click', e => {
                        toggleDescription();
                    }]],
                    ['with', div => {
                        label = div;
                    }]],
                ['with', li => {
                    M(['div', description,
                       ['style', ['display', 'none']],
                       ['with', div => {
                           var on;
                           toggleDescription = () => {
                               on = !on;
                               div.style.display = on ? 'block' : 'none';
                           };
                       }]], li);
                }]], olChecked);
                if (errors.some(error => stop === error.right)) {
                    label.style.background = '#f55';
                }
            };
        }]],
       ['div', 'Click here for a hint',
        ['style', ['padding', '.5em 1em'], ['cursor', 'pointer']],
        ['with', hintDiv => {
            hideHinter = () => hintDiv.remove();
        }],
        ['on', ['click', e => {
            alert(flow.stops[nextStopNdx].name);
        }]]],
       ['div', '0:00',
        ['with', timeDiv => {
            var toid, totalMS, t0 = new Date();
            function update() {
                var t = new Date(),
                    dif = t - t0,
                    [m, s] = ms2ms(dif);
                timeDiv.innerHTML = m + ':' + two(s);
                toid = setTimeout(update, 1000);
                totalMS = dif;
            }
            stopTimer = () => {
                clearTimeout(toid);
                finished = true;
                return totalMS;
            };
            update();
        }]]], document.body);
    areas = flow.stops.map((stop, ndx) => {
        ndxMap[stop.name] = ndx;
        return M([
            'area',
            ['on', ['click', e => {
                const correctSequence = ndx === nextStopNdx,
                      repeatedStop = ndx === nextStopNdx - 1;
                if (finished) { return; }
                dropLastMessage = dropLastMessage && dropLastMessage();
                if (repeatedStop) {
                    console.log('repeated stop');
                } else if (correctSequence) {
                    addChecked(stop.name, stop.description);
                    if (stop.description.join) {
                        dropLastMessage =
                            nbAlert(['div',
                                     ['div', stop.name],
                                     stop.description]);
                    } else {
                        dropLastMessage =
                            nbAlert(stop.name + ' . . . ' + stop.description);
                    }
                    nextStopNdx += 1;
                    if (nextStopNdx >= flow.stops.length) {
                        let mSecs = stopTimer();
                        saveScoreFlow(errors.length, mSecs);
                        nextStopNdx = 0;
                        hideHinter();
                        setTimeout(function () {
                            dropLastMessage = dropLastMessage && dropLastMessage();
                            nbAlert(['div',
                                     ['on', ['click', e => {
                                         dropChecked();
                                     }]],
                                     ['div', flow.name + " Flow complete!",
                                      ['style', ['fontWeight', 'bold']]],
                                     ['div', "Errors: " + errors.length,
                                      ['ul',
                                       ['with', errorsUL => {
                                           errors.forEach(error => {
                                               M(['li', '"' + error.wrong + '" instead of "' + error.right + '"'], errorsUL);
                                           });
                                       }]]],
                                     ['div', 'Tap here to restart or pick another flow.']],
                                    undefined, pickAnother);
                        }, 2100);
                    }
                } else {
                    errors.push({
                        wrong : stop.name,
                        right : flow.stops[nextStopNdx].name,
                    });
                    dropLastMessage =
                        nbAlert(['div', "Incorrect:",
                                 ['style', ['background', '#f55'],
                                  ['padding', '.5em']]],
                                flow.stops[nextStopNdx].name);
                }
            }]],
            ['style', ['cursor', 'pointer']],
            ['attr',
             ['title', stop.name],
             ['shape', stop.coords.length > 4 ? 'poly' : 'rect'],
             ['coords', stop.coords.join(',')]]], theMap);
    });
}
function flowPicker() {
    var bye,
        scores = getScores();
    M(['div',
       ['style',
        ['position', 'absolute'],
        ['padding', '1em'],
        ['background', 'white'],
        ['borderRadius', '5px'],
        ['top', '130px'],
        ['left', '160px']],
       ['div', 'Pick a flow:',
        ['style',
         ['fontWeight', 'bold']]],
       ['with', listDiv => {
           bye = () => listDiv.remove();
           flows.forEach(flow => {
               M(['div', flow.name,
                  ['style',
                   ['cursor', 'pointer'],
                   ['marginTop', '1em']],
                  ['on', ['click', e => {
                      useFlow(flow);
                      bye();
                      setTimeout(nbAlert(['div',
                                          ['div', 'Begin flow:'],
                                          ['div', flow.name]]), 3000);
                  }]],
                  ['with', flowDiv => {
                      var flowScore = scores[flow.name];
                      function statDiv(s) {
                          return ['div', s,
                                  ['style', ['display', 'inline-block'],
                                   ['fontSize', '.7em'],
                                   ['textAlign', 'center'],
                                   ['width', '50%']]];
                      }
                      if (flowScore) {
                          M(['div',
                             [statDiv, 'Errors: ' + flowScore.errors],
                             [statDiv, 'Time: ' + ms2ts(flowScore.elapsedMS)]], flowDiv);
                      }
                  }]], listDiv);
           });
       }]], document.body);
}
M(['map',
   ['attr',
    ['name', "full"]],
   ['with', map => { theMap = map; }]], document.body);
M(['img',
   ['style', ['width', '100%']],
   ['attr',
    //['src', 'cockpit-images/full.PNG'],
    ['src', 'cockpit-images/full-zoom-composite.png'],
    ['usemap', '#full']],
   ['on', ['click', e => {
       var x, y,
           sx = window.scrollX,
           sy = window.scrollY,
           cx = e.changedTouches ?
                e.changedTouches[0].clientX :
                e.clientX,
           cy = e.changedTouches ?
                e.changedTouches[0].clientY :
                e.clientY;
       x = cx + sx;
       y = cy + sy;
       console.log([x, y, (100 * x / w).toFixed(2), (100 * y / h).toFixed(2)]);
   }]],
   ['with', img => {
       function getDimensions() {
           if (!img.clientHeight || !img.clientWidth) {
               return setTimeout(getDimensions, 500);
           }
           h = img.clientHeight;
           w = img.clientWidth;
           processFlows();
           flowPicker();
       }
       getDimensions();
   }]], document.body);
