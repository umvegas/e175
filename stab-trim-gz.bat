jsmin < stab-trim.js > stab-trim-min.js
del stab-trim.js.gz
7z a -tgzip stab-trim.js.gz stab-trim-min.js
del stab-trim-min.js

del *.html.gz
7z a -tgzip stab-trim.html.gz stab-trim.html
pause
