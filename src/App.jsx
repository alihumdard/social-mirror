import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useRoutes } from "./routes";
import Footer from "./main/Footer";
import Navbar from "./main/Navbar";

const App = () => {
  const routes = useRoutes();

  return (
    <Router>
      <div className="">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            {routes.map(({ path, element: Element }) => (
              <Route key={path} path={path} element={<Element />} />
            ))}
          </Routes>
        </main>
        <Footer />
      </div>

    </Router>
  );
};



export default App;
