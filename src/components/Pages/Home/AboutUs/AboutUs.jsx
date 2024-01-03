import aboutImg from "../../../../assets/images/images/about-us.png";
import CountUp from "react-countup";

const AboutUs = () => {
  return (
    <div className="max-w-7xl mb-20 px-5 mx-auto">
      <div className="md:flex items-center ">
        <div className="w-1/2">
          <img src={aboutImg} alt="" className="w-100" />
        </div>

        <div className="w-1/2 ">
          <div className="ml-20">
            <h2 className="text-3xl font-bold mb-3">About Us</h2>
            <p>
              Welcome to Edubin, where knowledge meets inspiration, and
              futures are shaped. Established in 2024, we take pride in our
              commitment to academic excellence, holistic development, and a
              vibrant community.
            </p>

            <div className="mt-5">
              <div className="flex gap-5 items-center">
                <div className="">
                  <span className="className= text-3xl font-bold mb-3">
                    <CountUp start={0} end={25} duration={5} suffix="K" />
                  </span>

                  <p className="counter__title">Completed Projects</p>
                </div>

                <div className="">
                  <span className="className= text-3xl font-bold mb-3">
                    <CountUp start={0} end={12} duration={5} suffix="M" />
                  </span>

                  <p className="counter__title">Patient Around World</p>
                </div>
              </div>

              <div className="flex gap-5 items-center mt-5">
                <div className="">
                  <span className="className= text-3xl font-bold mb-3">
                    <CountUp start={0} end={95} duration={5} suffix="M" />
                  </span>

                  <p className="counter__title">Ideas Raised Funds</p>
                </div>

                <div className="">
                  <span className="className= text-3xl font-bold mb-3">
                    <CountUp start={0} end={5} duration={5} suffix="K" />
                  </span>

                  <p className="counter__title">Categories Served</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
