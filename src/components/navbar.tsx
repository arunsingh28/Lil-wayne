import Logo from "../Assets/logo.png";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-20 ">
      <div className="flex items-center">
        <img src={Logo} alt="logo" />
        <h1 className="ml-1">MENTORS</h1>
      </div>
      <div>
        <ul className="flex w-96 justify-evenly">
          <li>Home</li>
          <li>About us</li>
          <li>Mentor</li>
          <li>Become a Mentor</li>
        </ul>
      </div>
      <div className="flex items-center">
        <div className="relative">
          <div className="green-dot"></div>
          <img
            className="h-10 w-10 object-cover rounded-full"
            src="https://images.pexels.com/photos/1840608/pexels-photo-1840608.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="profile"
          />
        </div>
        <p className="text-xsm ml-2 font-bold">Shivangi Pandey</p>
      </div>
    </div>
  );
};

export default Navbar;
