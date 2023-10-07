import { ImFacebook } from "react-icons/im";
import { ButtonIcon } from "./ButtonIcon";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

const ButtonIconContainer = () =>{
    return (
        <aside className="bg-white w-24 flex flex-col items-center py-6 ">
        <div className=" flex flex-col items-center mt-3 fixed ">
          <span className="font-bold">Links</span>
          <ButtonIcon link="https://www.facebook.com/duvan.ruiz.92" Icono={ImFacebook} />
          <ButtonIcon link="https://www.instagram.com/duvan0598/" Icono={AiFillInstagram} />
          <ButtonIcon link="https://www.linkedin.com/in/duvan-f-ruiz-ocampo-09a009183/" Icono={AiFillLinkedin} />
          <ButtonIcon link="https://github.com/DuvanR0598" Icono={AiFillGithub} />
        </div>
      </aside>
    ); 
};

export { ButtonIconContainer };