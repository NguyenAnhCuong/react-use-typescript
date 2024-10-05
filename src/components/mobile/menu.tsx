import mobileLogo from "@/assets/img/logo/mobile_logo.png";
import { useEffect, useState } from "react";

const MobileMenu = () => {
  const [selectedTab, setSelectedTab] = useState<string>("home");
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const style = {
    overflow: "hidden",
    display: openMenu ? "block" : "none",
    transition: "2s",
  };

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
      <div className="arlo_tm_mobile_header_wrap">
        <div className="main_wrap">
          <div className="logo">
            <a href="#">
              <img src={mobileLogo} alt="mobile_logo" />
            </a>
          </div>
          <div className="arlo_tm_trigger">
            <div
              className={
                openMenu
                  ? "hamburger hamburger--collapse-r is-active"
                  : "hamburger hamburger--collapse-r"
              }
            >
              <div className="hamburger-box">
                <div
                  className="hamburger-inner"
                  onClick={() => setOpenMenu(!openMenu)}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div className="arlo_tm_mobile_menu_wrap" style={style}>
          <div className="mob_menu">
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
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
