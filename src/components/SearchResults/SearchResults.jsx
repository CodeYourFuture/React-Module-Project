// SearchResults.jsx
import React from 'react';
import TableHead from './TableHead';
import TableBody from './TableBody';

const SearchResults = ({results}) => {
  return (
    <table>
      <thead>
        <TableHead />
      </thead>
      <tbody>
        {results.map((booking) => (
          <TableBody
            key={booking.id}
            id={booking.id}
            title={booking.title}
            firstName={booking.firstName}
            surName={booking.surname}
            email={booking.email}
          />
        ))}
      </tbody>
    </table>
  );
}

export default SearchResults;

