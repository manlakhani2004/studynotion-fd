import React, { useState } from 'react';
import './MainBox.css'; // make sure CSS is imported

function MainBox({ onClose }) {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([
        {
            message: "Hello I am ChatBot",
            sender: "ChatGPT"
        }
    ]);
    const [isThinking, setIsThinking] = useState(false);

    const handleChange = (event) => {
        setInput(event.target.value);
    };

    const handleSend = async (event) => {
        event.preventDefault();

        if (input.trim() === "") return;

        const newMessage = {
            message: input,
            sender: "user"
        };

        const newMessages = [...messages, newMessage];
        setMessages(newMessages);
        setInput('');
        setIsThinking(true);
        await processMessageToChatGPT(newMessages);
    };

    async function processMessageToChatGPT(chatMessages) {
        const message = "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"; 

        let apiMessages = chatMessages.map((messageObject) => {
            let role = messageObject.sender === "ChatGPT" ? "assistant" : "user";
            return { role: role, content: messageObject.message };
        });

        const systemMessage = {
            role: "system",
            content: "Explain all concepts like I am 10 years old."
        };

        const apiRequestBody = {
            model: "mistralai/mistral-7b-instruct",
            messages: [systemMessage, ...apiMessages]
        };

        await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${message}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(apiRequestBody)
        }).then((response) => response.json())
          .then((data) => {
              const botMessage = {
                  message: data.choices[0].message.content,
                  sender: "ChatGPT"
              };
              setMessages([...chatMessages, botMessage]);
              setIsThinking(false);
          });
    }

    return (
        <div className="modal-overlay">
            <div className="chat-modal">
                <div className="container">
                    <div className="response-area">
                        {messages.map((message, index) => (
                            <div
                                key={index}
                                className={message.sender === "ChatGPT" ? 'gpt-message message' : 'user-message message'}>
                                {message.message}
                            </div>
                        ))}
                        {isThinking && (
                            <div className="gpt-message message"><em>Thinking...</em></div>
                        )}
                    </div>
                    <div className="prompt-area">
                        <input
                            type="text"
                            placeholder="Send a message..."
                            value={input}
                            onChange={handleChange}
                        />
                        <button className="submit" onClick={handleSend}>Send</button>
                    </div>
                    <button className="close-button" onClick={onClose}>✖</button>
                </div>
            </div>
        </div>
    );
}

export default MainBox;
