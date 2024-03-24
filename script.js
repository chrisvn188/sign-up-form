const formEl = document.querySelector("#form");
const passwordEl = form.querySelector("#password");
const confirmPasswordEl = form.querySelector("#confirm_password");

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(formEl);
  const password = formData.get("password");
  const confirmPassword = formData.get("confirm_password");
  if (
    password !== confirmPassword ||
    password === "" ||
    confirmPassword === ""
  ) {
    passwordEl.closest(".form-group").classList.add("error");
    confirmPasswordEl.closest(".form-group").classList.add("error");
  } else {
    passwordEl.closest(".form-group").classList.remove("error");
    confirmPasswordEl.closest(".form-group").classList.remove("error");
  }
});
