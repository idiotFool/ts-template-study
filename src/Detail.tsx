import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Search from "./Search";

const fetchData = async (pageNumber: number) => {
  // 模拟获取数据的逻辑，这里可以替换成真实的数据请求
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Data for page ${pageNumber}`.repeat(1000));
    }, 1000);
  });
};

const Detail = () => {
  const [data, setData] = useState("");
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const page = parseInt(queryParams.get("page")) || 1;
    fetchData(page).then((responseData) => {
      setData(responseData);
    });
  }, [location.search]);

  const handlePrevPage = () => {
    const queryParams = new URLSearchParams(location.search);
    const currentPage = parseInt(queryParams.get("page")) || 1;
    const newPage = currentPage > 1 ? currentPage - 1 : 1;
    const newUrl = `?page=${newPage}`;
    history.replace(newUrl);
  };

  const handleNextPage = () => {
    const queryParams = new URLSearchParams(location.search);
    const currentPage = parseInt(queryParams.get("page")) || 1;
    const newPage = currentPage + 1;
    const newUrl = `?page=${newPage}`;
    history.replace(newUrl);
  };

  return (
    <div>
      <Search />

      <button onClick={handlePrevPage} className="button">
        Previous Page
      </button>
      <button onClick={handleNextPage} className="button">
        Next Page
      </button>

      <p>{data}</p>
    </div>
  );
};

export default Detail;
