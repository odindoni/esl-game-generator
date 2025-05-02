import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FilterPanel from '../components/FilterPanel';

export default function Home() {
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    grammar: '',
    level: '',
    topic: '',
    gameType: ''
  });

  const handleSubmit = () => {
    const query = new URLSearchParams(filters).toString();
    navigate(`/game?${query}`);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">ESL Game Generator</h1>
      <FilterPanel filters={filters} setFilters={setFilters} onSubmit={handleSubmit} />
    </div>
  );
}