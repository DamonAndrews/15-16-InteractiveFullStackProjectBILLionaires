const signUpFormHandler = async (event) => {

    event.preventDefault();

    const email = document.querySelector('#create-username').value.trim();
    const password = document.querySelector('#create-password').value.trim();

    if (email && password) {


        const response = await fetch('/api/sign_up', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/homepage');
            message: "Congrats, You've Signed-Up!"
        } else {
            alert('Failed to Sign-Up');
        }
    }
};

document
    .querySelector('.sign-up-form')
    .addEventListener('submit', signUpFormHandler);


