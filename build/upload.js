require('shelljs/global');

var host = 'root@vps.jack003.com'
var dir = '/usr/share/nginx/html'

exec('ssh ' + host + ' "rm -rf ' + dir + '/*"', function(code, stdout, stderr) {
  console.log('Exit code:', code);
  console.log('Program output:', stdout);
  console.log('Program stderr:', stderr);
});

exec('cd dist && rsync -avz * ' + host + ':' + dir, function(code, stdout, stderr) {
  console.log('Exit code:', code);
  console.log('Program output:', stdout);
  console.log('Program stderr:', stderr);
});
