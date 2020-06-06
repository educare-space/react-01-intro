import React from 'react';
import './Content.css';

function Content() {
  return (
    <div className="Content">
      <div className="hero">
        <h1>Rio Purnomo</h1>
        <p>Fullstack Developer</p>
      </div>
      <div className="portfolio">
        <ul>
          <li><img src="https://images.unsplash.com/photo-1588783948922-d2f155b13c89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&h=500&q=60" alt=""/></li>
          <li><img src="https://images.unsplash.com/photo-1588783948922-d2f155b13c89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&h=500&q=60" alt=""/></li>
          <li><img src="https://images.unsplash.com/photo-1588783948922-d2f155b13c89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&h=500&q=60" alt=""/></li>
        </ul>
      </div>
    </div>
  );
}

export default Content;
