import ContactUs from "./components/contact/contact";
import "./App.css";
import Navigation from "./components/navigation/navigation";
import ContactForm from "./components/contactForm/contactForm";
const App = () =>{
  return (
    <div>
      <Navigation/>
      <main className="main_container">
        <ContactUs/>
        <ContactForm/>
      </main>
    </div>
  );
}

export default App;