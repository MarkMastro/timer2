const times = process.argv.slice(2);
for (let i = 0; i < times.length; i++) {
  if (parseInt(times[i]) < 0 || isNaN(parseInt(times[i]))) {
  } else {
    setTimeout(()=>{
      process.stdout.write('\x07');
    },times[i] * 1000);
  }
}


    