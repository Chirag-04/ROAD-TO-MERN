import React from "react";
import PickMeals from "../Assets/diab3.jpg";
import ChooseMeals from "../Assets/bcancer.jpg";
import DeliveryMeals from "../Assets/mal.jpg";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Diabetes Detector",
      buttonText: "Test for Diabetes",
    },
    {
      image: ChooseMeals,
      title: "Breast Cancer Detector",
      buttonText: "Test for Breast Cancer",
    },
    {
      image: DeliveryMeals,
      title: "Malaria Detector",
      buttonText: "Test for Malaria",
    },
  ];

  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          Simply enter your lab reports, and our AI model provides accurate disease insights, helping you understand your health better.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt={data.title} />
            </div>
            <h2>{data.title}</h2>
            <button className="test-button">{data.buttonText}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
