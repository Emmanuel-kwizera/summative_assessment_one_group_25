let errorMessage = '';
if (age < 18 || age > 100) {
    errorMessage += '<p>Age must be between 18 and 100.</p>';
}
if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
    errorMessage += '<p>Email format is invalid.</p>';
}

if (/[^a-zA-Z0-9 .,!?\n]/.test(feedback)) {
    errorMessage += '<p>Feedback contains invalid characters.</p>';
}
if (rating < 1 || rating > 5) {
    errorMessage += '<p>Rating must be between 1 and 5.</p>';
}
if (!date) {
    errorMessage += '<p>Please select a valid date.</p>';
}

let errorContainer = document.getElementById('errorMessages');
if (errorMessage) {
        errorContainer.innerHTML = errorMessage; // Display the error messages in the div
        document.getElementById('successMessage').innerText = ''; // Clear success message

} else {
        errorContainer.innerHTML = ''; // Clear previous error messages
        document.getElementById('successMessage').innerText = 'Survey submitted successfully!';
        errorContainer.textContent = ''; //clear error messages
        //clear form
        document.getElementById('surveyForm').reset();
}
