function fillModal() {
  document.getElementById("modalName").textContent =
    document.getElementById("name").value;

  document.getElementById("modalEmail").textContent =
    document.getElementById("email").value;

  document.getElementById("modalMessage").textContent =
    document.getElementById("message").value;
}