import { Promo } from "../Main/Promo/Promo";
import { AboutProject } from "./AboutProject/AboutProject";
import { Techs } from "./Techs/Techs";
import { Portfolio } from "./Portfolio/Portfolio";
import './Main.css';
import { useRef } from "react";

export const Main = () => {
  const section = useRef(0);
  return (
    <main className="main">
      <Promo />
        <AboutProject />
      <Techs />
      <Portfolio />
    </main>
  );
};
