import { useEffect, useState } from "react";

export default function CustomerProfile({ id }) {
  const [displayingProfile, setDisplayingProfile] = useState(null);

  useEffect(() => {
    fetch(`https://cyf-hotel-api.netlify.app/customers/${id}`)
      .then((response) => response.json())
      .then((data) => setDisplayingProfile(data));
  }, [id]);

  if (displayingProfile)
    return (
      <div data-testid="profileCard" className="card">
        <ul>
          <li data-testid="profileId">Customer Id: {displayingProfile.id}</li>
          <li>
            Full Name: {displayingProfile.firstName} {displayingProfile.surname}
          </li>
          <li>E-mail: {displayingProfile.email}</li>
          <li>Type: {displayingProfile.vip ? "VIP" : "Regular"}</li>
          <li>Contact Number: {displayingProfile.phoneNumber}</li>
        </ul>
      </div>
    );
}
