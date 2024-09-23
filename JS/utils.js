function nodeCall(quarySelector) {
  return document.querySelector(quarySelector);
}



// function for calculate and update zonal collection;
function updateTotalCollection(input, total) {
  total.innerText = parseFloat(input.value) + parseFloat(total.innerText);
  walletBalance.innerText =
    parseFloat(walletBalance.innerText) - parseFloat(input.value);
  input.value = "";
}

// History Update function
function historyUpdater(amount, headingText) {
  let currentTime = new Date();
  const historySec = nodeCall("#history");
  const newTransec = document.createElement("div");
  newTransec.innerHTML = `
    <div class="border border-gray-300 p-4 rounded-lg mb-4">
        <h3 class="text-xl font-bold">
            ${amount} Taka is Donated for ${headingText}
        </h3>
        <p class="text-gray-500">
            ${currentTime.toLocaleString()}
        </p>
    </div>
  `;
  historySec.appendChild(newTransec);
}
