import { title } from "process";
import React from "react";

const Champ = ({ image, name }) => {
  return (
    <div className="champ">
      <img className="champ__image" alt={name} src={image} />
      <div className="champ__details">
        <h1 className="champ__name">{name}</h1>
      </div>
    </div>
  );
};

export default Champ

/* const ChampOnClick = ({ title, nation, role }) => {
    return (
        <div className="champ__info">
            <h2 className="champ__title">{title}</h2>
            <h2 className="champ__nation">{nation}</h2>
            <h2 className="champ__role">{role}</h2>
        </div>
    );
}; */



