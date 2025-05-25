const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="font-helvetica font-medium text-lg tracking-tight">
            AESTHETIC
          </div>
          <div className="flex space-x-8 font-helvetica text-sm">
            <a
              href="#work"
              className="text-secondary hover:text-primary transition-colors"
            >
              РАБОТЫ
            </a>
            <a
              href="#about"
              className="text-secondary hover:text-primary transition-colors"
            >
              О НАС
            </a>
            <a
              href="#contact"
              className="text-secondary hover:text-primary transition-colors"
            >
              КОНТАКТ
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
