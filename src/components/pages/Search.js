import React from "react";
//import { Grid, Card, CardContent, Typography } from "@mui/material";
//import { Link } from "react-router-dom";
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
      <SearchResults food={cheapFood} title={"Gremlin Snacks"} />
      <SearchResults food={mediumfood} title={"Premium Gremlin Snacks"} />
      <SearchResults food={expensivefood} title={"Ultra-Premium Gremlin Snacks"} />
      <SearchResults food={reallyexpensivefood} title={"Too expensive for Gremlins"} />
    </>
  );
};
export default Search;
