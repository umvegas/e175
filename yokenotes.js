function form() {
    return [
        'div',
        ['style',
         ['width', '4.1in'],
         ['height', '5.3in'],
         ['margin', '.05in'],
         ['display', 'inline-block'],
         ['border', '1px solid black']],
        ['table',
         ['style', ['width', '100%'], ['borderBottom', '1px solid gray']],
         ['tr',
          ['th', 'ETE',
           ['style',
            ['lineHeight', '1.0'],
            ['width', '12%'],
            ['borderBottom', '1px solid lightgray']]],
          ['th', 'Turb',
           ['style',
            ['lineHeight', '1.0'],
            ['borderBottom', '1px solid lightgray']]],
          ['th', 'MEL',
           ['style',
            ['lineHeight', '1.0'],
            ['borderBottom', '1px solid lightgray']]]],
         ['tr',
          ['td', '&nbsp;'],
          ['td', '&nbsp;'],
          ['td', '&nbsp;']]],
        ['table',
         ['style', ['width', '100%'], ['borderBottom', '1px solid gray']],
         ['tr',
          ['td', 'MTOW', ['style', ['width', '10%']]],
          ['td', '&nbsp;', ['style', ['borderRight', '1px solid black']]],
          ['td', 'Min', ['style', ['width', '10%']]],
          ['td', '&nbsp;', ['style', ['borderRight', '1px solid black']]],
          ['td', 'ENR', ['style', ['width', '10%']]],
          ['td', '&nbsp;']],
         ['tr',
          ['td', 'METW', ['style', ['width', '10%']]],
          ['td', '&nbsp;', ['style', ['borderRight', '1px solid black']]],
          ['td', 'Req', ['style', ['width', '10%']]],
          ['td', '&nbsp;', ['style', ['borderRight', '1px solid black']]],
          ['td', 'DL', ['style', ['width', '10%']]],
          ['td', '&nbsp;']],
         ['tr',
          ['td', 'PTOW', ['style', ['width', '10%']]],
          ['td', '&nbsp;', ['style', ['borderRight', '1px solid black']]],
          ['td', 'LP', ['style', ['width', '10%']]],
          ['td', '&nbsp;', ['style', ['borderRight', '1px solid black']]],
          ['td', 'AL1', ['style', ['width', '10%']]],
          ['td', '&nbsp;']],
         ['tr',
          ['td', 'PLDW', ['style', ['width', '10%']]],
          ['td', '&nbsp;', ['style', ['borderRight', '1px solid black']]],
          ['td', 'OB', ['style', ['width', '10%']]],
          ['td', '&nbsp;', ['style', ['borderRight', '1px solid black']]],
          ['td', 'RES', ['style', ['width', '10%']]],
          ['td', '&nbsp;']]],
        ['table',
         ['style', ['width', '100%'], ['borderBottom', '1px solid gray']],
         ['tr',
          ['td', 'Flt #', ['style', ['width', '10%']]],
          ['td', '&nbsp;', ['style', ['borderRight', '1px solid black']]],
          ['td', 'SOB', ['style', ['width', '10%']]],
          ['td',
           '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
           '&middot;' +
           '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
           '&middot;',
           ['style', ['width', '30%'], ['borderRight', '1px solid black']]],
          ['td', 'Bingo', ['style', ['width', '10%']]],
          ['td', '&nbsp;']]],
        ['table',
         ['style', ['width', '100%'], ['borderBottom', '1px solid gray']],
         ['tr',
          ['td', 'ZFW',
           ['style', ['width', '25%']]],
          ['td', '&middot;',
           ['style', ['width', '20%'], ['borderRight', '1px solid black']]],
          ['td', 'CG',
           ['style', ['width', '25%'], ['borderRight', '1px solid black']]],
          ['td', 'Trim',
           ['style', ['width', '30%']]]]],
        ['table',
         ['style', ['width', '100%'], ['borderBottom', '1px solid gray']],
         ['tr',
          ['td', 'Spd', ['style', ['width', '5%']]],
          ['td', '&nbsp;', ['style', ['borderRight', '1px solid black']]],
          ['td', 'FL', ['style', ['width', '8%']]],
          ['td',
           '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
           '&middot;' +
           '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
           '&middot;',
           ['style', ['width', '35%'], ['borderRight', '1px solid black']]],
          ['td', '&deg;&uarr;&darr;', ['style', ['width', '6%']]],
          ['td', '&nbsp;']]],
        ['table',
         ['style', ['width', '100%'], ['borderBottom', '1px solid gray'],
          ['fontSize', '.8em']],
         ['tr',
          ['td', 'via', ['style', ['width', '5%']]],
          ['td', '&nbsp;'],
          ['td', 'at', ['style', ['width', '5%']]],
          ['td', '&nbsp;'],
          ['td', 'turn', ['style', ['width', '5%']]],
          ['td', '&nbsp;'],
          ['td', 'FRA', ['style', ['width', '5%']]],
          ['td', '&nbsp;']]],
        ['table',
         ['style', ['width', '100%'], ['borderBottom', '1px solid gray'],
          ['fontSize', '.8em']],
         ['tr',
          ['td', 'tail#', ['style', ['width', '5%']]],
          ['td', '&nbsp;', ['style', ['width', '15%']]],
          ['td', '&middot;', ['style', ['width', '5%'], ['textAlign', 'center']]],
          ['td', '&nbsp;', ['style', ['width', '15%']]],
          ['td', 'rev:', ['style', ['width', '5%']]],
          ['td', '0',
           ['style', ['textAlign', 'center'], ['border', '1px solid black'], ['borderRadius', '10px']]],
          ['td', '1', ['style', ['textAlign', 'center']]],
          ['td', '2', ['style', ['textAlign', 'center']]],
          ['td', '3', ['style', ['textAlign', 'center']]]]]];
}
M(['div',
   ['style', ['width', '8.5in']],
   form,
   form,
   form,
   form], document.body);
