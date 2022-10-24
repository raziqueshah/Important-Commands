//All commands url based on swagger url provided by client
import axios from 'axios';
import React from 'react';

const ApiKhel = () => {

    const baseUrl = process.env.REACT_APP_SERVER_URL;
    const endUrl = "customer/addCustomer";
    const endUpdateUrl = "customer/upsertCustomer"
    const singleUrl = baseUrl+endUrl;
    const singleUpdateUrl = baseUrl+endUpdateUrl;
    const userToken = process.env.REACT_APP_USER_TOKEN;

    const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + userToken,
        },
      };

      const body = {
        "addedBy": "Razique",
        "address": "Patur",
        "city": "Akola",
        "country": "India",
        "customerId": 123456789,
        "customerName": "Ubaid",
        "email": "yasirubed@gmail.com",
        "isDeleted": 0,
        "lastUpdate": 0,
        "mobileNumber": "9850335955",
        "notes": "This is ubed mobile No.",
        "schemaName": "Anjuman School",
        "updatedBy": "Farrukh"
      }

      const data = {
        
            "addedBy": "Razique",
            "address": "Patur",
            "city": "Akola",
            "country": "India",
            "customerId": 123456789,
            "customerName": "Farrukh",
            "email": "razique@shah.com",
            "isDeleted": 0,
            "lastUpdate": 0,
            "mobileNumber": "9823449818",
            "notes": "This is raz update",
            "schemaName": "HSA Urdu School",
            "updatedBy": "Farrukh"
      }

    const handleClick = async()=>{
        const response = await axios.post(singleUrl,body,config)
        console.log(response);
    }

   const updataData = async()=>{
    const response = await axios.put(singleUpdateUrl,data,config) // in this case we use "axios.post" method.because this is a swagger url give us a backend developer.
    console.log(response);
}

const patchData = async()=>{
    const response = await axios.patch(singleUpdateUrl,data,config)
    console.log(response);
}

//this is write update url as per the swagger method
const updataDataSwagger = async()=>{
  const response = await axios.post(singleUpdateUrl,data,config)
  console.log(response);
}

  return (
    <div>
        <h1>Api se Khelna</h1>
        <button onClick={handleClick}>Post Data to Api</button>
        <button onClick={updataData}>Update Data in Api</button>
        <button onClick={patchData}>Patch The Data</button>
    </div>
  )
}

export default ApiKhel