jsmin < altitude-capability.js > altitude-capability-min.js
del altitude-capability.js.gz
7z a -tgzip altitude-capability.js.gz altitude-capability-min.js
del altitude-capability-min.js

del *.html.gz
7z a -tgzip altitude-capability.html.gz altitude-capability.html
pause
