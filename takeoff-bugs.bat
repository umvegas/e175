jsmin < takeoff-bugs.js > takeoff-bugs-min.js
del takeoff-bugs.js.gz
7z a -tgzip takeoff-bugs.js.gz takeoff-bugs-min.js
del takeoff-bugs-min.js

del *.html.gz
7z a -tgzip takeoff-bugs.html.gz takeoff-bugs.html
pause
