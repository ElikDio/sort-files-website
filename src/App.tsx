import React from 'react';
import { Header } from './components/header/Header';
import { Hero } from './components/hero/Hero';

export const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
    </div>
  );
};
