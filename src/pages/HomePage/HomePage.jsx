import Footer from "./components/Footer.jsx";
import Hero1 from "./components/Hero1.jsx";
import NavBar from "./components/NavBar.jsx";


function HomePage() {
  return (
    <>
      <div className="h-screen relative ">
        <NavBar />
        <Hero1 />
        <Footer/>
      </div>
    </>
  );
}

export default HomePage;
