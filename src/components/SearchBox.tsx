import { useState } from "react";
import { Send } from "lucide-react";

export const SearchBox = () => {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      // Placeholder for future functionality
      console.log("User input:", input);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-4xl mx-auto">
      <div className="glass-effect rounded-2xl p-1.5 shadow-2xl">
        <div className="bg-input rounded-xl flex items-center gap-3 px-6 py-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Describe what you want to build..."
            className="flex-1 bg-transparent border-none outline-none text-foreground text-lg placeholder:text-muted-foreground"
          />
          <button
            type="submit"
            className="p-2 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground transition-colors"
            disabled={!input.trim()}
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </form>
  );
};
