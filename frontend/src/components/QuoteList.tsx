import React, { useState, useEffect } from "react";
// import { getQuotes } from "../services/quoteService";

const QuoteList: React.FC = () => {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        // const quotesData = await getQuotes();
        // setQuotes(quotesData);
      } catch (error) {
        console.error("Error fetching quotes:", error);
        alert("Error fetching quotes. Please try again.");
      }
    };
    fetchQuotes();
  }, []);

  return (
    <div>
      <h2>Quote List</h2>
      <ul>
        {quotes.map((quote: any) => (
          <li key={quote.id}>
            {quote.customer}: {quote.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuoteList;
