import { React, useState, useEffect } from "react";
import {
  Typography,
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Button,
  TextField,
  InputAdornment,
  Paper,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./pages/Search";
import SearchIcon from "@mui/icons-material/Search";
import yelp from "../api/yelp";

var mySearchText = 'mexican';
var zipCode = '24416';

const Layout = () => {
  const [searchText, setSearchText] = useState("mexican");
  const [zipText, setZipText] = useState("24416");
  const [results, setResults] = useState([]);




  const searchApi = async (zip, term) => {
    const response = await yelp(zip, term);
    setResults(response.data.businesses);

    const response2 = await fetch("/api/yelp");
    const data = await response2.json();
    console.log(data);
  };

  const doSearch = (e) => {
    setSearchText(e.target.value);
    mySearchText = e;
    searchApi(zipCode.target.value, e.target.value);
  };

  const zipSearch = (zip) => {
    setZipText(zip.target.value);
    zipCode = zip;
    searchApi(zip.target.value, mySearchText.target.value)
  }
  useEffect(() => {
    searchApi("24416", "Mexican Food");
  }, []);

  return (
    <>
      <Paper sx={{ backgroundColor: "#eeeeee", pb: 2 }}>
        <BrowserRouter>
          <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
              <Toolbar>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  <TextField
                    onKeyPress={(e) => {
                      if (e.key === "Enter") doSearch(e);
                    }}
                    label="Search"
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Typography>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  <TextField onKeyPress={(zip) => {
                    if (zip.key === "Enter") zipSearch(zip);
                  }}
                    label="zipcode"
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Typography>
                <Button color="inherit">Login</Button>
              </Toolbar>
            </AppBar>
          </Box>
          <Typography variant="6">
            Your search results for {searchText} in {zipText}
          </Typography>
          <Routes>
            <Route
              exact
              path="/"
              element={<Search searchResults={results} />}
            />
            <Route
              exact
              path="/search"
              element={<Search searchResults={results} />}
            />
          </Routes>
        </BrowserRouter>
      </Paper>
    </>
  );
};

export default Layout;
