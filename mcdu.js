var theMap;
var buttons = [
    //// LSK
    ['L1', [ 1.72, 14.60,  8.03, 17.91]],
    ['L2', [ 1.72, 20.80,  8.03, 23.83]],
    ['L3', [ 1.72, 26.45,  8.03, 29.34]],
    ['L4', [ 1.72, 32.23,  8.03, 34.99]],
    ['L5', [ 1.72, 38.15,  8.03, 41.05]],
    ['L6', [ 1.72, 44.08,  8.03, 47.11]],
    ['R1', [91.78, 14.60, 98.28, 17.91]],
    ['R2', [91.78, 20.80, 98.28, 23.83]],
    ['R3', [91.78, 26.58, 98.28, 29.34]],
    ['R4', [91.78, 32.23, 98.28, 35.12]],
    ['R5', [91.78, 38.29, 98.28, 41.18]],
    ['R6', [91.78, 44.08, 98.28, 46.97]],
    //// ROW 1
    ['PERF', [ 3.06, 54.27, 11.85, 58.68]],
    ['NAV',  [15.11, 54.27, 24.09, 58.68]],
    ['PREV', [27.15, 54.27, 36.33, 58.68]],
    ['FPL',  [39.39, 54.27, 48.18, 58.68]],
    ['PROG', [51.63, 54.27, 60.80, 58.68]],
    ['RTE',  [63.86, 54.27, 73.10, 58.68]],
    ['CB',   [76.10, 54.27, 85.54, 58.68]],
    //// ROW 2
    ['MENU',  [ 2.68, 61.16, 11.85, 65.56]],
    ['DLK',   [15.11, 61.16, 24.09, 65.56]],
    ['NEXT',  [27.15, 61.16, 36.33, 65.56]],
    ['TRS',   [51.63, 61.16, 60.80, 65.56]],
    ['RADIO', [63.68, 61.16, 73.04, 65.56]],
    //// letters
    ['A', [ 2.10, 68.32,  8.80, 73.00]],
    ['B', [12.05, 68.32, 18.16, 73.00]],
    ['C', [21.80, 68.32, 28.11, 73.00]],
    ['D', [31.74, 68.32, 37.86, 73.00]],
    ['E', [42.26, 68.32, 48.57, 73.00]],
    ['F', [52.20, 68.32, 58.51, 73.00]],
    ['G', [ 2.10, 74.66,  8.80, 79.61]],
    ['H', [12.05, 74.66, 18.16, 79.61]],
    ['I', [21.80, 74.66, 28.11, 79.61]],
    ['J', [31.74, 74.66, 37.86, 79.61]],
    ['K', [42.26, 74.66, 48.57, 79.61]],
    ['L', [52.20, 74.66, 58.51, 79.61]],
    ['M', [ 2.10, 80.99,  8.80, 85.81]],
    ['N', [12.05, 80.99, 18.16, 85.81]],
    ['O', [21.80, 80.99, 28.11, 85.81]],
    ['P', [31.74, 80.99, 37.86, 85.81]],
    ['Q', [42.26, 80.99, 48.57, 85.81]],
    ['R', [52.20, 80.99, 58.51, 85.81]],
    ['S', [12.05, 87.47, 18.16, 92.15]],
    ['T', [21.80, 87.47, 28.11, 92.15]],
    ['U', [31.74, 87.47, 37.86, 92.15]],
    ['V', [42.26, 87.47, 48.57, 92.15]],
    ['W', [52.20, 87.47, 58.51, 92.15]],
    ['X', [12.05, 94.08, 18.16, 98.76]],
    ['Y', [21.80, 94.08, 28.11, 98.76]],
    ['Z', [31.74, 94.08, 37.86, 98.76]],
    ['DEL', [42.26, 94.08, 48.57, 98.76]],
    ['CLR', [52.20, 94.08, 58.51, 98.76]],
    //// numbers
    ['1',   [67.10, 77.17, 3.64]],
    ['2',   [76.10, 77.17, 3.64]],
    ['3',   [85.20, 77.17, 3.64]],
    ['+/-', [94.20, 77.17, 3.64]],
    ['4',   [67.10, 83.75, 3.64]],
    ['5',   [76.30, 83.75, 3.64]],
    ['6',   [84.90, 83.75, 3.64]],
    ['/',   [95.10, 83.75, 3.64]],
    ['7',   [67.10, 90.36, 3.64]],
    ['8',   [76.30, 90.36, 3.64]],
    ['9',   [84.90, 90.36, 3.64]],
    ['SP',  [67.10, 96.69, 3.64]],
    ['0',   [76.30, 96.69, 3.64]],
    ['.',   [84.90, 96.69, 3.64]],
];
const WH = window.innerHeight;
function processCoords(h, w) {
    function scaleCoord(coord, cx) {
        return Math.round(cx % 2 ? h * coord / 100 : w * coord / 100);
    }
    buttons = buttons.map(([name, coords]) => {
        return {
            name,
            coords : coords.map(scaleCoord),
            coordsPct : coords,
        };
    });
}
function fillMap() {
    buttons.forEach(button => {
        M(['area',
           ['style', ['cursor', 'pointer']],
           ['attr',
            ['title', button.name],
            ['shape',
             button.coords.length < 4 ? 'circle' :
             button.coords.length > 4 ? 'poly' : 'rect'],
            ['coords', button.coords.join(',')]],
           ['on', ['click', e => {
               console.log(button);
           }]]], theMap);
    });
}
//////////////////////////////////////////////////////////////////////
M(['map',
   ['attr',
    ['name', "full"]],
   ['with', map => { theMap = map; }]], document.body);
