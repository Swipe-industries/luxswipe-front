import NavBar from "./components/NavBar.jsx";
import Hero1 from "./components/hero1.jsx";

function HomePage() {
  return (
    <>
      <div className="h-screen relative">
        <NavBar />
        <Hero1 />
      </div>
    </>
  );
}

export default HomePage;
