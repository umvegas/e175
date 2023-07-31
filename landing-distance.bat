jsmin < landing-distance.js > landing-distance-min.js
del landing-distance.js.gz
7z a -tgzip landing-distance.js.gz landing-distance-min.js
del landing-distance-min.js

del *.html.gz
7z a -tgzip landing-distance.html.gz landing-distance.html
pause
