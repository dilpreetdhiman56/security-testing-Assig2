function runUserCommand(cmd) {

  const { exec } = require('child_process');
  exec(cmd, (err, stdout, stderr) => {
    if (err) {
      console.error('Exec error:', err);
      return;
    }
    console.log('Output:', stdout);
  });
}
