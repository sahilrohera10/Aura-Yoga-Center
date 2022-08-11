import React from "react";

export default function MeetOurFounder() {
  return (
    <div style={{ background: "#FCDBFA", padding: "20px" }}>
      <h1 style={{ fontSize: "45px", fontWeight: "700", textAlign: "center" }}>
        Meet Our Founder And Instructor
      </h1>
      <br />
      <br />
      <br />
      <br />
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginBottom: "30px",
        }}
      >
        <div>
          <div
            style={{
              background: "#D4519D",
              color: "white",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0px 5px 5px 5px lightGray",
            }}
          >
            <p style={{ fontSize: "20px", fontWeight: "500" }}>
              It is a long established fact that a reader will be distracted by{" "}
              <br />
              the readable content of a page when looking at its layout. <br />{" "}
              <ul>
                <li> - Yoga</li>
                <li> - Meditation</li>
                <li> - Healing</li>
                <li> - Yog Nindra</li>
              </ul>
            </p>
          </div>
        </div>

        <div
          style={{
            marginLeft: "100px",
            marginTop: "-50px",
          }}
        >
          <div
            style={{
              position: "absolute",
              marginTop: "250px",
              //   marginLeft: "20px",
              background: "#FFE5FE",
              width: "350px",
              padding: "5px",
            }}
          >
            {" "}
            <h1
              style={{
                textAlign: "center",
                fontSize: "18px",
                fontWeight: "500",
              }}
            >
              Mrs. Karuna Ahuja
            </h1>{" "}
          </div>
          <img
            style={{ borderRadius: "50px", height: "350px", width: "350px" }}
            src="buaPic.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
