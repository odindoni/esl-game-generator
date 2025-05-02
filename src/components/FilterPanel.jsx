import React from 'react';

export default function FilterPanel({ filters, setFilters, onSubmit }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
      {['grammar', 'level', 'topic', 'gameType'].map((key) => (
        <select
          key={key}
          className="border rounded p-2"
          value={filters[key]}
          onChange={(e) => setFilters({ ...filters, [key]: e.target.value })}
        >
          <option value="">Select {key}</option>
          <option value="First Conditional">First Conditional</option>
          <option value="A2+">A2+</option>
          <option value="Travel">Travel</option>
          <option value="Board Game">Board Game</option>
        </select>
      ))}
      <button
        onClick={onSubmit}
        className="col-span-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Generate Game
      </button>
    </div>
  );
}