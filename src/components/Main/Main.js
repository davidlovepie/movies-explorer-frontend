import { Promo } from "../Main/Promo/Promo";
import { AboutProject } from "./AboutProject/AboutProject";
import { Techs } from "./Techs/Techs";
import { Portfolio } from "./Portfolio/Portfolio";
import "./Main.css";

export const Main = () => {
  return (
    <main className="main">
      <Promo />
      <AboutProject />
      <Techs />
      <Portfolio />
    </main>
  );
};
