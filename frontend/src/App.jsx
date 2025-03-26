import { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

// Loading spinner component
const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
  </div>
);

// // Error component for failed lazy loads
// const LoadError = ({ componentName }) => (
//   <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
//     <h3 className="font-bold">Failed to load {componentName}</h3>
//     <p>Please refresh the page or try again later.</p>
//   </div>
// );

// // Safe lazy loading wrapper
// const lazyLoad = (path, componentName) => lazy(() => import(`./sections/${path}`)
//   .then(module => ({ default: module.default }))
//   .catch(() => ({ default: () => <LoadError componentName={componentName} /> })));

// // Lazy loaded components
// const Introduction = lazyLoad('Introduction', 'Introduction');
// const Skills = lazyLoad('Skills', 'Skills');
// const Resume = lazyLoad('Resume', 'Resume');
// const Contact = lazyLoad('Contact', 'Contact');
// const Projects = lazyLoad('Projects', 'Projects')
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

// import { Suspense, lazy } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Layout from './components/Layout';

// // Lazy load the sections for better performance
// const Introduction = lazy(() => import('./components/Introduction'));
// const Skills = lazy(() => import('./components/Skills'));
// const Resume = lazy(() => import('./components/Resume'));
// const Contact = lazy(() => import('./components/Contact'));

// const App = () => {
//   return (
//     <Router>
//       <Layout>
//         <Suspense fallback={<div className="flex justify-center items-center h-64">Loading...</div>}>
//           <Routes>
//             <Route path="/" element={<Introduction />} />
//             <Route path="/#intro" element={<Introduction />} />
//             <Route path="/#skills" element={<Skills />} />
//             <Route path="/#resume" element={<Resume />} />
//             <Route path="/#contact" element={<Contact />} />
//           </Routes>
//         </Suspense>
//       </Layout>
//     </Router>
//   );
// };

// export default App;

// import { BrowserRouter as Router } from 'react-router-dom';
// import Layout from './components/Layout';

// const App = () => {
//   return (
//     <Router>
//       <Layout />
//     </Router>
//   );
// };

// export default App;

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Layout from "./components/Layout";

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           {/* Pages will be added here later */}
//         </Route>
//       </Routes>
//     </Router>
//   );
// };

// export default App;