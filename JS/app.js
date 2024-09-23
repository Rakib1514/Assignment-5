const walletBalance = nodeCall("#wallet-balance");
const noakhaliDonateBtn = nodeCall("#noakhali-donate");





noakhaliDonateBtn.addEventListener("click", function(){
    const noakhaliCollection = nodeCall("#noakhali-total");
    const noakhaliInput = nodeCall("#noakhali-input");
    const inputValue = Number(noakhaliInput.value);
    
    const walletBalanceNum = parseFloat(walletBalance.innerText);
    
    if (isNaN(inputValue) || inputValue < 0 || walletBalanceNum < 1 || inputValue > walletBalanceNum ) {
        alert(`Transection Failed. You given "${noakhaliInput.value}" Please give currect Amount`);
        return;  
    }
    
    updateTotalCollection(noakhaliInput, noakhaliCollection);
    my_modal_5.showModal()
});


