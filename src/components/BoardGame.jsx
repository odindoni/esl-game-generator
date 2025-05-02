import React from 'react';

export default function BoardGame({ prompts }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {prompts.map((item, i) => (
        <div
          key={i}
          className="border rounded-2xl shadow p-4 text-center bg-white hover:bg-blue-50"
        >
          <strong>{i + 1}.</strong> {item.prompt}
        </div>
      ))}
    </div>
  );
}