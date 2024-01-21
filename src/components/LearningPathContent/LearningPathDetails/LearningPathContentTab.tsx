import React, { useEffect, useState } from "react";
import "./LearningPathContentTab.css";
import CourseList from "../Courses/CourseList";
import LessonVideo from "../Lessons/LessonVideo";

type Props = {};

const LearningPathContentTab = (props: Props) => {
  const courseListFakeData: any[] = [
    {
      courseName: "Yazılım Geliştirici Yetiştirme Kampı",
      lessonList: [
        {
          lessonName: "Python ile Programlama Temelleri",
          videoId: "S_A_VVSQdpU",
        },
        {
          lessonName: "C# Temelleri 1",
          videoId: "FB7VUYLyl1I",
        },
        {
          lessonName: "C# Temelleri 2",
          videoId: "1j68gb1-qOw",
        },
        {
          lessonName: "C# 1",
          videoId: "G0sOB_-WkyI",
        },
        {
          lessonName: "C# 2",
          videoId: "MU_YQtgdkKA",
        },
        {
          lessonName: "SQL",
          videoId: "r_pbdopB4LU",
        },
        {
          lessonName: "C# 3",
          videoId: "qBQOqh844Mo",
        },
        {
          lessonName: "Entity Framework",
          videoId: "ow-EHetuNAU",
        },
        {
          lessonName: "Kurumsal Yazılım Mimarileri 1",
          videoId: "Hgqqoycoh9c",
        },
        {
          lessonName: "Kurumsal Yazılım Mimarileri 2",
          videoId: "NlAj9dT3MiA",
        },
        {
          lessonName: "Kurumsal Yazılım Mimarileri 3",
          videoId: "LZqMmvgCNx0",
        },
        {
          lessonName: "Kurumsal Yazılım Mimarileri 4",
          videoId: "cSmUHlnHOXI",
        },
        {
          lessonName: "Kurumsal Yazılım Mimarileri 5 ve AOP",
          videoId: "zdpPm7Q6YE0",
        },
        {
          lessonName: "Kurumsal Yazılım Mimarileri 6 ve JWT",
          videoId: "2DchBG--kAs",
        },
        {
          lessonName: "Kurumsal Yazılım Mimarileri 7 ve AOP",
          videoId: "mbl4BjQMX78",
        },
        {
          lessonName: "Angular Giriş 1",
          videoId: "f_r8SkLWgBI",
        },
        {
          lessonName: "Angular Giriş 2",
          videoId: "2fzL2LDamvM",
        },
        {
          lessonName: "Angular Giriş 3",
          videoId: "3xaRghmo-kU",
        },
        {
          lessonName: "Angular Giriş 4",
          videoId: "-VVVDswfEJw",
        },
        {
          lessonName: "Angular Giriş 5",
          videoId: "Sb1ZpVlS8LA",
        },
        {
          lessonName: "Angular Giriş 6",
          videoId: "obK-YEOuVgY",
        },
      ],
    },
    {
      courseName: "Yazılım Geliştirici Yetiştirme Kampı 2",
      lessonList: [
        {
          lessonName: "2. Python ile Programlama Temelleri",
          videoId: "S_A_VVSQdpU",
        },
        {
          lessonName: "2. C# Temelleri 1",
          videoId: "FB7VUYLyl1I",
        },
        {
          lessonName: "2. C# Temelleri 2",
          videoId: "1j68gb1-qOw",
        },
      ],
    },
  ];

  return (
    <div className="learning-path-content-tab">
      <div className="learning-path-content-tab-left-col">
        <CourseList courseListData={courseListFakeData} />
      </div>
      <div className="learning-path-content-tab-right-col">
        <LessonVideo />
      </div>
    </div>
  );
};

export default LearningPathContentTab;
