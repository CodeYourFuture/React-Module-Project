import React from 'react';

export const CustomerProfile = ({ selectedCustomerId }) => {
  return (
    <div>
      {selectedCustomerId && (
        <p>Customer {selectedCustomerId} profile</p>
      )}
    </div>
  );
};

export default CustomerProfile;
