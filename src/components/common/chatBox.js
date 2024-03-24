import React from 'react';
import ReactMarkdown from 'react-markdown';
import { DesktopComputerIcon } from '@heroicons/react/solid'; // Import the computer icon

const ChatBox = ({ responses }) => {
  return (
    <div className="flex flex-col gap-4 overflow-y-auto" style={{ height: 'calc(100vh - 200px)' }}>
      {responses.map((resp, index) => (
        <div key={index} className={`flex ${resp.type === 'user' ? 'justify-end' : 'justify-start'}`}>
          {resp.type !== 'user' && (
            // Computer icon for AI responses, aligned on the left
            <DesktopComputerIcon className="w-6 h-6 text-gray-400 flex-shrink-0" />
          )}
          <div className={`ml-2 p-2 rounded-lg ${resp.type === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-800'}`}>
            <ReactMarkdown>{resp.text}</ReactMarkdown>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatBox;
