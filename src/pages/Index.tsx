import { Header } from "@/components/Header";
import { SearchBox } from "@/components/SearchBox";

const Index = () => {
  return (
    <div className="min-h-screen gradient-bg relative overflow-hidden">
      {/* Floating cloud elements */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" />
      <div className="absolute top-40 right-1/4 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '5s' }} />
      <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '10s' }} />
      
      <Header />
      
      <main className="relative z-10 container mx-auto px-6 pt-32 pb-20">
        <div className="text-center space-y-8 mb-16">
          <div className="inline-block">
            <span className="text-sm px-4 py-2 rounded-full glass-effect text-muted-foreground">
              Introducing <span className="text-primary font-semibold">Lovable Cloud</span> ⚡
            </span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold leading-tight">
            Build something{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Lovable
            </span>
          </h1>
          
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Create apps and websites by chatting with AI
          </p>
        </div>

        <SearchBox />

        <div className="mt-20 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="glass-effect rounded-xl p-6 text-center">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="font-semibold text-lg mb-2">Lightning Fast</h3>
            <p className="text-sm text-muted-foreground">
              Build production-ready apps in minutes, not weeks
            </p>
          </div>
          
          <div className="glass-effect rounded-xl p-6 text-center">
            <div className="text-3xl mb-3">🎨</div>
            <h3 className="font-semibold text-lg mb-2">Beautiful Design</h3>
            <p className="text-sm text-muted-foreground">
              Every component is crafted for modern aesthetics
            </p>
          </div>
          
          <div className="glass-effect rounded-xl p-6 text-center">
            <div className="text-3xl mb-3">🚀</div>
            <h3 className="font-semibold text-lg mb-2">AI Powered</h3>
            <p className="text-sm text-muted-foreground">
              Advanced AI understands your vision and brings it to life
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
