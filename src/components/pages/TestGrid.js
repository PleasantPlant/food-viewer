import React from "react";
import { Typography, Grid, Button, Card, CardContent } from "@mui/material";
import { Link } from "react-router-dom";

const TestGrid = () => {
  const people = ["Aaron", "Tim", "James", "Hayden", "Scooter", "Bob"];
  return (
    <>
      <Grid container spacing={2}>
        {people.map((value) => {
          return (
            <Grid item xs={6} md={2}>
              <Card>
                <CardContent>{value}</CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
      <Typography>I am the test grid</Typography>
      <Button component={Link} to="/search" variant="outlined">
        Search
      </Button>
    </>
  );
};
export default TestGrid;
