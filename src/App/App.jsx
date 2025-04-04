import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { motion } from 'framer-motion';

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from './pages/Contact';
import Header from '../components/Header';
import Footer from '../components/Footer';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />

        <main className='p-8'>
          <Routes>
            <Route
              path='/'
              element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                >
                  <Home />
                </motion.div>
              }
            />
            <Route
              path='/about'
              element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                >
                  <About />
                </motion.div>
              }
            />
            <Route
              path='/contact'
              element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                >
                  <Contact />
                </motion.div>
              }
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
