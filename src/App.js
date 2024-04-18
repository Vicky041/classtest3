import React, { useEffect } from "react";
import { NavLink, Route, Routes, useSearchParams, useLocation, useNavigate } from "react-router-dom";

// Creating my home page component =>
function Home() {
  //How to use the useNavigate() hook => useNavigate() hook..
  const navigate = useNavigate();

  // Handle navigation to the about page => handleNavigate() function..
  const handleNavigate = (event) => {
    event.preventDefault();
    navigate("/about");
  };
  // Using the useLocation hook to get the url meta
  // const location = useLocation();

  // console.log(location);

  // // Using the useSerachParams hook to get the search params..
  // const [ searchParams, setSearchParams ] = useSearchParams();

  // // Get the search param value from the search params..
  
  // useEffect(() => {
  //   // Set search params..
  //   setSearchParams({
  //     id: "04173432",
  //   });

  //   setSearchParams({
  //     name: "book",
  //   });


  //   // Get the search params..
  //   console.log(searchParams.get("id"));
  // }, [ searchParams ])
  
  
  return (
    <section className="home-container">
      <h1>Home Page</h1>
      <p>This is home page</p>
      <p>Click the link below to go to the about page</p>
      <Navigation/>
      <div>
        <button id="button" onClick={handleNavigate}>Go to about page</button>
      </div>
    </section>
  );
}

// Creating the About page component function..
function About() {
  return (
    <section className="about-container">
      <h1>About Page</h1>
      <p>This is about page, Click link below to explore</p>
      <Navigation />
    </section>
  );
}

// Creating a navigation component => 
function Navigation() {
  return (
    <section className="navigation">
        <NavLink
          style={({ isActive }) =>
            isActive ? { color: "white" } : { color: "black" }
          }
          className="navigate"
          to="/"
        >
          Home page
        </NavLink>
        <NavLink
          style={({ isActive }) =>
            isActive ? { color: "white" } : { color: "black" }
          }
          className="navigate"
          to="/about"
        >
          About page
        </NavLink>
      </section>
  )
}

// creating my root components => App component..
function App() {
  return (
    <section className="main-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </section>
  );
}

export default App;
