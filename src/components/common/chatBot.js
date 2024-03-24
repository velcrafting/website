import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import ChatBox from './chatBox'; // Ensure this import matches the file name casing
import ChatPrompt from './chatPrompt'; // Ensure this import matches the file name casing
import { Card, Blockquote } from 'flowbite-react';

const ChatBot = () => {
  const [prompt, setPrompt] = useState('');
  const [responses, setResponses] = useState([]);
  const endOfMessagesRef = useRef(null);

  const handleSend = async (prompt) => {
    setResponses(oldResponses => [...oldResponses, { type: 'user', text: prompt }]);
    try {
      const baseUrl = 'https://ChatAgent-env.eba-ae4f8cca.us-east-1.elasticbeanstalk.com';
      const { data } = await axios.post(`${baseUrl}/start_query`, { prompt });
      const sessionId = data.sessionId;
      const eventSource = new EventSource(`${baseUrl}/stream_response?sessionId=${sessionId}`);
    
      eventSource.onmessage = function(event) {
        const newText = event.data.replace(/^data: /, '').trim();
        if (newText) {
          setResponses(oldResponses => [...oldResponses, { type: 'ai', text: newText }]);
          eventSource.close();
        }
      };

      eventSource.onerror = function(error) {
        console.error("EventSource failed:", error);
        eventSource.close();
      };
    } catch (error) {
      console.error('Error fetching response:', error);
    }
  };

  const scrollToBottom = () => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [responses]);

  return (
    <div className="flex justify-center py-8 bg-gray-800 w-full h-screen">
      <div className="w-3/4 max-w-screen-lg mx-auto mt-3">
        <Card>
          <div className="flex flex-col items-center mt-[-20px] mb-4">
            <h5 className="text-lg font-medium text-gray-900 dark:text-white">Advance RAG Agent</h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Chatbot proof of concept, allows client to upload all files of an organization and have a bespoke-custom low cost AI assistant.
            </span>
          </div>
          {/* Spacer Line */}
          <hr className="my-2 h-0.5 bg-gray-800 border-none" /> {/* Adjust margin, height, and color as needed */}
          <div className="flex flex-col h-[75vh] justify-between"> {/* Adjust height as needed */}
            <ChatBox responses={responses} />
            <div ref={endOfMessagesRef}></div>
            <ChatPrompt onSend={handleSend} />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ChatBot;