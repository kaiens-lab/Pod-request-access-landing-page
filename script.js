const rootStyles = getComputedStyle(document.documentElement);
const errorRed = rootStyles.getPropertyValue("--red");

function showError(inputElement, errorMessageElement) {
  $(errorMessageElement).show();
  $(inputElement).css("borderColor", errorRed);
}

function hideError(inputElement, errorMessageElement) {
  $(errorMessageElement).hide();
  $(inputElement).css("borderColor", "");
}

function validEmailFormat(emailInput) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test($(emailInput).val().trim());
}

function validSubmit() {
  let isValid = true;
  const errorMessage = $(".error-message");

  if (!$("#email-input").val().trim()) {
    showError("#email-input", errorMessage);
    isValid = false;
  } else if (!validEmailFormat("#email-input")) {
    showError("#email-input", errorMessage);
    isValid = false;
  } else {
    hideError("#email-input", errorMessage);
  }
  return isValid;
}

$("#submit-btn").click(function (e) {
  e.preventDefault();
  if (validSubmit()) {
    $(e.target).closest("form").submit();
  }
});
