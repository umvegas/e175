/*
const weightStr = `
50000
52000
54000
56000
58000
60000
62000
64000
66000
68000
70000
72000
74000
76000
78000
80000
82000
84000
86000
88000
90000
`;
const vFSSpeedStr = `
158
161
164
167
170
173
176
179
181
184
187
190
192
195
197
200
202
205
207
210
212
`;
(function mush() {
    const weights = weightStr.trim().split(/\n/);
    const speeds = vFSSpeedStr.trim().split(/\n/);
    var vFSMap = {};
    weights.forEach((weight, ndx) => {
        vFSMap[weight] = +speeds[ndx];
    });
    console.log({ weights, speeds, vFSMap });
    M(['pre', JSON.stringify(vFSMap, null, 4)], document.body);
}());
 */
// odd-thousands interpolated by hand
const Vfs = {
    'QRH Page' : 15.8,
    'Effective Date' : '09/22/21',
    "50000": 158,
    "51000": 160,
    "52000": 161,
    "53000": 163,
    "54000": 164,
    "55000": 166,
    "56000": 167,
    "57000": 169,
    "58000": 170,
    "59000": 172,
    "60000": 173,
    "61000": 175,
    "62000": 176,
    "63000": 178,
    "64000": 179,
    "65000": 180,
    "66000": 181,
    "67000": 183,
    "68000": 184,
    "69000": 186,
    "70000": 187,
    "71000": 189,
    "72000": 190,
    "73000": 191,
    "74000": 192,
    "75000": 194,
    "76000": 195,
    "77000": 196,
    "78000": 197,
    "79000": 199,
    "80000": 200,
    "81000": 201,
    "82000": 202,
    "83000": 204,
    "84000": 205,
    "85000": 206,
    "86000": 207,
    "87000": 209,
    "88000": 210,
    "89000": 211,
    "90000": 212
};

