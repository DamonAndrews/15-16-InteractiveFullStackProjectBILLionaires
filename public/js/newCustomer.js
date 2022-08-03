// const express = require("express");

// const res = require("express/lib/response");

const newCustomerFormHandler = async (event) =>{
    event.preventDefault();

    const newCompany = document.querySelector('#company_name').value.trim();
    const newAddress =document.querySelector('#company_address').value.trim();
    const newFname =document.querySelector('#first_name').value.trim();
    const newLname =document.querySelector('#last_name').value.trim();
    const newEmail =document.querySelector('#company_email').value.trim();
    const newFrontEnd =parseInt(document.querySelector('#front_end').value.trim());
    const newBackEnd =parseInt(document.querySelector('#back_end').value.trim());
    const newMaintenance =parseInt(document.querySelector('#maintenance').value.trim());
    const newFullStack =parseInt(document.querySelector('#full_stack').value.trim());
    const newRemote =parseInt(document.querySelector('#remote').value.trim());
    const newOnSite =parseInt(document.querySelector('#on_site').value.trim());
    const newHourlyRate =parseInt(document.querySelector('#rate_of_pay').value.trim());
    const newJobTier1 =parseInt(document.querySelector('#jt_1').value.trim());
    const newJobTier2 =parseInt(document.querySelector('#jt_2').value.trim());
    const newJobTier3 =parseInt(document.querySelector('#jt_3').value.trim());
    if(newCompany && newAddress && newFname && newLname && newEmail && newFrontEnd && newBackEnd && newMaintenance && newFullStack && newRemote && newOnSite && newHourlyRate && newJobTier1 && newJobTier2 && newJobTier3) {
    const response = await fetch('/api/customer', {
        method: 'POST',
        body: JSON.stringify({"company_name":newCompany, "company_address": newAddress, "first_name":newFname, "last_name": newLname, "email": newEmail, "front_end": newFrontEnd, "back_end": newBackEnd, "maintenance": newMaintenance, "full_stack": newFullStack, "remote": newRemote, "on_site": newOnSite, "rate_of_pay": newHourlyRate, "jt_1": newJobTier1, "jt_2": newJobTier2, "jt_3": newJobTier3, }),
        headers: {'Content-Type': 'application/json'},
    })
    if(response.ok){
        document.location.replace('/');
        alert("You have successfully signed up!")
    } else {
        console.log(response)
        alert('FAILED TO CREATE!');
    }
}
}
document.querySelector('#submitNewCustomer').addEventListener('click', newCustomerFormHandler);