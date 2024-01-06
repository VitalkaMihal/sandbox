// "Go to London. I guarantee you'll either be mugged or not appreciated.
// Catch the train to London, stopping at Rejection, Disappointment, Backstabbing Central and Shattered Dreams Parkway."


function alan(x){
    let isTrue = true;
  ["Rejection",
  "Disappointment",
  "Backstabbing Central",
  "Shattered Dreams Parkway"].forEach((i) => {if(x.indexOf(i) === -1){isTrue = false}})
  return isTrue ? 'Smell my cheese you mother!' : 'No, seriously, run. You will miss it.';
  }

  function alan(x){
    return ['Rejection', 'Disappointment', 'Backstabbing Central', 'Shattered Dreams Parkway'].every(e => x.indexOf(e) != -1) 
    ? 'Smell my cheese you mother!' 
    : 'No, seriously, run. You will miss it.';  
  }