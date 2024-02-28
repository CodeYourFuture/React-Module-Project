import React from 'react';
import FakeBookings from '@/data/fakeBookings.json';
import TableHead from './TableHead';
import TableBody from './TableBody';

const SearchResults = () => {
  return (
    <table>
      <thead>
        <TableHead />
      </thead>
      <tbody>
        {FakeBookings.map((booking) => (
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
