import React from "react";
import "./Activities.css";
import { Text } from "@chakra-ui/react";

export default function Activities() {
  const data = [
    {
      title: "Yoga",
      img: "yogaPic.jpg",
      text: "Yoga classes typically involve a combination of physical postures (asanas), breathing exercises (pranayama), and relaxation.",
    },
    {
      title: "Meditation",
      img: "meditationPic.jpg",
      text: "Meditation sessions can be a valuable tool for improving your mental and emotional well-being.",
    },
    {
      title: "Zumba",
      img: "zumbaPic.jpg",
      text: "Zumba is a high-energy, dance-based fitness program that incorporates Latin and international music and dance movements.",
    },
    {
      title: "Dance",
      img: "dancePic.jpg",
      text: "Dance classes can be a great way to get active, learn new skills, and have fun.",
    },
  ];
  return (
    <>
      {" "}
      <div className="ourActivities">
        <Text
          style={{ textAlign: "center", marginBottom: "50px" }}
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize="5xl"
          fontWeight="extrabold"
        >
          Classes
        </Text>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
          }}
        >
          {data &&
            data.map((d) => (
              <div className="card">
                <div className="card_image">
                  <img
                    src={d.img}
                    alt="mixed vegetable salad in a mason jar. "
                  />
                </div>
                <div className="card_content">
                  <h2 className="card_title"> {d.title} </h2>
                  <div className="card_text">
                    <p>{d.text}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
