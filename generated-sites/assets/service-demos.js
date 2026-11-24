for (const form of document.querySelectorAll("[data-demo-form]")) {
  const status = form.querySelector("[role=status]");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const [choice, timing] = Array.from(form.querySelectorAll("select"), (select) => select.selectedOptions[0].textContent);
    status.textContent = `${form.dataset.demoForm} ${choice}. Timing: ${timing}. Preview complete. No request was sent.`;
  });
  form.addEventListener("input", () => { status.textContent = ""; });
}

for (const link of document.querySelectorAll("[data-service]")) {
  link.addEventListener("click", () => {
    const service = document.querySelector("#service");
    service.value = link.dataset.service;
    service.dispatchEvent(new Event("input", { bubbles: true }));
  });
}
