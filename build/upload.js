require('shelljs/global');

const host = 'root@vps.jarrekk.com';
const dir = '/frontend';

exec('ssh ' + host + ' "rm -rf ' + dir + '/*"', function (code, stdout, stderr) {
  console.log('Exit code:', code);
  console.log('Program output:', stdout);
  console.log('Program stderr:', stderr);
});

exec('cd dist && rsync -avz * ' + host + ':' + dir, function (code, stdout, stderr) {
  console.log('Exit code:', code);
  console.log('Program output:', stdout);
  console.log('Program stderr:', stderr);
});
