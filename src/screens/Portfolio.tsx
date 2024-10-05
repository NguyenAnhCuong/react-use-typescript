import { useEffect, useState } from "react";
import Leftpart from "../components/LeftPart";
import MobileMenu from "../components/mobile/menu";
import Rightpart from "../components/RightPart";
import { isMobile } from "react-device-detect";

const Portfolio = () => {
  const [showLeftPart, setShowLeftPart] = useState<boolean>(false);

  useEffect(() => {
    if (isMobile) {
      setShowLeftPart(true);
    }
  }, [isMobile]);

  return (
    <>
      <div>
        {/* <!-- WRAPPER ALL --> */}
        <div className="arlo_tm_wrapper_all">
          <div id="arlo_tm_popup_blog">
            <div className="container">
              <div className="inner_popup scrollable"></div>
            </div>
            <span className="close">
              <a href="#"></a>
            </span>
          </div>

          {/* <!-- PRELOADER --> */}

          {/* <!-- /PRELOADER --> */}

          {/* <!-- MOBILE MENU --> */}
          <MobileMenu />
          {/* <!-- /MOBILE MENU --> */}

          {/* <!-- CONTENT --> */}
          <div className="arlo_tm_content">
            {/* <!-- LEFTPART --> */}
            <Leftpart
              showLeftPart={showLeftPart}
              setShowLeftPart={setShowLeftPart}
            />
            {/* <!-- /LEFTPART --> */}

            {/* <!-- RIGHTPART --> */}
            <Rightpart
              showLeftPart={showLeftPart}
              setShowLeftPart={setShowLeftPart}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
