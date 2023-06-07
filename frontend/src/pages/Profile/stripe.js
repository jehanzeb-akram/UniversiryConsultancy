import { useState } from 'react';
import axios from 'axios';

const PaymentForm = () => {
  const [amount, setAmount] = useState(0);
  const [currency, setCurrency] = useState('USD');
  const [description, setDescription] = useState('');
 

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      // Create a payment object with the required data
      const paymentData = {
        amount,
        currency,
        description
      };
  
      // Send a POST request to the backend to process the payment
      const response = await axios.post('http://localhost:3001/payment/process', paymentData);
  
      // Handle the success response
      console.log(response.data);
      // Display a success message
      window.alert('Payment processed successfully');
  
      // You can also redirect the user to a success page if needed
      // history.push('/success');
  
    } catch (error) {
      // Handle any errors that occur during the payment process
      console.error(error);
      // Display an error message
      window.alert('Payment failed. Please try again.');
    }
  };
  
    
  

  return (
    <form onSubmit={handleSubmit}>
      <h2>Payment Form</h2>
      <div>
        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="currency">Currency:</label>
        <input
          type="text"
          id="currency"
          value={currency}
          onChange={(event) => setCurrency(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </div>
     
      <button type="submit">Submit Payment</button>
    </form>
  );
};

export default PaymentForm;
