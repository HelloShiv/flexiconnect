import Image from 'next/image'
import java from '../../public/assets/java.svg'
import express from '../../public/assets/express.svg'
import nextimg from '../../public/assets/next.svg'
import nodeimg from '../../public/assets/node.svg'
import reactimg from '../../public/assets/react.svg'
import pyton from '../../public/assets/python.svg'

const images = [
  {src: java  , alt: "java"},
  {src: express , alt: "express"},
  {src: nextimg , alt: "nextimg"},
  {src: nodeimg , alt: "nodeimg"},
  {src: reactimg, alt: "reactimg"},
  {src: pyton, alt: "python"}

];

export default function LogoTicker(){
  return (
    <div className="bg-black text-white py-[72px] sm:py-24">
      <div className="container  ">
        <h2 className="text-xl text-center text-white/70">
          Build and Integrate our APIs in your project
        </h2>
        <div className="overflow-hidden mt-9 before:content-[''] after-content-[''] before:absolute after:absolute before:h-full after:h-full before:w-20 after:w-5 relative  after:right-0 before:left-0 before:top-0 after:top-0 before:bg-[linear-gradient(to_right,#000,rgb(0,0,0,0)]] after:bg-[linear-gradient(to_left,#000,rgb(0,0,0,0)]]">
          <div className=" flex gap-16 justify-center items-center">
            {images.map(({ src, alt }, index) => (
              <Image
                key={index}
                src={src}
                alt={alt}
                className="flex-none h-12 w-auto"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

