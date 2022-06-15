import React from 'react';
import { QueryClient, QueryClientProvider  } from 'react-query';
import './App.css';
import styled from 'styled-components'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { NavBar } from './components'
import { Home, Products } from './pages';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/home" element={<Home />} /> 
          <Route path="/products" element={<Products />} />
        </Routes>
      </Layout>
    </Router>
    </QueryClientProvider>

  )
}

export default App;

interface LayoutProps {
  children: React.ReactNode;  
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  )
}
