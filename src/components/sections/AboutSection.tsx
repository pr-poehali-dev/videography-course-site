import Icon from "@/components/ui/icon";

const AboutSection = () => {
  return (
    <section className="relative bg-gray-900 py-20 overflow-hidden">
      {/* Film strip perforations */}
      <div className="absolute left-0 top-0 h-full w-8 bg-gray-800 flex flex-col">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="flex-1 border-b-2 border-gray-700 relative">
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gray-900 rounded-full"></div>
          </div>
        ))}
      </div>

      <div className="absolute right-0 top-0 h-full w-8 bg-gray-800 flex flex-col">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="flex-1 border-b-2 border-gray-700 relative">
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gray-900 rounded-full"></div>
          </div>
        ))}
      </div>

      {/* Main content area */}
      <div className="relative mx-8 max-w-6xl mx-auto px-6">
        {/* Film frame border */}
        <div className="border-4 border-gray-600 bg-gray-800 p-8 relative">
          {/* Film frame corners */}
          <div className="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-gray-400"></div>
          <div className="absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2 border-gray-400"></div>
          <div className="absolute bottom-2 left-2 w-3 h-3 border-l-2 border-b-2 border-gray-400"></div>
          <div className="absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 border-gray-400"></div>

          <div className="text-center">
            {/* Film strip title */}
            <div className="inline-block bg-gray-700 px-6 py-2 mb-8 relative">
              <h2 className="text-3xl font-bold text-white helvetica-style">
                О КУРСЕ
              </h2>
              <div className="absolute -top-1 -bottom-1 left-0 right-0 border-t border-b border-dashed border-gray-500"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Photo frame */}
              <div className="relative">
                <div className="bg-gray-700 p-4 transform rotate-1 shadow-2xl">
                  <div className="bg-gradient-to-br from-gray-600 to-gray-800 aspect-square rounded-lg flex items-center justify-center overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=400&h=400&fit=crop"
                      alt="Автор курса"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Photo corners */}
                  <div className="absolute top-1 left-1 w-6 h-6 border-l-4 border-t-4 border-gray-300"></div>
                  <div className="absolute top-1 right-1 w-6 h-6 border-r-4 border-t-4 border-gray-300"></div>
                  <div className="absolute bottom-1 left-1 w-6 h-6 border-l-4 border-b-4 border-gray-300"></div>
                  <div className="absolute bottom-1 right-1 w-6 h-6 border-r-4 border-b-4 border-gray-300"></div>
                </div>

                {/* Film strip under photo */}
                <div className="absolute -bottom-4 -right-4 bg-gray-600 px-4 py-2 transform rotate-3 shadow-lg">
                  <span className="text-white text-sm font-mono">
                    РЕЖИССЁР-КУРСА
                  </span>
                </div>
              </div>

              {/* Course info */}
              <div className="text-left space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Александр Петров
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    5+ лет создания визуального контента для брендов и частных
                    клиентов. Специализация — эстетичная съемка повседневности и
                    lifestyle-контент.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Icon name="Video" size={20} className="text-primary" />
                    <span className="text-gray-300">
                      15+ часов практических уроков
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Users" size={20} className="text-primary" />
                    <span className="text-gray-300">
                      500+ довольных учеников
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Award" size={20} className="text-primary" />
                    <span className="text-gray-300">
                      Сертификат по завершении
                    </span>
                  </div>
                </div>

                <div className="bg-gray-700 p-4 rounded-lg border-l-4 border-primary">
                  <p className="text-gray-200 italic">
                    "Красота скрыта в обычных моментах. Я научу вас её находить
                    и показывать миру."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vintage film texture overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/20 to-gray-900/40 pointer-events-none"></div>
    </section>
  );
};

export default AboutSection;
