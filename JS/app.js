const walletBalance = nodeCall("#wallet-balance");
const noakhaliDonateBtn = nodeCall("#noakhali-donate");

noakhaliDonateBtn.addEventListener("click", function () {
  const noakhaliCollection = nodeCall("#noakhali-total");
  const noakhaliInput = nodeCall("#noakhali-input");
//   const inputValueFloat = parseFloat(noakhaliInput.value);
  const inputValue = Number(noakhaliInput.value);
  const walletBalanceNum = parseFloat(walletBalance.innerText);

  //   validation
  if (
    isNaN(inputValue) ||
    
    inputValue < 1 ||
    walletBalanceNum < 1 ||
    inputValue > walletBalanceNum
  ) {
    alert(
      `Transection Failed. You given "${noakhaliInput.value}" Please give currect Amount`
    );
    return;
  }

  //   all the calculation
  updateTotalCollection(noakhaliInput, noakhaliCollection);
  alert("Congratulation");

  // TODO:  modal call
  //   my_modal_5.showModal();

historyUpdater(inputValue, nodeCall('#noakhali-heading').innerText)

});
