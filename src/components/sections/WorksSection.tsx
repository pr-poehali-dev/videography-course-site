import WorkCard from "../WorkCard";

const WorksSection = () => {
  const works = [
    {
      number: "01",
      category: "АРХИТЕКТУРА",
      title: "ГЕОМЕТРИЯ СВЕТА",
      description:
        "Исследование пространства через движение камеры. Архитектурные формы как живая скульптура.",
      imageUrl:
        "https://images.unsplash.com/photo-1542038784456-1ea8e851b30d?w=800&h=450&fit=crop&crop=center",
      imageAlt: "Минималистичная архитектура в движении",
    },
    {
      number: "02",
      category: "ПОРТРЕТ",
      title: "ТИШИНА В КАДРЕ",
      description:
        "Человек в пространстве. Минимализм эмоций и максимум присутствия.",
      imageUrl:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=450&fit=crop&crop=center",
      imageAlt: "Портретная видеосъемка в минималистичном стиле",
    },
    {
      number: "03",
      category: "ПОВСЕДНЕВНОСТЬ",
      title: "КРАСОТА ПРОСТОГО",
      description:
        "Обычный день как произведение искусства. Находим эстетику в повседневных ритуалах.",
      imageUrl:
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=450&fit=crop&crop=center",
      imageAlt: "Повседневные моменты через призму эстетики",
    },
  ];

  return (
    <section id="work" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="grid grid-cols-12 gap-8 mb-20">
          <div className="col-span-12 md:col-span-4">
            <h2 className="font-helvetica font-medium text-3xl md:text-4xl text-gray-900 tracking-tight">
              РАБОТЫ
            </h2>
          </div>
          <div className="col-span-12 md:col-span-8">
            <p className="font-helvetica text-lg text-secondary leading-relaxed max-w-2xl">
              Каждый проект — уникальная история. От повседневных моментов до
              архитектурных форм в движении.
            </p>
          </div>
        </div>

        {/* Works Grid */}
        <div className="space-y-24">
          {works.map((work, index) => (
            <WorkCard key={work.number} {...work} reversed={index === 1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorksSection;
