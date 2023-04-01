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
    full : [
        103, 105, 107, 109, 111, 113, 115, 116, 118, 120,
        122, 123, 125, 126, 127, 128, 129, 130, 132, 134, 135,
    ],
};    
const vRefIce = {
    5 : [
        118, 121, 123, 125, 128, 130, 132, 134, 136, 138,
        140, 142, 144, 146, 148, 150, 152, 154, 156, 157, 159,
    ],
    full : [
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
///////////////////////////////////////////////////////////////////////////////
function weightPicker() {
    const defaulWeight = 72000;
    var showWeight, reshow, ice, flapsFull;
    return ['div',
            ['style',
             ['display', 'inline-block'],
             ['textAlign', 'center']],
            ['div',
             ['style',
              ['textAlign', 'right']],
             ['with', n => {
                 function five(dx) {
                     if (flapsFull || ice) { return; }
                     M(['div', 'Vref: ' + vRef[5][dx]], n);
                     M(['div', 'Vac: ' + vAC[2][dx]], n);
                     return true;
                 }
                 function fiveIce(dx) {
                     if (flapsFull || !ice) { return; }
                     M(['div', 'Vref: ' + vRefIce[5][dx]], n);
                     M(['div', 'Vac: ' + vAC[2][dx]], n);
                     return true;
                 }
                 function full(dx) {
                     if (!flapsFull || ice) { return; }
                     M(['div', 'Vref: ' + vRef.full[dx]], n);
                     M(['div', 'Vac: ' + vAC[4][dx]], n);
                     return true;
                 }
                 function fullIce(dx) {
                     if (!flapsFull || !ice) { return; }
                     M(['div', 'Vref: ' + vRefIce.full[dx]], n);
                     M(['div', 'Vac: ' + vAC[4][dx]], n);
                     return true;
                 }
                 showWeight = w => {
                     const dx = weights.indexOf(+w);
                     n.innerHTML = '';
                     five(dx) || fiveIce(dx) || full(dx) || fullIce(dx);
                     M(['div', 'Vfs: ' + vFS[dx]], n);
                     M(['div', 'LDW: ' + w,
                        ['style',
                         ['background',
                          w > 75177 ? 'red' :
                          w > 72000 ? 'yellow' : 'none'],
                         ['borderTop', '1px solid black'],
                         ['marginTop', '5px'],
                         ['paddingTop', '5px']]], n);
                     reshow = () => showWeight(w);
                 };
                 showWeight(defaulWeight);
             }]],
            ['input',
             ['attr',
              ['class', 'slider'],
              ['type', 'range'],
              ['min', Math.min(...weights)],
              ['max', Math.max(...weights)],
              ['step', 2000],
              ['value', defaulWeight],
              ['orient', 'vertical']],
             ['style',
              ['height', '300px'],
              ['-moz-orient', 'vertical'],
              ['-webkit-appearance', 'slider-vertical']],
             ['on',
              ['input', e => {
                  showWeight(e.target.value);
              }]]],
            ['div',
             ['style',
              ['borderTop', '1px solid black'],
              ['marginTop', '5px'],
              ['paddingTop', '5px']],
             ['div', 'Flaps'],
             ['span', '&nbsp;&nbsp;5',
              ['style', ['marginRight', '5px'], ['fontSize', '.8em']]],
             ['input',
              ['attr',
               ['class', 'slider'],
               ['type', 'range'],
               ['min', 0],
               ['max', 1],
               ['value', 0],
               ['step', 1]],
              ['style',
               ['width', '70px']],
              ['on',
               ['input', e => {
                   flapsFull = !!(+e.target.value);
                   reshow();
               }]]],
             ['span', 'Full',
              ['style', ['marginLeft', '5px'], ['fontSize', '.8em']]]],
            ['div',
             ['style',
              ['borderTop', '1px solid black'],
              ['marginTop', '5px'],
              ['paddingTop', '5px']],
             ['div', 'Ice / Autoland'],
             ['span', 'No',
              ['style', ['marginRight', '5px'], ['fontSize', '.8em']]],
             ['input',
              ['attr',
               ['class', 'slider'],
               ['type', 'range'],
               ['min', 0],
               ['max', 1],
               ['value', 0],
               ['step', 1]],
              ['style',
               ['width', '70px']],
              ['on',
               ['input', e => {
                   ice = !!(+e.target.value);
                   reshow();
               }]]],
             ['span', 'Yes',
              ['style', ['marginLeft', '5px'], ['fontSize', '.8em']]]]];
}
M(weightPicker, document.body);
