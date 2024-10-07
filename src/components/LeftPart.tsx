import destopLogo from "@/assets/img/logo/desktop-logo.png";
import { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";

interface IProp {
  showLeftPart: boolean;
  setShowLeftPart: (value: boolean) => void;
}

const Leftpart = (props: IProp) => {
  const [selectedTab, setSelectedTab] = useState<string>("home");

  useEffect(() => {
    const { hash } = window.location;

    if (hash) {
      const tab = hash.replace("#", "");
      setSelectedTab(tab);
      const section = document.querySelector(`${hash}`);

      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, []);

  const handleClickTab = (
    tab: string,
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    setSelectedTab(tab);
    const section = document.querySelector(`#${tab}`);

    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => {
        window.location.hash = tab;
      }, 1000);
    }
  };

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
                <a
                  href="#home"
                  className={selectedTab === "home" ? "active" : ""}
                  onClick={(
                    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
                  ) => handleClickTab("home", e)}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className={selectedTab === "about" ? "active" : ""}
                  onClick={(
                    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
                  ) => handleClickTab("about", e)}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className={selectedTab === "skills" ? "active" : ""}
                  onClick={(
                    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
                  ) => handleClickTab("skills", e)}
                >
                  Skill
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className={selectedTab === "projects" ? "active" : ""}
                  onClick={(
                    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
                  ) => handleClickTab("projects", e)}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className={selectedTab === "contact" ? "active" : ""}
                  onClick={(
                    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
                  ) => handleClickTab("contact", e)}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="leftpart_bottom">
            <div className="social_wrap">
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/anhcuong.nguyen.568089"
                    target="_blank"
                  >
                    <i className="xcon-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i className="xcon-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {!isMobile && (
            <a
              className={
                props.showLeftPart ? "arlo_tm_resize opened" : "arlo_tm_resize"
              }
              href="#"
              onClick={(e) => {
                e.preventDefault();
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
          )}
        </div>
      </div>
    </>
  );
};

export default Leftpart;
