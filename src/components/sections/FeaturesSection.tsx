const FeaturesSection = () => {
  const features = [
    {
      bgColor: "bg-primary",
      title: "ПОВСЕДНЕВНАЯ КРАСОТА",
      description:
        "Находим эстетику в простых моментах жизни. Каждый кадр — история вашего дня.",
    },
    {
      bgColor: "bg-secondary",
      title: "МИНИМАЛИСТИЧНЫЙ ПОДХОД",
      description:
        "Чистые линии, продуманная композиция. Убираем лишнее, оставляем суть.",
    },
    {
      bgColor: "bg-gray-900",
      title: "АРХИТЕКТУРА КАДРА",
      description:
        "Каждый план выстроен как здание. Геометрия эмоций в движении.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {features.map((feature, index) => (
            <div key={index} className="space-y-6">
              <div className={`w-12 h-12 ${feature.bgColor}`}></div>
              <h3 className="font-helvetica font-medium text-xl text-gray-900">
                {feature.title}
              </h3>
              <p className="font-helvetica text-secondary leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
