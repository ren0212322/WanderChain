document.getElementById("deduct-button").addEventListener("click", function () {
  let balance = parseFloat(
    document.getElementById("current-balance").textContent.replace("WRCT", "")
  );
  let deduction = parseFloat(document.getElementById("deduct-amount").value);
  document.getElementById("deduct-amount").value = "";
  if (deduction <= balance) {
    balance -= deduction;
    document.getElementById("current-balance").textContent = "WRCT " + balance;
    document.getElementById("message").textContent =
      "Amount deducted successfully!";
    document.getElementById("message").style.color = "green";
  } else {
    document.getElementById("message").textContent = "Insufficient funds!";
    document.getElementById("message").style.color = "red";
  }
});