function makeColumnPicker(...ranges) {
    var map = {};
    ranges.forEach((lohi, cx) => { // cx = 'column index'
        var i, lo, hi;
        if (!lohi) { return; }
        lo = lohi[0];
        hi = lohi[1];
        for (i = lo; i <= hi; i++) {
            map[i] = cx;
        }
    });
    return function column_picker(temp) {
        return map[temp];
    };
}
const alt2Temp = {
    1 : {
        1 : {
            '-1000' : makeColumnPicker([-40, 39], [ 40, 44], [ 45,  50], [ 51, 52]),
                '0' : makeColumnPicker([-40, 36], [ 37, 41], [ 42,  47], [ 48, 50]),
             '1000' : makeColumnPicker([-40, 33], [ 34, 38], [ 39,  44], [ 45, 48]),
             '2000' : makeColumnPicker([-40, 22], [ 23, 34], [ 35,  41], [ 42, 46]),
             '3000' : makeColumnPicker([-40, 12], [ 13, 30], [ 31,  38], [ 39, 43]),
             '4000' : makeColumnPicker(null,      [-40, 24], [ 25,  35], [ 36, 42]),
             '5000' : makeColumnPicker(null,      [-40,  6], [  7,  30], [ 31, 40]),
             '6000' : makeColumnPicker(null,           null, [-40,  25], [ 26, 29], [30, 38]),
             '7000' : makeColumnPicker(null,           null, [-40,  18], [ 19, 24], [25, 36]),
             '8000' : makeColumnPicker(null,           null, [-40, -17], [-16, 19], [20, 34]),
             '9000' : makeColumnPicker(null,           null,       null, [-40, 21], [22, 32]),
            '10000' : makeColumnPicker(null,           null,       null, [-40, 12], [13, 30]),
        },
        2 : {
            '-1000' : makeColumnPicker([-40, 38], [ 39, 45], [ 46,  50], [ 51, 52]),
                '0' : makeColumnPicker([-40, 35], [ 36, 42], [ 43,  47], [ 48, 50]),
             '1000' : makeColumnPicker([-40, 32], [ 33, 39], [ 40,  44], [ 45, 48]),
             '2000' : makeColumnPicker([-40, 28], [ 29, 36], [ 37,  42], [ 43, 46]),
             '3000' : makeColumnPicker(null,      [-40, 32], [ 33,  38], [ 39, 44]),
             '4000' : makeColumnPicker(null,      [-40, 27], [ 28,  35], [ 36, 42]),
             '5000' : makeColumnPicker(null,      [-40, 19], [ 20,  30], [ 31, 40]),
             '6000' : makeColumnPicker(null,           null, [-40,  25], [ 26, 36], [37, 38]),
             '7000' : makeColumnPicker(null,           null, [-40,  18], [ 19, 31], [32, 36]),
             '8000' : makeColumnPicker(null,           null, [-40, -31], [-30, 26], [27, 34]),
             '9000' : makeColumnPicker(null,           null,       null, [-40, 20], [21, 32]),
            '10000' : makeColumnPicker(null,           null,       null, [-40,  8], [ 9, 30]),
        },
        4 : {
            '-1000' : makeColumnPicker([-40, 38], [ 39, 43], [ 44, 49], [ 50, 52]),
                '0' : makeColumnPicker([-40, 35], [ 36, 40], [ 41, 46], [ 47, 50]),
             '1000' : makeColumnPicker([-40, 31], [ 32, 36], [ 37, 43], [ 44, 48]),
             '2000' : makeColumnPicker([-40, 27], [ 28, 33], [ 34, 40], [ 41, 46]),
             '3000' : makeColumnPicker(null,      [-40, 28], [ 29, 37], [ 38, 44]),
             '4000' : makeColumnPicker(null,      [-40, 20], [ 21, 33], [ 34, 42]),
             '5000' : makeColumnPicker(null,           null, [-40, 28], [ 29, 39], [ 40, 40]),
             '6000' : makeColumnPicker(null,           null, [-40, 22], [ 23, 34], [ 35, 38]),
             '7000' : makeColumnPicker(null,           null, [-40,  6], [  7, 29], [ 30, 36]),
             '8000' : makeColumnPicker(null,           null,     null,  [-40, 23], [ 24, 34]),
             '9000' : makeColumnPicker(null,           null,     null,  [-40, 14], [ 15, 32]),
            '10000' : makeColumnPicker(null,           null,     null,       null, [-40, 30]),
        },
    },
    2 : {
        1 : {
            '-1000' : makeColumnPicker([-40, 36], [ 37, 43], [44,  51], [52,  52]),
                '0' : makeColumnPicker([-40, 35], [ 36, 42], [43,  50]),
             '1000' : makeColumnPicker([-40, 30], [ 31, 37], [38,  45], [ 46, 48]),
             '2000' : makeColumnPicker(null,      [-40, 32], [33,  41], [ 42, 46]),
             '3000' : makeColumnPicker(null,      [-40, 27], [28,  36], [ 37, 44]),
             '4000' : makeColumnPicker(null,      [-40, 22], [ 23, 31], [ 32, 40], [ 41, 42]),
             '5000' : makeColumnPicker(null,           null, [-40, 26], [ 27, 35], [ 36, 40]),
             '6000' : makeColumnPicker(null,           null, [-40, 21], [ 22, 30], [ 31, 38]),
             '7000' : makeColumnPicker(null,           null, [-40, 15], [ 16, 26], [ 27, 36]),
             '8000' : makeColumnPicker(null,           null,     null,  [-40, 21], [ 22, 34]),
             '9000' : makeColumnPicker(null,           null,     null,  [-40, 15], [ 16, 32]),
            '10000' : makeColumnPicker(null,           null,     null,     null,   [-40, 30]),
        },
        2 : {
            '-1000' : makeColumnPicker([-40, 36], [ 37, 43], [ 44, 49], [ 50, 52]),
                '0' : makeColumnPicker([-40, 35], [ 36, 41], [ 42, 48], [ 49, 50]),
             '1000' : makeColumnPicker([-40, 30], [ 31, 36], [ 37, 44], [ 45, 48]),
             '2000' : makeColumnPicker(null,      [-40, 32], [ 33, 39], [ 40, 46]),
             '3000' : makeColumnPicker(null,      [-40, 27], [ 28, 34], [ 35, 43], [ 44, 44]),
             '4000' : makeColumnPicker(null,           null, [-40, 29], [ 30, 38], [ 39, 42]),
             '5000' : makeColumnPicker(null,           null, [-40, 24], [ 25, 34], [ 35, 40]),
             '6000' : makeColumnPicker(null,           null, [-40, 19], [ 20, 29], [ 30, 38]),
             '7000' : makeColumnPicker(null,           null,     null,  [-40, 24], [ 25, 36]),
             '8000' : makeColumnPicker(null,           null,     null,  [-40, 19], [ 20, 34]),
             '9000' : makeColumnPicker(null,           null,     null,     null,   [-40, 32]),
            '10000' : makeColumnPicker(null,           null,     null,     null,   [-40, 30]),
        },
        4 : {
            '-1000' : makeColumnPicker([-40, 36], [ 37, 42], [ 43, 47], [ 48, 52]),
                '0' : makeColumnPicker([-40, 35], [ 36, 41], [ 42, 45], [ 46, 50]),
             '1000' : makeColumnPicker([-40, 30], [ 31, 36], [ 37, 41], [ 42, 47], [ 48, 48]),
             '2000' : makeColumnPicker(null,      [-40, 31], [ 32, 36], [ 37, 42], [ 43, 46]),
             '3000' : makeColumnPicker(null,      [-40, 26], [ 27, 31], [ 32, 37], [ 38, 44]),
             '4000' : makeColumnPicker(null,           null, [-40, 26], [ 27, 32], [ 33, 42]),
             '5000' : makeColumnPicker(null,           null, [-40, 21], [ 22, 27], [ 28, 40]),
             '6000' : makeColumnPicker(null,           null,      null, [-40, 22], [ 23, 38]),
             '7000' : makeColumnPicker(null,           null,      null, [-40, 16], [ 17, 36]),
             '8000' : makeColumnPicker(null,           null,      null,      null, [-40, 34]),
             '9000' : makeColumnPicker(null,           null,      null,      null, [-40, 32]),
            '10000' : makeColumnPicker(null,           null,      null,      null, null),
        },
    },
};
const weightStr = `
58000
60000
62000
64000
66000
68000
70000
72000
74000
76000
78000
80000
82000
84000
86000
88000
90000
`;
const speedStr = `
115 126 131 117 126 131 120 128 131 122 128 131 125 129 131
118 128 133 120 129 133 123 130 133 125 131 133 128 132 133
121 131 135 123 132 135 126 133 135 128 134 135 130 134 135
124 133 137 126 134 137 128 135 137 131 136 137 133 137 137
127 136 139 129 136 139 131 137 139 133 138 139 135 139 139
130 138 141 132 139 141 134 140 141 136 141 141 137 141 142
133 141 143 134 141 143 137 142 144 139 143 144 140 143 144
135 143 145 137 144 145 139 144 146 141 145 146
138 145 147 139 146 148 142 147 148 143 147 148
141 147 149 142 148 149 144 149 150 145 149 150
143 150 151 144 150 151 146 151 151
146 152 153 147 152 153 148 153 153
148 154 155 149 154 155 150 155 155
150 156 157 151 156 157 152 157 157
153 158 159 153 158 159
155 160 161 154 160 161
156 162 163 154 162 163
`;

