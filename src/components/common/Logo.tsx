import { ReactNode } from "react";
import LogoImage from "../../assets/logo.png";
const Logo = ({ name }: { name: ReactNode }) => {
  return (
    <div className="flex gap-3 items-center">
      <img width={24} height={24} src={LogoImage} alt="logo" />
      <p className="font-extrabold text-2xl flex items-center gap-2">{name}</p>
    </div>
  );
};

export default Logo;
