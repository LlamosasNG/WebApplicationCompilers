// src/components/Chat.jsx
import React, { useState } from 'react';
import axios from 'axios';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (input.trim() === '') return;

    const keywords = ['analizador sintáctico ascendente', 'parser ascendente', 'compilador', 'gramática', 'análisis sintáctico'];
    const isRelevant = keywords.some(keyword => input.toLowerCase().includes(keyword));

    if (!isRelevant) {
      const aiMessage = {
        sender: 'ai',
        text: 'Por favor, formula una pregunta relacionada con analizadores sintácticos ascendentes en el contexto de compiladores.',
      };
      setMessages([...messages, { sender: 'user', text: input }, aiMessage]);
      setInput('');
      return;
    }

    const userMessage = { sender: 'user', text: input };
    setMessages([...messages, userMessage]);

    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [
            { role: 'system', content: 'Eres un experto en analizadores sintácticos ascendentes en el contexto de compiladores. Responde solo preguntas relacionadas con este tema.' },
            { role: 'user', content: input }
          ],
          max_tokens: 150,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
          },
        }
      );

      const aiMessage = { sender: 'ai', text: response.data.choices[0].message.content.trim() };
      setMessages([...messages, userMessage, aiMessage]);
    } catch (error) {
      console.error('Error al comunicarse con la API de OpenAI', error);
      const errorMessage = { sender: 'ai', text: 'Ocurrió un error al procesar tu solicitud. Por favor, inténtalo nuevamente.' };
      setMessages([...messages, userMessage, errorMessage]);
    }

    setInput('');
  };

  return (
    <div className="flex flex-col w-full max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="flex flex-col flex-grow h-96 p-4 overflow-auto">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-2 rounded-lg mb-2 ${
              msg.sender === 'user' ? 'bg-blue-200 self-end' : 'bg-gray-200 self-start'
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="bg-gray-300 p-4 flex">
        <input
          className="flex-grow p-2 border border-gray-400 rounded-l-lg"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Escribe tu pregunta..."
        />
        <button
          onClick={handleSend}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-lg"
        >
          Enviar
        </button>
      </div>
    </div>
  );
};

export default Chat;
