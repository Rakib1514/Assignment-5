const walletBalance = nodeCall("#wallet-balance");
const noakhaliDonateBtn = nodeCall("#noakhali-donate");
const feniDonateBtn = nodeCall('#feni-donate');
const aidDonateBtn = nodeCall('#aid-donate');


// blog link
const btnBlog = nodeCall("#btn-blog");
btnBlog.addEventListener("click", function () {
  window.location.href = "./blog.html";
});


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

// Noakhali Donation calculation
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

  // TODO:  modal call
  greetModal();

  historyUpdater(inputValue, nodeCall("#noakhali-heading").innerText);
});

// feni Donation
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

  // TODO:  modal call
  greetModal();

  historyUpdater(inputValue, nodeCall("#feni-heading").innerText);
});


//AID for Injured 
aidDonateBtn.addEventListener("click", function () {
  const aidCollection = nodeCall("#aid-total");
  const aidInput = nodeCall("#aid-input");
  const inputValue = Number(aidInput.value);
  const walletBalanceNum = parseFloat(walletBalance.innerText);

  //   validation
  if (
    isNaN(inputValue) ||
    inputValue < 1 ||
    walletBalanceNum < 1 ||
    inputValue > walletBalanceNum
  ) {
    alert(
      `Transection Failed. You given "${aidInput.value}" Please give currect Amount`
    );
    return;
  }

  //   all the calculation
  updateTotalCollection(aidInput, aidCollection);

  // TODO:  modal call
  greetModal();

  historyUpdater(inputValue, nodeCall("#aid-heading").innerText);
});



