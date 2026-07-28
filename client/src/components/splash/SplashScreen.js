import { LogoRolodex } from "../rolodex/LogoRolodex";
import { LogoItem } from "../rolodex/LogoItem";
import { BiLogoSpringBoot } from "react-icons/bi";
import { BiLogoDocker } from "react-icons/bi";
import "./SplashScreen.scss";

export default function Splash() {
  return (
    <section className="splash-screen">
      <LogoRolodex
        items={[
          <LogoItem key="spring" className="logo-item--green">
            <BiLogoSpringBoot className="logo-item__logo" />
          </LogoItem>,
          <LogoItem key="docker" className="logo-item--docker">
            <BiLogoDocker className="logo-item__logo" />
          </LogoItem>,
        ]}
      />
    </section>
  );
}
