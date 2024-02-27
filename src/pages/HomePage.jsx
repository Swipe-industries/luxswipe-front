import Footer from "../components/Footer.jsx";
import Hero1 from "../components/Hero1.jsx";
import Hero2 from "../components/Hero2.jsx";
import NavBar from "../components/ui/NavBar.jsx";
import StartBtn from "../components/ui/StartBtn.jsx";

function HomePage() {
  return (
    <>
      <div className="flex-col items-center justify-center">
        <NavBar />
        <Hero1 />
        <Hero2 />
        <div className="flex items-center justify-center">
          <StartBtn label="Start Creating" />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
