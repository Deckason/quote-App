import React, { useState, useEffect } from 'react';
import useFetchQuote from '../hooks/useFetchQuote';

const QuoteCard = () => {
    const { quote, isLoading, error, fetchQuote } = useFetchQuote();
    const [quoteList, setQuoteList] = useState(() => JSON.parse(localStorage.getItem('savedQuotes')) || []);
  
    useEffect(() => {
      localStorage.setItem('savedQuotes', JSON.stringify(quoteList));
    }, [quoteList]);
  
    const saveToList = (quote) => {
      if (!quoteList.includes(quote)) {
        setQuoteList((prev) => [quote, ...prev]);
      } else {
        alert('Quote already saved');
      }
    };

    const deleteQuote = (quoteToDelete)=>{
        const updatedList = quoteList.filter(q => q !== quoteToDelete);
        setQuoteList(updatedList);
    }
  return (<>
    <div className="quote-card">
        {error && <p className='err'>{error}</p>}
        {isLoading && <div className="loader"></div>}
        {!isLoading && !error && quote && 
            <p className="quote-text">{quote}</p>}
      <div className="buttons">
        <button disabled={isLoading} onClick={fetchQuote} className="btn">Get New Quote</button>
        <button disabled={isLoading} onClick={()=>saveToList(quote)} className="btn">Save Quote</button>
      </div>
    </div>
    <h2>Saved Quotes</h2>
    <div className="saved-quotes">
      {quoteList.map((q, index) => (
        <div key={index} className="quote-card">
          <p>{q}</p>
          <button  onClick={()=>deleteQuote(q)} className="delBtn">Delete Quote</button>
        </div>
      ))}
    </div>
    </>
  );
};

export default QuoteCard;
