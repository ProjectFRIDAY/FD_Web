import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import Main from './pages/Main';
import Project from './pages/Project';
import Recruit from './pages/Recruit';
import Contact from './pages/Contact';
import Header from './components/Header';

const theme = {
  primaryColor: '#01baae',
  secondaryColor: '#000',
};

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path="/" element={<Main />}></Route>
            <Route exact path="/project" element={<Project />}></Route>
            <Route exact path="/recruit" element={<Recruit />}></Route>
            <Route exact path="/contact" element={<Contact />}></Route>
            {/* <Route exact path="*" element={<NotFound />}></Route> */}
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
