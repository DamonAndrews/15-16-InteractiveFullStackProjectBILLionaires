const addCustomerForm = async (event) => {
    document.location.replace('/addcustomer');
  };
  
  const editCustomerForm = async (event) => {
    document.location.replace('/editclient')
  }

  const generateInvoice = async(event) => {
    document.location.replace('/generateinvoice')
  }
  
  document.querySelector('#addCustomer').addEventListener('click', addCustomerForm);

  document.querySelector('#editClient').addEventListener('click', editCustomerForm);

  // document.querySelector('#newInvoice').addEventListener('click', generateInvoice);