import React from "react";
import "./LearningPathNav.css";
import LearningPathElement from "./LearningPathElement";

type Props = {};

const learningPathElementFakeData: any[] = [
  {
    imageUrl: "/assets/images/dotnet-react-full-stack.png",
    name: ".NET & React Fullstack - 1A",
    datetime: "19 Eylül 2023 15:20",
    isContinue: false,
    isComplete: false,
  },
  {
    imageUrl: "/assets/images/dotnet-react-full-stack.png",
    name: "Java & React Fullstack - 1A",
    datetime: "20 Eylül 2023 16:00",
    isContinue: false,
    isComplete: false,
  },
  {
    imageUrl: "/assets/images/dotnet-react-full-stack.png",
    name: ".NET & React Fullstack - 1B",
    datetime: "21 Eylül 2023 18:00",
    isContinue: true,
    isComplete: false,
  },
  {
    imageUrl: "/assets/images/dotnet-react-full-stack.png",
    name: "Java & React Fullstack - 1B",
    datetime: "22 Eylül 2023 00:00",
    isContinue: true,
    isComplete: false,
  },
  {
    imageUrl: "/assets/images/dotnet-react-full-stack.png",
    name: "Yazılım Test - 1A",
    datetime: "23 Eylül 2023 18:00",
    isContinue: true,
    isComplete: true,
  },
  {
    imageUrl: "/assets/images/dotnet-react-full-stack.png",
    name: "Yazılım Test - 1B",
    datetime: "24 Eylül 2023 17:00",
    isContinue: true,
    isComplete: true,
  },
];

const LearningPathNav = (props: Props) => {
  return (
    <div className="learning-paths-nav-tabs">
      <nav>
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
          <button
            className="nav-link learning-paths-nav-tab active"
            id="nav-all-learning-paths-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-all-learning-paths"
            type="button"
            role="tab"
            aria-controls="nav-all-learning-paths"
            aria-selected="true"
          >
            Tüm Eğitimlerim
          </button>
          <button
            className="nav-link learning-paths-nav-tab"
            id="nav-ongoing-learning-paths-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-ongoing-learning-paths"
            type="button"
            role="tab"
            aria-controls="nav-ongoing-learning-paths"
            aria-selected="false"
          >
            Devam Ettiklerim
          </button>
          <button
            className="nav-link learning-paths-nav-tab"
            id="nav-completed-learning-paths-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-completed-learning-paths"
            type="button"
            role="tab"
            aria-controls="nav-completed-learning-paths"
            aria-selected="false"
          >
            Tamamladıklarım
          </button>
        </div>
      </nav>
      <div className="tab-content" id="nav-tabContent">
        <div
          className="tab-pane fade show active"
          id="nav-all-learning-paths"
          role="tabpanel"
          aria-labelledby="nav-all-learning-paths-tab"
        >
          {learningPathElementFakeData.map((value, index) => (
            <LearningPathElement
              key={index}
              imageUrl={value.imageUrl}
              name={value.name}
              datetime={value.datetime}
            />
          ))}
        </div>
        <div
          className="tab-pane fade"
          id="nav-ongoing-learning-paths"
          role="tabpanel"
          aria-labelledby="nav-ongoing-learning-paths-tab"
        >
          {learningPathElementFakeData
            .filter(
              (value) => value.isContinue == true && value.isComplete == false
            )
            .map((value, index) => (
              <LearningPathElement
                key={index}
                imageUrl={value.imageUrl}
                name={value.name}
                datetime={value.datetime}
              />
            ))}
        </div>
        <div
          className="tab-pane fade"
          id="nav-completed-learning-paths"
          role="tabpanel"
          aria-labelledby="nav-completed-learning-paths-tab"
        >
          {learningPathElementFakeData
            .filter((value) => value.isComplete == true)
            .map((value, index) => (
              <LearningPathElement
                key={index}
                imageUrl={value.imageUrl}
                name={value.name}
                datetime={value.datetime}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default LearningPathNav;
