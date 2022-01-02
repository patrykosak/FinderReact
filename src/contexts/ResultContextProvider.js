import React, { createContext, useContext, useState } from "react";

const ResultContext = createContext();
const baseUrl = "https://google-search3.p.rapidapi.com/api/v1";

export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const getResults = async (type) => {
    setIsLoading(true);

    const response = await fetch(`${baseUrl}${type}`, {
      method: "GET",
      headers: {
        "x-user-agent": "desktop",
        "x-proxy-location": "US",
        "x-rapidapi-host": "google-search3.p.rapidapi.com",
        "x-rapidapi-key": "060654bb7cmsh09c14f32db2c8bbp121593jsnc5d9348928f3",
      },
    });

    const data = await response.json();

    setResults(data);
    setIsLoading(false);

  };
  return(
      <ResultContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, isLoading}}>
          {children}
      </ResultContext.Provider>
  )
};

export const useResultContext = () => useContext(ResultContext);