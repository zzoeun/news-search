import React from "react";

const NewsList = ({ news, loading, error }) => {
  if (loading) {
    return <p>로딩 중입니다...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (news.length === 0) {
    return <p>검색 결과가 없습니다.</p>;
  }

  return (
    <div className="news-list">
      {news.map((news, index) => (
        <div key={index} className="news-item">
          <h3>{news.title}</h3>
          <p>{news.description}</p>
          <a href={news.url} target="_blank" rel="noopener noreferrer">
            더보기
          </a>
        </div>
      ))}
    </div>
  );
};

export default NewsList;
