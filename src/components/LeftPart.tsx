import destopLogo from "@/assets/img/logo/desktop-logo.png";

interface IProp {
  showLeftPart: boolean;
  setShowLeftPart: (value: boolean) => void;
}

const Leftpart = (props: IProp) => {
  return (
    <>
      <div
        className={
          props.showLeftPart
            ? "arlo_tm_leftpart_wrap opened"
            : "arlo_tm_leftpart_wrap"
        }
      >
        <div className="leftpart_inner">
          <div className="logo_wrap">
            <a href="#">
              <img src={destopLogo} alt="desktop-logo" />
            </a>
          </div>
          <div className="menu_list_wrap">
            <ul className="anchor_nav">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#skills">Skill</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="leftpart_bottom">
            <div className="social_wrap">
              <ul>
                <li>
                  <a href="#">
                    <i className="xcon-facebook"></i>//fix
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="xcon-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <a
            className={
              props.showLeftPart ? "arlo_tm_resize opened" : "arlo_tm_resize"
            }
            href="#"
            onClick={() => {
              props.setShowLeftPart(!props.showLeftPart);
            }}
          >
            <i
              className={
                props.showLeftPart
                  ? "xcon-angle-left opened"
                  : "xcon-angle-left"
              }
            ></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default Leftpart;
