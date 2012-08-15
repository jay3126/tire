var fs = require('fs')
  , name = 'docs/index.html'
  , rep = {
      'http://documentup.com/stylesheets/screen.css': '/stylesheets/main.css',
      '</body>': '<a href="http://github.com/frozzare/tire"><img style="position: absolute; top: 0; right: 0; border: 0;" src="https://a248.e.akamai.net/camo.github.com/7afbc8b248c68eb468279e8c17986ad46549fb71/687474703a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6461726b626c75655f3132313632312e706e67" alt="Fork me on GitHub"></a></body>'
    };
    
fs.readFile(name, function (err, buf) {
  if (err) throw err;
  buf = buf.toString();
  for (var k in rep) buf = buf.replace(k, rep[k]);
  fs.writeFile(name, buf);
});