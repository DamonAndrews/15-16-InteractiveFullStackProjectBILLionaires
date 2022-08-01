const loginFormHandler = async (event) => {
  // TODO: Add a comment describing the functionality of this statement
  //by default it wants to send the info to the server, so we prevent that action to have tighter control
  event.preventDefault();

  // TODO: Add a comment describing the functionality of these expressions
  //we're defining the variables for email & pw which we get from the 2 login elemnets, we captured the value the user entered and trim it of any extra whitespace
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    // TODO: Add a comment describing the functionality of this expression
    //we use fetch to GET or POST info to/from a particular address
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log in');
    }
  }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);
