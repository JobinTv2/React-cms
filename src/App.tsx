import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import React from 'react';
import 'antd/dist/antd.min.css';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <React.Fragment>
          <Route path="/" element={<Home />} />
        </React.Fragment>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
