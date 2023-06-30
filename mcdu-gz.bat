jsmin < mcdu.js > mcdu-min.js
del mcdu.js.gz
7z a -tgzip mcdu.js.gz mcdu-min.js
del mcdu-min.js

del *.html.gz
7z a -tgzip mcdu.html.gz mcdu.html
pause
