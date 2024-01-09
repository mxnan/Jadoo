import {
  Navbar,
  Hero,
  Services,
  Destination,
  Booking,
  About,
  Subscribe,
  Footer,
} from "./sections";

const App = () => {
  return (
    <div className="App bg-gradient-to-l from-blue-100 via-blue-300 to-blue-500"><Navbar />
      <Hero />
      <Services />
      <Destination />
      <Booking />
      <About />
      <Subscribe />
      <Footer /></div>
      
    
  );
};

export default App;
