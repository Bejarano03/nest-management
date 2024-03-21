import React, { useState } from 'react';

function UserProfile() {
  // State initialization with nested properties
  const [userProfile, setUserProfile] = useState({
    name: '',
    email: '',
    address: {
      street: '',
      city: '',
      country: ''
    }
  });

  // Function to update address information
  const updateAddress = (street, city, country) => {
    // Update address immutably
    setUserProfile(prevUserProfile => ({
      ...prevUserProfile,
      address: {
        ...prevUserProfile.address,
        street: street,
        city: city,
        country: country
      }
    }));
  };

  return (
    <div>
      {/* Input fields for street, city, and country */}
      <div>
        <label htmlFor="street">Street:</label>
        <input
          type="text"
          id="street"
          onChange={e => updateAddress(e.target.value, userProfile.address.city, userProfile.address.country)}
        />
      </div>
      <div>
        <label htmlFor="city">City:</label>
        <input
          type="text"
          id="city"
          onChange={e => updateAddress(userProfile.address.street, e.target.value, userProfile.address.country)}
        />
      </div>
      <div>
        <label htmlFor="country">Country:</label>
        <input
          type="text"
          id="country"
          onChange={e => updateAddress(userProfile.address.street, userProfile.address.city, e.target.value)}
        />
      </div>
      
      {/* Button to trigger the updateAddress function */}
      <button onClick={() => updateAddress}>Update Address</button>
      
      {/* Display user profile information */}
      <div>
        <h2>User Profile:</h2>
        <p>Name: {userProfile.name}</p>
        <p>Email: {userProfile.email}</p>
        <p>Address:</p>
        <p>Street: {userProfile.address.street}</p>
        <p>City: {userProfile.address.city}</p>
        <p>Country: {userProfile.address.country}</p>
      </div>
    </div>
  );
}

export default UserProfile;
