import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import NewsList from "./components/NewsList";
import "./App.css";

const App = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchKeyword, setSearchKeyword] = useState("");

  const fetchNews = async (keyword) => {
    setLoading(true);
    setError(null);

    try {
      const q = { keyword };
      const apiKey = "8f01250416fb4a9d83fe746c52c06db4";

      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${keyword}&apiKey=${apiKey}`
      );

      if (!response.ok) {
        throw new Error("뉴스를 가져오는 중 오류가 발생했습니다.");
      }

      const data = await response.json();
      setNews(data.articles);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (searchKeyword) {
      fetchNews(searchKeyword);
    }
  }, [searchKeyword]);

  const handleSearch = (keyword) => {
    setSearchKeyword(keyword);
  };

  return (
    <div className="app">
      <h1>뉴스 검색</h1>
      <SearchBar onSearch={handleSearch} />
      <NewsList news={news} loading={loading} error={error} />
    </div>
  );
};

export default App;
