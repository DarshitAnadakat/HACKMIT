import { useState, useRef, useEffect } from 'react';
import { Send, Mic, Image, Volume2, Plus } from 'lucide-react';
import FloatingActionButton from '../components/FloatingActionButton';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

// Gemini API type definitions
interface GeminiResponse {
  candidates: {
    content: {
      parts: {
        text: string;
      }[];
    };
  }[];
}

interface GeminiRequest {
  contents: {
    parts: {
      text: string;
    }[];
    role: string;
  }[];
}

// Function to process Markdown formatting
const processMarkdownText = (text: string) => {
  return text
    .replace(/\*\*(.*?)\*\*/g, '$1') // Remove bold asterisks
    .replace(/\*(.*?)\*/g, '$1')     // Remove italic asterisks
    .replace(/__(.*?)__/g, '$1')     // Remove bold underscores
    .replace(/_(.*?)_/g, '$1')       // Remove italic underscores
    .replace(/`(.*?)`/g, '$1')       // Remove inline code backticks
    .replace(/~(.*?)~/g, '$1');      // Remove strikethrough
};

const ChatAssistant = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: "Namaste! I'm your maternal health AI assistant. How can I help you today with your pregnancy or motherhood questions?",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messageEndRef = useRef<HTMLDivElement>(null);
  const [isSimplified, setIsSimplified] = useState(false);
  // Store conversation history for context
  const [conversationHistory, setConversationHistory] = useState<{role: string; parts: {text: string}[]}[]>([
    {
      role: "model",
      parts: [{ text: "Namaste! I'm your maternal health AI assistant. How can I help you today with your pregnancy or motherhood questions?" }]
    }
  ]);

  // Your Gemini API key should be stored securely
  // For development, we're using a fixed value, but in production use environment variables properly
  const GEMINI_API_KEY = import.meta.env?.VITE_GEMINI_API_KEY || 
                         window.ENV_GEMINI_API_KEY || 
                         "AIzaSyB3Uk-HYx2btx26MCxP9FMZF8Q26YarhNw"; // Replace with your actual API key for testing
  
  // Updated API URL - make sure this matches the correct Gemini API endpoint
  const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Function to generate system prompt with maternal health expertise
  const getSystemPrompt = () => {
    return `You are a maternal health AI assistant with expertise in pregnancy, childbirth, postpartum care, and early motherhood. 
    
    Important constraints:
    1. Always prioritize the safety of the mother and baby. For any severe symptoms or emergencies, advise seeking immediate medical attention.
    2. Never provide definitive medical diagnoses or replace professional medical advice.
    3. Be culturally sensitive and acknowledge different cultural practices around pregnancy and childbirth.
    4. Provide evidence-based information from reputable medical sources.
    5. Be empathetic and supportive of the emotional challenges of pregnancy and motherhood.
    6. Do not use Markdown formatting (asterisks, underscores, backticks) in your responses.
    
    Your knowledge includes:
    - Common pregnancy symptoms and their management
    - Nutrition and diet during pregnancy and breastfeeding
    - Safe medications and supplements during pregnancy
    - Fetal development stages
    - Labor and delivery preparation
    - Postpartum recovery and care
    - Breastfeeding and infant feeding
    - Infant care basics and developmental milestones
    - Maternal mental health including postpartum depression and anxiety
    
    ${isSimplified ? "Provide simplified, easy-to-understand responses using shorter sentences and simpler vocabulary." : ""}
    
    Always begin responses with empathy before providing information. Keep responses concise but informative.`;
  };

  const callGeminiAPI = async (userInput: string) => {
    // Create updated conversation history including system prompt and new user message
    const updatedHistory = [
      // System prompt to instruct the model
      {
        role: "user",
        parts: [{ text: getSystemPrompt() }]
      },
      // Add existing conversation for context
      ...conversationHistory,
      // Add the new user message
      {
        role: "user",
        parts: [{ text: userInput }]
      }
    ];

    try {
      // Check if API key is properly configured
      if (!GEMINI_API_KEY || GEMINI_API_KEY === "YOUR_GEMINI_API_KEY") {
        throw new Error("API key not configured");
      }

      const request: GeminiRequest = {
        contents: updatedHistory
      };

      console.log("Sending request to Gemini API:", GEMINI_API_URL);

      const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(request)
      });

      if (!response.ok) {
        const errorBody = await response.text();
        console.error("API error response:", errorBody);
        throw new Error(`API request failed with status ${response.status}`);
      }

      const data = await response.json() as GeminiResponse;
      
      // Extract the response text
      let responseText = data.candidates[0]?.content.parts[0]?.text || 
        "I'm sorry, I couldn't process that request. Could you try asking in a different way?";
      
      // Process response to remove Markdown formatting
      responseText = processMarkdownText(responseText);
      
      // Update conversation history with the AI's response
      setConversationHistory([
        ...updatedHistory,
        {
          role: "model",
          parts: [{ text: responseText }]
        }
      ]);

      return responseText;
    } catch (error) {
      console.error('Error calling Gemini API:', error);
      
      // More specific error messages based on error type
      if (error.message === "API key not configured") {
        return "I'm unable to connect to my knowledge base. Please configure your Gemini API key to continue.";
      } else if (error.message.includes("404")) {
        return "I'm unable to reach the Gemini API. The endpoint may have changed or is unavailable.";
      } else {
        return "I'm sorry, I encountered an error while processing your request. Please check your API configuration and try again.";
      }
    }
  };

  // Simulate API response for development when real API is not available
  const getSimulatedResponse = (userInput: string) => {
    const lowercaseInput = userInput.toLowerCase();
    let response = "";
    
    if (lowercaseInput.includes('pain') || lowercaseInput.includes('cramp')) {
      response = "I understand you're experiencing discomfort. Mild cramping can be normal during pregnancy, but severe pain should be evaluated by a healthcare provider. Could you tell me more about when the pain occurs and how intense it feels?";
    } else if (lowercaseInput.includes('diet') || lowercaseInput.includes('food') || lowercaseInput.includes('eat')) {
      response = "A balanced diet is essential during pregnancy. Focus on fruits, vegetables, whole grains, lean proteins, and dairy for necessary nutrients like folate, iron, calcium, and omega-3s. Would you like some specific meal suggestions for your stage of pregnancy?";
    } else if (lowercaseInput.includes('medicine') || lowercaseInput.includes('drug')) {
      response = "I understand your concern about medication during pregnancy. Always consult your healthcare provider before taking any medication, as many can affect your baby's development. Is there a specific medication you're wondering about?";
    } else {
      response = "Thank you for sharing that with me. I'm here to support you through your pregnancy and motherhood journey. Could you tell me more about your specific concerns or questions so I can provide more helpful information?";
    }
    
    // Process simulated response to remove any accidental Markdown formatting
    return processMarkdownText(response);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    try {
      let responseText;

      try {
        // Try the Gemini API first
        responseText = await callGeminiAPI(inputValue);
      } catch (apiError) {
        console.warn("Gemini API call failed, using simulated response:", apiError);
        
        // If API fails, use simulated response for development but log the error
        responseText = getSimulatedResponse(inputValue);
        
        // Add note to response for development clarity
        responseText = "[DEV MODE - API FALLBACK] " + responseText;
      }
      
      // Process response for simplified mode if needed
      if (isSimplified && !responseText.startsWith("[DEV MODE")) {
        responseText = responseText
          .replace(/Would you like me to/g, "I can")
          .replace(/It's recommended to/g, "You should")
          .replace(/Consider/g, "Try to")
          .replace(/Perhaps/g, "Maybe")
          .split('. ').filter(s => s.length > 0).map(s => s + '.').join(' ');
      }
      
      // Final check for any remaining Markdown formatting
      responseText = processMarkdownText(responseText);

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: responseText,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error in chat submission:', error);
      
      // Error message if everything fails
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: "I'm sorry, I encountered an unexpected error. Please try again later.",
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  // Speech recognition functionality
  const startSpeechRecognition = () => {
    if (!('webkitSpeechRecognition' in window)) {
      alert('Speech recognition is not supported in your browser. Try Chrome or Edge.');
      return;
    }

    // @ts-ignore - TypeScript doesn't recognize webkitSpeechRecognition
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = 'en-US'; // Can be updated based on user preference
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setInputValue(transcript);
    };

    recognition.onerror = (event: any) => {
      console.error('Speech recognition error:', event.error);
    };

    recognition.start();
  };

  // Text-to-speech functionality
  const speakText = (text: string) => {
    if (!('speechSynthesis' in window)) {
      alert('Text-to-speech is not supported in your browser.');
      return;
    }

    // Process text to remove any Markdown before speaking
    const cleanText = processMarkdownText(text);
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = 'en-US'; // Can be updated based on user preference
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="min-h-screen pt-16 pb-20 relative">
      <FloatingActionButton />
      
      {/* Background elements */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-mother-blue/10 via-white to-mother-blue/5"></div>
      <div className="fixed inset-0 -z-5 bg-[url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-fixed opacity-5"></div>
      
      <div className="max-w-3xl mx-auto px-4">
        <header className="py-6 flex items-center justify-between">
          <h1 className="text-2xl font-display font-semibold gradient-text">mAI Assistant</h1>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <span className="text-sm text-mother-gray-dark mr-2">Simplified Mode</span>
              <button 
                onClick={() => setIsSimplified(!isSimplified)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${isSimplified ? 'bg-mother-blue-dark' : 'bg-mother-gray/30'}`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${isSimplified ? 'translate-x-6' : 'translate-x-1'}`}
                />
              </button>
            </div>
          </div>
        </header>
        
        <main className="glass-card p-6 mb-20 shadow-card-hover">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-mother-blue-dark to-blue-600 flex items-center justify-center text-white shadow-md">
              <span className="font-medium">mAI</span>
            </div>
            <div className="ml-3">
              <h2 className="font-medium text-mother-blue-dark">Maternal Health Assistant</h2>
              <p className="text-xs text-mother-gray-dark">Available 24/7 • Hindi, English & 7 more languages</p>
            </div>
          </div>
          
          <div className="space-y-4 mb-4 max-h-[60vh] overflow-y-auto px-2 py-2 rounded-xl bg-white/30">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 shadow-sm ${
                    message.role === 'user'
                      ? 'bg-gradient-to-r from-mother-blue-dark to-blue-600 text-white'
                      : 'bg-white border border-mother-blue/20 text-mother-gray-dark'
                  }`}
                >
                  <div className="text-sm">{message.content}</div>
                  <div className="text-xs mt-1 opacity-70">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                  {message.role === 'assistant' && (
                    <button 
                      onClick={() => speakText(message.content)}
                      className="mt-1 text-xs text-mother-blue-dark flex items-center"
                    >
                      <Volume2 size={12} className="mr-1" /> Listen
                    </button>
                  )}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white border border-mother-blue/20 rounded-2xl px-4 py-3 shadow-sm">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-mother-blue-dark to-blue-600 animate-pulse"></div>
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-mother-blue-dark to-blue-600 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-mother-blue-dark to-blue-600 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messageEndRef} />
          </div>
          
          <form onSubmit={handleSubmit} className="mt-6 relative">
            <div className="flex gap-2">
              <button
                type="button"
                className="p-3 rounded-full bg-mother-blue/10 text-mother-blue-dark hover:bg-mother-blue/20 transition-colors shadow-sm hover:shadow-md"
              >
                <Plus size={20} />
              </button>
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your question here..."
                  className="w-full py-3 px-4 pr-12 bg-white/80 backdrop-blur-sm border border-mother-blue/20 rounded-full focus:outline-none focus:ring-2 focus:ring-mother-blue-dark shadow-sm"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim()}
                  className={`absolute right-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full transition-all duration-300 ${
                    inputValue.trim() 
                      ? 'bg-gradient-to-r from-mother-blue-dark to-blue-600 text-white shadow-md hover:shadow-lg' 
                      : 'bg-mother-gray/30 text-mother-gray-dark'
                  }`}
                >
                  <Send size={16} className={inputValue.trim() ? 'animate-pulse-gentle' : ''} />
                </button>
              </div>
            </div>
            
            <div className="flex justify-center mt-4 space-x-3">
              <button
                type="button"
                onClick={startSpeechRecognition}
                className="p-2 rounded-full bg-gradient-to-r from-mother-blue/10 to-mother-green/10 text-mother-blue-dark hover:from-mother-blue/20 hover:to-mother-green/20 transition-colors shadow-sm hover:shadow-md"
              >
                <Mic size={20} />
              </button>
              <button
                type="button"
                className="p-2 rounded-full bg-gradient-to-r from-mother-blue/10 to-mother-green/10 text-mother-blue-dark hover:from-mother-blue/20 hover:to-mother-green/20 transition-colors shadow-sm hover:shadow-md"
              >
                <Image size={20} />
              </button>
              <button
                type="button"
                onClick={() => messages.length > 0 && speakText(messages[messages.length - 1].content)}
                className="p-2 rounded-full bg-gradient-to-r from-mother-blue/10 to-mother-green/10 text-mother-blue-dark hover:from-mother-blue/20 hover:to-mother-green/20 transition-colors shadow-sm hover:shadow-md"
              >
                <Volume2 size={20} />
              </button>
            </div>
          </form>
          
          {/* Decorative elements */}
          <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-mother-blue/20 to-mother-pink/20 rounded-full blur-xl"></div>
          <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-mother-green/20 to-mother-blue/20 rounded-full blur-xl"></div>
        </main>
      </div>
      
      <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-mother-blue/10 to-transparent h-20 pointer-events-none" />
    </div>
  );
};

export default ChatAssistant;