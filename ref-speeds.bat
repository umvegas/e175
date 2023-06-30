jsmin < ref-speeds.js > ref-speeds-min.js
del ref-speeds.js.gz
7z a -tgzip ref-speeds.js.gz ref-speeds-min.js
del ref-speeds-min.js

del *.html.gz
7z a -tgzip ref-speeds.html.gz ref-speeds.html
pause
