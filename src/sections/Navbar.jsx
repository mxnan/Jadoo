import navlogo from "../assets/images/navlogo.svg";
import menuicon from "../assets/images/3menubar.svg";

const Navbar = () => {
  return (
    <header className="wrapper">
      <div className="flex justify-between md:justify-around items-center px-4 xl:px-24 z-20">
        
        <img src={navlogo} alt="logo" className="w-20 h-10 " />
        <ul className="flex gap-8 lg:gap-16 max-md:hidden text-center">
          <li>Destination</li>
          <li>Hotels</li>
          <li>Flights</li>
          <li>Booking</li>
          <li>Login</li>
          <li>Sign up</li>
          <li>Lang</li>
        </ul>
        <img src={menuicon} alt="menu" className="w-12 h-10 md:hidden" />
      </div>
    </header>
  );
};

export default Navbar;
