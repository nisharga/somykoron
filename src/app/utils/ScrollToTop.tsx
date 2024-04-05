import ScrollToTop from "react-scroll-to-top";
import { Icons } from './../Pages/Components/Icon/Icon';


const ScrollTop = () => {
  return (
    <div>
      <ScrollToTop
        smooth
        component={<Icons.UpArrowLong />}
        className="!bg-primary-300 !pl-3.5 !w-9 !h-9"
      />
    </div>
  );
};


export default ScrollTop;