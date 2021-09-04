import Person from "../Assets/person.png";
const Hero = () => {
  return (
    <div className="wrapper">
      <div className="flex">
        <div></div>
        <div className="grid">
          <div className="img-bg relative overflow-hidden">
            <img src={Person} className="inside" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