const to2flaps2 = (function () {
    const weights = weightStr.trim().split(/\n/);
    const speeds = speedStr.trim().split(/\n/);
    const speedRows = speeds.map(row => {
        return row.match(/\d+ \d+ \d+/g);
    });
    const weightColumns = (function mush() {
        var o = {};
        weights.forEach((weight, wx) => {
            if (!speedRows[wx]) { return; }
            o[weight] = speedRows[wx].map(row => row.match(/\d+/g).map(s => +s));
        });
        return o;
    }());
    return weightColumns;
}());

//M(['pre', JSON.stringify(to2flaps2, null, 4)], document.body);
//M(['pre',
//   ['with', pre => {
//       Object.entries(to2flaps2).forEach(([weight, speeds]) => {
//           M(['div',
//              ['span', weight],
//              ['span', ' : ['],
//              ['span', speeds.map(set => '[' + set.join(', ') + ']').join(', ')],
//              ['span', '],']], pre);
//       });
//   }]], document.body);

function interpolate(flap2weight) {
    const keys = Object.keys(flap2weight),
          cols = Object.values(flap2weight),
          len = keys.length;
    var newMap = {};
    for (i = 1; i < len; i++) {
        let prevKey = keys[i - 1],
            newKey = +prevKey + 1000,
            prevCols = cols[i - 1],
            iCols = cols[i];
        newMap[prevKey] = prevCols;
        newMap[newKey] = [];
        iCols.forEach(([iV1, iVr, iV2], colNdx) => {
            const [pV1, pVr, pV2] = prevCols[colNdx];
            newMap[newKey][colNdx] = [Math.round((iV1 + pV1) / 2),
                                      Math.round((iVr + pVr) / 2),
                                      Math.round((iV2 + pV2) / 2)];
        });
    }
    newMap[keys[keys.length - 1]] = cols[cols.length - 1];
    return newMap;
}

