import React, { useState, useRef, useEffect } from 'react';
import { Send } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import ChatMessage from './ChatMessage';
import { toast } from 'sonner';
interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}
const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([{
    id: '1',
    content: 'Give me the Best Places to Buy Real Estate Properties in Chennai?',
    sender: 'user',
    timestamp: new Date(Date.now() - 600000)
  }, {
    id: '2',
    content: `1. **OMR (Old Mahabalipuram Road):** A booming IT corridor with high rental demand and excellent infrastructure.  
2. **ECR (East Coast Road):** Ideal for luxury beachfront properties and weekend homes with scenic views.  
3. **Anna Nagar:** A premium residential area with top schools, hospitals, and shopping hubs.  
4. **Adyar:** A posh neighborhood known for its greenery, connectivity, and high-end real estate.  
5. **Velachery:** A rapidly developing area with metro access, IT parks, and excellent social infrastructure.  
6. **Porur:** An emerging real estate hotspot with IT companies, educational institutions, and great connectivity.  
7. **Perungudi:** A prime choice for IT professionals due to its proximity to OMR and major tech hubs.  
8. **Tambaram:** A well-connected suburban area with affordable housing options and growing infrastructure.  
9. **Mylapore:** A heritage-rich locality with a blend of traditional and modern living spaces.  
10. **Medavakkam:** One of Chennai's fastest-growing residential hubs, offering great investment potential.`,
    sender: 'ai',
    timestamp: new Date(Date.now() - 500000)
  }]);
  const [inputValue, setInputValue] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Scroll to bottom when messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue.trim(),
      sender: 'user',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsSubmitting(true);

    // Simulate AI typing delay
    setTimeout(() => {
      // Add AI response
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: messages[1].content,
        // Using the pre-built AI response
        sender: 'ai',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsSubmitting(false);
      toast.success("AI response generated successfully");
    }, 1500);
  };
  return <div className="flex flex-col h-[70vh] bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden animate-fade-in">
      {/* Chat Header */}
      <div className="p-4 border-b flex items-center justify-between bg-gradient-to-r from-accent-blue/10 to-accent-teal/10">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center text-white">
            <span className="text-lg font-bold">AI</span>
          </div>
          <div>
            <h3 className="font-semibold text-lianjia-900">Zoner AI Assistant</h3>
            <p className="text-xs text-lianjia-500">Ask me anything about real estate</p>
          </div>
        </div>
        <div className="flex items-center">
          <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
          <span className="text-xs text-lianjia-600">Online</span>
        </div>
      </div>
      
      {/* Messages Container */}
      <div className="flex-grow p-4 overflow-y-auto bg-gray-50/50">
        <div className="space-y-4">
          {messages.map((message, index) => <ChatMessage key={message.id} message={message} isLatest={index === messages.length - 1} />)}
          <div ref={messagesEndRef} />
        </div>
      </div>
      
      {/* Input Area */}
      <form onSubmit={handleSubmit} className="p-4 border-t bg-white">
        <div className="flex space-x-2">
          <Input ref={inputRef} value={inputValue} onChange={e => setInputValue(e.target.value)} placeholder="Ask about real estate properties..." disabled={isSubmitting} className="flex-grow shadow-sm border-gray-200 focus-visible:ring-accent-blue" />
          <Button type="submit" disabled={isSubmitting || !inputValue.trim()} className="bg-gradient-to-r from-accent-blue to-accent-teal hover:opacity-90 transition-opacity">
            <Send className="h-4 w-4" />
            <span className="sr-only">Send message</span>
          </Button>
        </div>
      </form>
    </div>;
};
export default ChatInterface;