const Index = () => {
  return (
    <div className="min-h-screen gradient-subtle flex flex-col items-center justify-center px-6 overflow-hidden relative">
      {/* Decorative floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary/10 animate-float" style={{ animationDelay: "0s" }} />
        <div className="absolute top-40 right-20 w-20 h-20 rounded-full bg-accent/15 animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-32 left-1/4 w-24 h-24 rounded-full bg-secondary animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-20 right-1/3 w-16 h-16 rounded-full bg-primary/10 animate-float" style={{ animationDelay: "0.5s" }} />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-2xl">
        {/* Waving hand */}
        <div 
          className="text-7xl md:text-8xl mb-6 inline-block origin-[70%_70%] animate-wave"
          style={{ animationDelay: "0.5s" }}
        >
          👋
        </div>

        {/* Hello text */}
        <h1 
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 opacity-0 animate-fadeInUp"
          style={{ animationDelay: "0.2s" }}
        >
          Hello!
        </h1>

        {/* Subtitle */}
        <p 
          className="text-xl md:text-2xl text-muted-foreground font-light mb-10 opacity-0 animate-fadeInUp"
          style={{ animationDelay: "0.4s" }}
        >
          Welcome to your new space. <br className="hidden sm:block" />
          Let's build something beautiful together.
        </p>

        {/* CTA Button */}
        <div 
          className="opacity-0 animate-scaleIn"
          style={{ animationDelay: "0.6s" }}
        >
          <button className="gradient-warm text-primary-foreground px-8 py-4 rounded-full text-lg font-medium shadow-warm hover:scale-105 transition-transform duration-300 ease-out">
            Get Started
          </button>
        </div>
      </div>

      {/* Bottom decoration */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fadeInUp" style={{ animationDelay: "0.8s" }}>
        <p className="text-sm text-muted-foreground">
          Made with ♥
        </p>
      </div>
    </div>
  );
};

export default Index;
