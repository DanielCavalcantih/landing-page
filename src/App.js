import Header from "./components/Header";
import SectionSolutions from "./components/SectionSolutions";
import SectionVideo from "./components/SectionVideo";
import ContactUs from "./components/ContactUs";
import "./reset.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./components/Footer";
import Chat from "./components/Chat";
AOS.init();

function App() {
  return (
    <div>
      <Header />
      <SectionSolutions />
      <SectionVideo />
      <ContactUs />
      <Footer />
      <Chat />
    </div>
  );
}

export default App;
