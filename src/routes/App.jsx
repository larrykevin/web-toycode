import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import Home from '../pages/Home';
import InstallTheme from '../pages/InstallTheme';
import Version from '../pages/Version';
import '../styles/global.css';

const App = () => {
  return(
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/install" element={<InstallTheme />} />
          <Route path="/version" element={<Version />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;