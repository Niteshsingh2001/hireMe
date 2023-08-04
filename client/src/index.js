import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { JobListing } from './context/job-list.context';
import { SearchContextProvider } from './context/search.context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <SearchContextProvider />
      <JobListing>
        <App />
      </JobListing>
      <SearchContextProvider />
    </React.StrictMode>
  </BrowserRouter>
);