// top level is T/O-1 vs T/O-2
// second level is flaps (1, 2, or 4)
const flapMap = {
    1 : {
        1 : interpolate({
            58000 : [[115, 126, 131], [117, 126, 131], [120, 128, 131], [122, 128, 131], [125, 129, 131]],
            60000 : [[118, 128, 133], [120, 129, 133], [123, 130, 133], [125, 131, 133], [128, 132, 133]],
            62000 : [[121, 131, 135], [123, 132, 135], [126, 133, 135], [128, 134, 135], [130, 134, 135]],
            64000 : [[124, 133, 137], [126, 134, 137], [128, 135, 137], [131, 136, 137], [133, 137, 137]],
            66000 : [[127, 136, 139], [129, 136, 139], [131, 137, 139], [133, 138, 139], [135, 139, 139]],
            68000 : [[130, 138, 141], [132, 139, 141], [134, 140, 141], [136, 141, 141], [137, 141, 142]],
            70000 : [[133, 141, 143], [134, 141, 143], [137, 142, 144], [139, 143, 144], [140, 143, 144]],
            72000 : [[135, 143, 145], [137, 144, 145], [139, 144, 146], [141, 145, 146]],
            74000 : [[138, 145, 147], [139, 146, 148], [142, 147, 148], [143, 147, 148]],
            76000 : [[141, 147, 149], [142, 148, 149], [144, 149, 150], [145, 149, 150]],
            78000 : [[143, 150, 151], [144, 150, 151], [146, 151, 151]],
            80000 : [[146, 152, 153], [147, 152, 153], [148, 153, 153]],
            82000 : [[148, 154, 155], [149, 154, 155], [150, 155, 155]],
            84000 : [[150, 156, 157], [151, 156, 157], [152, 157, 157]],
            86000 : [[153, 158, 159], [153, 158, 159]],
            88000 : [[155, 160, 161], [154, 160, 161]],
            90000 : [[156, 162, 163], [154, 162, 163]],
        }),
        2 : interpolate({
            58000 : [[109, 117, 123], [111, 118, 123], [113, 119, 123], [116, 120, 123], [118, 121, 123]],
            60000 : [[111, 120, 125], [114, 121, 125], [116, 121, 125], [119, 122, 125], [121, 123, 125]],
            62000 : [[114, 122, 127], [116, 123, 127], [119, 124, 127], [122, 125, 127], [124, 126, 127]],
            64000 : [[117, 124, 129], [120, 125, 129], [122, 126, 129], [124, 127, 129], [126, 128, 129]],
            66000 : [[120, 127, 131], [123, 128, 131], [125, 128, 131], [127, 129, 131], [128, 130, 131]],
            68000 : [[123, 129, 133], [125, 130, 133], [128, 131, 133], [129, 131, 133], [130, 132, 133]],
            70000 : [[125, 131, 135], [128, 132, 135], [130, 133, 135], [131, 133, 135]],
            72000 : [[128, 133, 137], [131, 134, 137], [132, 135, 137], [134, 135, 137]],
            74000 : [[131, 135, 139], [133, 136, 139], [135, 137, 139], [135, 138, 139]],
            76000 : [[133, 138, 141], [135, 138, 141], [137, 139, 141]],
            78000 : [[136, 140, 143], [138, 140, 143], [139, 141, 143]],
            80000 : [[138, 142, 144], [140, 142, 145], [141, 143, 145]],
            82000 : [[140, 144, 146], [142, 144, 146]],
            84000 : [[143, 146, 148], [144, 146, 148]],
            86000 : [[145, 148, 150], [146, 148, 150]],
            88000 : [[147, 149, 152], [148, 150, 152]],
            90000 : [[149, 151, 153]],
        }),
        4 : interpolate({
            58000 : [[95, 100, 109], [97, 101, 109], [100, 103, 109], [103, 105, 109], [105, 106, 109]],
            60000 : [[98, 103, 111], [100, 104, 111], [103, 105, 111], [105, 107, 111], [108, 108, 111]],
            62000 : [[101, 105, 112], [103, 106, 112], [105, 108, 113], [108, 109, 113], [110, 111, 113]],
            64000 : [[104, 107, 114], [106, 109, 114], [108, 110, 114], [111, 112, 114]],
            66000 : [[106, 110, 116], [108, 111, 116], [111, 113, 116], [113, 114, 116]],
            68000 : [[109, 112, 118], [111, 113, 118], [113, 115, 118], [115, 116, 118]],
            70000 : [[112, 114, 119], [114, 116, 120], [116, 117, 120]],
            72000 : [[114, 117, 121], [116, 118, 121], [118, 119, 121]],
            74000 : [[117, 119, 123], [118, 120, 123], [120, 121, 123]],
            76000 : [[119, 121, 125], [121, 122, 125]],
            78000 : [[121, 123, 126], [123, 124, 126]],
            80000 : [[124, 125, 128]],
            82000 : [[126, 127, 129]],
            84000 : [[128, 128, 131]],
            86000 : [[130, 130, 132]],
        }),
    },
    2 : {
        1 : interpolate({
            58000 : [[118, 127, 131], [120, 127, 131], [122, 128, 131], [124, 129, 131], [126, 130, 131]],
            60000 : [[121, 129, 133], [123, 130, 133], [125, 131, 133], [127, 132, 133], [129, 132, 133]],
            62000 : [[124, 132, 135], [126, 132, 135], [128, 133, 135], [129, 134, 135], [131, 134, 135]],
            64000 : [[127, 134, 137], [128, 135, 137], [130, 136, 137], [132, 136, 137], [133, 137, 137]],
            66000 : [[130, 137, 139], [131, 137, 139], [133, 138, 139], [135, 139, 139], [136, 139, 140]],
            68000 : [[132, 139, 141], [134, 140, 141], [136, 140, 141], [137, 141, 141]],
            70000 : [[135, 141, 143], [137, 142, 143], [138, 143, 143], [139, 143, 144]],
            72000 : [[138, 144, 145], [139, 144, 145], [141, 145, 146], [142, 145, 146]],
            74000 : [[140, 146, 147], [142, 146, 147], [143, 147, 148]],
            76000 : [[143, 148, 149], [144, 149, 149], [145, 149, 149]],
            78000 : [[145, 150, 151], [147, 151, 151], [147, 151, 151]],
            80000 : [[147, 152, 153], [149, 153, 153]],
            82000 : [[150, 154, 155], [151, 155, 155]],
            84000 : [[152, 156, 157], [153, 156, 157]],
            86000 : [[154, 158, 159]],
            88000 : [[156, 160, 161]],
            90000 : [[158, 162, 163]],
        }),
        2 : interpolate({
            58000 : [[111, 118, 123], [113, 119, 123], [115, 120, 123], [117, 120, 123], [120, 121, 123]],
            60000 : [[114, 121, 125], [116, 121, 125], [118, 122, 125], [120, 123, 125], [122, 124, 125]],
            62000 : [[117, 123, 127], [119, 124, 127], [121, 124, 127], [123, 125, 127], [124, 126, 127]],
            64000 : [[120, 125, 129], [122, 126, 129], [124, 127, 129], [125, 127, 129], [126, 128, 129]],
            66000 : [[123, 128, 131], [125, 128, 131], [126, 129, 131], [128, 130, 131], [129, 130, 131]],
            68000 : [[126, 130, 133], [127, 130, 133], [129, 131, 133], [130, 132, 133]],
            70000 : [[128, 132, 135], [130, 133, 135], [131, 133, 135], [132, 134, 135]],
            72000 : [[131, 134, 137], [132, 135, 137], [134, 135, 137]],
            74000 : [[133, 136, 139], [135, 137, 139], [136, 137, 139]],
            76000 : [[136, 138, 141], [137, 139, 141], [138, 139, 141]],
            78000 : [[138, 140, 143], [139, 141, 143]],
            80000 : [[140, 142, 144], [141, 143, 144]],
            82000 : [[142, 144, 146], [143, 145, 146]],
            84000 : [[145, 146, 148]],
            86000 : [[146, 148, 150]],
            88000 : [[149, 150, 151]],
        }),
        4 : interpolate({
            58000 : [[98, 102, 109], [100, 103, 109], [102, 104, 109], [104, 105, 109], [106, 106, 109]],
            60000 : [[101, 104, 111], [103, 105, 111], [105, 107, 111], [106, 107, 111], [108, 108, 111]],
            62000 : [[104, 107, 112], [106, 108, 112], [107, 109, 112], [109, 110, 113], [111, 111, 113]],
            64000 : [[107, 109, 114], [108, 110, 114], [110, 111, 114], [111, 112, 114]],
            66000 : [[109, 111, 116], [111, 113, 116], [113, 114, 116], [114, 114, 116]],
            68000 : [[112, 114, 118], [114, 115, 118], [115, 116, 118]],
            70000 : [[114, 116, 119], [116, 117, 120], [117, 117, 119]],
            72000 : [[117, 118, 121], [118, 119, 121]],
            74000 : [[120, 120, 123], [121, 121, 123]],
            76000 : [[122, 122, 124]],
            78000 : [[124, 124, 126]],
        }),
    },
};

