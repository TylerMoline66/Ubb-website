(() => {
  const form = document.getElementById("footerForm");
  const nameInput = document.getElementById("footerName");
  const emailInput = document.getElementById("footerEmail");
  const messageInput = document.getElementById("footerMessage");

  async function handleSubmit(e) {
    e.preventDefault();

    const name = nameInput.value;
    const email = emailInput.value;
    const message = messageInput.value;

    if (!name || !email || !message) return alert("Please fill out all fields");

    const formData = new FormData();

    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);

    const response = await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    });

    if (response.ok) {
      // handle success
    }

    // handle error
  }

  // TODO: uncomment this when ready to test form
  // form.addEventListener("submit", handleSubmit);
  form.addEventListener("submit", () => alert("success"));
})();
