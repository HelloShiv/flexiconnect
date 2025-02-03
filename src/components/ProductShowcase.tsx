import Image from "next/image";
import appScreen from "../../public/assets/app-screen.png";

export const ProductShowcase = () => {
  return (
    <div className="bg-black text-white bg-gradient-to-b from-black to-[#5D2CAB] py-[72px] py-24">
      <div className="container">
        <h2 className="text-center text-5xl sm:text-6xl font-bold tracking-tighter">
          Easy-to-Integrate API
        </h2>

        <div className="max-w-xl mx-auto">
          <p className="text-xl text-center text-white/70 mt-5">
            Enhance online safety with AI-powered detection for toxicity, spam,
            and harmful images. Get real-time analysis, seamless integration,
            and smart monitoring—all in one place.
          </p>
        </div>
        <Image
          src={appScreen}
          alt="the product screenshot"
          className="mt-14 mx-auto"
        />
      </div>
    </div>
  );
}