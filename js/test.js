class NumberInput {
  constructor(rates) {
    this.rates = rates;
  }

  getValue(value) {
    return (this.rates = this.rates.map((r) => r * value));
  }
}

class RadioInput {
  constructor(rates, selector) {
    this.rates = rates;
    this.selector = document.getElementsByName(selector);
  }

  getValue(value) {
    for (let i = 0; i < this.selector.length; i++) {
      if (this.selector[i].checked) {
        return this.rates[this.inputs[i].value].map((r) => r * value);
      }
    }
  }
}

class Dropdowns {
  constructor(selector) {
    this.dropdowns = document.querySelectorAll(selector);

    this.dropdowns.forEach((d) => {
      d.querySelector(".dropdown-header").addEventListener("click", () =>
        this.toggleDropdown(d)
      );
    });
  }

  toggle(dropdown) {
    this.dropdowns.forEach((d) => {
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
}

class Calculator {
  constructor(form) {
    this.form = form;
  }

  calculate(inputs = []) {
    const basementTotals = inputs[0];
    const kitchenetteTotals = inputs[1];
    const bathroomTotals = inputs[2];

    return inputs.map((_, i) => {
      return basementTotals[i] + kitchenetteTotals[i] + bathroomTotals[i];
    });
  }

  render(totals) {
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

  submit(callback) {
    this.form.onsubmit((e) => {
      e.preventDefault();

      callback();
    });
  }
}

(() => {
  const calculator = new Calculator(document.getElementById("calc-form"));
  const dropdowns = new Dropdowns(".dropdown-container");

  calculator.submit(() => {
    calculator.render(calculator.calculate([]));
    dropdowns.toggle(document.getElementById("estimate-dropdown"));
  });
})();
