import InstaIcon from "../../public/assets/insta.svg";
import xsocial from "../../public/assets/x-social.svg";
import YoutubeIcon from "../../public/assets/youtube.svg";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="py-5 bg-black text-white/60 border-t border-white/20">
      <div className="container">
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
          <div className="text-center">
            © 2025 FlexiConnect, Inc. All rights reserved
          </div>
          <ul className="flex justify-center gap-2.5">
            <li>
              <Image src={xsocial} alt="Twitter icon" className="invert" />
            </li>
            <li>
              <Image
                src={YoutubeIcon}
                alt="YouTube icon"
                className="invert brightness-0"
              />
            </li>
            <li>
              <Image
                src={InstaIcon}
                alt="Instagram icon"
                className="invert"
              />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
