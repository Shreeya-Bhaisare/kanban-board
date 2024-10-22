import React from 'react';
import Column from './Column';

function Board({ tickets, grouping }) {
  const columns = Object.keys(tickets).map(group => (
    <Column key={group} title={group} tickets={tickets[group]} grouping={grouping} />
  ));

  return (
    <div className="board">
      {columns}
    </div>
  );
}

export default Board;
