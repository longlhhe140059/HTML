const country = [
  "Vietnam",
  "Singapore",
  "Malaysia",
  "Indonesia",
  "Philippine",
  "Lao",
  "Cambodia",
];
const position = ["Operator", "Manager", "Developer", "Designer", "Tester"];
function generateSelect(elementId, arr) {
  const select = document.getElementById(elementId);
  for (let i = 0; i <= arr.length; i++) {
    let opt = document.createElement("option");
    opt.value = arr[i];
    opt.innerHTML = arr[i];
    select.appendChild(opt);
  }
}
generateSelect("country_select", country);
generateSelect("position_select", position);

// Q3
function resetForm() {}
function createErrorElement(msg) {
  const errorElement = document.createElement("p");
  errorElement.className = "error text-danger";
  errorElement.innerText = msg;
  return errorElement;
}

function validateForm() {
  // get value from form
  const fName = document.forms["job_form"].first_name.value.trim();
  const lName = document.forms["job_form"].last_name.value;
  const email = document.forms["job_form"].email.value;
  const phone = document.forms["job_form"].phone.value;
  const country_select = document.forms["job_form"].country_select.value;
  const position_select = document.forms["job_form"].position_select.value;

  document.querySelectorAll(".error").forEach((error) => error.remove());
  let isValid = true;

  if (!fName) {
    const errorFName = createErrorElement("The First Name should not be blank");
    document.getElementById("first_name_container").appendChild(errorFName);
    isValid = false;
  }
  if (!lName) {
    const errorLName = createErrorElement("The Last Name should not be blank");
    document.getElementById("last_name_container").appendChild(errorLName);
    isValid = false;
  }
  if (!email) {
    const errorEmail = createErrorElement("The Email should not be blank");
    document.getElementById("email_container").appendChild(errorEmail);
    isValid = false;
  } else {
    if (isEmail(email) == null) {
      const errorEmailFomat = createErrorElement(
        "Please input your correct email address"
      );
      document.getElementById("email_container").appendChild(errorEmailFomat);
      isValid = false;
    }
  }

  if (isPhone(phone) == null) {
    const errorPhone = createErrorElement(
      "Please input your correct phone number"
    );
    document.getElementById("phone_container").appendChild(errorPhone);
    isValid = false;
  }

  if (!country_select) {
    const errorCountry = createErrorElement("Please select your country");
    document.getElementById("country_container").appendChild(errorCountry);
    isValid = false;
  }

  if (!position_select) {
    const errorPosition = createErrorElement("Please select your position");
    document.getElementById("position_container").appendChild(errorPosition);
    isValid = false;
  }

  return isValid;
}
// -------------------------------------------------------------------
function isPhone(input) {
  if (!input) {
    return null;
  }
  let pattern = /^\d{3}-\d{3}-\d{4}$/m;
  return input.match(pattern);
}
function isEmail(input) {
    if(!input){
        return null;
    }
  let pattern = /^(\w+)(.*)@(\w+.){1,3}\w+$/m;
  return input.match(pattern);
}
// Q4 -------------------------------------------------------------------------------------------
$("#job_form").submit(() => {
  // get value from form
  const fName = $("#job_form").children('input[name="first_name"]').value;
  const lName = $("#job_form").children('input[name="last_name"]').value;
  const email = $("#job_form").children('input[name="email"]').value;
  const phone = $("#job_form").children('input[name="phone"]').value;
  const country_select = $("#job_form").children('select[name="country_select"]').value;
  const position_select = $("#job_form").children('select[name="position_select"]').value;
  
  document.querySelectorAll(".error").forEach((error) => error.remove());
  let isValid = true;

  if (!fName) {
    const errorFName = createErrorElement("The First Name should not be blank");
    document.getElementById("first_name_container").appendChild(errorFName);
    isValid = false;
  }
  if (!lName) {
    const errorLName = createErrorElement("The Last Name should not be blank");
    document.getElementById("last_name_container").appendChild(errorLName);
    isValid = false;
  }
  if (!email) {
    const errorEmail = createErrorElement("The Email should not be blank");
    document.getElementById("email_container").appendChild(errorEmail);
    isValid = false;
  } else {
    if (isEmail(email) == null) {
      const errorEmailFomat = createErrorElement(
        "Please input your correct email address"
      );
      document.getElementById("email_container").appendChild(errorEmailFomat);
      isValid = false;
    }
  }

  if (isPhone(phone) == null) {
    const errorPhone = createErrorElement(
      "Please input your correct phone number"
    );
    document.getElementById("phone_container").appendChild(errorPhone);
    isValid = false;
  }

  if (!country_select) {
    const errorCountry = createErrorElement("Please select your country");
    document.getElementById("country_container").appendChild(errorCountry);
    isValid = false;
  }

  if (!position_select) {
    const errorPosition = createErrorElement("Please select your position");
    document.getElementById("position_container").appendChild(errorPosition);
    isValid = false;
  }

  return isValid;
});
