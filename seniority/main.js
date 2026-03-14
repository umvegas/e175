const raw = `
1 Napier, John 1043810 08065 PDX E175 CA 9/16/85 2/24/61 1 PDX
2 Bauer, Curt 1038389 05426 SEA E175 MG 1/5/87 11/11/61 1 SEA
3 Reed, Scott 1043717 08373 PDX E175 CA APD 3/14/88 6/19/62 1 PDX
4 Beach, John 1044138 08415 PDX E175 MG 11/21/88 3/20/65 1 TBD
5 Solmonson, Perry 1042084 08439 PDX E175 CA 2/5/89 3/19/61 1 PDX
6 Riemer, Emil 1042991 08552 PDX E175 CA 9/18/89 3/04/63 1 PDX
7 Ludwigson, Chuck 1042993 08553 PDX E175 CA 9/18/89 3/11/64 1 PDX
8 Buehler, Tom 1043306 08600 PAE E175 CA 1/8/90 1/31/66 1 SEA
9 Hunt, Rob 1043577 08621 BOI E175 CA APD 2/19/90 3/06/66 1 BOI
10 Beadle, John 1043592 08627 PDX E175 CA 3/12/90 5/19/62 1 PDX
11 Dodd, Jonathan 1043889 08667 PDX E175 CA 1/14/91 9/02/65 1 PDX
12 Wiltse, Phil 1043900 08673 SEA E175 CA APD 2/11/91 5/15/62 1 SEA
13 McKone, Steve 1043903 08674 PDX E175 CA 2/11/91 2/15/63 1 PDX
14 Hansen, Ulf 1044046 08691 PDX E175 CA 4/8/91 11/18/61 1 PDX
15 Jenkins, Bill 1041972 08718 PDX E175 CA 6/30/91 7/03/66 1 PDX
16 Stover, Marv 1042145 08748 PDX E175 CA APD 10/21/91 1/20/65 1 PDX
17 1 Whiteley, Timothy 1042773 78800 PDX E175 FO 4/4/94 7/06/62 1 PDX
18 Ronning, Svein 1041336 73431 PDX E175 CA 2/6/95 7/05/62 1 PDX
19 Hood, JD 1033682 23860 PDX E175 CA 5/1/95 3/15/65 1 PDX
20 Brosius, Scott 1038078 53702 SEA E175 CA APD 5/1/95 4/06/67 1 SEA
21 Okamura, Yokko 1036079 46400 PDX E175 CA 5/1/95 8/11/67 1 PDX
22 Lindemood, Michael 1042455 77930 PDX E175 CA 5/29/95 1/13/66 1 PDX
23 Pullen, Rob 1040985 65400 PDX E175 CA 1/2/96 6/15/69 1 PDX
24 Murakawa, Keiko 1038632 50870 PDX E175 CA 3/18/96 5/12/64 1 PDX
25 Sarygin, Oleg 1042838 85301 PDX E175 CA 3/18/96 1/31/66 1 PDX
26 Brown, Michael 1035607 45500 PDX Q400 CA APD 3/18/96 8/03/67 1 PDX
27 Winkle, Tiger 1033246 23103 PDX E175 CA 5/28/96 5/01/61 1 PDX
28 Norton, William 1036755 39790 GEG E175 CA 7/8/96 6/12/65 1 GEG
29 Dahlquist, Erik 1036821 47430 SEA E175 CA 7/8/96 4/06/67 1 SEA
30 O'Brien, Daniel 1031510 16472 BOI E175 CA APD 10/28/96 12/22/74 1 BOI
31 Chambers, Ross 1034977 40770 SEA E175 CA 12/2/96 2/03/67 1 RDM
32 Rothschild, Jeffrey 1037993 60391 SEA E175 CA 4/14/98 11/24/67 1 SEA
33 Gangl, Todd 1038829 54960 PDX E175 CA 4/14/98 3/25/69 1 PDX
34 Gerlicher, Mark 1041404 65901 PDX E175 CA 6/8/98 9/09/64 1 PDX
35 Jackson, Kim 1043216 79661 PDX E175 CA 6/22/98 1/20/67 1 PDX
36 Nahring, Craig 1044147 84182 PAE E175 CA 7/13/98 11/15/66 1 SEA
37 Wedekind, Brent 1035561 41810 GEG E175 CA 12/28/98 11/15/66 1 GEG
38 Bowling, Bill 1043134 08570 PDX E175 CA 1/18/99 1/27/64 1 PDX
39 Sisk, Jonathan 1015932 91280 PDX E175 CA APD 2/8/99 3/26/66 1 PAE
40 Baumgarten, Robert 1041868 66720 BOI E175 CA APD 3/15/99 8/24/71 1 BOI
41 Liston, Chris 1032920 22600 PDX E175 CA 3/30/99 11/05/69 1 PDX
42 Mariotti, Karl 1042316 77791 PAE E175 CA 5/4/99 5/31/63 1 PAE
43 Leathers, Jon 1040460 75400 PAE E175 CA 5/4/99 11/15/66 1 SEA
44 Southorn, Ptaughm 1041274 65761 BOI E175 CA 5/4/99 5/07/71 1 BOI
45 Braden, Ryan 1031819 17170 SEA E175 CA 5/24/99 12/25/68 1 SEA
46 Burright, Russ 1038609 61590 GEG E175 CA 6/28/99 11/13/72 1 GEG
47 Boyd, Sheila 1042618 PAE E175 CA APD 7/13/99 4/20/67 1 SEA/
48 White, Mark 1042196 81603 PDX E175 CA 8/2/99 8/22/61 1 PDX
49 Quentin, Andrew 1041004 68970 MFR E175 CA 8/17/99 10/25/73 1 MFR
50 Bayro, David 1045403 99981 SEA E175 CA 9/7/99 12/19/73 1 SEA
51 Gillespie, Andrew 1042027 91190 GEG E175 CA 9/21/99 7/19/71 1 GEG
52 Erenfeld, Peter 1041897 70551 MFR E175 CA 10/26/99 12/07/66 1 PDX
53 Goth, Larry 1032879 19091 PDX E175 CA 2/28/00 6/06/66 1 PDX
54 Ortega, Rody 1033484 20170 PDX E175 CA 4/3/00 10/03/64 1 PDX
55 Sotebeer, Erik 1035853 38031 SEA E175 CA 5/22/00 10/28/65 1 SEA
56 Wilcox, David 1040616 75641 PDX E175 CA 6/12/00 3/29/68 1 PDX
57 Johnson, Ben 1034121 24501 PDX E175 CA 7/17/00 6/30/77 1 PDX
58 Nelson, Eric 1034378 21401 PDX E175 CA 8/21/00 7/09/76 1 PDX
59 Burton, Steve 1038803 51231 SEA E175 CA 9/5/00 6/11/64 1 SEA
60 Teclemariam, Gabriel 1040869 68802 PDX E175 CA 9/25/00 12/28/65 1 PDX
61 Geib, Tom 1035703 37730 SEA E175 CA 10/9/00 6/13/67 1 SEA
62 De Koster, Dean 1036567 39330 PAE E175 CA 3/19/01 10/13/63 1 PAE
63 Russin, Paul 1034749 29181 PDX E175 CA 4/9/01 12/11/65 1 PDX
64 Kemp, Lisa 1031366 16261 PDX E175 CA 5/29/01 1/27/65 1 PDX
65 Sparks, Wayne 1035959 34630 SEA E175 CA 5/29/01 3/15/67 1 SEA
66 Zitkovich, Vinny 1034728 25491 PDX E175 CA 7/2/01 6/30/72 1 PDX
67 Pierce, Stuart 1039347 62742 PDX E175 CA 4/17/03 8/02/77 1 PDX
68 Harris, Eric 1044185 87021 PDX E175 CA 10/20/03 10/24/70 1 PDX
69 Erickson, Justin 1031950 17272 MFR E175 CA 11/17/03 7/08/78 1 SEA
70 Braa, Eric 1045082 98771 PDX E175 CA MGR 11/17/03 12/23/79 1 PDX
71 Janssen, Jeffrey 1033680 23831 GEG E175 CA 12/15/03 12/18/73 1 GEG
72 Nelson, Christopher 1039361 62811 SEA E175 CA 12/15/03 1/12/80 1 SEA
73 Bossom, Steve 1044878 97860 SEA E175 CA APD 1/29/04 5/20/77 SEA
74 Guttormson, Allen 1037751 49263 PDX E175 CA 1/6/05 9/11/79 1 PDX
75 Vega, Matthew 1031514 16491 PAE E175 CA APD 4/14/05 7/08/77 1 PAE
76 Nelson, Geoff 1040544 68211 PDX E175 CA FMS L 11/2/05 10/16/78 1 PDX
77 Kittelson, Josh 1044249 81182 PDX E175 CA 2/16/06 2/21/78 1 PDX
78 Chambers, Scott 1032479 10094 PAE E175 CA 4/27/06 8/03/70 1 SEA
79 Baune, Joe 1035859 42144 GEG E175 CA 2/1/07 7/14/81 1 GEG
80 Palmer, Michael 1036277 38861 PDX E175 CA 6/21/07 11/06/69 1 PDX
81 Knutson, Erik 1046027 11396 GEG E175 CA 10/4/07 4/23/82 1 GEG
82 Nestoss, Michael 1046029 11398 SEA Q400 MG 10/4/07 8/10/83 1
83 Meyer, Daniel 1046776 12745 PAE E175 CA 1/17/08 8/31/79 1 SEA
84 McKennon, Kevin 1047007 13209 PDX E175 CA 2/21/08 6/10/71 1
85 Rebagliati, Randy 1047638 14773 PDX E175 CA 5/1/08 6/20/69 1 PDX
86 Barton, Tony 1050089 31414 GEG E175 CA 2/28/12 2/08/79 1 GEG
87 Heilbrunn, Nicholas 1050715 35368 MFR E175 CA 8/22/12 6/11/83 1 MFR
88 Silvester, Scott 1051441 40268 BOI E175 CA 5/6/13 1/15/77 1 BOI
89 Davala, Matthew 1051856 42768 PDX E175 CA 8/23/13 5/16/82 1 PDX
90 Smith, Buck 1051888 43138 GEG E175 CA 9/16/13 2/16/67 1 GEG
91 2 Boyd, Brendan 1051929 43358 GEG Q400 FO 10/7/13 1/15/89 1 TBD
92 Murphy, Peter 1052006 43999 GEG E175 CA 10/28/13 2/29/76 1 GEG
93 Eisenfeld, Joel 1052009 44007 PDX E175 CA 10/28/13 2/24/87 1 PDX
94 Swindle, Tim 1052227 44857 BOI E175 CA 1/6/14 10/26/86 1 BOI
95 Gardner, Jim 1052221 44845 BOI E175 CA 1/6/14 7/11/89 1 BOI
96 Fontenot, Laney 1052540 46358 PAE E175 CA 3/10/14 2/27/72 1 SEA
97 O’Farrell, Ande 1052812 48491 SEA E175 CA 4/21/14 5/14/84 1 SEA
98 Stossich, Alessio 1052991 49496 GEG Q400 CA 5/12/14 8/25/81 1 GEG
99 Widell, Eric 1054056 53708 SEA E175 CA 12/1/14 1/16/83 1 SEA
100 Wiley, Kisa 1054212 55117 PAE E175 MG 1/5/15 5/23/84 1 SEA
101 Henderson, Brian 1054652 56986 SEA E175 CA 3/2/15 5/12/79 1 GEG
102 Rybkin, Igor 1046544 12323 PDX E175 CA 3/2/15 2/17/82 1 PDX
103 Comley, Justin 1054654 56988 PDX E175 CA 3/2/15 9/17/83 1 PDX
104 Ross, Brent 1055247 59355 BOI E175 CA 4/13/15 6/10/68 1 BOI
105 Aaberg, Christopher Jon 1055175 59218 PDX E175 CA 4/13/15 9/21/86 1 PDX
106 Wiley, Michael 1049202 26697 MFR E175 CA 4/27/15 7/18/84 1 MFR
107 Healy, Timothy 1055357 59728 PDX E175 CA 4/27/15 3/29/88 1 PDX
108 Barkdull, ET 1056084 62718 BOI E175 CA 8/3/15 9/22/62 1 BOI
109 Shores, Christopher 1056088 62726 PDX E175 CA 8/3/15 6/08/82 1 PDX
110 Padilla, Patrick 1056679 66234 GEG E175 CA 11/16/15 11/10/78 1 GEG
111 Charbonneau, Nolan 1045516 10324 GEG E175 CA 11/16/15 6/15/81 1 GEG
112 Joraanstad, Noah 1056943 68615 ANC E175 CA 1/25/16 9/11/86 ANC
113 Caesar, Scott 1057007 68874 BOI E175 CA 2/8/16 3/05/80 1 BOI
114 3 Stout, Norman 1057099 69277 PDX E175 FO 2/29/16 7/03/63 1 PDX
115 Daniel, Gabe 1057100 69278 SEA E175 CA 2/29/16 5/18/73 1 PDX
116 Hinchey, James M. 1057129 69335 SEA E175 CA 2/29/16 12/04/76 1 SEA
117 Obana, Christenson 1057482 71313 BOI E175 CA 4/18/16 9/30/85 1 RDM
118 Tompkins, Bert 1058261 75307 GEG E175 CA 8/1/16 7/26/75 1 GEG
119 Pettinger, Andy 1058472 76015 PDX E175 CA 9/6/16 12/10/64 1 PDX
120 Ayars, Wayne 1062096 82359 PDX E175 CA 10/31/16 5/09/70 1 PDX
121 Harvey, Emily 1062702 86816 SEA E175 CA 1/23/17 8/16/84 1 SEA
122 Nigbur, Kevin 1063330 PAE E175 CA 3/20/17 12/30/72 1 SEA/
123 Murphy, Michael 1063638 89914 PDX Q400 CA 4/3/17 11/22/71 1 PDX
124 Stewart, Matt 1064134 94456 BOI E175 CA 5/1/17 2/17/74 1 BOI
125 Charles Massagli, Andy 1064323 97216 GEG E175 CA 5/15/17 1/02/71 1 GEG
126 Batchelor, Tim 1064263 97097 SEA E175 CA 5/15/17 11/06/72 1
127 Behrend, Brian 1064425 97523 SEA E175 CA 5/26/17 4/07/62 1 SEA
128 Ellis, Brad 1064678 98157 GEG E175 CA 6/12/17 4/11/79 1 GEG
129 Whaley, Roger 1067690 98696 SEA E175 CA 6/26/17 9/25/87 1 SEA
130 McCorkle, Alexa 1068139 13607 SEA E175 CA 7/17/17 7/02/93 1 SEA
131 Flathers, Evan 1068163 13637 GEG E175 CA 7/24/17 1/17/94 1 GEG
132 Berry, Rebecca 1068481 15047 PDX E175 MG 8/7/17 4/07/83 1 PDX
133 Flint, Walt 1068588 PAE E175 CA 8/14/17 11/07/63 1 SEA/
134 Song, David 1068614 15489 PDX E175 CA 8/14/17 9/16/77 1 PDX
135 Klingler, Kaitlin 1068709 15854 PDX E175 CA 8/21/17 6/16/90 1 PDX
136 Boaz, Kyle 1068704 15846 PDX E175 CA 8/21/17 12/28/93 1 PDX
137 Mosley, Kale 1068861 GEG E175 CA 8/28/17 4/19/72 1 XXX
138 Kwolek, Jeff 1068846 16298 PDX E175 CA 8/28/17 3/17/87 1 PDX
139 Richards, Steve 1068927 16558 PAE E175 CA 9/11/17 11/16/68 1 SEA
140 Van Dyk, Tuan 1069444 17717 GEG E175 CA 10/2/17 2/11/87 1 GEG
141 4 Peterson, Erik 1069577 18053 PAE E175 FO 10/9/17 3/01/66 1 SEA
142 Willing, Rob 1069681 18259 PAE E175 CA 10/16/17 8/29/86 1 SEA
143 5 Blackwood, Craig 1069778 18437 SEA E175 FO 10/23/17 9/22/73 1 SEA
144 Vance, John 1069861 18555 BOI E175 CA 10/30/17 3/28/83 1 BOI
145 Gilbert, Jeff 1069816 18493 PAE E175 CA 11/6/17 11/06/72 1 SEA
146 Thornton, David 1070147 19149 PDX E175 CA 11/27/17 12/20/66 1 PDX
147 Florin, Chris 1052220 44844 MFR E175 CA 12/4/17 7/26/75 1 MFR
148 Ward, Brad 1070733 20272 GEG E175 CA 1/22/18 4/13/72 1 GEG
149 6 Clark, Kevin 1070763 20329 BOI E175 FO 1/22/18 6/15/78 1 BOI
150 Linderman, Rob 1070805 20443 PDX E175 CA 1/29/18 6/24/81 1 PDX
151 7 Mathews, Felicia 1071048 20956 MFR Q400 FO 2/16/18 1/08/65 PDX`;
const simInstructorsRaw = `
Stover, Marv 08748
Hunt, Rob 08621
Wiltse, Phil 08673
O'Brien, Daniel 16472
Brosius, Scott 53702
Pullen, Rob 65400
Boyd, Sheila 78401
Baumgarten, Robert 66720
Brown, Michael 45500
Reed, Scott 08373
Sisk, Jonathan 91280
Bauer, Curt 05426
Vega, Matthew 16491
Bossom, Steve 97860
Murakawa, Keiko 50870
Teclemariam, Gabriel 68802
Beadle, John 08627
Bayro, David 99981
Nestoss, Michael 11398
Rothschild, Jeffrey 60391
Nelson, Eric 21401
Chambers, Scott 10094
`;
const simInstructors = simInstructorsRaw.trim().split(/[\n\r]+/).map((line, lx) => {
    const m = line.match(/(.*) (\d+)/);
    if (!m) {
        console.log({ line, m });
    }
    return {
        name : m[1],
        id : m[2],
        rank : lx + 1,
    };
});
const simInstructorMap = (function () {
    let m = {};
    simInstructors.forEach(i => {
        m[i.id] = i;
    });
    return m;
}());
const trimmed = raw.trim();
const rawLines = trimmed.split(/[\n\r]+/);
const msPerDay = 1000 * 60 * 60 * 24;
function tryMatch(str, reg) {
    let m = str.match(reg);
    if (!m) {
        console.log({
            failedMatchString : str,
            reg,
        });
    }
    return m;
}
const pilots = rawLines.map(line => {
    var re = /(\d+) (.*) (\d{7})(?: \d{5})? ([A-Z]{3}).* (\d+\/\d+\/\d+).* (\d+\/\d+\/\d+)/,
        //m = line.match(re),
        m = tryMatch(line, re),
        birthday = m[6],
        id = m[3],
        birthdayDate = new Date(m[6]),
        retireDate = new Date(birthday),
        daysLeft,
        captain = !!line.match(/ CA /);
    retireDate.setYear(retireDate.getFullYear() + 65);
    daysLeft = Math.floor((retireDate - (new Date())) / msPerDay);
    return {
        name : m[2],
        id,
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
        instructor : simInstructorMap[id],
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
function seniorTeacher(a, b) {
    const bothTeach = a.instructor && b.instructor,
          seniorTeach = bothTeach && a.instructor.rank < b.instructor.rank;
    return seniorTeach;
}
function buildRankReports() {
    // NB: assumes base rank has been calculated
    // for each pilot, A
    //     for each pilot, B
    //         if B is senior to and older than A
    //             record that A will move one rank up when B retires
    pilots.forEach(a => {
        var baseRank = a.baseRank,
            teachRank = a.instructor && a.instructor.rank,
            reportNextDate = () => new Date();
        a.rankMoves = [];
        pilotsByDaysLeft.forEach(b => {
            if (!seniorAndOlder(b, a)) { return; }
            const sameBase = b.base === a.base;
            const teachMove = seniorTeacher(b, a);
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
            if (teachMove) {
                teachRank -= 1;
                o.teachRank = teachRank;
            }
            a.rankMoves.push(o);
            reportNextDate = () => b.retireDate;
        });
    });
}
function reportNumberOfPilots() {
    M(['div', pilots.length + ' pilots'], document.body);
}
function showBaseReport(base) {
    const header =
        ['tr',
         ['th', 'Seniority'],
         ['th', 'Base Rank'],
         ['th', 'Retiree'],
         ['th', 'Hire Date'],
         ['th', 'Days Left'],
         ['th', 'Retire Date'],
         ['th', 'Birthday']];
    M(['dialog',
       ['with', dialog => {
           M(['on', ['click', e => {
               dialog.remove();
           }]], dialog);
       }],
       ['h3', 'Base Report: ' + base],
       ['table',
        ['attr', ['border', '1'], ['cellpadding', '5']],
        header,
        ['with', table => {
            pilots.forEach((pilot, px) => {
                if (pilot.base !== base) { return; }
                M(['tr',
                   ['td', pilot.seniority, ['style', ['textAlign', 'right']]],
                   ['td', pilot.base + ' : ' + pilot.baseRank,
                    ['style', ['textAlign', 'right']]],
                   ['td', pilot.name],
                   ['td', pilot.hireDate, ['style', ['textAlign', 'right']]],
                   ['td', pilot.daysLeft, ['style', ['textAlign', 'right']]],
                   ['td', pilot.retireday, ['style', ['textAlign', 'right']]],
                   ['td', pilot.birthday, ['style', ['textAlign', 'right']]]], table);
            });
        }]]], document.body).showModal();
}
function showPilotRankMoves(pilot) {
    const header = pilot.instructor ?
        ['tr',
         ['th', 'New Rank'],
         ['th', 'Base Rank'],
         ['th', 'Teach Rank'],
         ['th', 'Retiree'],
         ['th', 'Date'],
         ['th', 'Days from Now']] :
        ['tr',
         ['th', 'New Rank'],
         ['th', 'Base Rank'],
         ['th', 'Retiree'],
         ['th', 'Date'],
         ['th', 'Days from Now']];
    M(['dialog',
       ['with', dialog => {
           M(['on', ['click', e => {
               dialog.remove();
           }]], dialog);
       }],
       ['h3', 'Pilot Report: ' + pilot.name],
       ['table',
        ['attr', ['border', '1'], ['cellpadding', '5']],
        header,
        ['with', table => {
            pilot.rankMoves.forEach(move => {
                M(['tr',
                   ['td', move.newRank, ['style', ['textAlign', 'center']]],
                   ['td', move.baseRank || "&nbsp;",
                    ['style',
                     ['textAlign', 'center'],
                     ['background', move.sameBase ? 'lightblue' : 'none']]],
                   pilot.instructor &&
                   ['td', move.teachRank || '&nbsp;',
                    ['style',
                     ['background', move.teachRank ? 'lightgreen' : 'none']]],
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
                  ['style', ['cursor', 'pointer']],
                  ['on', ['click', e => {
                      showPilotRankMoves(pilot);
                  }]],
                  ['td', 1 + px],
                  ['td', pilot.seniority, ['style', ['textAlign', 'right']]],
                  ['td', pilot.base + ' : ' + pilot.baseRank,
                   ['style', ['textAlign', 'right']],
                   ['on', ['click', e => {
                       e.stopPropagation();
                       showBaseReport(pilot.base);
                   }]]],
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
