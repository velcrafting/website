import React, { useState } from 'react';
import { Button } from 'flowbite-react'; // Corrected import

const ChatPrompt = ({ onSend }) => {
  const [prompt, setPrompt] = useState('');

  const handleInputChange = (event) => {
    setPrompt(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (prompt.trim()) {
      onSend(prompt);
      setPrompt('');
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleSubmit(event);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 items-center mt-4">
      <textarea
        className="textarea w-full p-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Type your message here..."
        value={prompt}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        rows={2}
      />
      <Button type="submit" color="blue">
        Send
      </Button>
    </form>
  );  
};

export default ChatPrompt;
