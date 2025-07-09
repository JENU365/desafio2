document.getElementById("mortgage-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const amount = parseFloat(document.getElementById("amount").value);
  const term = parseFloat(document.getElementById("term").value);
  const rate = parseFloat(document.getElementById("rate").value) / 100 / 12;
  const months = term * 12;
  const type = document.querySelector('input[name="type"]:checked').value;

  if (isNaN(amount) || isNaN(term) || isNaN(rate)) {
    alert("Please enter valid numbers.");
    return;
  }

  let monthlyPayment = 0;
  let totalRepayment = 0;

  if (type === "repayment") {
    monthlyPayment = (amount * rate) / (1 - Math.pow(1 + rate, -months));
    totalRepayment = monthlyPayment * months;
  } else {
    monthlyPayment = amount * rate;
    totalRepayment = monthlyPayment * months;
  }

  document.getElementById("monthly").textContent = "£" + monthlyPayment.toFixed(2);
  document.getElementById("total").textContent = "£" + totalRepayment.toFixed(2);
});

function clearForm() {
  document.getElementById("amount").value = "";
  document.getElementById("term").value = "";
  document.getElementById("rate").value = "";
  document.getElementById("repayment").checked = true;
  document.getElementById("monthly").textContent = "£0.00";
  document.getElementById("total").textContent = "£0.00";
}
