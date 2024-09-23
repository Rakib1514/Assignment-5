function nodeCall(quarySelector){
    return document.querySelector(quarySelector);
    
}

// function for calculate and update zonal collection;
function updateTotalCollection (input,total) {
    total.innerText  = parseFloat(input.value) + parseFloat(total.innerText);
    walletBalance.innerText = parseFloat(walletBalance.innerText) - parseFloat(input.value);
    input.value = '';
  }


