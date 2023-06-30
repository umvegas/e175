jsmin < approach-climb.js > approach-climb-min.js
del approach-climb.js.gz
7z a -tgzip approach-climb.js.gz approach-climb-min.js
del approach-climb-min.js

del *.html.gz
7z a -tgzip approach-climb.html.gz approach-climb.html
pause
