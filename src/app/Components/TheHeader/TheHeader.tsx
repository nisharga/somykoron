"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu } from "../../static";

const TheHeader = () => {
  const [isShowMobileMenu, setIsShowMobileMenu] = useState(false);
  useEffect(() => {
    const bodyEl = document.querySelector("body");

    if (isShowMobileMenu) {
      bodyEl && bodyEl.classList.add("modal-open");
    } else {
      bodyEl && bodyEl.classList.remove("modal-open");
    }
  }, [isShowMobileMenu]);

  return (
    <header className="sticky top-0 z-50 py-3 shadow-sm bg-primary-500">
      <div className="container">
        {/* larger device menu */}

        <div className="items-center justify-between hidden px-4 py-2 backdrop-blur-sm lg:flex">
          <div className="">Logo</div>
          <AnimatePresence>
            <motion.div
              className="flex items-center justify-end gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {Menu.map(({ id, route, label }) => (
                <a
                  className={`whitespace-nowrap transition-colors duration-300 text-success px-3 py-1.5 md:py-2.5 hover:bg-primary-300 hover:rounded-md`}
                  key={id}
                  href={route}
                >
                  {label}
                </a>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile menu */}
      {!isShowMobileMenu ? (
        <div className="container sticky top-0 z-50 flex items-center justify-between h-16 rounded-full bg-primary-500 lg:hidden backdrop-blur-sm">
          <div></div>
          Logo
          <button
            onClick={() => setIsShowMobileMenu(true)}
            className="no-underline rounded-md"
          >
            {/* <Icons.Hamburger className="fill-white" /> */} Ham
          </button>
        </div>
      ) : (
        <div className="sticky top-0 left-0 block w-full lg:hidden ">
          <div className="">
            <div className="container flex items-center justify-between h-16 bg-primary-500 lg:hidden backdrop-blur-sm border-b-[2px]">
              <div></div>
              {/* <Logo className="!h-10 !w-auto" /> */}Logo
              <button
                onClick={() => setIsShowMobileMenu(false)}
                className="no-underline rounded-md"
              >
                {/* <Icons.X className="fill-white" /> */} X
              </button>
            </div>
            <AnimatePresence>
              <motion.div
                className="flex flex-col"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {Menu.map(({ id, route, label }) => (
                  <a
                    className="px-12 text-gray-200 transition-all bg-primary-500 hover:bg-primary-300 py-7 whitespace-nowrap"
                    key={id}
                    href={route}
                    onClick={() =>
                      setTimeout(() => {
                        setIsShowMobileMenu(false);
                      }, 200)
                    }
                  >
                    {label}
                  </a>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      )}
    </header>
  );
};

export default TheHeader;
