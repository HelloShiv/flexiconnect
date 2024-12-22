import text from "../../public/assets/text.svg";
import spam from "../../public/assets/spam.svg";
import fast from "../../public/assets/fast.svg";
import object from "../../public/assets/object.svg";
import Image, { StaticImageData } from "next/image";

const imageMap: Record<"text" | "spam" | "fast" | "object", StaticImageData> = {
  text,
  spam,
  fast,
  object,
};

const features = [
  {
    title: "text",
    description: "Fast API and everything needs to be fast and smooth",
  },
  {
    title: "spam",
    description: "Fast API and everything needs to be fast and smooth",
  },
  {
    title: "object",
    description: "Fast API and everything needs to be fast and smooth",
  },
  {
    title: "fast",
    description: "Fast API and everything needs to be fast and smooth",
  },
];

export const Features = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-center font-bold text-5xl tracking-tighter">
          Everything you need
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-center mt-5 text-xl text-white/70">
            Enjoy customizable lists, teamwork tools, and smart tracking all in
            one place. Set tasks, get reminders, and see your progress simply
            and quickly.
          </p>
        </div>
        <div className="mt-16 flex flex-col sm:flex-row gap-4">
          {features.map(({ title, description }) => (
            <div
              key={title}
              className="border border-white/30 px-5 py-10 text-center rounded-xl sm:flex-1"
            >
              <div className="inline-flex h-14 w-14 justify-center items-center rounded-l">
                <Image
                  src={imageMap[title as keyof typeof imageMap]}
                  alt={description}
                  width={50}
                  height={50}
                />
              </div>
              <h3 className="mt-6 font-bold">{title}</h3>
              <p className="mt-2 text-white/70">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
