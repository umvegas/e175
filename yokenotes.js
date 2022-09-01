function form() {
    function row(titles, fillers = []) {
        function tdFill(filler = '&nbsp;') {
            return ['td', filler,
                    ['style', ['textAlign', 'center'],
                     ['fontFamily', 'monospace'],
                     ['fontSize', '16px'],
                     ['padding', '6px 0'],
                     ['color', '#fff']]];
        }
        function th(title) {
            return ['th', title,
                    ['style', ['fontSize', '14px']]];
        }
        return ['table',
                ['attr', ['width', '100%'],
                 ['border', '1'], ['cellspacing', '0'], ['cellpadding', '0']],
                ['style', ['marginBottom', '5px']],
                ['tr'].concat(titles.map(th)),
                ['tr'].concat(fillers.map(tdFill))];
    }
    function faBrief() {
        return [row,
                ['ETE', 'TURB', 'MEL'],
                ['----', '------------', '------------']];
    }
    function aboveTheLine() {
        return [row,
                ['RQ', 'LP', 'OB', 'MEL'],
                ['--', '--', '--', '-----------------']];
    }
    function belowTheLine() {
        return [row,
                ['MTOW', 'LIMIT', 'PTOW', 'ATOW'],
                ['-----', '-----', '-----', '-----']];
    }
    function beforeTakeoff() {
        return [row,
                ['Min Fuel', 'SE Turn'],
                ['-----', 'via&nbsp; rch -or&nbsp; turn&nbsp; fra']];
    }
    function enroute() {
        return [row,
                ['Terrain/Driftdown', 'Fuel', 'FL/AS'],
                ['xxxrrr/dd div wgt alt<br>xxxrrr/dd div wgt alt', 'dest<br>alt&nbsp;', '---<br>---']];
    }
    function arrival() {
        return [row,
                ['Flt#', 'LDW', 'Bingo', 'SOB'],
                ['-----', '-----', '--', '--']];
    }
    return ['div',
            faBrief,
            aboveTheLine,
            belowTheLine,
            beforeTakeoff,
            enroute,
            arrival];
}
function frame() {
    function formCell() {
        return ['td', form,
                ['style', ['height', '5.35in'], ['width', '4.1in'],
                 ['verticalAlign', 'top'],
                 ['border', '2px solid black']]];
    }
    return ['table',
            ['attr',
             ['border', '0'], ['cellspacing', '8'], ['cellpadding', '0']],
            ['tr', formCell, formCell],
            ['tr', formCell, formCell]];
}
M(frame, document.body);
