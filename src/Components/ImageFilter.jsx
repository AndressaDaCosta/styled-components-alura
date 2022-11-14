import React from "react";
import alimentacao from "../assets/images/restaurant.png";
import outros from "../assets/images/other-2.png";
import saude from "../assets/images/healthcare.png";
import transporte from "../assets/images/transportation.png";
import utilidades from "../assets/images/utilities.png";
import { IconeTema } from "../Components/UI";

export default (type) => {
  const Images = {
    Restaurante: <IconeTema src={alimentacao} alt="Restaurante" />,
    Utilidades: <IconeTema src={utilidades} alt="Utilidades" />,
    Saude: <IconeTema src={saude} alt="Saude" />,
    Transporte: <IconeTema src={transporte} alt="Transporte" />,
    default: <IconeTema src={outros} alt="Outro" />,
  };

  return Images[type] || Images.default;
};
