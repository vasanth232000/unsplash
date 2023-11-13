import React from "react";
import { getSearch } from "./Queries/unSplash";

const Gallery = () => {
  const { data, isError, error, isLoading } = getSearch();

  if (isLoading) {
    return (
      <section className="image-container">
        <h4>Loading...</h4>
      </section>
    );
  }
  if (isError) {
    return (
      <section className="image-container">
        <h4>There was an error...</h4>
      </section>
    );
  }

  if (data.results.length < 1) {
    return (
      <section className="image-container">
        <h4>No results found...</h4>
      </section>
    );
  }

  return (
    <section className="image-container">
      {data.results.map((item) => {
        const url = item?.urls?.regular;
        return (
          <img
            src={url}
            alt={item?.description}
            className="img"
            key={item?.id}
          />
        );
      })}
    </section>
  );
};

export default Gallery;
