import styles from "./Projects.module.scss";
import Categories from "../../components/Categories/Categories.tsx";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ProjectItem from "../../components/ProjectItem/ProjectItem.tsx";
import axios from "axios";
import { Project } from "../../../@types/project.ts";

type ProjectProps = {
  projectsRef: React.RefObject<HTMLDivElement>;
};

export default function Projects({ projectsRef }: ProjectProps) {
  const [activeCategory, setActiveCategory] = useState(0);
  const sortTypes = ["по убыванию сложности", "по возрастанию сложности"];
  const [activeSort, setActiveSort] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [projects, setProjects] = useState<Project[] | null>(null);
  useEffect(() => {
    const getProjects = async () => {
      if (activeCategory !== 0) {
        if (activeSort === 1) {
          const projects = await axios.get<Project[]>(
            `https://650f457c54d18aabfe99fade.mockapi.io/api/shop/projects?category=${activeCategory}&sortBy=complexity`,
          );
          setProjects(projects.data);
        } else {
          const projects = await axios.get<Project[]>(
            `https://650f457c54d18aabfe99fade.mockapi.io/api/shop/projects?category=${activeCategory}&sortBy=complexity&order=desc`,
          );
          setProjects(projects.data);
        }
      } else {
        if (activeSort === 1) {
          const projects = await axios.get<Project[]>(
            `https://650f457c54d18aabfe99fade.mockapi.io/api/shop/projects?sortBy=complexity`,
          );
          setProjects(projects.data);
        } else {
          const projects = await axios.get<Project[]>(
            `https://650f457c54d18aabfe99fade.mockapi.io/api/shop/projects?sortBy=complexity&order=desc`,
          );
          setProjects(projects.data);
        }
      }
    };
    getProjects();
    return () => {
      document.body.removeEventListener("click", () => {
        setOpenModal(false);
      });
    };
  }, [activeSort, activeCategory]);

  document.body.addEventListener("click", () => {
    setOpenModal(false);
  });

  function setOpen(event: React.MouseEvent<HTMLSpanElement>) {
    event.stopPropagation();
    setOpenModal(!openModal);
  }
  function setSort(sortType: string, event: React.MouseEvent<HTMLDivElement>) {
    event.stopPropagation();
    setActiveSort(sortTypes.indexOf(sortType));
    setOpenModal(false);
  }

  return (
    <div className={styles["projects"]} ref={projectsRef}>
      <div className={styles["projects__title"]}>
        <span>#</span>проекты
      </div>
      <div className={styles["projects__subtitle"]}>
        Ты можешь посмотреть текущие проекты и какой стэк* использовался
      </div>
      <div className={styles["projects__categories"]}>
        <Categories
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
      </div>
      <div className={styles["projects__subtitle"]}>
        *в выборке указаны только две-три основных технологии
      </div>
      <div className={styles["projects__sort"]}>
        <div className={styles["projects__sort-title"]}>сортировка по:</div>
        <div className={styles["projects__sort-type"]}>
          {sortTypes.map((sortType, index) => {
            if (index === activeSort) {
              return (
                <span
                  onClick={(event) => setOpen(event)}
                  key={index}
                  className={styles["projects__sort-name"]}
                >
                  {sortType}
                </span>
              );
            }
          })}
        </div>
        {openModal ? (
          <motion.div
            className={styles["projects__sort-modal"]}
            initial={{ height: 0 }}
            animate={{ height: 130 }}
          >
            {sortTypes.map((sortType, index) => (
              <div
                onClick={(event) => setSort(sortType, event)}
                key={index}
                className={styles["modal-sort__name"]}
              >
                {sortType}
              </div>
            ))}
          </motion.div>
        ) : (
          ""
        )}
      </div>
      <div className={styles["projects__blocks"]}>
        {projects?.map((project, index) => {
          return (
            <ProjectItem
              title={project.title}
              description={project.description}
              stack={project.stack}
              key={index}
              complexity={project.complexity}
              github={project.github}
              imageUrl={project.imageUrl}
              linkSite={project.linkSite}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
}
