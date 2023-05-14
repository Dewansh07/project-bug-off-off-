import React, { useState } from 'react';
import './support.css';
import { Navbar } from '../../Navbar/Navbar';
function Support() {
  const [productDetails, setProductDetails] = useState('');
  const [errorDescription, setErrorDescription] = useState('');
  const [reproductionSteps, setReproductionSteps] = useState('');
  const [deviceInfo, setDeviceInfo] = useState('');
  const [attachment, setAttachment] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission
  };

  return (
    <div>
      <Navbar />
      <h2>Contact Support</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Product Details:
          <input
            type="text"
            value={productDetails}
            onChange={(event) => setProductDetails(event.target.value)}
          />
        </label>
        <br />
        <label>
          Error Description:
          <textarea
            value={errorDescription}
            onChange={(event) => setErrorDescription(event.target.value)}
          />
        </label>
        <br />
        <label>
          Reproduction Steps:
          <textarea
            value={reproductionSteps}
            onChange={(event) => setReproductionSteps(event.target.value)}
          />
        </label>
        <br />
        <label>
          Device Information:
          <input
            type="text"
            value={deviceInfo}
            onChange={(event) => setDeviceInfo(event.target.value)}
          />
        </label>
        <br />
        <label>
          Attachment:
          <input
            type="file"
            onChange={(event) => setAttachment(event.target.files[0])}
          />
        </label>
        <br />
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <br />
        <label>
          Phone:
          <input
            type="tel"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Support;
