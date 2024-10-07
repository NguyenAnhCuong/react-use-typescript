import imageCV from "@/assets/1.jpg"; //fix
import Parallax from "parallax-js";
import { useEffect, useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import logo550 from "@/assets/img/about/550x640.jpg";

const About = () => {
  const scene1 = useRef(null);
  useEffect(() => {
    if (scene1 && scene1.current) {
      const parallax = new Parallax(scene1.current, {
        relativeInput: true,
        hoverOnly: true,
      });
      parallax.enable();
      return () => parallax.disable();
    }
  }, []);

  return (
    <>
      <div className="arlo_tm_section relative" id="about">
        <div className="arlo_tm_about_wrapper_all">
          <div className="container">
            <div className="arlo_tm_title_holder">
              <h3>About Me</h3>
              <span>Main informations about me</span>
            </div>
            <div className="arlo_tm_about_wrap">
              <div className="author_wrap">
                <div className="leftbox">
                  <div
                    className="about_image_wrap parallax"
                    ref={scene1}
                    data-relative-input="true"
                  >
                    <div className="image layer" data-depth="0.2">
                      <img src={logo550} alt="550x640" />
                      <div
                        className="inner"
                        style={{ backgroundImage: `url(${imageCV})` }}
                      >
                        {/* Image */}
                      </div>
                    </div>
                    <div className="border layer" data-depth="0.6">
                      <img src={logo550} alt="550x640" />
                      <div className="inner"></div>
                    </div>
                  </div>
                </div>
                <div className="rightbox">
                  <div className="arlo_tm_mini_title_holder">
                    <h4>
                      I'm Nguyen Anh Cuong and{" "}
                      <TypeAnimation
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                        placeholder=""
                        onPointerEnterCapture={() => {}}
                        onPointerLeaveCapture={() => {}}
                        sequence={[
                          "Freelancer",
                          2000,
                          "UI/UX Designer",
                          2000,
                          "Web Developer",
                          2000,
                          () => {
                            console.log();
                          },
                        ]}
                      />
                      <span className="arlo_tm_animation_text_word"></span>
                    </h4>
                  </div>
                  <div className="definition">
                    <p>
                      Hi! My name is <strong>Alan Michaelis</strong>. I am a Web
                      Developer, and I'm very passionate and dedicated to my
                      work. With 20 years experience as a professional Web
                      developer, I have acquired the skills and knowledge
                      necessary to make your project a success. I enjoy every
                      step of the design process, from discussion and
                      collaboration to concept and execution, but I find the
                      most satisfaction in seeing the finished product do
                      everything for you that it was created to do.{" "}
                      {/* //fix */}
                    </p>
                  </div>
                  <div
                    className="about_short_contact_wrap"
                    style={{ fontSize: "13px" }}
                  >
                    <ul>
                      <li>
                        <span>
                          <label>Ngày sinh:</label> 16.06.200x
                        </span>
                      </li>
                      <li>
                        <span>
                          <label>Giới tính:</label> Nam
                        </span>
                      </li>
                      <li>
                        <span>
                          <label>Tốt nghiệp:</label> Đại Học Đại Nam
                        </span>
                      </li>
                      <li>
                        <span>
                          <label>Chuyên ngành:</label> Kỹ sư Công Nghệ Thông Tin
                        </span>
                      </li>
                      <li>
                        <span>
                          <label>Website:</label>{" "}
                          <a href="#" target="_blank">
                            www {/* //fix */}
                          </a>
                        </span>
                      </li>
                      <li>
                        <span>
                          <label>Mail:</label>{" "}
                          <a href="mailto:example@gmail.com" target="_blank">
                            cuong1606x&#64;gmail.com
                          </a>
                        </span>
                      </li>
                      <li>
                        <span>
                          <label>Facebook:</label>{" "}
                          <a
                            href="https://www.facebook.com/anhcuong.nguyen.568089"
                            target="_blank"
                          >
                            &#64;Anh Cuong Nguyen
                          </a>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="buttons_wrap">
                    <ul>
                      <li>
                        <a href={imageCV} download>
                          <span>Download CV</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