//////////////////////////////////////////
var lookup;
//M(['div', 'Takeoff Bugs',
//   ['style', ['borderBottom', '1px solid black'],
//    ['textAlign', 'center']]], document.body);
M(['div',
   ['style', ['borderBottom', '1px solid black'],
    ['fontFamily', 'monospace']],
   ['with', div => {
       var flaps, weight, temp, alt, power;
       lookup = function (o) {
           if (o.flaps !== undefined) { flaps = o.flaps; }
           if (o.weight !== undefined) { weight = o.weight; }
           if (o.temp !== undefined) { temp = o.temp; }
           if (o.alt !== undefined) { alt = o.alt; }
           if (o.power !== undefined) { power = o.power; }
           //console.log({
           //    flaps, weight, temp, alt, power,
           //});
           if (alt === undefined) { return; }
           if (temp === undefined) { return; }
           if (weight === undefined) { return; }
           if (flaps === undefined) { return; }
           if (power === undefined) { return; }
           var col = alt2Temp[power][flaps][alt](temp),
               powerMap = flapMap[power],
               powerFlaps = powerMap[flaps],
               powerFlapsWeight = powerFlaps[weight],
               speedList = (col !== undefined) && powerFlapsWeight && powerFlapsWeight[col];
               [v1, vr, v2] = speedList || [null, null, null],
               vfs = v1 && Vfs[weight];
           //console.log({ col, powerMap, powerFlaps, powerFlapsWeight });
           div.innerHTML = '';
           M(['table',
              ['attr', ['border', '0'], ['cellspacing', '0'], ['cellpadding', '0']],
              ['style',
               ['width', '100%'],
               ['width', '100%']],
              ['tr',
               ['td', 'V1:', ['style', ['textAlign', 'right']]],
               ['td', v1 || '---'],
               ['td', '&nbsp;'],
               ['td', 'V2:', ['style', ['textAlign', 'right']]],
               ['td', v2 || '---']],
              ['tr',
               ['td', 'Vr:', ['style', ['textAlign', 'right']]],
               ['td', vr || '---'],
               ['td', '&nbsp;'],
               ['td', 'Vfs:', ['style', ['textAlign', 'right']]],
               ['td', vfs || '---']]], div);
       };
   }]], document.body);
