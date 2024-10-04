// TODO: maybe don't query about closing quiz if it's complete

// Before including this file, define "storageName", as in
//     const storageName = 'E175OralB';
// then call "getIt", as in
//     getIt('oral-b.txt');
var answerCount = 0;
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
function updateScore(questionText, score) {
    var scores = getScores();
    scores[questionText] = score;
    setScores(scores);
}
function shuffle(l) {
    l.forEach(function (v, n) {
        var r = Math.floor(Math.random() * l.length);
        l[n] = l[r];
        l[r] = v;
    });
    return l;
}
function quiz(questions) {
    var x = 0, close, show, paintCard, progress, tot, bye,
        tally = questions.map(q => { return undefined; });
    M(['div',
       ['with', n => bye = () => n.remove()],
      ['div',
       ['style', ['marginBottom', '.5em']],
       ['div', 'previous',
        ['style', ['display', 'inline-block'], ['textAlign', 'center'], ['width', '40%'], ['cursor', 'pointer']],
        ['on', ['click', e => {
            close();
            x = x ? x - 1 : questions.length - 1;
            progress();
            show();
        }]]],
       ['div', '00/00',
        ['style', ['display', 'inline-block'], ['textAlign', 'center'], ['width', '20%']],
        ['with', progDiv => {
            progress = () => {
                progDiv.innerHTML = (1 + x) + ' / ' + questions.length;
            };
        }]],
       ['div', 'next',
        ['style', ['display', 'inline-block'], ['textAlign', 'center'], ['width', '40%'], ['cursor', 'pointer']],
        ['on', ['click', e => {
            close();
            x += 1;
            if (x >= questions.length) {
                x = 0;
            }
            progress();
            show();
        }]]]],
      ['div',
       ['with', questionDiv => {
           function card(question) {
               M(['div',
                  ['with', n => {
                      var scores = getScores(),
                          score = scores[question.text];
                      close = () => n.remove();
                      paintCard = color => {
                          n.style.background = color;
                      };
                  }],
                  ['style',
                   ['padding', '1em'],
                   ['border', '3px solid gray'],
                   ['borderRadius', '1em']],
                  ['div', question.topic,
                   ['style', ['marginBottom', '1em']]],
                  ['div', question.number + '. ' + question.text,
                   ['style', ['marginBottom', '1em']]],
                  ['div',
                   ['style', ['color', 'transparent'], ['cursor', 'pointer']],
                   ['with', answerDiv => {
                       var on;
                       M(['on', ['click', e => {
                           on = !on;
                           answerDiv.style.color = on ? 'black' : 'transparent';
                       }]], answerDiv);
                       question.answerLines.forEach(line => {
                           let a = ['div', line],
                               m = line.match(/^-+/);
                           if (m) {
                               let n = m[0].length;
                               a[1] = a[1].replace(/^-+/, '-');
                               a.push(['style', ['marginLeft', n + 'em']]);
                           }
                           M(a, answerDiv);
                       });
                   }]]], questionDiv);
           }
           show = () => {
               card(questions[x]);
           };
           show();
           progress();
       }]],
      ['div',
       ['style', ['marginTop', '.5em']],
       ['div', 'Wrong',
        ['style', ['display', 'inline-block'], ['textAlign', 'center'], ['width', '33%'], ['cursor', 'pointer']],
        ['on', ['click', e => {
            updateScore(questions[x].text, -1);
            tot(x, -1);
            paintCard('#f44');
        }]]],
       ['div', 'Meh',
        ['style', ['display', 'inline-block'], ['textAlign', 'center'], ['width', '33%'], ['cursor', 'pointer']],
        ['on', ['click', e => {
            updateScore(questions[x].text, 0);
            tot(x, 0);
            paintCard('cyan');
        }]]],
       ['div', 'Right',
        ['style', ['display', 'inline-block'], ['textAlign', 'center'], ['width', '33%'], ['cursor', 'pointer']],
        ['on', ['click', e => {
            updateScore(questions[x].text, 1);
            tot(x, 1);
            paintCard('lightgreen');
        }]]]],
      ['div', '0%',
       ['style', ['textAlign', 'center'], ['marginTop', '.5em']],
       ['with', scoreDiv => {
           tot = (ndx, scr) => {
               var nOk = 0,
                   nAnswered = 0;
               tally[ndx] = scr;
               tally.forEach(t => {
                   if (t !== undefined) {
                       nAnswered += 1;
                   }
                   if (t > -1) {
                       nOk += 1;
                   }
               });
               scoreDiv.innerHTML = nOk + ' / ' + nAnswered + ' = ' +
                                    Math.round(100 * nOk / nAnswered) + '%';
               if (nAnswered >= questions.length) {
                   alert('The quiz is complete');
               }
           };
       }]],
      ['div', 'End Quiz',
       ['style', ['textAlign', 'center'], ['marginTop', '1em'], ['cursor', 'pointer']],
       ['on', ['click', e => {
           if (!confirm("Really quit this quiz?")) { return; }
           bye();
       }]]]], document.body);
}
function processRaw(text) {
    var lines = text.split(/[\n\r]+/).map(line => line.trim()),
        title = lines.shift(),
        version = lines.shift(),
        questions = [],
        topics = [],
        topic2question = {},
        topic,
        lastQ;
    function aHeading(line) {
        var m = line.match(/^[A-Z ,]+$/);
        if (!m) { return; }
        topic = line;
        topics.push(topic);
        if (!topic2question[topic]) {
            topic2question[topic] = [];
        }
        return true;
    }
    function aQuestion(line) {
        var m = line.match(/^(\d+)\.(.+)/);
        if (!m) { return; }
        lastQ = {
            topic,
            number : +m[1],
            text : m[2].trim(),
        };
        questions.push(lastQ);
        topic2question[topic].push(lastQ);
        return true;
    }
    function anAnswer(line) {
        var m = line.match(/^A: (.+)$/);
        if (!m) { return; }
        answerCount += 1;
        lastQ.answer = m[1].trim();
        lastQ.answerLines = [m[1].trim()];
        return true;
    }
    function moreText(line) {
        if (!line) { return true; }
        if (lastQ.answer) {
            lastQ.answer += ' ' + line;
            lastQ.answerLines.push(line);
        } else {
            lastQ.text += ' ' + line;
        }
        return true;
    }
    M(['h1', title], document.body);
    M(['h2', version], document.body);
    lines.forEach(line => {
        aHeading(line) ||
        aQuestion(line) ||
        anAnswer(line) ||
        moreText(line);
    });
    M(['div', questions.length + ' questions',
       ['style', ['margin', '0 0 .5em .5em']]], document.body);
    M(['div',
       ['div', answerCount + ' answers',
        ['style', ['cursor', 'pointer'], ['margin', '0 0 .5em .5em'], ['display', 'inline-block']],
        ['on', ['click', e => {
            quiz(shuffle(questions.filter(q => !!q.answer)));
        }]]]], document.body);
    M(['div',
       ['div', 'Random 25',
        ['style', ['cursor', 'pointer'], ['margin', '0 0 .5em .5em'], ['display', 'inline-block']],
        ['on', ['click', e => {
            quiz(shuffle(questions.filter(q => !!q.answer)).slice(0, 25));
        }]]]], document.body);
    M(['div',
       ['div', topics.length + ' topics',
        ['style', ['cursor', 'pointer'], ['margin', '0 0 .5em .5em'], ['display', 'inline-block']],
        ['with', topicsHeadingDiv => {
            var subDivs;
            function clearSubdivs() {
                if (subDivs) {
                    subDivs.forEach(d => d.remove());
                    subDivs = undefined;
                    return true;
                }
            }
            function showTopics() {
                var topicsDiv = topicsHeadingDiv.parentElement,
                    totals = {
                        usable : [],
                        right : [],
                        wrong : [],
                        meh : [],
                        unseen : [],
                    };
                if (clearSubdivs()) { return; }
                subDivs = Object.entries(topic2question).map(([topic, topicQuestions]) => {
                    var scores = getScores(),
                        usableQuestions = topicQuestions.filter(q => !!q.answer),
                        right = usableQuestions.filter(q => scores[q.text] > 0),
                        wrong = usableQuestions.filter(q => scores[q.text] < 0),
                        meh = usableQuestions.filter(q => scores[q.text] === 0),
                        unseen = usableQuestions.filter(q => scores[q.text] === undefined);
                    function tdScore(qList, bg = 'none') {
                        return ['div', qList.length,
                                ['style',
                                 ['display', 'inline-block'],
                                 ['textAlign', 'center'],
                                 ['padding', '.1em .2em 0 .2em'],
                                 ['width', '8%'],
                                 ['verticalAlign', 'top'],
                                 ['background', bg]],
                                ['on', ['click', e => {
                                    if (qList.length < 1) { return; }
                                    e.stopPropagation();
                                    clearSubdivs();
                                    shuffle(qList);
                                    quiz(qList);
                                }]]];
                    }
                    totals.usable.push(...usableQuestions);
                    totals.right.push(...right);
                    totals.wrong.push(...wrong);
                    totals.meh.push(...meh);
                    totals.unseen.push(...unseen);
                    return M(['div',
                              ['style', ['fontSize', '.7em'], ['cursor', 'pointer'], ['margin', '.5em 0 0 .5em']],
                              ['div', topic,
                               ['style',
                                ['display', 'inline-block'],
                                ['verticalAlign', 'top'],
                                ['textAlign', 'left'],
                                ['width', '40%'],
                                ['marginRight', '1em']]],
                              [tdScore, usableQuestions],
                              [tdScore, right, 'lightgreen'],
                              [tdScore, wrong, '#f44'],
                              [tdScore, meh, 'cyan'],
                              [tdScore, unseen, 'lightgray'],
                              ['on', ['click', e => {
                                  if (usableQuestions.length < 1) { return; }
                                  clearSubdivs();
                                  shuffle(usableQuestions);
                                  quiz(usableQuestions);
                              }]]], topicsDiv);
                });
                totals.pctRight = Math.round(100 * totals.right.length / totals.usable.length);
                totals.pctWrong = Math.round(100 * totals.wrong.length / totals.usable.length);
                totals.pctMeh = Math.round(100 * totals.meh.length / totals.usable.length);
                totals.pctUnseen = Math.round(100 * totals.unseen.length / totals.usable.length);
                M(['table',
                   ['style',
                    ['fontSize', '.7em'],
                    ['marginTop', '1em']],
                   ['attr',
                    ['border', '1'], ['width', '100%']],
                   ['with', table => subDivs.push(table)],
                   ['tr',
                    ['th', 'Totals (%)',
                     ['attr', ['colspan', 4]]]],
                   ['tr',
                    ['th', 'Right'],
                    ['th', 'Wrong'],
                    ['th', 'Meh'],
                    ['th', 'Unseen']],
                   ['tr',
                    ['th', totals.pctRight,
                     ['style', ['cursor', 'pointer']],
                     ['on', ['click', e => {
                         if (totals.right.length < 1) { return; }
                         clearSubdivs();
                         shuffle(totals.right);
                         quiz(totals.right);
                     }]]],
                    ['th', totals.pctWrong,
                     ['style', ['cursor', 'pointer']],
                     ['on', ['click', e => {
                         if (totals.wrong.length < 1) { return; }
                         clearSubdivs();
                         shuffle(totals.wrong);
                         quiz(totals.wrong);
                     }]]],
                    ['th', totals.pctMeh,
                     ['style', ['cursor', 'pointer']],
                     ['on', ['click', e => {
                         if (totals.meh.length < 1) { return; }
                         clearSubdivs();
                         shuffle(totals.meh);
                         quiz(totals.meh);
                     }]]],
                    ['th', totals.pctUnseen,
                     ['style', ['cursor', 'pointer']],
                     ['on', ['click', e => {
                         if (totals.unseen.length < 1) { return; }
                         clearSubdivs();
                         shuffle(totals.unseen);
                         quiz(totals.unseen);
                     }]]]]], topicsDiv);
                M(['div',
                   ['with', button => subDivs.push(button)],
                   ['style',
                    ['marginTop', '1em'],
                    ['textAlign', 'center']],
                   ['span', 'Forget scores',
                    ['style', ['cursor', 'pointer']],
                    ['on', ['click', e => {
                        if (!confirm("Really delete scores?")) { return; }
                        clearScores();
                        clearSubdivs();
                        showTopics();
                    }]]]], topicsDiv);
            }
            M(['on', ['click', showTopics]], topicsHeadingDiv);
        }]]], document.body);
    console.log({ unAnswered : questions.filter(question => !question.answer) });
    M(['pre', JSON.stringify(questions, null, 2),
       ['style', ['cursor', 'pointer']],
       ['on', ['click', e => e.target.remove()]]], document.body);
}
function getIt(questionFileName) {
    fetch(questionFileName)
        .then(response => response.text())
        .then(processRaw);
}
