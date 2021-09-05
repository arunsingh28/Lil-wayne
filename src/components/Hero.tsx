import Person from "../Assets/person.png";
const Hero = () => {
  return (
    <div className="wrapper">
      <div className="flex justify-center items-center">
        <div className="flex-1 center-d">
          <h1 className="text-5xl heading font-bold">
            We Help People <br /> Cinnect With Their
            <br />
            Right Mentors
          </h1>
        </div>
        <div className="flex-1">
          <div className="flex justify-evenly gap-10">
            <div className="img-bg relative overflow-hidden">
              <img src={Person} className="inside" />
            </div>
            <div className="img-bg1 relative overflow-hidden">
              <img src={Person} className="inside" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
