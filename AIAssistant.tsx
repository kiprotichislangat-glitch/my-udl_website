
import React, { useState } from 'react';
import { MessageSquare, Send, X, Loader2 } from 'lucide-react';
import { askAIAssistant } from '../services/geminiService';

export const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    setLoading(true);
    setResponse(null);
    const result = await askAIAssistant(query);
    setResponse(result);
    setLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="w-80 md:w-96 glass rounded-2xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom-4 duration-300 border border-slate-200">
          <div className="bg-indigo-600 p-4 flex justify-between items-center text-white">
            <div className="flex items-center space-x-2">
              <MessageSquare className="w-5 h-5" />
              <span className="font-semibold">UDL Expert AI</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-indigo-500 p-1 rounded">
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="p-4 h-64 overflow-y-auto bg-white/50 space-y-4">
            {response ? (
              <div className="text-sm text-slate-700 bg-white p-3 rounded-lg border border-slate-100 shadow-sm leading-relaxed">
                {response}
              </div>
            ) : (
              <p className="text-xs text-slate-400 italic text-center mt-10">
                Ask me anything about the Game Creation Unit evaluation...
              </p>
            )}
            {loading && (
              <div className="flex justify-center py-4">
                <Loader2 className="w-6 h-6 animate-spin text-indigo-500" />
              </div>
            )}
          </div>

          <form onSubmit={handleAsk} className="p-4 border-t border-slate-100 bg-white flex space-x-2">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ask about recommendations..."
              className="flex-1 text-sm border border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-indigo-600 text-white p-2 rounded-lg hover:bg-indigo-700 disabled:opacity-50 transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-indigo-600 text-white p-4 rounded-full shadow-xl hover:scale-110 transition-transform flex items-center space-x-2"
        >
          <MessageSquare className="w-6 h-6" />
          <span className="hidden md:inline text-sm font-medium">Ask Assistant</span>
        </button>
      )}
    </div>
  );
};
