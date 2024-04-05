/* eslint-disable @typescript-eslint/no-explicit-any */
import { Icons } from "../../Pages/Components/Icon";
import RoundedBtn from "../../Pages/Components/RoundedBtn/RoundedBtn";

const SingleSlider = ({ data }: any) => {
  return (
    <div className="container">
      <div className="w-full text-gray-800 rounded-xl bg-primary-500">
        <div className="grid grid-cols-12">
          <div className="col-span-12 p-12 lg:col-span-6">
            <div className="flex flex-col justify-center items-center min-h-[480px]">
              <div className="">
                <h1 className="mb-4 text-3xl font-bold text-white uppercase md:text-5xl">
                  {data?.title}
                </h1>
                <p className="mb-10 font-medium text-white">
                  With roots over a century deep in the birthplace of the
                  automobile industry, USA Underwriters has the knowledge and
                  expertise to help tailor a policy to suit your lifestyle, your
                  budget, and your priorities.
                </p>
                <div className="flex flex-col w-full gap-4 md:flex-row lg:gap-6">
                  <RoundedBtn label="Report a Claim" route="/" />
                  <a
                    href="/"
                    className="flex items-center gap-2 ml-4 text-white sm:ml-0"
                  >
                    Learn More <Icons.ArrowRightLong />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block lg:col-span-6">
            <div className="absolute bottom-0 left-12">
              <img
                className="w-auto h-[460px]"
                src={data?.image}
                alt="tru-brand"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleSlider;
