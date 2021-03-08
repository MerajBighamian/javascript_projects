function realtime() {
  
  let time = moment().format('hh:mm:ss.SS a').replace("m", "");
  document.getElementById('time').innerHTML = time;
  
  setInterval(() => {
    time = moment().format('hh:mm:ss.SS A');
    document.getElementById('time').innerHTML = time;
  }, 0)
}

realtime();
