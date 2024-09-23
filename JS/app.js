const walletBalance = nodeCall("#wallet-balance");
const noakhaliDonateBtn = nodeCall("#noakhali-donate");
const feniDonateBtn = nodeCall('#feni-donate');

// Donation and History Toggle
nodeCall('#btn-history').addEventListener('click', function(){
  nodeCall('#history').classList.remove('hidden');
  nodeCall('#donation').classList.add('hidden');
  nodeCall('#btn-history').classList.add('bg-primaryClr');
  nodeCall('#btn-donation').classList.remove('bg-primaryClr')

})
nodeCall('#btn-donation').addEventListener('click', function(){
  nodeCall('#donation').classList.remove('hidden');
  nodeCall('#history').classList.add('hidden');
  nodeCall('#btn-history').classList.remove('bg-primaryClr');
  nodeCall('#btn-donation').classList.add('bg-primaryClr');

})

// Donation calculation
noakhaliDonateBtn.addEventListener("click", function () {
  const noakhaliCollection = nodeCall("#noakhali-total");
  const noakhaliInput = nodeCall("#noakhali-input");
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

  historyUpdater(inputValue, nodeCall("#noakhali-heading").innerText);
});

feniDonateBtn.addEventListener("click", function () {
  const feniCollection = nodeCall("#feni-total");
  const feniInput = nodeCall("#feni-input");
  const inputValue = Number(feniInput.value);
  const walletBalanceNum = parseFloat(walletBalance.innerText);

  //   validation
  if (
    isNaN(inputValue) ||
    inputValue < 1 ||
    walletBalanceNum < 1 ||
    inputValue > walletBalanceNum
  ) {
    alert(
      `Transection Failed. You given "${feniInput.value}" Please give currect Amount`
    );
    return;
  }

  //   all the calculation
  updateTotalCollection(feniInput, feniCollection);
  alert("Congratulation");

  // TODO:  modal call
  //   my_modal_5.showModal();

  historyUpdater(inputValue, nodeCall("#feni-heading").innerText);
});