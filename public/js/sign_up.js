const signUpFormHandler = async (event) => {
    event.preventDefault();
    console.log(hey)
    const first = document.querySelector('#first-name').value.trim();
    const last = document.querySelector('#last-name').value.trim();
    const email = document.querySelector('#create-username').value.trim();
    const password = document.querySelector('#create-password').value.trim();
    const level = document.querySelector('#user-level').value.trim();
    if (first && last && email && password && level) {
        const response = await fetch('/api/developerRoutes/create', {
            method: 'POST',
            body: JSON.stringify({ first, last, email, password, level }),
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
    .querySelector('#sign-up')
    .addEventListener('submit', signUpFormHandler);







