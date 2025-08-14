import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowLeft, Send, Mic } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const Chatbot = () => {
  const navigate = useNavigate();
  const [showWelcome, setShowWelcome] = useState(true);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Welcome to the Government Welfare Schemes Assistant! I can provide information on the following schemes:",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');

  const quickReplies = [
    "Tell me about Ladki Bahin Yojana",
    "Entrepreneurship and Skill Development Programme (ESDP)",
    "One Stop Centre (OSC)",
    "National Startup Awards (NSA)",
    "Students Ready (SR)",
    "PRISM (Promoting Innovations in Individuals, Start-ups and MSMEs)"
  ];

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const newMessage: Message = {
      id: messages.length + 1,
      text: inputText,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMessage]);
    setInputText('');

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: "Thank you for your query. Let me provide you with information about that scheme.",
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const handleQuickReply = (text: string) => {
    const newMessage: Message = {
      id: messages.length + 1,
      text: text,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMessage]);

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: `The ${text} is a comprehensive government initiative designed to support citizens. Here are the key details and eligibility criteria...`,
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  if (showWelcome) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          {/* Logo/Avatar Section */}
          <div className="text-center mb-8">
            <div className="w-32 h-32 mx-auto mb-6 bg-white rounded-full flex items-center justify-center shadow-lg">
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-1"></div>
                  <div className="w-3 h-3 bg-blue-500 rounded-full ml-1"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Welcome Card */}
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <div className="text-center mb-6">
              <div className="flex items-center justify-center mb-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                  <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                    <div className="w-1 h-1 bg-blue-500 rounded-full mr-0.5"></div>
                    <div className="w-1 h-1 bg-blue-500 rounded-full ml-0.5"></div>
                  </div>
                </div>
                <h1 className="text-xl font-semibold text-blue-600">YojnaBot</h1>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Yojana Assistant</h2>
              <p className="text-gray-600 leading-relaxed">
                With this software, you can ask questions and get government scheme suggestions tailored to your eligibility through our AI-powered chatbot.
              </p>
            </div>

            {/* Illustration placeholder */}
            <div className="bg-blue-50 rounded-2xl p-8 mb-6 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="text-sm text-blue-600">AI-Powered Assistant</div>
              </div>
            </div>

            <Button 
              onClick={() => setShowWelcome(false)}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-2xl py-4 text-lg font-semibold"
            >
              Continue
              <Send className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-white shadow-sm border-b px-4 py-4 flex items-center">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate('/')}
          className="mr-3"
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <div className="flex items-center">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
            <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
              <div className="w-1 h-1 bg-blue-500 rounded-full mr-0.5"></div>
              <div className="w-1 h-1 bg-blue-500 rounded-full ml-0.5"></div>
            </div>
          </div>
          <div>
            <h1 className="font-semibold text-blue-600">YojnaBot</h1>
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}>
            <div className={`flex max-w-[80%] ${message.isBot ? 'flex-row' : 'flex-row-reverse'}`}>
              {message.isBot && (
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                    <div className="w-1 h-1 bg-blue-500 rounded-full mr-0.5"></div>
                    <div className="w-1 h-1 bg-blue-500 rounded-full ml-0.5"></div>
                  </div>
                </div>
              )}
              <div className={`rounded-2xl px-4 py-3 ${
                message.isBot 
                  ? 'bg-white border border-gray-200 text-gray-800' 
                  : 'bg-blue-500 text-white'
              }`}>
                <p className="text-sm leading-relaxed">{message.text}</p>
              </div>
            </div>
          </div>
        ))}

        {/* Quick Reply Buttons */}
        {messages.length === 1 && (
          <div className="space-y-2">
            <p className="text-sm text-gray-600 px-2">Which scheme are you interested in learning about?</p>
            <div className="space-y-2">
              {quickReplies.map((reply, index) => (
                <Button
                  key={index}
                  variant="outline"
                  onClick={() => handleQuickReply(reply)}
                  className="w-full justify-start text-left bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100 rounded-xl py-3 h-auto whitespace-normal"
                >
                  {reply}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="bg-white border-t p-4">
        <div className="flex items-center space-x-2">
          <div className="flex-1 relative">
            <Input
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Write your message"
              className="rounded-2xl border-gray-300 pr-12"
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-1 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <Mic className="w-4 h-4" />
            </Button>
          </div>
          <Button
            onClick={handleSendMessage}
            className="bg-blue-500 hover:bg-blue-600 text-white rounded-2xl p-3"
            size="icon"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;