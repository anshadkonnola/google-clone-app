import React, { useState } from 'react';
import './App.css'

function App() {
  const [query, setQuery] = useState('');



  const handleSearch = (event) => {
    event.preventDefault();
    try {
      let link = query;
      if(link.slice(0, 4) === 'www.') link = `https://${link}`;
      let url = new URL(link);
      window.location.href = link;
    } catch(_){
      window.location.href = `https://www.google.com/search?q=${query}`;
    }
  };

  const handleLucky = (event) => {
    event.preventDefault();
    window.location.href = `https://www.google.com/search?q=${query}&btnI=`;
  };

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  document.title = 'Google';
  return (
    <div className="container">
      <div className="header">
        <div className="links">
          <a href="https://mail.google.com/mail/?authuser=0&ogbl">Gmail</a>
          <a href="https://www.google.co.in/imghp?hl=en&authuser=0&ogbl">Images</a>
          <a href="https://www.google.co.in/intl/en/about/products">Apps</a>
          <a href="https://accounts.google.com/SignOutOptions?hl=en&continue=https://www.google.com/">Account</a>
        </div>
      </div>
      <div className="logo">
        <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="Google Logo" />
      </div>
      <form className="search">
        <input type="text" className="search-input" value={query} onChange={handleInputChange} />
      </form>
      <div className="search-buttons">
          <button className="search-btn" onClick={handleSearch}>Google Search</button>
          <button className="feeling-lucky-btn" onClick={handleLucky}>I'm Feeling Lucky</button>
      </div>
    </div>
  );
}

export default App;