M(['img',
   ['attr',
    ['src', 'cockpit-images/mcdu-left.PNG'],
    ['usemap', '#full']],
   ['style',
    ['height', WH + 'px']],
   ['on', ['click', e => {
       var x, y,
           h = e.target.clientHeight,
           w = e.target.clientWidth,
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
       console.log([[x, w], [y, h], (100 * x / w).toFixed(2), (100 * y / h).toFixed(2)]);
   }]],
   ['with', img => {
       function cover() {
           const h = img.clientHeight,
                 w = img.clientWidth,
                 t = 7.99 * h / 100,
                 l = 14.15 * w / 100,
                 cw = 62.09 * h / 100 - l,
                 ch = 49.65 * h / 100 - t,
                 fs = 3.7 * h / 100;
           function line(text, size = '1em', spacing = 'normal') {
               function col(align) {
                   return ['div', text,
                           ['style',
                            ['display', 'inline-block'],
                            ['width', '50%'],
                            //['border', '1px solid gray'],
                            ['textAlign', align]]];
               }
               return ['div',
                       [col, 'left'],
                       [col, 'right'],
                       ['style',
                        ['textAlign', 'center'],
                        ['padding', '0'],
                        ['fontSize', size],
                        ['letterSpacing', spacing]]];
           }
           console.log({ h, w, t, l, ch, cw });
           if (!h) {
               setTimeout(cover, 500);
               return;
           }
           processCoords(h, w);
           fillMap();
           M(['div',
              ['style',
               ['fontFamily', 'Menlo-Regular, monospace'],
               ['fontVariantNumeric', 'slashed-zero'],
               ['letterSpacing', '1px'],
               ['fontSize', fs + 'px'],
               ['position', 'absolute'],
               ['top', t + 'px'],
               ['left', l + 'px'],
               ['height', ch + 'px'],
               ['width', cw + 'px'],
               ['borderRadius', '8px'],
               ['padding', '.3em .5em 0'],
               ['background', '#000e'],
               //['border', '1px solid lightgray'],
               ['color', 'white']],
              [line, 'FO0'],
              [line, 'BA7', '.7em', '.3em'],
              [line, 'FO0'],
              [line, 'BA7', '.7em', '.3em'],
              [line, 'FO0'],
              [line, 'BA7', '.7em', '.3em'],
              [line, 'FO0'],
              [line, 'BA7', '.7em', '.3em'],
              [line, 'FO0'],
              [line, 'BA7', '.7em', '.3em'],
              [line, 'FO0'],
              [line, 'BA7', '.7em', '.3em'],
              [line, 'FO0'],
              [line, 'FO0'],
           ], document.body);
       }
       cover();
   }]], document.body);
