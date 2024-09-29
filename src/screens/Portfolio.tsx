import Leftpart from "../components/LeftPart";
import MobileMenu from "../components/mobile/menu";
import Rightpart from "../components/RightPart";

const Portfolio = () => {
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
            <Leftpart />
            {/* <!-- /LEFTPART --> */}

            {/* <!-- RIGHTPART --> */}
            <Rightpart />
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
