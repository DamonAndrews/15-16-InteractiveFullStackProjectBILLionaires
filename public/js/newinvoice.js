// const express = require("express");

// const res = require("express/lib/response");

const newInvoiceHandler = async (event) =>{
    event.preventDefault();

    
// document.location.replace('/api/generatePDF')
//     const response = await generatePDF', {
//         method: 'GET',
//         // body: JSON.stringify({}),
//         // headers: {'Content-Type': 'application/json'},
//     })
//     if(response.ok){
//         return response
//     } else {
//         alert('FAILED TO CREATE!');
//     }
// 
window.open("http://localhost:3001/api/invoice")
}
document.querySelector('#newInvoice').addEventListener('click', newInvoiceHandler)