import { Button, Modal } from "antd";
import { useState } from "react";
import { IoLogoReact } from "react-icons/io5";
import { BsArrowRight } from "react-icons/bs";

interface IProject {
  image: JSX.Element;
  title: string;
  shortDescription: string;
  detail: {
    description: string;
    frontend: string;
    backend: string;
    member: number;
    role: string;
    demo: string; //link deploy
    github: string; //link github
  };
}

const Project = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [dataDetail, setDataDetail] = useState<IProject | null>(null);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setDataDetail(null);
  };

  const dataProject: IProject[] = [
    {
      image: <IoLogoReact size={50} color="blue" />,
      title: "React.JS",
      shortDescription: "Website quản lí list công việc cá nhân",
      detail: {
        description: "",
        frontend: "React",
        backend: "Node.JS (Express)",
        member: 1,
        role: "",
        demo: "", //link deploy
        github: "", //link github
      },
    },
    {
      image: <IoLogoReact size={50} color="blue" />,
      title: "",
      shortDescription: "",
      detail: {
        description: "",
        frontend: "React",
        backend: "Node.JS (Express)",
        member: 1,
        role: "",
        demo: "", //link deploy
        github: "", //link github
      },
    },
  ];

  return (
    <>
      <Modal
        title={
          dataDetail && dataDetail.title ? `Dự án ${dataDetail.title}` : ""
        }
        open={isModalOpen}
        onOk={() => handleCloseModal()}
        onCancel={() => handleCloseModal()}
        footer={null}
        maskClosable={false}
      >
        {dataDetail && (
          <ul>
            <li>Miêu tả: {dataDetail.detail.description}</li>
            <li>Frontend: {dataDetail.detail.frontend}</li>
            <li>Backend: {dataDetail.detail.backend}</li>
            <li>Số lượng thành viên: {dataDetail.detail.member}</li>
            <li>Vai trò: {dataDetail.detail.role}</li>
            <li>
              Demo:{" "}
              <a href={dataDetail.detail.demo}>{dataDetail.detail.demo}</a>
            </li>
            <li>
              Github:{" "}
              <a href={dataDetail.detail.github}>{dataDetail.detail.github}</a>
            </li>
          </ul>
        )}
      </Modal>
      <div className="arlo_tm_section" id="projects">
        <div className="arlo_tm_services_wrap">
          <div className="container">
            <div className="arlo_tm_title_holder">
              <h3>My Projects</h3>
              <span>Các dự án cá nhân</span>
            </div>
            <div className="list_wrap">
              <ul>
                {dataProject.map((item, index) => {
                  return (
                    <>
                      <li onClick={showModal} key={`skill-${index + 1}`}>
                        <div
                          className="inner"
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            setDataDetail(item);
                            setIsModalOpen(true);
                          }}
                        >
                          <div className="icon">{item.image}</div>
                          <div className="title_service">
                            <h3>{item.title}</h3>
                          </div>
                          <div className="text">
                            <p>{item.shortDescription}</p>
                          </div>
                          <div style={{ padding: "5px 0" }}>
                            <BsArrowRight /> Xem chi tiết
                          </div>
                        </div>
                      </li>
                    </>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
