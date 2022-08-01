const loginFormHandler = async (event) => {

  event.preventDefault();

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {


    const response = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/homepage');
    } else {
      alert('Failed to log in');
    }
  }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);







//   <form action="/action_page.php">
//   <label for="cars"></label>
//   <select id="cars" name="cars">
//     <input value="company_name"></input>
//     <input value="company_address"></input>
//     <input value="company_phone_number"></input>
//     <input value="first_name"></input>
//     <input value="last_name"></input>
//     <input value="email"></input>
//   </select>
//   <input type="submit">
// </form>