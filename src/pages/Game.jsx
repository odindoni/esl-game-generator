import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import GameRenderer from '../components/GameRenderer';
import { filterPrompts } from '../utils/filterPrompts';
import promptData from '../data/prompts.json';

export default function Game() {
  const [searchParams] = useSearchParams();
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    const filters = Object.fromEntries([...searchParams]);
    const result = filterPrompts(promptData, filters).sort(() => 0.5 - Math.random()).slice(0, 20);
    setFiltered(result);
  }, [searchParams]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Your Generated Game</h2>
      <GameRenderer prompts={filtered} gameType={searchParams.get('gameType')} />
    </div>
  );
}