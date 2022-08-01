const signUpFormHandler = async (event) => {
    event.preventDefault();
    const username = document.querySelector('#create-username').value.trim();
    const password = document.querySelector('#create-password').value.trim();
    if (username && password) {
        const response = await fetch('/api/developerRoutes/create', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            document.location.replace('/api/developerRoutes');
            message: "Congrats, You've Signed-Up!"
        } else {
            alert('Failed to Sign-Up');
        }
    }
};
document
    .querySelector('.sign-up-form')
    .addEventListener('submit', signUpFormHandler);







