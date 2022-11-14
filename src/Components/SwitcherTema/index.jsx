import React from "react";
import ThemeOn from "../../assets/images/on.png";
import ThemeOff from "../../assets/images/off.png";
import { Icone, IconeOnOff } from "../UI";

const claro = <IconeOnOff src={ThemeOn} alt="Tema Claro" />;
const escuro = <IconeOnOff src={ThemeOff} alt="Tema Escuro" />;

export default ({ tema }) => (tema ? escuro : claro);
