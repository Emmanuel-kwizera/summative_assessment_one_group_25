let errorMessage = '';
if (age < 18 || age > 100) {
    errorMessage += '<p>Age must be between 18 and 100.</p>';
}
if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
    errorMessage += '<p>Email format is invalid.</p>';
}