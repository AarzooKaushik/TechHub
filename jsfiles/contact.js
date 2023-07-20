const form = document.querySelector(".contact-form");
const username = document.querySelector("#username");
const subject = document.querySelector("#subject");
const email = document.querySelector("#email");
function isemail(email) {
  return /^[a-z0-9][a-z0-9-_\.]+@([a-z]|[a-z0-9]?[a-z0-9-]+[a-z0-9])\.[a-z0-9]{2,10}(?:\.[a-z]{2,10})?$/.test(
    email
  );
}

const validate = {
  username: (value) => {
    if (!value) {
      return true;
    }
    return false;
  },

  email: (value) => {
    if (!value) {
      return true;
    }
    if (!isemail(value)) {
      return true;
    }
    return false;
  },

  subject: (value) => {
    if (!value) {
      return true;
    }

    return false;
  },
};

const setError = (selector, value) => {
  const error = document.querySelector(`#${selector}`);
  const hasError = validate[selector](value);
  error.classList.toggle("form-error", hasError);
  return hasError;
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("submit");
  let tempObj = {
    username: username.value,
    subject: subject.value,
    email: email.value,
  };

  let hasError = false;

  Object.keys(tempObj).forEach((key) => {
    if (setError(key, tempObj[key])) {
      hasError = true;
    }
  });

  Object.keys(tempObj).forEach((key) => {
    const node = document.querySelector(`#${key}`);
    node.addEventListener("change", (e) => {
      setError(key, e.target.value);
    });
  });

  if (!hasError) {
    form.reset();
    alert("Form submitted successfully.");
  }
});
