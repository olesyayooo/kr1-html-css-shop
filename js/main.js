document.addEventListener("DOMContentLoaded", () => {
  const orderDialog = document.querySelector("#order-dialog");
  const orderForm = document.querySelector("#order-form");
  const closeOrderDialogButton = document.querySelector("#close-order-dialog");
  const selectedProductInput = document.querySelector("#selected-product");
  const successMessage = document.querySelector("#success-message");
  const orderButtons = document.querySelectorAll(".product-card__button");

  if (!orderDialog || !orderForm) {
    return;
  }

  orderButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (selectedProductInput) {
        selectedProductInput.value = button.dataset.product || "";
      }

      if (successMessage) {
        successMessage.hidden = true;
      }

      orderDialog.showModal();
    });
  });

  if (closeOrderDialogButton) {
    closeOrderDialogButton.addEventListener("click", () => {
      orderDialog.close();
    });
  }

  orderDialog.addEventListener("click", (event) => {
    if (event.target === orderDialog) {
      orderDialog.close();
    }
  });

  orderForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!orderForm.checkValidity()) {
      orderForm.reportValidity();
      return;
    }

    orderDialog.close();
    orderForm.reset();

    if (selectedProductInput) {
      selectedProductInput.value = "";
    }

    if (successMessage) {
      successMessage.hidden = false;
    }
  });
});