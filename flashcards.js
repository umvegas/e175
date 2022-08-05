const storageName = 'E175Flashcards';
const hasTouchScreen = (function () {
    if ("maxTouchPoints" in navigator) {
        return navigator.maxTouchPoints > 0;
    } else if ("msMaxTouchPoints" in navigator) {
        return navigator.msMaxTouchPoints > 0;
    } else {
        var mQ = window.matchMedia && matchMedia("(pointer:coarse)");
        if (mQ && mQ.media === "(pointer:coarse)") {
            return !!mQ.matches;
        } else if ('orientation' in window) {
            return true; // deprecated, but good fallback
        } else {
            // Only as a last resort, fall back to user agent sniffing
            var UA = navigator.userAgent;
            return (
                /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) ||
                /\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA)
            );
        }
    }
    return false;
}());
var questions = [
    ['Minimum runway cleared width for takeoff', '100ft'],
    ['Minimum runway cleared width for landing in Alaska', '60ft'],
    ['Maximum landing weight', '75,177 lbs'],
    ['Minimum battery temperature', '-20&deg; C'],
    ['Maximum altitude for flap extension', '20,000ft'],
    ['Landing below __&deg; C requires maintenance inspection before takeoff', '-40'],
    ['VLE', '250 KIAS'],
    ['VLO', '250 KIAS'],
    ['Maximum speed to open the direct vision window', '160 KIAS'],
    ['Maximum turbulent air penetration speed below 10,000 ft', '250 KIAS'],
    ['Maximum turbulent air penetration speed at or above 10,000 feet', 'slower of 270 KIAS / 0.76 M'],
    ['VFE Flaps 1', '230 KIAS'],
    ['VFE Flaps 2', '215 KIAS'],
    ['VFE Flaps 3', '200 KIAS'],
    ['VFE Flaps 4', '180 KIAS'],
    ['VFE Flaps 5', '180 KIAS'],
    ['VFE Flaps Full', '165 KIAS'],
    ['Maximum tire ground speed', '195 KIAS'],
    ['Maximum speed for windshield wiper operation', '250 KIAS'],
    ['Maximum crosswind for good/dry/RwyCC 6', '38 knots'],
    ['Maximum tailwind', '15 knots'],
    ['Maximum permitted imbalance between tanks', '794 lbs'],
    ['Minimum fuel tank temperature', '-37&deg; C'],
    ['Crossfeed Selector Knob must be set ___ during takeoff and landing', 'OFF'],
    ['APU Altitude limit: start', '30,000 ft'],
    ['APU Altitude limit: operation, including electrical generator', '33,000 ft'],
    ['APU Altitude limit: use of bleed air for air conditioning and pressurization', '15,000 ft'],
    ['APU Altitude limit: use of bleed air for engine start', '21,000 ft'],
    ['APU starter limits: cooling periods', '60 seconds for starts 1 and 2<br>5 minutes for start 3'],
    ['APU can be left running and unattended for at most ___.', '5 minutes'],
    ['Minimum oil temperature for engine start', '-40&deg; C'],
    ['With tailwinds greater than __ knots, maximum N1 with brakes applied is ___%.', '10, 60'],
    ['Dry motoring limits', '1: 90 seconds<br>2-5: 30 seconds<br>5 minute cooldown each time<br>repeat cycle after 15 minute cooldown'],
    ['Engine starting limits', 'starter times of 90 seconds on ground, 120 seconds in flight with these cooldown periods:<br>1-2: 10 seconds, 3-5: 5 minute cooldown'],
    ['Maximum differential pressure', '8.4 psi'],
    ['Maximum differential over-pressure', '8.8 psi'],
    ['Maximum differential negative pressure', '-0.5 psi'],
    ['Maximum differential pressure for takeoff and landing', '0.2 psi'],
    ['Is there a temperature limitation for anti-icing system automatic operation?', 'No'],
    ['Describe how to set TO DATASET MENU on the MCDU for different icing conditions on the ground',
     `ENG 5-10&deg; C, ALL below 5&deg; C<br>
      Applies when:
      <ul><li>Visible moisture up 1,700 feet AFE</li>
          <li>On the ground when standing water/surface snow/slush
              might get into or on engines/nacelles/engine sensor probes</li></ul>`],
    ['When must the crew select engine and wing anti-ice mode selectors ON?',
     'When icing conditions exist or are anticipated below 10&deg; C TAT with visible moisture.'],
    ['If any ice formation is detected or suspected, ___.',
     'Select the anti-ice protection system override knob to ON and use ice speeds as reference'],
    ['Icing conditions may exist whenever',
     ['ul',
      ['li', '10&deg; C or less OAT on ground for takeoff, or TAT in flight and any visible moisture'],
      ['li', '10&deg; C or less SAT on ground for takeoff and surface snow/standing water/slush may be ingested/freeze on engines/nacelles/sensor probes']]],
    ['On the ground, should you wait for evidence of icing to turn on anti-ice?',
      'No. Use temperature and moisture criteria.'],
    ['Minimum autopilot engagement height', '400 feet'],
    ['Minimum autopilot use height', '50 feet'],
    ['Maximum autoland headwind', '25 knots'],
    ['Maximum autoland crosswind', '15 knots'],
    ['Maximum autoland tailwind', '10 knots'],
    ['Required autoland flap setting', 'Flaps 5'],
    ['What crew requirement is there for Wifi operation?', 'FA must be onboard and part of the crew'],
    ['List flightdeck power limitations',
     ['ul',
      ['style', ['textAlign', 'left']],
      ['li', 'No use during critical phases of flight'],
      ['li', 'Limited to company-issued devices and personal cell phones'],
      ['li', 'While charging company iPads, do not position cord as to impede the movement of any flight control or restrict emergency egress paths']]],
    ['Memory procedure: Engine Abnormal Start', 'START/STOP selector . . . STOP'],
    ['Memory procedure: Pitch Trim Runaway',
     ['ul',
      ['li', 'AP/TRIM/DISC button . . . . . . . . . . . . . Press and hold'],
      ['li', 'PITCH TRIM SYS 1 and 2 CUTOUT buttons . . . . Push In']]],
    ['Memory procedure: Roll (Yaw) Trim Runaway', 'AP/TRIM/DISC button . . . Press and hold'],
    ['Memory procedure: Steering Runaway',
     ['ul',
      ['li', 'Steering disengage switch . . . . . . . . . . . . . Press'],
      ['li', 'Use differential braking and rudder to steer the aircraft']]],
    ['Memory procedure: Dual Engine Failure',
     ['ul',
      ['li', 'Airspeed . . . . . . . . . . . . 250 KIAS MIN'],
      ['li', 'RAT MANUAL DEPLOY Lever . . . . .Pull']]],
    ['Memory procedure: Jammed Control Column (Pitch)', 'ELEVATOR DISCONNECT handle . . . Pull'],
    ['Memory procedure: Jammed Control Column (Roll)', 'AILERON DISCONNECT handle . . . Pull'],
    ['Memory procedure: Oxygen Mask Donning',
     ['ul',
      ['li', 'Remove headset'],
      ['li', 'Don the oxygen mask'],
      ['li', 'Establish crew communications']]],
    ['Memory procedure: CABIN ALT HI',
     ['div', 'CABIN ALT HI warning message on EICAS:',
      ['style', ['textAlign', 'left']]],
     ['ul',
      ['li', 'Crew Oxygen Masks . . . Don, 100%'],
      ['li', 'Crew Communications . . . Establish'],
      ['li', 'Altitude . . . 10,000 ft or MEA, whichever is higher'],
      ['li', 'Thrust Levers . . . IDLE'],
      ['li', 'Speed Brake . . . FULL OPEN'],
      ['li', 'Airspeed . . . Max/Appropriate'],
      ['li', 'Transponder . . . 7700'],
      ['li', 'ATC . . . Notify']]],
    ['Memory procedure: Smoke Evacuation',
     ['ul',
      ['li', 'Crew Oxygen Masks . . . Don, EMER'],
      ['li', 'Crew Communications . . . Establish'],
      ['li', 'PRESSURIZATION DUMP button . . . Push In']]],
    ['Memory procedure: EGPWS Warning Response',
     ['div', 'Upon receiving EGPWS Warning:'],
     ['div', 'Pilot Flying'],
     ['ul',
      ['li', 'Disengage Autopilot'],
      ['li', 'Simultaneously advance thrust levers to MAX and pitch to 20&deg; or PLI, whichever is lower'],
      ['li', 'Maintain present airplane configuration until terrain separation is achieved'],
      ['li', 'Climb to MSA or MORA'],
      ['li', 'Clear of terrain, resume level flight'],
      ['li', 'Engage autopilot'],
      ['li', 'Resume normal speed']],
     ['div', 'Pilot Monitoring'],
     ['ul',
      ['li', 'Communicate intentions to ATC'],
      ['li', 'Turn FSTN BELTS ON'],
      ['li', 'Scan for visual references'],
      ['li', 'Call out Radio Altimeter'],
      ['li', 'Read MFD Terrain indications for obstacle height'],
      ['li', 'Guide PF toward best course of action and indicate when obstacles have been cleared']]],
];
function shuffle(l) {
    l.forEach(function (v, n) {
        var r = Math.floor(Math.random() * l.length);
        l[n] = l[r];
        l[r] = v;
    });
}
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
function card([query, ...answers], nextQuestion) {
    var flip, downX, green, red, clear;
    function rightAnswer() {
        nextQuestion(true);
    }
    function wrongAnswer() {
        nextQuestion(false);
    }
    return ['div',
            ['with', div => {
                green = () => {
                    div.style.background = 'lightgreen';
                };
                red = () => {
                    div.style.background = '#f33';
                };
                clear = () => {
                    div.style.background = 'none';
                };
            }],
            ['style',
             ['display', 'inline-block'],
             ['padding', '1em'],
             ['border', '3px solid gray'],
             ['borderRadius', '10px']],
            ['div', query,
             ['style', ['padding', '1em']],
             ['on',
              (hasTouchScreen ?
               ['touchstart', e => {
                   downX = e.changedTouches[0].clientX;
               }] :
               ['mousedown', e => {
                   downX = e.clientX;
               }]),
              (hasTouchScreen ?
               ['touchmove', e => {
                   var endX, difX;
                   if (downX === undefined) { return; }
                   endX = e.changedTouches[0].clientX;
                   difX = endX - downX;
                   if (difX > 25) { green(); }
                   else if (difX < -25) { red(); }
                   else { clear(); }
               }] :
               ['mousemove', e => {
                   var endX, difX;
                   if (downX === undefined) { return; }
                   endX = e.clientX;
                   difX = endX - downX;
                   if (difX > 25) { green(); }
                   if (difX < -25) { red(); }
               }]),
              (hasTouchScreen ?
               ['touchend', e => {
                   var upX = e.changedTouches[0].clientX,
                       difX = upX - downX,
                       right = difX > 25,
                       wrong = difX < -25;
                   downX = undefined;
                   right ? rightAnswer() :
                   wrong ? wrongAnswer() : null;
               }] :
               ['mouseup', e => {
                   var upX = e.clientX,
                       difX = upX - downX,
                       right = difX > 25,
                       wrong = difX < -25;
                   downX = undefined;
                   right ? rightAnswer() :
                   wrong ? wrongAnswer() : null;
               }])]],
            ['div', '???',
             ['style', ['cursor', 'pointer'],
              ['textAlign', 'center'],
              ['padding', '1em']],
             ['on',
              [hasTouchScreen ? 'touchstart' : 'mousedown', () => {
                  flip();
              }]],
             ['with', div => {
                 var show = false;
                 flip = () => {
                     show = !show;
                     div.innerHTML = show ? '' : '???';
                     if (show) {
                         answers.forEach(answer => {
                             M(['div', answer], div);
                         });
                     }
                 };
             }]]];
}
var scoreBoard = (function () {
    var prevBoard;
    return function score_board() {
        var nRight = 0,
            nWrong = 0,
            nUnseen = 0,
            scores = getScores();
        questions.forEach(([question, answer]) => {
            var score = scores[question];
            if (score === true) {
                nRight += 1;
            } else if (score === false) {
                nWrong += 1;
            } else {
                nUnseen += 1;
            }
        });
        if (prevBoard) {
            prevBoard.remove();
        }
        M(['div',
           ['with', div => { prevBoard = div; }],
           ['style',
            ['position', 'fixed'],
            ['width', '90%'],
            ['bottom', '0']],
           ['div', nRight,
            ['style',
             ['cursor', 'pointer'],
             ['background', 'lightgreen'],
             ['display', 'inline-block'],
             ['textAlign', 'center'],
             ['width', '30%']],
            ['on',
             ['click', e => {
                 var sublist = questions.filter(question => {
                     return scores[question[0]] === true;
                 });
                 if (!confirm(sublist.length + ' questions in this list. Quiz on these?')) {
                     return;
                 }
                 if (sublist.length) {
                     quiz(sublist, 0, scores);
                 }
             }]]],
           ['div', nUnseen,
            ['style',
             ['cursor', 'pointer'],
             ['background', 'yellow'],
             ['display', 'inline-block'],
             ['textAlign', 'center'],
             ['width', '30%']],
            ['on',
             ['click', e => {
                 var sublist = questions.filter(question => {
                     return scores[question[0]] === undefined;
                 });
                 if (!confirm(sublist.length + ' questions in this list. Quiz on these?')) {
                     return;
                 }
                 if (sublist.length) {
                     quiz(sublist, 0, scores);
                 }
             }]]],
           ['div', nWrong,
            ['style',
             ['cursor', 'pointer'],
             ['background', '#f33'],
             ['display', 'inline-block'],
             ['textAlign', 'center'],
             ['width', '30%']],
            ['on',
             ['click', e => {
                 var sublist = questions.filter(question => {
                     return scores[question[0]] === false;
                 });
                 if (!confirm(sublist.length + ' questions in this list. Quiz on these?')) {
                     return;
                 }
                 if (sublist.length) {
                     quiz(sublist, 0, scores);
                 }
             }]]],
           ['div', '&#128465;',
            ['style',
             ['cursor', 'pointer'],
             ['background', 'lightgray'],
             ['display', 'inline-block'],
             ['textAlign', 'center'],
             ['fontSize', '.85em'],
             ['width', '10%']],
            ['on',
             ['click', e => {
                 if (!confirm("Really erase score memory?")) { return; }
                 clearScores();
                 scoreBoard();
                 shuffle(questions);
                 quiz();
             }]]]], document.body);
    };
}());
var quiz = (function () {
    var lastCard;
    return function do_quiz(qList = questions, n = 0, scores = getScores()) {
        function next(score) {
            function scoreRight() {
                if (score !== true) { return; }
                scores[qList[n][0]] = true;
                setScores(scores);
                return true;
            }
            function scoreWrong() {
                if (score !== false) { return; }
                scores[qList[n][0]] = false;
                setScores(scores);
            }
            scoreRight() || scoreWrong();
            n += 1;
            if (n < qList.length) {
                quiz(qList, n, scores);
            } else {
                alert('re-shuffling questions');
                shuffle(qList);
                quiz(qList, 0, scores);
            }
            scoreBoard();
        }
        if (lastCard) { lastCard.remove();}
        lastCard = M([card, qList[n], next], document.body);
    };
}());
////////////////////////////////
shuffle(questions);
quiz();
scoreBoard();
