import { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
  </div>
);

import Introduction from "./sections/Introduction";
import Skills from "./sections/Skills";
import Resume from "./sections/Resume";
import Contact from "./sections/Contact";
import Projects from "./sections/Projects";

const App = () => {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Introduction />} />
            <Route path="/intro" element={<Introduction />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
};

export default App;