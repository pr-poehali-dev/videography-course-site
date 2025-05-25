interface WorkCardProps {
  number: string;
  category: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  reversed?: boolean;
}

const WorkCard = ({
  number,
  category,
  title,
  description,
  imageUrl,
  imageAlt,
  reversed = false,
}: WorkCardProps) => {
  return (
    <div className="grid grid-cols-12 gap-8 items-center">
      <div
        className={`col-span-12 md:col-span-4 ${reversed ? "md:order-1" : ""} space-y-6`}
      >
        <div>
          <div className="text-xs font-helvetica text-secondary uppercase tracking-widest mb-2">
            {number} / {category}
          </div>
          <h3 className="font-helvetica font-medium text-xl text-gray-900">
            {title}
          </h3>
        </div>
        <p className="font-helvetica text-secondary leading-relaxed">
          {description}
        </p>
      </div>
      <div
        className={`col-span-12 md:col-span-8 ${reversed ? "md:order-2" : ""}`}
      >
        <div className="aspect-video bg-gray-100 relative overflow-hidden">
          <img
            src={imageUrl}
            alt={imageAlt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
