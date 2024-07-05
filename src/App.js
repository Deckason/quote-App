import React from 'react';
import './App.css';
import QuoteCard from './components/quoteCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Random Ron Swanson Quotes</h1>
      </header>
      <main>
        <QuoteCard />
      </main>
    </div>
  );
}

export default App;
