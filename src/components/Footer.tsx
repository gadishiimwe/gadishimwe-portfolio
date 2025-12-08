const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-2xl font-bold gradient-hero">GAD.</div>
          
          <div className="text-center">
            <p className="text-muted-foreground">
              © 2025 GAD ISHIMWE. All rights reserved.
            </p>
          </div>
          
          <div className="text-sm text-muted-foreground">
            Let's Connect
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;