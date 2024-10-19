import { createContext, useContext, useEffect, useState } from "react";

export const QuoteContext = createContext();

export const useQuoteContext = () => {
  return useContext(QuoteContext);
};
const getQuote = async (setquotes, limit) => {
  try {
    const res = await fetch(
      `https://dummyjson.com/quotes?limit=${limit}&skip=10`
    );
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    
    setquotes(data);
 
  } catch (error) {
    console.error("Error fetching quotes:", error);
  }
};
export const QuoteContextProvider = ({ children }) => {
  const [limit, setlimit] = useState(3);
  const [quotes, setquotes] = useState([]);
  useEffect(() => {
    getQuote(setquotes, limit);
  }, [limit]);
  return (
    <QuoteContext.Provider value={{ quotes, setlimit,limit }}>
      {children}
    </QuoteContext.Provider>
  );
};
