function timeCorrect(timestring) {

    if(timestring === ''){return ''};
    let arr = timestring.split(":");
    if(isNaN(+arr[2])  || isNaN(+arr[1])  || isNaN(+arr[0]) ){return null};
    +arr[2] > 60 ? arr[1] = +arr[1] + 1  : '';
    arr[2] = (arr[2] % 60 + '').padStart(2, "0");
  
    +arr[1] > 60 ? arr[0] = +arr[0] + 1  : '';
    arr[1] = (arr[1] % 60 + '').padStart(2, "0");
    arr[0] = (arr[0] % 24 + '').padStart(2, "0");
  
    return arr.join(':')
  }
  
  
  function timeCorrect(str) {
      const date = new Date(); 
    if (str == '') return str;
      if (!/^\d{2}\:\d{2}\:\d{2}$/g.test(str)) return null;
    date.setUTCHours(...str.split(':'));
    return date.toLocaleTimeString('en', {hour12: false});
  }
  
  
  function timeCorrect(timestring) {
    if (!timestring)
      return timestring
      
    if (!/^(\d\d:){2}\d\d$/.test(timestring))
      return null
      
    return (new Date(0,0,0,...timestring.split(':'))).toString().slice(16,24)
  }
  