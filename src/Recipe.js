import React from "react";
import style from "./recipe.module.css";

const Recipe = (props) => {
  return (
    <div className={style.recipe}>
      <h1>{props.title}</h1>
      <ol>
        {props.ingredients.map((ing) => (
          <li>{ing.text}</li>
        ))}
      </ol>
      <p>{props.calories}</p>
      <img className={style.image} src={props.image} alt=""></img>
    </div>
  );
};

export default Recipe;
