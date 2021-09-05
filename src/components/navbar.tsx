import Logo from "../Assets/logo.png";

const Navbar = () => {
  return (
    <div className="nav-wrapper flex justify-between items-center">
      <div>Logo</div>
      <div className="hidden">menu</div>
      <div className="cursor-pointer">
        <div className="bg-white h-hamburger w-10"></div>
        <div className="bg-white h-hamburger w-10 mt-hamburger"></div>
        <div className="bg-white h-hamburger w-10 mt-hamburger"></div>
      </div>
    </div>
  );
};

export default Navbar;