M(['div',
   ['style', ['textAlign', 'center'], ['marginTop', '1em']],
   ['div', 'Temp: 0'],
   ['input',
    ['attr',
     ['class', 'slider'],
     ['type', 'range'],
     ['min', '-40'],
     ['max', '52'],
     ['value', '0'],
     ['step', '1']],
    ['on',
     ['input', e => {
         e.target.previousElementSibling.innerHTML = 'Temp: ' + e.target.value;
         lookup({ temp : e.target.value });
     }]]]], document.body);
lookup({ temp : 0 });
M(['div',
   ['style', ['textAlign', 'center'], ['marginTop', '1em']],
   ['div', 'Weight: 74000'],
   ['input',
    ['attr',
     ['class', 'slider'],
     ['type', 'range'],
     ['min', '58000'],
     ['max', '90000'],
     ['value', '74000'],
     ['step', '1000']],
    ['on',
     ['input', e => {
         e.target.previousElementSibling.innerHTML = 'Weight: ' + e.target.value;
         lookup({ weight : e.target.value });
     }]]]], document.body);
lookup({ weight : 74000 });
M(['div',
   ['style', ['textAlign', 'center'], ['marginTop', '1em']],
   ['div', 'Altitude: 1000'],
   ['input',
    ['attr',
     ['class', 'slider'],
     ['type', 'range'],
     ['min', '-1000'],
     ['max', '10000'],
     ['value', '1000'],
     ['step', '1000']],
    ['on',
     ['input', e => {
         e.target.previousElementSibling.innerHTML = 'Altitude: ' + e.target.value;
         lookup({ alt : e.target.value });
     }]]]], document.body);
