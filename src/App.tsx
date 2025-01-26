import React from 'react';
import { About } from './components/about/About';
import { FAQ } from './components/faq/FAQ';
import { Header } from './components/header/Header';
import { Hero } from './components/hero/Hero';
import { Instructions } from './components/instructions/Instructions';
import { Container } from './components/ui/container/Container';

export const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Container>
        <About />
        <Instructions />
        <FAQ />
      </Container>
    </div>
  );
};
