import React from 'react';

function Ticket({ ticket, grouping }) {
  return (
    <div className={`ticket priority-${ticket.priority}`}>
      <h3>{ticket.title}</h3>
      <p>{ticket.description}</p>
      <p><strong>Priority:</strong> {ticket.priority}</p>
      {grouping === 'user' && <p><strong>Assigned to:</strong> {ticket.user}</p>}
    </div>
  );
}

export default Ticket;