lookup({ alt : 1000 });
function flapButtons() {
    var dim;
    function btn(position, startOn) {
        return ['div', position,
                ['style',
                 ['display', 'inline-block'],
                 ['border', '3px solid gray'],
                 ['padding', '.5em 1em'],
                 ['margin', '0 .5em'],
                 ['cursor', 'pointer'],
                 ['borderRadius', '10px']],
                ['with', div => {
                    function lite() {
                        dim && dim();
                        dim = () => div.style.background = 'none';
                        div.style.background = 'lightgreen';
                        lookup({ flaps : position });
                    }
                    if (startOn) {
                        lite();
                    }
                    M(['on', ['click', e => {
                        lite();
                    }]], div);
                }]];
    }
    return ['div',
            ['style', ['textAlign', 'center']],
            ['div', 'Flaps', ['style', ['margin', '10px 0']]],
            [btn, 1],
            [btn, 2, true],
            [btn, 4]];
}
function powerButtons() {
    var dim;
    function btn(power, startOn) {
        return ['div', 'T/O-' + power,
                ['style',
                 ['display', 'inline-block'],
                 ['border', '3px solid gray'],
                 ['padding', '.5em 1em'],
                 ['margin', '0 .5em'],
                 ['cursor', 'pointer'],
                 ['borderRadius', '10px']],
                ['with', div => {
                    function lite() {
                        dim && dim();
                        dim = () => div.style.background = 'none';
                        div.style.background = 'lightgreen';
                        lookup({ power });
                    }
                    if (startOn) {
                        lite();
                    }
                    M(['on', ['click', e => {
                        lite();
                    }]], div);
                }]];
    }
    return ['div',
            ['style', ['textAlign', 'center'], ['marginTop', '10px']],
            //['div', 'Power', ['style', ['margin', '10px 0']]],
            [btn, 1],
            [btn, 2, true]];
}
M([flapButtons], document.body);
M([powerButtons], document.body);
