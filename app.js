const speedTest = require('speedtest-net');

(async () => {
  try {
    console.log('daemon created , as await')
    console.log(await speedTest() ) ;
  } catch (err) {
    console.log(err.message);
  } finally {
     console.log('now exited , if not app is crash pls send a key CTR C')
  }
})();