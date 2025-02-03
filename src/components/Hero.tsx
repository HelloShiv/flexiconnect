'use client';
import Image from 'next/image';
import image1 from '../../public/assets/message.png'


export default function Hero(){
  return (
    <div>
      <div className="bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-[72px] sm:py-24 relative overflow-clip">
        <div className="absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] bottom-24 top-[calc(100%-96px)] sm:top-[calc(100%-120px)]"></div>
        <div className="container relative">
          <div className="flex items-center  justify-center">
            <a
              href=""
              className="inline-flex gap-3 border py-1 px-2 rounded-lg border-white/30"
            >
              <span className="bg-[linear-gradient(to_right,#F87AFF,#FB93D0,#C3F0B2,#2FD8FE)] text-transparent bg-clip-text [-webkit-background-clip:text]">
                Version 1.0 is here{" "}
              </span>
              <span>Read More</span>
            </a>
          </div>

          <div className="flex justify-center mt-8">
            <div className="inline-flex relative">
              <h1 className="text-6xl sm:text-[6.3rem] font-bold tracking-tighter text-center max-w-md">
                Build easily <br /> with it
              </h1>
              <Image
                src={image1}
                alt=""
                height="200"
                width="180"
                className="absolute left-[404px] top-[30px] hidden sm:inline "
              />
            </div>
          </div>

          <div className="flex justify-center">
            <p className="text-center text-xl mt-8">
              Celebrate a safer digital space with an app designed to detect
              toxicity, spam, and harmful images, ensuring a cleaner and more
              positive online experience.
            </p>
          </div>
          <div className="flex justify-center mt-8">
            <a href="/doc">
              <button className="bg-white text-black py-3 px-5 rounded-lg font-medium cursor-pointer hover:bg-[#8d55ff] hover:text-white transform hover:scale-105">
                Get for free
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}