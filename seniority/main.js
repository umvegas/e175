const raw = `
1 Haugaard, LaMar 08029 PDX E175 CA 6/17/85 6/30/05 2/05/60 1 PDX
2 Napier, John 08065 PDX E175 CA 9/16/85 6/30/05 2/24/61 1 PDX
3 Bryant, Tyrone 08121 GEG E175 CA 6/2/86 7/23/61 1 GEG
4 Bauer, Curt 05426 SEA E175 CA 1/5/87 11/11/61 1 SEA
5 Reed, Scott 08373 PDX E175 CA APD 3/14/88 6/30/05 6/19/62 1 PDX
6 Beach, John 08415 PDX Q400 MG 11/21/88 6/30/05 3/20/65 1 TBD
7 Solmonson, Perry 08439 PDX E175 CA 2/5/89 6/30/05 3/19/61 1 PDX
8 Riemer, Emil 08552 PDX E175 CA 9/18/89 6/30/05 3/04/63 1 PDX
9 Ludwigson, Chuck 08553 PDX E175 CA 9/18/89 3/11/64 1 PDX
10 Buehler, Tom 08600 PAE E175 CA 1/8/90 1/05/17 1 1/31/66 1 SEA
11 Hunt, Rob 08621 BOI E175 CA APD 2/19/90 6/30/05 3/06/66 1 BOI
12 Beadle, John 08627 PDX E175 CA 3/12/90 12/20/16 1 5/19/62 1 PDX
13 Dodd, Jonathan 08667 PDX E175 CA 1/14/91 6/30/05 9/02/65 1 PDX
14 Henion, Todd 08671 PDX E175 CA FMS L 2/11/91 6/30/05 10/28/60 1 PDX
15 Wiltse, Phil 08673 SEA E175 CA APD 2/11/91 5/15/62 1 SEA
16 McKone, Steve 08674 PDX E175 CA 2/11/91 6/30/05 2/15/63 1 PDX
17 Hansen, Ulf 08691 PDX E175 CA 4/8/91 12/28/16 1 11/18/61 1 PDX
18 Jenkins, Bill 08718 PDX E175 CA 6/30/91 6/30/05 7/03/66 1 PDX
19 Miklos, Bruce 08725 BOI E175 CA 7/29/91 1/24/60 1 BOI
20 Stover, Marv 08748 PDX E175 CA APD 10/21/91 1/30/17 1/20/65 1 PDX
21 Whiteley, Timothy 78800 PDX E175 FO 4/4/94 6/30/05 7/06/62 1 PDX
22 Braund, Douglas 80100 PDX E175 CA 6/13/94 8/16/06 7/12/60 1 PDX
23 Ronning, Svein 73431 PDX E175 CA 2/6/95 6/30/05 7/05/62 1 PDX
24 Hood, JD 23860 PDX E175 CA 5/1/95 3/15/65 1 PDX
25 Brosius, Scott 53702 SEA E175 CA APD 5/1/95 7/24/14 4/06/67 1 SEA
26 Okamura, Yokko 46400 PDX E175 CA 5/1/95 6/30/05 8/11/67 1 PDX
27 Lindemood, Michael 77930 PDX E175 CA 5/29/95 6/30/05 1/13/66 1 PDX
28 Pullen, Rob 65400 PDX E175 CA 1/2/96 6/15/69 1 PDX
29 Robertson, Jay 76040 PDX E175 CA 3/18/96 2/26/06 6/13/63 1 PDX
30 Murakawa, Keiko 50870 PDX E175 CA 3/18/96 5/12/64 1 PDX
31 Sarygin, Oleg 85301 PDX E175 CA 3/18/96 1/31/66 1 PDX
32 Brown, Michael 45500 PDX Q400 CA APD 3/18/96 6/30/05 8/03/67 1 PDX
33 Winkle, Tiger 23103 PDX E175 CA 5/28/96 9/18/06 5/01/61 1 PDX
34 Norton, William 39790 GEG E175 CA 7/8/96 6/12/65 1 GEG
35 Dahlquist, Erik 47430 SEA E175 CA 7/8/96 6/30/05 4/06/67 1 SEA
36 O'Brien, Daniel 16472 BOI E175 CA APD 10/28/96 7/24/14 12/22/74 1 BOI
37 Chambers, Ross 40770 SEA E175 CA 12/2/96 6/30/05 2/03/67 1 PDX
38 Keith, Joel 33830 GEG E175 CA 3/30/98 9/20/60 1 BOI
39 Rothschild, Jeffrey 60391 SEA E175 CA 4/14/98 6/30/05 11/24/67 1 SEA
40 Gangl, Todd 54960 PDX E175 CA 4/14/98 11/08/06 3/25/69 1 PDX
41 McKean, Pat 68951 MFR E175 CA 5/19/98 2/21/61 1 MFR
42 Gerlicher, Mark 65901 PDX E175 CA 6/8/98 1/14/17 1 9/09/64 1 PDX
43 Jackson, Kim 79661 PDX E175 CA 6/22/98 6/24/14 1/20/67 1 PDX
44 Nahring, Craig 84182 PAE E175 CA 7/13/98 6/29/06 11/15/66 1 SEA
45 Brummond, Lisa 58991 BOI E175 CA 11/16/98 4/21/61 1 BOI
46 Wedekind, Brent 41810 GEG E175 CA 12/28/98 4/05/16 1 11/15/66 1 GEG
47 Bowling, Bill 08570 PDX E175 CA 1/18/99 6/30/05 1/27/64 1 PDX
48 Sisk, Jonathan 91280 PAE E175 CA APD 2/8/99 11/19/15 1 3/26/66 1 PAE
49 Baumgarten, Robert 66720 BOI E175 CA APD 3/15/99 9/20/05 8/24/71 1 BOI
50 Liston, Chris 22600 PDX E175 CA 3/30/99 11/05/69 1 PDX
51 Mariotti, Karl 77791 PAE E175 CA 5/4/99 5/31/63 1 PAE
52 Leathers, Jon 75400 PAE E175 CA 5/4/99 12/20/16 1 2 11/15/66 1 SEA
53 Southorn, Ptaughm 65761 BOI E175 CA 5/4/99 5/07/71 1 BOI
54 Braden, Ryan 17170 SEA E175 CA 5/24/99 12/25/68 1 SEA
55 Shoemaker, Chris 90430 SEA E175 CA 6/8/99 3/14/60 1 SEA
56 Burright, Russ 61590 GEG E175 CA 6/28/99 11/13/72 1 GEG
57 Boyd, Sheila 78401 PAE E175 CA APD 7/13/99 4/20/67 1 SEA/
58 White, Mark 81603 PDX E175 CA 8/2/99 8/22/61 1 PDXAE
59 Keenan, Bill 76083 PDX E175 CA 8/17/99 7/28/14 1 8/22/62 1 PDX
60 Quentin, Andrew 68970 MFR E175 CA 8/17/99 10/25/73 1 MFR
61 Bayro, David 99981 SEA E175 CA 9/7/99 12/19/73 1 SEA
62 Gillespie, Andrew 91190 GEG E175 CA 9/21/99 7/19/71 1 GEG
63 Erenfeld, Peter 70551 MFR E175 CA 10/26/99 3/09/17 1 12/07/66 1 PDX
64 Niles, Mark 28671 PDX E175 MG MGR 1/24/00 12/21/16 1 9/29/59 1 PDX
65 Goth, Larry 19091 PDX E175 CA 2/28/00 6/06/66 1 PDX
66 Ortega, Rody 20170 PDX E175 CA 4/3/00 6/30/05 10/03/64 1 PDX
67 Sotebeer, Erik 38031 SEA E175 CA 5/22/00 10/28/65 1 SEA
68 Wilcox, David 75641 PDX E175 CA 6/12/00 3/29/68 1 PDX
69 Johnson, Ben 24501 PDX E175 CA 7/17/00 12/15/16 1 6/30/77 1 PDX
70 Nelson, Eric 21401 PDX Q400 CA 8/21/00 7/28/14 7/09/76 1 PDX
71 Burton, Steve 51231 SEA E175 CA 9/5/00 6/11/64 1 SEA
72 Teclemariam, Gabriel 68802 PDX E175 CA 9/25/00 12/28/65 1 PDX
73 Geib, Tom 37730 SEA E175 CA 10/9/00 1/14/15 1 6/13/67 SEA
74 De Koster, Dean 39330 PAE E175 CA 3/19/01 12/09/16 1 10/13/63 1 PAE
75 Russin, Paul 29181 PDX E175 CA 4/9/01 10/21/14 1 12/11/65 1 PDX
76 Kemp, Lisa 16261 PDX E175 CA 5/29/01 1/27/65 1 PDX
77 Sparks, Wayne 34630 SEA E175 CA 5/29/01 3/15/67 1 SEA
78 Zitkovich, Vinny 25491 PDX E175 CA 7/2/01 6/30/72 1 PDX
79 Pierce, Stuart 62742 PDX E175 CA 4/17/03 8/02/77 1 PDX
80 Harris, Eric 87021 PDX E175 CA 10/20/03 10/12/14 1 10/24/70 1 PDX
81 Erickson, Justin 17272 MFR E175 CA 11/17/03 7/08/78 1 SEA
82 Braa, Eric 98771 PDX E175 CA MGR 11/17/03 6/01/15 1 12/23/79 1 PDX
83 Janssen, Jeffrey 23831 GEG E175 CA 12/15/03 12/18/73 1 GEG
84 Nelson, Christopher 62811 SEA E175 CA 12/15/03 1/12/80 1 SEA
85 Borden, Mark 58201 PDX E175 CA FMS L 1/29/04 9/21/14 1 7/30/60 1 PDX
86 Bossom, Steve 97860 SEA E175 CA APD 1/29/04 5/20/77 1 SEA
87 Guttormson, Allen 49263 PDX E175 CA 1/6/05 9/11/79 1 PDX
88 Vega, Matthew 16491 PAE E175 CA APD 4/14/05 7/08/77 1 PAE
89 Nelson, Geoff 68211 PDX E175 CA FMS L 11/2/05 10/16/78 1 PDX
90 Kittelson, Josh 81182 PDX E175 CA 2/16/06 2/21/78 1 PDX
91 Chambers, Scott 10094 PAE E175 CA 4/27/06 8/03/70 1 SEA
92 Baune, Joe 42144 GEG E175 CA 2/1/07 7/14/81 1 GEG
93 Palmer, Michael 38861 PDX E175 CA 6/21/07 11/06/69 1 PDX
94 Knutson, Erik 11396 GEG E175 CA 10/4/07 4/23/82 1 GEG
95 Nestoss, Michael 11398 SEA Q400 MG 10/4/07 8/10/83 1
96 Meyer, Daniel 12745 PAE E175 CA 1/17/08 8/31/79 1 SEA
97 McKennon, Kevin 13209 PDX E175 CA 2/21/08 6/10/71 1
98 Rebagliati, Randy 14773 PDX E175 CA 5/1/08 6/20/69 1 PDX
99 Barton, Tony 31414 GEG E175 CA 2/28/12 2/08/79 1 GEG
100 Heilbrunn, Nicholas 35368 MFR E175 CA 8/22/12 6/11/83 1 MFR
101 Silvester, Scott 40268 BOI E175 CA 5/6/13 1/15/77 1 BOI
102 Davala, Matthew 42768 PDX E175 CA 8/23/13 6/26/16 1 5/16/82 1 PDX
103 Smith, Buck 43138 GEG E175 CA 9/16/13 2/16/67 1 GEG
104 Boyd, Brendan 43358 GEG E175 FO 10/7/13 1 1/15/89 1 TBD
105 Murphy, Peter 43999 GEG E175 CA 10/28/13 2/29/76 1 GEG
106 Eisenfeld, Joel 44007 PDX E175 CA 10/28/13 3/20/17 2 1 2/24/87 1 PDX
107 Swindle, Tim 44857 BOI E175 CA 1/6/14 4/25/16 1 5 4 2 3 10/26/86 1 BOI
108 Gardner, Jim 44845 BOI E175 CA 1/6/14 7/08/16 1 2 4 3 5 7/11/89 1 BOI
109 Asher, Jesse 45455 MFR E175 CA 1/27/14 6/30/15 4 5 1 2 3 5/14/86 1 MFR
110 Fontenot, Laney 46358 PAE E175 CA 3/10/14 12/20/16 1 2/27/72 1 SEA
111 O’Farrell, Ande 48491 SEA E175 CA 4/21/14 5/14/84 1 SEA
112 Stossich, Alessio 49496 GEG Q400 CA 5/12/14 8/25/81 GEG
`;
const trimmed = raw.trim();
const rawLines = trimmed.split(/[\n\r]+/);
const msPerDay = 1000 * 60 * 60 * 24;
const pilots = rawLines.map(line => {
    var re = /(\d+) (.*) (\d{5}) ([A-Z]{3}).* (\d+\/\d+\/\d+).* (\d+\/\d+\/\d+)/,
        m = line.match(re),
        birthday = m[6],
        birthdayDate = new Date(m[6]),
        retireDate = new Date(birthday),
        daysLeft,
        captain = !!line.match(/ CA /);
    retireDate.setYear(retireDate.getFullYear() + 65);
    daysLeft = Math.floor((retireDate - (new Date())) / msPerDay);
    return {
        name : m[2],
        seniority : +m[1],
        base : m[4],
        birthday,
        hireDate : m[5],
        retireDate,
        retireday : dt2str(retireDate),
        daysLeft,
        youngerAbove : 0,
        captain,
        birthdayDate,
    };
});
const pilotsByDaysLeft = pilots.concat().sort((a, b) => {
    const ad = a.daysLeft,
          bd = b.daysLeft;
    return ad > bd ? 1 :
           ad < bd ? -1 : 0;
});
function dt2str(dt) {
    return (dt.getMonth() + 1) + '/' + dt.getDate() + '/' + dt.getFullYear().toString().slice(-2);
}
function countYoungerAbove() {
    const lim = pilots.length;
    var i, j;
    for (i = 0; i < lim; i++) {
        if (!pilots[i].captain) { continue; }
        let id = pilots[i].daysLeft;
        for (j = i + 1; j < lim; j++) {
            if (!pilots[j].captain) { continue; }
            let jd = pilots[j].daysLeft;
            if (id >= jd) {
                pilots[j].youngerAbove++;
            }
        }
    }
}
function countDaysAtTop() {
    const lim = pilots.length;
    var i, j;
    for (i = 0; i < lim; i++) {
        if (!pilots[i].captain) { continue; }
        if (pilots[i].youngerAbove === 0) {
            let mrd = pilots[i].retireDate,
                lra = new Date(0); // latest-retire-date-above
            for (j = i - 1; j >= 0; j--) {
                if (!pilots[j].captain) { continue; }
                let ord = pilots[j].retireDate;
                if (lra < ord) {
                    lra = ord;
                }
            }
            if (+lra === 0) {
                lra = new Date();
            }
            pilots[i].willBe1 = true;
            pilots[i].daysAtTop = Math.floor((mrd - lra) / msPerDay);
        }
    }
}
function findBaseRanks() {
    var lastRank = {};
    pilots.forEach(pilot => {
        if (!lastRank[pilot.base]) {
            lastRank[pilot.base] = 0;
        }
        lastRank[pilot.base] += 1;
        pilot.baseRank = lastRank[pilot.base];
    });
}
function seniorAndOlder(a, b) {
    return a.seniority < b.seniority && a.birthdayDate < b.birthdayDate;
}
function buildRankReports() {
    // NB: assumes base rank has been calculated
    // for each pilot, A
    //     for each pilot, B
    //         if B is senior to and older than A
    //             record that A will move one rank up when B retires
    pilots.forEach(a => {
        var baseRank = a.baseRank,
            reportNextDate = () => new Date();
        a.rankMoves = [];
        pilotsByDaysLeft.forEach(b => {
            if (!seniorAndOlder(b, a)) { return; }
            const sameBase = b.base === a.base;
            var o = {
                retiree : b,
                date : b.retireday,
                newRank : a.seniority - a.rankMoves.length - 1,
                duration : Math.floor((b.retireDate - reportNextDate()) / msPerDay),
                daysFromNow : Math.floor((b.retireDate - new Date()) / msPerDay),
                sameBase,
            };
            if (sameBase) {
                baseRank -= 1;
                o.baseRank = baseRank;
            }
            a.rankMoves.push(o);
            reportNextDate = () => b.retireDate;
        });
    });
}
function reportNumberOfPilots() {
    M(['div', pilots.length + ' pilots'], document.body);
}
function showPilotRankMoves(pilot) {
    M(['dialog',
       ['with', dialog => {
           M(['on', ['click', e => {
               dialog.remove();
           }]], dialog);
       }],
       ['table',
        ['attr', ['border', '1'], ['cellpadding', '5']],
        ['tr',
         ['th', 'New Rank'],
         ['th', 'Base Rank'],
         ['th', 'Retiree'],
         ['th', 'Date'],
         ['th', 'Days from Now']],
        ['with', table => {
            pilot.rankMoves.forEach(move => {
                M(['tr',
                   ['style', ['background', move.sameBase ? 'lightblue' : 'none']],
                   ['td', move.newRank, ['style', ['textAlign', 'center']]],
                   ['td', move.baseRank || "&nbsp;", ['style', ['textAlign', 'center']]],
                   ['td', move.retiree.name],
                   ['td', move.retiree.retireday, ['style', ['textAlign', 'right']]],
                   ['td', move.daysFromNow, ['style', ['textAlign', 'right']]]], table);
            });
        }]]], document.body).showModal();
}
function showPilotTable(list = pilots, lastSortField = 'seniority', fieldCount = 0) {
    var bye;
    function th(label, field) {
        return ['th', label,
                ['style', ['cursor', 'pointer']],
                ['on', ['click', e => {
                    const invert = field === lastSortField && ((fieldCount + 1) % 2);
                    var newList = list.concat().sort((a, b) => {
                        const av = a[field],
                              bv = b[field];
                        return av === undefined ? 1 :
                               bv === undefined ? -1 :
                               av > bv ? (invert ? -1 : 1) :
                               av < bv ? (invert ? 1 : -1) : 0;
                    });
                    bye();
                    showPilotTable(newList, field, field === lastSortField ? fieldCount + 1 : 0);
                }]]];
    }
    M(['table',
       ['attr', ['border', '1'], ['cellpadding', '5']],
       ['tr',
        ['th', '&nbsp;'],
        [th, 'Seniority', 'seniority'],
        [th, 'Base Seniority', 'baseRank'],
        [th, 'Name', 'name'],
        [th, 'Days Left', 'daysLeft'],
        [th, 'Younger Above', 'youngerAbove'],
        [th, 'Days at Top', 'daysAtTop'],
        [th, 'Retireday', 'retireday'],
        [th, 'Birthday', 'birthdayDate']],
       ['with', table => {
           bye = () => table.remove();
           list.forEach((pilot, px) => {
               M(['tr',
                  ['on', ['click', e => {
                      showPilotRankMoves(pilot);
                  }]],
                  ['td', 1 + px],
                  ['td', pilot.seniority, ['style', ['textAlign', 'right']]],
                  ['td', pilot.base + ' : ' + pilot.baseRank,
                   ['style', ['textAlign', 'right']]],
                  ['td', pilot.name],
                  ['td', pilot.daysLeft, ['style', ['textAlign', 'right']]],
                  ['td', pilot.youngerAbove, ['style', ['textAlign', 'right']]],
                  ['td', pilot.daysAtTop || '&nbsp;',
                   ['style',
                    ['textAlign', 'right'],
                    ['background', pilot.willBe1 ? 'lightgreen' : 'gray']]],
                  ['td', pilot.retireday, ['style', ['textAlign', 'right']]],
                  ['td', pilot.birthday, ['style', ['textAlign', 'right']]]], table);
           });
       }]], document.body);
}
////////////////////////////////////////////////////////////////////////////////
countYoungerAbove();
countDaysAtTop();
findBaseRanks();
buildRankReports();
reportNumberOfPilots();
showPilotTable();
