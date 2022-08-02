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
    const newFrontEnd =document.querySelector('#front_end').value.trim();
    const newBackEnd =document.querySelector('#back_end').value.trim();
    const newMaintenance =document.querySelector('#maintenance').value.trim();
    const newFullStack =document.querySelector('#full_stack').value.trim();
    const newRemote =document.querySelector('#remote').value.trim();
    const newOnSite =document.querySelector('#on_site').value.trim();
    const newHourlyRate =document.querySelector('#rate_of_pay').value.trim();
    const newJobTier1 =document.querySelector('#jt_1').value.trim();
    const newJobTier2 =document.querySelector('#jt_2').value.trim();
    const newJobTier3 =document.querySelector('#jt_3').value.trim();

    const response = await fetch('/api/customer', {
        method: 'POST',
        body: JSON.stringify({"company_name":newCompany, "company_address": newAddress, "company_phone_number":newNumber, "first_name":newFname, "last_name": newLname, "email": newEmail, "work_description[0]": newFrontEnd, "work_description[1]": newBackEnd, "work_description[2]": newMaintenance, "work_description[3]": newFullStack, "location[0]": newRemote, "location[1]": newOnSite, "rate_of_pay": newHourlyRate, "job_tier[0]": newJobTier1, "job_tier[1]": newJobTier2, "job_tier[2]": newJobTier3, }),
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