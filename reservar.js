document.addEventListener("DOMContentLoaded", () => {
  const fechaInput = document.getElementById("fecha");
  const personasInput = document.getElementById("personas");
  const minusBtn = document.getElementById("personas-minus");
  const plusBtn = document.getElementById("personas-plus");
  const timeSlots = document.querySelectorAll(".time-slot");
  const form = document.getElementById("reservation-form");
  const successMsg = document.getElementById("reservation-success");
  const submitBtn = document.getElementById("submit-reservation");

  if (fechaInput) {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    const isoDate = `${year}-${month}-${day}`;
    fechaInput.min = isoDate;
    fechaInput.value = isoDate;
  }

  if (minusBtn && plusBtn && personasInput) {
    minusBtn.addEventListener("click", () => {
      const current = Number(personasInput.value) || 1;
      personasInput.value = String(Math.max(1, current - 1));
    });

    plusBtn.addEventListener("click", () => {
      const current = Number(personasInput.value) || 1;
      personasInput.value = String(Math.min(20, current + 1));
    });
  }

  timeSlots.forEach((slot) => {
    slot.addEventListener("click", () => {
      timeSlots.forEach((item) => item.classList.remove("selected"));
      slot.classList.add("selected");
    });
  });

  if (form && successMsg && submitBtn) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const requiredFields = Array.from(form.querySelectorAll("input[required]"));
      const invalidFields = requiredFields.filter((field) => !field.value.trim());

      if (invalidFields.length > 0) {
        invalidFields.forEach((field) => {
          field.style.borderColor = "#cf1e17";
          window.setTimeout(() => {
            field.style.borderColor = "";
          }, 1200);
        });
        return;
      }

      submitBtn.disabled = true;
      submitBtn.textContent = "PROCESANDO...";

      window.setTimeout(() => {
        form.style.display = "none";
        successMsg.classList.add("show");
      }, 900);
    });
  }
});
