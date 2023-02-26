const flaps = [1, 2, 4];
const cgs = [11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31];
const table = [
//    11,  13,  15,  17,  19,  21,  23,  25,  27,  29,  31
    [5.5, 5.5, 4.5, 4.5, 4.0, 3.5, 3.0, 3.0, 2.5, 2.0, 1.5],
    [5.5, 5.0, 4.5, 4.0, 3.5, 3.5, 3.0, 2.5, 2.0, 2.0, 1.5],
    [5.5, 5.0, 4.5, 4.0, 3.5, 3.0, 2.5, 2.5, 2.0, 1.5, 1.0]];
const allCGs = [
  "11.0",
  "11.1",
  "11.2",
  "11.3",
  "11.4",
  "11.5",
  "11.6",
  "11.7",
  "11.8",
  "11.9",
  "12.0",
  "12.1",
  "12.2",
  "12.3",
  "12.4",
  "12.5",
  "12.6",
  "12.7",
  "12.8",
  "12.9",
  "13.0",
  "13.1",
  "13.2",
  "13.3",
  "13.4",
  "13.5",
  "13.6",
  "13.7",
  "13.8",
  "13.9",
  "14.0",
  "14.1",
  "14.2",
  "14.3",
  "14.4",
  "14.5",
  "14.6",
  "14.7",
  "14.8",
  "14.9",
  "15.0",
  "15.1",
  "15.2",
  "15.3",
  "15.4",
  "15.5",
  "15.6",
  "15.7",
  "15.8",
  "15.9",
  "16.0",
  "16.1",
  "16.2",
  "16.3",
  "16.4",
  "16.5",
  "16.6",
  "16.7",
  "16.8",
  "16.9",
  "17.0",
  "17.1",
  "17.2",
  "17.3",
  "17.4",
  "17.5",
  "17.6",
  "17.7",
  "17.8",
  "17.9",
  "18.0",
  "18.1",
  "18.2",
  "18.3",
  "18.4",
  "18.5",
  "18.6",
  "18.7",
  "18.8",
  "18.9",
  "19.0",
  "19.1",
  "19.2",
  "19.3",
  "19.4",
  "19.5",
  "19.6",
  "19.7",
  "19.8",
  "19.9",
  "20.0",
  "20.1",
  "20.2",
  "20.3",
  "20.4",
  "20.5",
  "20.6",
  "20.7",
  "20.8",
  "20.9",
  "21.0",
  "21.1",
  "21.2",
  "21.3",
  "21.4",
  "21.5",
  "21.6",
  "21.7",
  "21.8",
  "21.9",
  "22.0",
  "22.1",
  "22.2",
  "22.3",
  "22.4",
  "22.5",
  "22.6",
  "22.7",
  "22.8",
  "22.9",
  "23.0",
  "23.1",
  "23.2",
  "23.3",
  "23.4",
  "23.5",
  "23.6",
  "23.7",
  "23.8",
  "23.9",
  "24.0",
  "24.1",
  "24.2",
  "24.3",
  "24.4",
  "24.5",
  "24.6",
  "24.7",
  "24.8",
  "24.9",
  "25.0",
  "25.1",
  "25.2",
  "25.3",
  "25.4",
  "25.5",
  "25.6",
  "25.7",
  "25.8",
  "25.9",
  "26.0",
  "26.1",
  "26.2",
  "26.3",
  "26.4",
  "26.5",
  "26.6",
  "26.7",
  "26.8",
  "26.9",
  "27.0",
  "27.1",
  "27.2",
  "27.3",
  "27.4",
  "27.5",
  "27.6",
  "27.7",
  "27.8",
  "27.9",
  "28.0",
  "28.1",
  "28.2",
  "28.3",
  "28.4",
  "28.5",
  "28.6",
  "28.7",
  "28.8",
  "28.9",
  "29.0",
  "29.1",
  "29.2",
  "29.3",
  "29.4",
  "29.5",
  "29.6",
  "29.7",
  "29.8",
  "29.9",
  "30.0",
  "30.1",
  "30.2",
  "30.3",
  "30.4",
  "30.5",
  "30.6",
  "30.7",
  "30.8",
  "30.9",
  "31.0",
];
function generateAllCGs() {
    var cg, a = [];
    for (cg = 11; cg < 31.1; cg += 0.1) {
        a.push(cg.toFixed(1));
    }
    return a;
}
function generateFullTable() {
    const pairs = [[0, 1],
                   [1, 2],
                   [2, 3],
                   [3, 4],
                   [4, 5],
                   [5, 6],
                   [6, 7],
                   [7, 8],
                   [8, 9],
                   [9, 10]];
    var flap1row = table[0];
    var flap2row = table[1];
    var flap4row = table[2];
    var o = { 1 : {}, 2 : {}, 4 : {} };
    pairs.forEach(([lox, hix]) => {
        const loCG = cgs[lox],
              hiCG = cgs[hix],
              f1lo = flap1row[lox],
              f1hi = flap1row[hix],
              f2lo = flap2row[lox],
              f2hi = flap2row[hix],
              f4lo = flap4row[lox],
              f4hi = flap4row[hix],
              d1 = f1hi === f1lo ? 0 : (f1hi - f1lo) / 20,
              d2 = f2hi === f2lo ? 0 : (f2hi - f2lo) / 20,
              d4 = f4hi === f4lo ? 0 : (f4hi - f4lo) / 20;
        var cg,
            t1 = f1lo,
            t2 = f2lo,
            t4 = f4lo;
        for (cg = loCG; cg < hiCG; cg += 0.1) {
            o[1][cg.toFixed(1)] = d1 ? t1.toFixed(1) : f1lo.toFixed(1);
            o[2][cg.toFixed(1)] = d2 ? t2.toFixed(1) : f2lo.toFixed(1);
            o[4][cg.toFixed(1)] = d4 ? t4.toFixed(1) : f4lo.toFixed(1);
            t1 += d1;
            t2 += d2;
            t4 += d4;
        }
    });
    o[1]["31.0"] = "1.5";
    o[2]["31.0"] = "1.5";
    o[4]["31.0"] = "1.0";
    return o;
}
function condenseLookup(fullTable) {
    const flapSettings = [1, 2, 4];
    var condensedLookup = { 1 : {}, 2 : {}, 4 : {} };
    flapSettings.forEach(flapSetting => {
        var flapObject = condensedLookup[flapSetting];
        Object.entries(fullTable[flapSetting]).forEach(([cg, trim]) => {
            if (flapObject[trim]) {
                if (flapObject[trim].lo > cg) {
                    flapObject[trim].lo = cg;
                }
                if (flapObject[trim].hi < cg) {
                    flapObject[trim].hi = cg;
                }
            } else {
                flapObject[trim] = { lo : cg, hi : cg };
            }
        });
    });
    return condensedLookup;
}
function condensedTable(condensedLookup) {
    var showFlapTable;
    function btn(flapSetting) {
        return ['div',
                ['style',
                 ['display', 'inline-block'],
                 ['marginLeft', '1em']],
                ['label', flapSetting],
                ['input',
                 ['attr',
                  ['type', 'radio'],
                  ['name', 'flapSetting']],
                 ['on',
                  ['click', e => {
                      showFlapTable({ flapSetting });
                  }]],
                 ['with', radio => {
                     function ask2show(flapSetting) {
                         if (showFlapTable) {
                             showFlapTable({ flapSetting });
                         } else {
                             setTimeout(() => {
                                 ask2show(flapSetting);
                             }, 100);
                         }
                     }
                     if (flapSetting === 2) {
                         radio.checked = true;
                         ask2show(flapSetting);
                     }
                 }]]];
    }
    function cgSlider() {
        const defaultValue = 19;
        var show;
        return ['div',
                ['div',
                 ['with', n => {
                     function ask2show(cg) {
                         if (showFlapTable) {
                             showFlapTable({ cg });
                         } else {
                             setTimeout(() => {
                                 ask2show(cg);
                             }, 100);
                         }
                     }
                     show = cg => {
                         n.innerHTML = 'CG: ' + cg;
                         ask2show(cg);
                     };
                     show(defaultValue);
                 }]],
                ['input',
                 ['style', ['width', '100%']],
                 ['attr',
                  ['type', 'range'],
                  ['min', '11'],
                  ['max', '31'],
                  ['value', defaultValue]],
                 ['on',
                  ['input', e => {
                      var cg = e.target.value;
                      show(cg);
                  }]]]];
    }
    return ['div',
            ['style', ['display', 'inline-block']],
            ['div', 'Flaps:'],
            ['div',
             [btn, 1],
             [btn, 2],
             [btn, 4]],
            cgSlider,
            ['table',
             ['attr',
              ['border', 1]],
             ['tbody',
              ['with', tbody => {
                  var flapSetting, cg;
                  showFlapTable = inputs => {
                      var dataList;
                      if (inputs.flapSetting) {
                          flapSetting = inputs.flapSetting;
                      }
                      if (inputs.cg) {
                          cg = inputs.cg;
                      }
                      if (!flapSetting || !cg) { return; }
                      dataList = Object.entries(condensedLookup[flapSetting]);
                      tbody.innerHTML = '';
                      M(['tr',
                         ['th', 'Flaps ' + flapSetting,
                          ['attr',
                           ['colspan', 3]]]], tbody);
                      dataList.forEach(([trim, { lo, hi }]) => {
                          function td(s) {
                              return ['td', s, ['style', ['padding', '0 0.7em']]];
                          }
                          if (cg < Math.floor(lo)) { return; }
                          if (cg > Math.floor(hi)) { return; }
                          M(['tr',
                             [td, lo],
                             [td, hi],
                             [td, trim]], tbody);
                      });
                  };
              }]]]];
}
///////////////////////////////////////////////////////////////
M([condensedTable, condenseLookup(generateFullTable())], document.body);
