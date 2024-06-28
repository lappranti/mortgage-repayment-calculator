function setFormgrouFocus() {
  const listElement = document.querySelectorAll(".form-group");
  listElement.forEach((div) => {
    div.addEventListener("click", () => {
      console.log(div);
      if (div.classList.contains("focused")) {
        return;
      } else {
        const currentFocusedFormGroup = document.querySelector(
          ".form-group.focused"
        );
        currentFocusedFormGroup.classList.remove("focused");
        div.classList.add("focused");
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const amountInput = document.getElementById("amount");
  const termInput = document.getElementById("term");
  const rateInput = document.getElementById("rate");
  const clearAll = document.querySelector(".clear-all");
  const calculateButton = document.querySelector(".calculate");

  // Validation des champs de saisie
  function validateInputs() {
    if (!amountInput.value || isNaN(parseFloat(amountInput.value))) {
      alert("Please enter a valid mortgage amount.");
      return false;
    }
    if (!termInput.value || isNaN(parseInt(termInput.value))) {
      alert("Please enter a valid mortgage term.");
      return false;
    }
    if (!rateInput.value || isNaN(parseFloat(rateInput.value))) {
      alert("Please enter a valid interest rate.");
      return false;
    }
    return true;
  }

  // Calcul des remboursements hypothécaires
  function calculateMortgage() {
    if (!validateInputs()) return;

    const principal = parseFloat(amountInput.value);
    const annualInterestRate = parseFloat(rateInput.value) / 100;
    const monthlyInterestRate = annualInterestRate / 12;
    const numberOfPayments = parseInt(termInput.value) * 12;

    // Calcul de la mensualité
    const numerator =
      monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments);
    const denominator = Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1;
    const monthlyRepayment = principal * (numerator / denominator);

    displayResults(monthlyRepayment);
  }

  // Affichage des résultats
  function displayResults(monthlyRepayment) {
    const resultsContainer = document.querySelector(".results");
    resultsContainer.innerHTML = `
      <span class="text-t2 font-bold text-white">Monthly Repayment: £${monthlyRepayment.toFixed(
        2
      )}</span>
    `;
  }

  // Réinitialisation du formulaire
  function clearForm() {
    amountInput.value = "";
    termInput.value = "";
    rateInput.value = "";
    const resultsContainer = document.querySelector(".results");
    resultsContainer.innerHTML = `
      <img src="/images/illustration-empty.svg" alt="">
        <span class="text-t2 font-bold text-white">Results shown here</span>
        <span class=" text-t4 font-medium text-slate-300 text-center">Complete the form and click “calculate
          repayments”
          to see what
          your
          monthly repayments would be.</span>
    `;
  }

  calculateButton.addEventListener("click", calculateMortgage);
  clearAll.addEventListener("click", clearForm);
});

setFormgrouFocus();
