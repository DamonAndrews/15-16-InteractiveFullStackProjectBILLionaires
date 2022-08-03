const signUpFormHandler = async (event) => {
    event.preventDefault();
    const first = document.querySelector('#first-name').value.trim();
    const last = document.querySelector('#last-name').value.trim();
    const email = document.querySelector('#user-create').value.trim();
    const password = document.querySelector('#password-create').value.trim();
    const level = document.querySelector('#user-level').value.trim();
    if (first && last && email && password && level) {
        const response = await fetch('/api/create', {
            method: 'POST',
            body: JSON.stringify({ "first":first, "last":last, "email":email, "password":password, "level":level }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            document.location.replace('/');
            alert("Congrats, You've Signed-Up!")
        } else {
            alert('Failed to Sign-Up');
        }
    }
};
document
    .querySelector('.create-user-form')
    .addEventListener('submit', signUpFormHandler);







