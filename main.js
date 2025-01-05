/** @format */

const d = document;

const inputs = {
  firstName: {
    element: d.getElementById('first-name'),
    errorElement: d.getElementById('first-name-error'),
    errorMessage: 'First Name cannot be empty',
  },
  lastName: {
    element: d.getElementById('last-name'),
    errorElement: d.getElementById('last-name-error'),
    errorMessage: 'Last Name cannot be empty',
  },
  email: {
    element: d.getElementById('email'),
    errorElement: d.getElementById('email-error'),
    errorMessage: 'Looks like this is not an email',
    isEmail: true,
  },
  password: {
    element: d.getElementById('password'),
    errorElement: d.getElementById('password-error'),
    errorMessage: 'Password cannot be empty',
  },
};

const button = d.getElementById('button');

button.addEventListener('click', (e) => {
  e.preventDefault();
  Object.values(inputs).forEach((input) => {
    validateField(input);
  });
});

function validateField(input) {
  const { element, errorElement, errorMessage, isEmail = false } = input;
  const value = element.value.trim();

  if (value === '') {
    showError(element, errorElement, errorMessage);
  } else if (isEmail && !isValidEmail(value)) {
    showError(element, errorElement, 'Looks like this is not an email');
    element.style.color = 'hsl(0, 100%, 74%)';
  } else {
    hideError(element, errorElement);
  }
}

function isValidEmail(email) {
  const regExp =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
  return regExp.test(email);
}

function showError(element, errorElement, message) {
  element.style.border = '2px solid hsl(0, 100%, 74%)';
  errorElement.innerHTML = `
    <img class='icon-error' src='./images/icon-error.svg' alt=''>
    <p class='error-message'>${message}</p>
  `;
}

function hideError(element, errorElement) {
  element.style.border = '1px solid hsl(246, 25%, 77%)';
  element.style.color = '';
  errorElement.innerHTML = '';
}
