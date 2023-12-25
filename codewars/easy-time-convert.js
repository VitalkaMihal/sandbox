// This kata requires you to convert minutes (int) to hours and minutes in the format hh:mm (string).

// If the input is 0 or negative value, then you should return "00:00"

// If the input is 78, then you should return "01:18", because 78 minutes converts to 1 hour and 18 minutes.

// solution

function timeConvert(num) {
    if(num < 0) {return '00:00'} 
    return (num/60 <= 9) ? (Math.floor((num/60))/100).toFixed(2).split('.')[1] + ':' + ((num % 60)/100).toFixed(2).split('.')[1] : (num/60).toFixed(0) + ':' + ((num % 60)/100).toFixed(2).split('.')[1];
    }