import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import promptData from '../data/prompts.json';

export default function Home() {
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    grammar: '',
    level: '',
    topic: '',
    gameType: ''
  });

  const grammars = [...new Set(promptData.map(p => p.grammar))];
  const levels = [...new Set(promptData.map(p => p.level))];
  const topics = [...new Set(promptData.map(p => p.topic))];
  const gameTypes = [...new Set(promptData.flatMap(p => p.gameTypes))];

  const handleSubmit = () => {
    const query = new URLSearchParams(filters).toString();
    navigate(`/game?${query}`);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">ESL Game Generator</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
        <select
          value={filters.grammar}
          onChange={(e) => setFilters({ ...filters, grammar: e.target.value })}
          className="border rounded p-2"
        >
          <option value="">Select grammar</option>
          {grammars.map(g => <option key={g} value={g}>{g}</option>)}
        </select>

        <select
          value={filters.level}
          onChange={(e) => setFilters({ ...filters, level: e.target.value })}
          className="border rounded p-2"
        >
          <option value="">Select level</option>
          {levels.map(l => <option key={l} value={l}>{l}</option>)}
        </select>

        <select
          value={filters.topic}
          onChange={(e) => setFilters({ ...filters, topic: e.target.value })}
          className="border rounded p-2"
        >
          <option value="">Select topic</option>
          {topics.map(t => <option key={t} value={t}>{t}</option>)}
        </select>

        <select
          value={filters.gameType}
          onChange={(e) => setFilters({ ...filters, gameType: e.target.value })}
          className="border rounded p-2"
        >
          <option value="">Select game type</option>
          {gameTypes.map(gt => <option key={gt} value={gt}>{gt}</option>)}
        </select>

        <button
          onClick={handleSubmit}
          className="col-span-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Generate Game
        </button>
      </div>
    </div>
  );
}
