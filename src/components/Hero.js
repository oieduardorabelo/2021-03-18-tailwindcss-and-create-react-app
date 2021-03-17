import ImageOne from "../assets/media/images/profile.png";

const Hero = () => {
  return (
    <div className="bg-white h-screen flex flex-col justify-center items-center">
      <h1 className="lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-14">
        Text
      </h1>

      <img class="rounded" src={ImageOne} alt="Profile" />
    </div>
  );
};

export default Hero;
