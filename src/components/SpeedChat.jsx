import React from 'react';

export default function SpeedChat({ prompts }) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold mb-2">Speed Chat Prompts (Pair and Rotate)</h3>
      <ol className="list-decimal list-inside space-y-2">
        {prompts.slice(0, 10).map((item, index) => (
          <li key={index} className="p-3 bg-white border rounded-xl shadow hover:bg-blue-50">
            {item.prompt}
          </li>
        ))}
      </ol>
      <p className="mt-4 text-sm italic text-gray-500">Each pair has 60 seconds to respond before rotating.</p>
    </div>
  );
}
