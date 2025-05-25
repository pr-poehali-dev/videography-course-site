const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
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

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-12 gap-8 min-h-[80vh] items-center">
            {/* Left Column - Main Text */}
            <div className="col-span-12 md:col-span-8">
              <div className="space-y-12">
                <div>
                  <h1 className="font-helvetica font-light text-5xl md:text-7xl leading-[1.1] tracking-tight text-gray-900">
                    ПОКАЖИТЕ
                    <br />
                    <span className="font-medium text-primary">КРАСОТУ</span>
                    <br />
                    ВАШЕЙ ЖИЗНИ
                  </h1>
                </div>

                <div className="md:ml-24">
                  <p className="font-helvetica text-lg md:text-xl text-secondary max-w-md leading-relaxed">
                    Эстетичная видеосъемка повседневных моментов. Превращаем
                    обычное в искусство.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - CTA */}
            <div className="col-span-12 md:col-span-4">
              <div className="md:text-right space-y-8">
                <div className="space-y-4">
                  <div className="text-sm font-helvetica text-secondary uppercase tracking-widest">
                    ВИДЕОСЪЕМКА
                  </div>
                  <div className="text-sm font-helvetica text-secondary uppercase tracking-widest">
                    МОНТАЖ
                  </div>
                  <div className="text-sm font-helvetica text-secondary uppercase tracking-widest">
                    ЭСТЕТИКА
                  </div>
                </div>

                <button className="bg-primary text-white px-8 py-4 font-helvetica text-sm uppercase tracking-wider hover:bg-blue-700 transition-colors">
                  НАЧАТЬ ПРОЕКТ
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="space-y-6">
              <div className="w-12 h-12 bg-primary"></div>
              <h3 className="font-helvetica font-medium text-xl text-gray-900">
                ПОВСЕДНЕВНАЯ КРАСОТА
              </h3>
              <p className="font-helvetica text-secondary leading-relaxed">
                Находим эстетику в простых моментах жизни. Каждый кадр — история
                вашего дня.
              </p>
            </div>

            <div className="space-y-6">
              <div className="w-12 h-12 bg-secondary"></div>
              <h3 className="font-helvetica font-medium text-xl text-gray-900">
                МИНИМАЛИСТИЧНЫЙ ПОДХОД
              </h3>
              <p className="font-helvetica text-secondary leading-relaxed">
                Чистые линии, продуманная композиция. Убираем лишнее, оставляем
                суть.
              </p>
            </div>

            <div className="space-y-6">
              <div className="w-12 h-12 bg-gray-900"></div>
              <h3 className="font-helvetica font-medium text-xl text-gray-900">
                АРХИТЕКТУРА КАДРА
              </h3>
              <p className="font-helvetica text-secondary leading-relaxed">
                Каждый план выстроен как здание. Геометрия эмоций в движении.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
