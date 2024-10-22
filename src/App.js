import React, { useState, useEffect } from 'react';
import Board from './components/Board';
import './App.css';

function App() {
  const [tickets, setTickets] = useState([]);  // Ensure it's initialized as an array
  const [grouping, setGrouping] = useState('status');
  const [sorting, setSorting] = useState('priority');

  // Dummy ticket data for testing
  const dummyTickets = [
    { id: 1, title: 'Fix Database Bug', description: 'Resolve slow queries.', priority: 4, status: 'in_progress', user: 'John Doe' },
    { id: 2, title: 'UI Overhaul', description: 'Redesign the landing page UI.', priority: 3, status: 'todo', user: 'Jane Smith' },
    { id: 3, title: 'Implement Auth', description: 'Add OAuth for social login.', priority: 2, status: 'done', user: 'Sam Williams' },
    { id: 4, title: 'Optimize Images', description: 'Improve image load times.', priority: 1, status: 'todo', user: 'Mary Jane' },
    { id: 5, title: 'Add Multilingual Support', description: 'Enable app to support multiple languages.', priority: 2, status: 'in_progress', user: 'John Doe' },
    { id: 6, title: 'Update User Profile', description: 'Improve user profile layout.', priority: 3, status: 'done', user: 'Jane Smith' },
  ];

  useEffect(() => {
    setTickets(dummyTickets);  // Load the dummy tickets for testing
  }, []);

  const handleGroupingChange = (e) => {
    setGrouping(e.target.value);
  };

  const handleSortingChange = (e) => {
    setSorting(e.target.value);
  };

  const groupTickets = () => {
    if (grouping === 'status') {
      return groupByStatus();
    } else if (grouping === 'user') {
      return groupByUser();
    } else {
      return groupByPriority();
    }
  };

  const groupByStatus = () => {
    if (!Array.isArray(tickets)) return {};
    return {
      todo: tickets.filter(ticket => ticket.status === 'todo'),
      inProgress: tickets.filter(ticket => ticket.status === 'in_progress'),
      done: tickets.filter(ticket => ticket.status === 'done')
    };
  };

  const groupByUser = () => {
    if (!Array.isArray(tickets)) return {};
    const users = {};
    tickets.forEach(ticket => {
      if (!users[ticket.user]) {
        users[ticket.user] = [];
      }
      users[ticket.user].push(ticket);
    });
    return users;
  };

  const groupByPriority = () => {
    if (!Array.isArray(tickets)) return {};
    return {
      urgent: tickets.filter(ticket => ticket.priority === 4),
      high: tickets.filter(ticket => ticket.priority === 3),
      medium: tickets.filter(ticket => ticket.priority === 2),
      low: tickets.filter(ticket => ticket.priority === 1),
      noPriority: tickets.filter(ticket => ticket.priority === 0)
    };
  };

  return (
    <div className="kanban-board">
      <header>
        <h1>Kanban Board</h1>
        <div className="controls">
          <label htmlFor="grouping">Group by:</label>
          <select id="grouping" value={grouping} onChange={handleGroupingChange}>
            <option value="status">Status</option>
            <option value="user">User</option>
            <option value="priority">Priority</option>
          </select>

          <label htmlFor="sorting">Sort by:</label>
          <select id="sorting" value={sorting} onChange={handleSortingChange}>
            <option value="priority">Priority</option>
            <option value="title">Title</option>
          </select>
        </div>
      </header>

      <main>
        <Board tickets={groupTickets()} grouping={grouping} />
      </main>
    </div>
  );
}

export default App;
