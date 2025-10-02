import { Header } from "@/components/Header";

const About = () => {
  return (
    <div className="min-h-screen gradient-bg">
      <Header />
      
      <main className="container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            About Us
          </h1>
          
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-foreground/90 leading-relaxed text-xl">
              We're revolutionizing the way people build digital products by combining the power of artificial intelligence with intuitive, conversational interfaces.
            </p>

            <div className="mt-12 space-y-8">
              <div className="glass-effect rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
                <p className="text-foreground/80 leading-relaxed">
                  To democratize software development and empower everyone to bring their ideas to life, regardless of technical expertise. We believe that creativity shouldn't be limited by coding knowledge.
                </p>
              </div>

              <div className="glass-effect rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">What We Do</h2>
                <p className="text-foreground/80 leading-relaxed">
                  Our platform enables you to create sophisticated web applications through natural conversation with AI. Simply describe what you want to build, and our advanced AI will transform your vision into reality, handling the complex technical details behind the scenes.
                </p>
              </div>

              <div className="glass-effect rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Our Values</h2>
                <ul className="space-y-3 text-foreground/80">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span><strong className="text-foreground">Innovation:</strong> Pushing the boundaries of what's possible with AI technology</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span><strong className="text-foreground">Accessibility:</strong> Making powerful tools available to everyone</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span><strong className="text-foreground">Quality:</strong> Delivering exceptional results that exceed expectations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span><strong className="text-foreground">Community:</strong> Building a supportive ecosystem of creators and builders</span>
                  </li>
                </ul>
              </div>

              <div className="glass-effect rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Join Us</h2>
                <p className="text-foreground/80 leading-relaxed">
                  We're just getting started, and we'd love to have you along for the journey. Join our beta program to experience the future of application development and help shape the platform's evolution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
