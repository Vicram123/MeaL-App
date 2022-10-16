import React from "react";
import { BsHandThumbsUp } from "react-icons/bs";

import { useGlobalContext } from "../context";

const Meals = () => {
  const { isLoading, meals, selectMeal, addToFavorites } = useGlobalContext();

  if (isLoading) {
    return (
      <section className="section">
        <h4>Loading...</h4>
      </section>
    );
  }

  if (meals.length < 1) {
    return (
      <section className="section">
        <h4>No meals matched your search term. Please try again.</h4>
      </section>
    );
  }

  return (
    <section className="section-center">
      {meals.map((singleMeal) => {
        const { idMeal, strMeal: title, strMealThumb: image } = singleMeal;
        return (
          <article key={idMeal} className="single-meal">
            <img
              className="img"
              src={image}
              onClick={() => selectMeal(idMeal)}
              alt={title}
            />
            <footer>
              <h5>{title}</h5>{" "}
              <button
                className="like-btn"
                onClick={() => addToFavorites(idMeal)}
              >
                <BsHandThumbsUp />
              </button>
            </footer>
          </article>
        );
      })}
    </section>
  );
};

export default Meals;
