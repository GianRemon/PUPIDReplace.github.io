function showStep(stepNumber) {
    const steps = document.querySelectorAll('.step');
    steps.forEach(step => {
        step.style.display = 'none';
    });
    document.getElementById('step' + stepNumber).style.display = 'block';

    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    if (stepNumber === 1) {
        prevBtn.disabled = true;
        nextBtn.disabled = false;
    } else if (stepNumber === 2) {
        prevBtn.disabled = false;
        nextBtn.disabled = true;
    }
}

const requestFormLink = document.getElementById('requestFormLink');
const formContainer = document.getElementById('formContainer');

requestFormLink.addEventListener('click', function (event) {
    event.preventDefault();
    formContainer.classList.toggle('show');
});

const form = document.getElementById('idForm');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (form.checkValidity()) {
        alert('Form submitted successfully!');
    } else {
        document.getElementById('warningMsg').style.display = 'block';
    }
});

// Get the phone number input element and the warning message
const phoneInput = document.getElementById('phone');
const warningMsg = document.getElementById('warningMsg');

// Function to validate phone number
function validatePhoneNumber() {
  const phoneNumber = phoneInput.value;
  const containsNonNumeric = /\D/.test(phoneNumber); // Check for non-numeric characters

  // Display warning message if phone number contains non-numeric characters, otherwise hide it
  if (containsNonNumeric) {
    warningMsg.style.display = 'block';
  } else {
    warningMsg.style.display = 'none';
  }
}

// Add event listener to the phone number input field
phoneInput.addEventListener('input', validatePhoneNumber);


function submitForm() {
    event.preventDefault();

    const form = document.getElementById('idForm');

    fetch(form.action, {
        method: form.method,
        body: new FormData(form)
    })
    .then(response => {
        if (response.ok) {
            form.reset();
            alert("Form submitted successfully!");
        } else {
            alert("An error occurred. Please try again later.");
        }
    })
    .catch(error => {
        alert("An error occurred. Please try again later.");
        console.error('Error:', error);
    });

    return false;
}
