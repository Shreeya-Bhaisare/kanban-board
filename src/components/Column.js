import React from 'react';
import Ticket from './Ticket';

function Column({ title, tickets, grouping }) {
  return (
    <div className="column">
      <h2>{title}</h2>
      {tickets.map(ticket => (
        <Ticket key={ticket.id} ticket={ticket} grouping={grouping} />
      ))}
    </div>
  );
}

export default Column;
