(() => {
  // scoped selectors
  const dropdownContainers = document.querySelectorAll(".dropdown-container");
  const form = document.getElementById("calc-form");
  const rates = {
    basement: [30, 40, 50],
    kitchenette: [80, 105, 125],
    bathroom: [30, 40, 50],
  };

  // helper functions
  function toggleDropdown(dropdown) {
    dropdownContainers.forEach((d) => {
      const header = d.querySelector(".dropdown-header");
      const content = d.querySelector(".dropdown-content");
      if (
        d === dropdown ||
        header.classList.contains("dropdown-header--focused")
      ) {
        header.classList.toggle("dropdown-header--focused");
        content.classList.toggle("dropdown-content--hidden");
      }
    });
  }

  function getBathroomTotals() {
    const rates = {
      0: [0, 0, 0],
      "1/2": [62.5, 95, 126],
      "3/4": [187, 237, 289],
      1: [195, 294, 391],
    };
    const inputs = document.getElementsByName("bathroom");
    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].checked) {
        console.log(inputs[i].value);
        return rates[inputs[i].value].map((r) => r * 40);
      }
    }
  }

  function getInputTotals(rates, value) {
    return rates.map((r) => r * value);
  }

  function calculateEstimate() {
    const basementInput = document.getElementById("basement-input");
    const kitchenetteInput = document.getElementById("kitchenette-input");

    const basementTotals = getInputTotals(rates.basement, basementInput.value);
    const kitchenetteTotals = getInputTotals(
      rates.kitchenette,
      kitchenetteInput.value
    );
    const bathroomTotals = getBathroomTotals();

    return [0, 0, 0].map((_, i) => {
      return basementTotals[i] + kitchenetteTotals[i] + bathroomTotals[i];
    });
  }

  function renderHTML(totals) {
    const rateTotals = document.querySelectorAll(".rate-total");
    const estimateTotals = document.querySelectorAll(".estimate-total");

    rateTotals.forEach((r, i) => {
      r.innerHTML = `${r.id} $${totals[i]}`;
      r.style.textTransform = "capitalize";
    });

    estimateTotals.forEach((e, i) => {
      e.innerHTML = `${e.id} $${totals[i]}`;
      e.style.textTransform = "capitalize";
    });
  }

  // event listeners
  dropdownContainers.forEach((d) => {
    d.querySelector(".dropdown-header").addEventListener("click", () =>
      toggleDropdown(d)
    );
  });

  form.onsubmit = (e) => {
    e.preventDefault();

    const totals = calculateEstimate();
    renderHTML(totals);

    const estimateDropdown = document.getElementById("estimate-dropdown");
    toggleDropdown(estimateDropdown);
  };
})();
