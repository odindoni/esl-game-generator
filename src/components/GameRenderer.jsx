import React from 'react';
import BoardGame from './BoardGame';

export default function GameRenderer({ prompts, gameType }) {
  switch (gameType) {
    case 'Board Game':
      return <BoardGame prompts={prompts} />;
    default:
      return <div>No game template for this type yet.</div>;
  }
}