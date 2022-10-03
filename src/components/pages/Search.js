import React from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import SearchResults from "../searchResults";

const Search = ({ searchResults }) => {

  const cheapFood = searchResults.filter((value) => {
    return value.price === "$";
  });
  const mediumfood = searchResults.filter((value) => {
    return value.price === "$$";
  });
  const expensivefood = searchResults.filter((value) => {
    return value.price === "$$$";
  });
  const reallyexpensivefood = searchResults.filter((value) => {
    return value.price === "$$$$"
  });

  return (
    <>
      <SearchResults food={cheapFood} title={"$10 > a plate"} />
      <SearchResults food={mediumfood} title={"$11-$30 a plate"} />
      <SearchResults food={expensivefood} title={"$31-$60 a plate"} />
      <SearchResults food={reallyexpensivefood} title={"$61+ a plate"} />
    </>
  );
};
export default Search;
