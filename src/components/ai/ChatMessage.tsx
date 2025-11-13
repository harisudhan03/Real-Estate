
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import ReactMarkdown from 'react-markdown';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

interface ChatMessageProps {
  message: Message;
  isLatest: boolean;
}

const ChatMessage = ({ message, isLatest }: ChatMessageProps) => {
  const [visible, setVisible] = useState(!isLatest);

  useEffect(() => {
    if (!visible && isLatest) {
      const timer = setTimeout(() => {
        setVisible(true);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isLatest, visible]);

  const isUser = message.sender === 'user';

  return (
    <div
      className={cn(
        "flex w-full transition-all duration-300",
        isUser ? "justify-end" : "justify-start",
        !visible && "opacity-0 translate-y-4"
      )}
    >
      <div
        className={cn(
          "max-w-[85%] rounded-2xl p-4",
          isUser
            ? "bg-gradient-to-br from-accent-blue to-accent-purple text-white"
            : "bg-white border border-gray-200 shadow-sm",
          isLatest && message.sender === 'ai' && "animate-fade-in"
        )}
      >
        {isUser ? (
          <p className="whitespace-pre-wrap break-words">{message.content}</p>
        ) : (
          <div className="prose prose-sm max-w-none text-gray-800">
            <ReactMarkdown
              components={{
                strong: ({ node, ...props }) => (
                  <span className="font-bold text-lianjia-900" {...props} />
                ),
              }}
            >
              {message.content}
            </ReactMarkdown>
          </div>
        )}
        <div className={cn(
          "text-xs mt-1",
          isUser ? "text-white/70" : "text-gray-400"
        )}>
          {formatTime(message.timestamp)}
        </div>
      </div>
    </div>
  );
};

const formatTime = (date: Date) => {
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};

export default ChatMessage;
