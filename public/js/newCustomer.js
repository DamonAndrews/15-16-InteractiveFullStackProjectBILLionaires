// const express = require("express");

// const res = require("express/lib/response");

const newCustomerFormHandler = async (event) =>{
    event.preventDefault();

    const newCompany = document.querySelector('#company_name').value.trim();
    const newAddress =document.querySelector('#company_address').value.trim();
    const newNumber =document.querySelector('#company_phone_number').value.trim();
    const newFname =document.querySelector('#first_name').value.trim();
    const newLname =document.querySelector('#last_name').value.trim();
    const newEmail =document.querySelector('#company_email').value.trim();
    
    const response = await fetch('/api/customer', {
        method: 'POST',
        body: JSON.stringify({"company_name":newCompany, "company_address": newAddress, "company_phone_number":newNumber, "first_name":newFname, "last_name": newLname, "email": newEmail  }),
        headers: {'Content-Type': 'application/json'},
    })
    if(response.ok){
        document.location.replace('/');
    } else {
        console.log(response)
        alert('FAILED TO CREATE!');
    }
}
document.querySelector('#submitNewCustomer').addEventListener('click', newCustomerFormHandler);