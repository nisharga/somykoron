import RoundedBtn from "./../../Pages/Components/RoundedBtn/RoundedBtn";
import RoundedBtnFull from "../../Pages/Components/RoundedBtnFull/RoundedBtnFull";
import { Element } from "react-scroll";

const Adds = () => {
  return (
    <Element name="whywebest">
    <div className="pt-28">
      <div className="hidden md:block">
        <div className="container">
          <div className="relative">
            <img
              className="w-full"
              src="https://i.ibb.co/py5J4wg/Rectangle-11.png"
              width={100}
              height={60}
              alt="tru-brand"
            />
            <div className="absolute z-10 rounded-md bg-primary-300 bottom-16 left-20 p-7">
              <h5 className="text-lg font-bold text-white">
                Why We are Best Then Other?
              </h5>
              <p className="pb-4 my-4 text-xs text-white">
                We have a value for you. Rather then thinking about bussiness we
                are things about you <br /> So, Trust on us and Start bussiness
                with us. We are looking forward with you.
              </p>
              <RoundedBtn
                className="text-primary-500 !bg-success my-4"
                label="Report a Claim"
                route="/"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="block md:hidden">
        <div className="container pt-12 text-center">
          <div className="rounded-md bg-primary-300 bottom-16 left-20 p-7">
            <h5 className="text-xl font-bold text-white">
              Why We are Best Then Other?
            </h5>
            <p className="pb-4 my-4 text-xs text-white">
              We have a value for you. Rather then thinking about bussiness we
              are things about you <br /> So, Trust on us and Start bussiness
              with us. We are looking forward with you.
            </p>
            <RoundedBtnFull
              className="text-primary-500 !bg-success my-4 text-base font-medium"
              label="Report a Claim"
              route="/"
            />
          </div>
        </div>
      </div>
    </div>
    </Element>
  );
};

export default Adds;
