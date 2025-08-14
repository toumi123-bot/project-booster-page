import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero backdrop-blur-sm" />
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="font-display text-6xl md:text-8xl font-bold mb-6 animate-float">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Alex Morgan
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light leading-relaxed max-w-2xl mx-auto">
            Creative developer & designer passionate about building innovative 
            digital experiences that inspire and engage users.
          </p>
          
          {/* CTA Button */}
          <div className="flex justify-center">
            <Button 
              variant="cta" 
              size="lg"
              className="text-lg px-8 py-6 h-auto font-medium"
            >
              View My Projects
            </Button>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-float opacity-60" 
               style={{ animationDelay: '0.5s' }} />
          <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-accent rounded-full animate-float opacity-40" 
               style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-primary-glow rounded-full animate-float opacity-50" 
               style={{ animationDelay: '1.5s' }} />
        </div>
      </div>
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-[radial-gradient(circle_at_center,rgba(120,119,198,0.3)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>
    </div>
  );
};

export default Index;