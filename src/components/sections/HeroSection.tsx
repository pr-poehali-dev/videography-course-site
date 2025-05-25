const HeroSection = () => {
  return (
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
  );
};

export default HeroSection;
