const { response } = require("express");

const customerFormHandler = async (event) =>{
    event.preventDefault();

    const newCompany = document.querySelector('#company_name').value.trim();
    const newAddress =document.querySelector('#company_address').value.trim();
    const newNumber =document.querySelector('#company_phone_number').value.trim();
    const newFname =document.querySelector('#first_name').value.trim();
    const newLname =document.querySelector('#last_name').value.trim();
    const newJobType =document.querySelector('#job_type_requested').value.trim();
    const newEmail =document.querySelector('#email').value.trim();
    
    const reponse = await fetch('/api/customerRoutes/create', {
        method: 'POST',
        body: JSON.stringify({company_name:newCompany,company_address: newAddress, company_phone_number:newNumber, first_name:newFname, last_name: newLname, job_type_requested: newJobType, email: newEmail  }),
        headers: {'Content-Type': 'application/json'},
    })
    if(response.ok){
        document.location.replace('/');
    } else {
        alert('FAILED TO CREATE!');
    }
}

document.querySelector('.newCustomerForm');
document.addEventListener('submit', customerFormHandler);