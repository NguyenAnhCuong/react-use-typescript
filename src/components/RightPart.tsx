import About from "./content/About";
import Contact from "./content/Contact";
import HomeCV from "./content/HomeCV";
import Project from "./content/Project";
import Skill from "./content/Skill";
import { FloatButton } from "antd";

const Rightpart = () => {
  return (
    <>
      {" "}
      <div className="arlo_tm_rightpart">
        <div className="rightpart_inner">
          <HomeCV />
          //fix
          {/* <!-- ABOUT --> */}
          <About />
          //fix
          {/* <!-- /ABOUT --> */}
          {/* <!-- SKILLS --> */}
          <Skill />
          //fix
          {/* Skill */}
          <Project />
          //fix
          <Contact />
        </div>

        {/* <a className="arlo_tm_totop" href="#"></a> */}
        <FloatButton.BackTop tooltip={<div>Scroll to top</div>} />
      </div>
    </>
  );
};

export default Rightpart;
