import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import News from "../Components/News";
import { searchNews } from "../Services";
import "../Styles/Styles.css";

function Dashboard() {
  const [newsList, setNewsList] = useState([]);
  const [search, setSearch] = useState("");
  const [keyword, setKeyword] = useState("");
  const [showErrorMsg, setShowErrorMsg] = useState(false);
  useEffect(() => {
    fetchNews(search, keyword);
  }, []);
  const fetchNews = async () => {
    const data = await searchNews(search, keyword);
    setNewsList(data.response);
  };
  const handleInputChange = (e) => {
    setSearch(e.target.value);
    if (search) {
      setShowErrorMsg(false);
    }
  };
  const handleSubmitButton = () => {
    if (search === "") {
      setShowErrorMsg(true);
    }
    fetchNews(search, keyword);
  };

  return (
    <div>
      <div className="heading">
        <span>News Lister</span>
      </div>
      <div>
        <div className="search-container">
          <input
            type="text"
            autoComplete="off"
            placeholder="seach-input"
            onChange={handleInputChange}
          />
          <button
            onClick={handleSubmitButton}
            name="Search"
            value="Search"
            className="search-button"
          >
            Search
          </button>
        </div>
        {showErrorMsg && <small className="danger">Please enter text</small>}
      </div>
      <Grid container className="news-container">
        {newsList &&
          newsList.results &&
          newsList.results.map((news, i) => {
            return (
              <Grid xs={4} item style={{ padding: "5px" }} key={i}>
                <News news={news} />
              </Grid>
            );
          })}
      </Grid>
      <Grid container className="news-container">
        {!newsList.results && <p>News not found</p>}
      </Grid>
    </div>
  );
}

export default Dashboard;
