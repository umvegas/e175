jsmin < flows.js > flows-min.js
del flows.js.gz
7z a -tgzip flows.js.gz flows-min.js
del flows-min.js
pause
