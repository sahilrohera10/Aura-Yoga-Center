import React from "react";
import Slider from "react-slick";

export default function Activities() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
    // centerMode: true,
    autoplay: true,
    autoplaySpeed: 6000,
  };
  return (
    <>
      {" "}
      <div style={{ marginTop: "20px" }} className="cardsDiv">
        <h1
          style={{
            textAlign: "center",
            margin: "30px",
            fontSize: "30px",
            fontWeight: "600",
            // marginBottom: "20px",
          }}
        >
          Our Services
        </h1>
        <Slider {...settings}>
          <div>
            <div className="cards">
              <h1
                style={{
                  textAlign: "center",
                  fontSize: "25px",
                  fontWeight: "500",
                  paddingTop: "20px",
                }}
              >
                Yoga
              </h1>
              <img
                style={{
                  width: "250px",
                  height: "200px",
                  borderRadius: "50px",
                  margin: "auto",
                }}
                src="yogaResp.jpg"
                alt=""
              />
              <p style={{ textAlign: "center", marginTop: "10px" }}>
                Yoga is essentially a spiritual discipline based on an extremely
                subtle science, which focuses on bringing harmony between mind
                and body.
              </p>
            </div>
          </div>
          <div>
            <div className="cards">
              {" "}
              <h1
                style={{
                  textAlign: "center",
                  fontSize: "25px",
                  fontWeight: "500",
                  paddingTop: "20px",
                }}
              >
                Pranayama
              </h1>
              <img
                style={{
                  width: "250px",
                  height: "200px",
                  borderRadius: "50px",
                  margin: "auto",
                }}
                src="prayanamImgResp.jpg"
                alt=""
              />
              <p style={{ textAlign: "center", marginTop: "10px" }}>
                Pranayama is the practice of breath regulation. It's a main
                component of yoga, an exercise for physical and mental wellness.
              </p>
            </div>
          </div>

          <div>
            <div className="cards">
              {" "}
              <h1
                style={{
                  textAlign: "center",
                  fontSize: "25px",
                  fontWeight: "500",
                  paddingTop: "20px",
                }}
              >
                Meditation
              </h1>
              <img
                style={{
                  width: "250px",
                  height: "200px",
                  borderRadius: "50px",
                  margin: "auto",
                }}
                src="imgYogaResp.jpg"
                alt=""
              />
              <p style={{ textAlign: "center" }}>
                Meditation is a practice in which an individual uses a technique
                – such as mindfulness, or focusing the mind on a particular
                object, thought, or activity – to train attention and awareness.
              </p>
            </div>
          </div>
          <div>
            <div className="cards">
              {" "}
              <h1
                style={{
                  textAlign: "center",
                  fontSize: "25px",
                  fontWeight: "500",
                  paddingTop: "20px",
                }}
              >
                Zumba
              </h1>
              <img
                style={{
                  width: "250px",
                  height: "200px",
                  borderRadius: "50px",
                  margin: "auto",
                }}
                src="imgZumbaResp.jpg"
                alt=""
              />
              <p style={{ textAlign: "center", marginTop: "10px" }}>
                Zumba is intended as a total-body cardio and aerobic workout,
                which provides a large calorie consumption.
              </p>
            </div>
          </div>
          <div>
            <div className="cards">
              {" "}
              <h1
                style={{
                  textAlign: "center",
                  fontSize: "25px",
                  fontWeight: "500",
                  paddingTop: "20px",
                }}
              >
                Dance
              </h1>
              <img
                style={{
                  width: "100px",
                  height: "200px",
                  borderRadius: "50px",
                  margin: "auto",
                }}
                src="danceImgResp.png"
                alt=""
              />
              <p style={{ textAlign: "center", marginTop: "10px" }}>
                Dance is a performing art form consisting of sequences of
                movement, either improvised or purposefully selected.
              </p>
            </div>
          </div>

          <div>
            <div className="cards">
              {" "}
              <h1
                style={{
                  textAlign: "center",
                  fontSize: "25px",
                  fontWeight: "500",
                  paddingTop: "20px",
                }}
              >
                Massage
              </h1>
              <img
                style={{
                  width: "250px",
                  height: "200px",
                  borderRadius: "50px",
                  margin: "auto",
                }}
                src="massageImgResp.jpg"
                alt=""
              />
              <p style={{ textAlign: "center", marginTop: "10px" }}>
                Massage is a type of integrative medicine in which a massage
                therapist manipulates your skin, muscles, tendons and ligaments.
              </p>
            </div>
          </div>
        </Slider>
      </div>
      <div className="ourActivities">
        <h1
          style={{
            textAlign: "center",
            fontSize: "45px",
            fontWeight: "700",
            color: "#351B58",
          }}
        >
          Classes
        </h1>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <div style={{ position: "relative" }} id="contained">
            <div
              style={{
                marginLeft: "50px",
                position: "absolute",
                marginTop: "20px",
              }}
              className="product-details"
            >
              <h1 style={{ marginLeft: "20px" }}>Yoga Classes</h1>
              <span className="hint-star star">
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star-o" aria-hidden="true" />
              </span>
              <p className="information">
                Yoga is essentially a spiritual discipline based on an extremely
                subtle science, which focuses on bringing harmony between mind
                and body.
              </p>
              <div>
                {/* <button
                style={{
                  padding: "10px",
                  marginLeft: "100px",
                  marginTop: "20px",
                }}
                className="btn"
              >
                {" "}
                More
              </button> */}
              </div>
            </div>
            <div className="product-image">
              <img src="yogaPic.jpg" alt="" />
              <div className="info">
                <h2> Details</h2>
                <ul>
                  <li>
                    <strong>Batch Timimgs : </strong>6:00 - 7:00 am{" "}
                  </li>
                  <li>
                    <strong>Instructor : </strong>Mrs Karuna Ahuja
                  </li>
                  <li>
                    <strong>Requirement : </strong>Yoga Mat
                  </li>
                  {/* <li>
                  <strong>Material: </strong>Eco-Friendly
                </li> */}
                </ul>
              </div>
            </div>
          </div>

          {/* card 2 */}

          <div style={{ position: "relative" }} id="contained">
            <div
              style={{
                marginLeft: "50px",
                position: "absolute",
                marginTop: "20px",
              }}
              className="product-details"
            >
              <h1 style={{ marginLeft: "20px" }}>Zumba Classes</h1>
              <span className="hint-star star">
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star-o" aria-hidden="true" />
              </span>
              <p className="information">
                " Zumba is intended as a total-body cardio and aerobic workout,
                which provides a large calorie consumption.
              </p>
              <div>
                {/* <button
                style={{
                  padding: "10px",
                  marginLeft: "100px",
                  marginTop: "20px",
                }}
                className="btn"
              >
                {" "}
                More
              </button> */}
              </div>
            </div>
            <div className="product-image">
              <img src="zumbaPic.jpg" alt="" />
              <div className="info">
                <h2> Details</h2>
                <ul>
                  <li>
                    <strong>Batch Timimgs : </strong>6:00 - 7:00 am{" "}
                  </li>
                  <li>
                    <strong>Instructor : </strong>Mrs Karuna Ahuja
                  </li>
                  <li>
                    <strong>Requirement : </strong>Yoga Mat
                  </li>
                  {/* <li>
                  <strong>Material: </strong>Eco-Friendly
                </li> */}
                </ul>
              </div>
            </div>
          </div>

          {/* card 3 */}

          <div style={{ position: "relative" }} id="contained">
            <div
              style={{
                marginLeft: "50px",
                position: "absolute",
                marginTop: "20px",
              }}
              className="product-details"
            >
              <h1 style={{ marginLeft: "35px" }}>Meditation</h1>
              <span className="hint-star star">
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star-o" aria-hidden="true" />
              </span>
              <p className="information">
                " Meditation is a practice in which an individual uses a
                technique such as mindfulness, or focusing the mind on a
                particular object, thought, or activity to train attention.
              </p>
              <div>
                {/* <button
                style={{
                  padding: "10px",
                  marginLeft: "100px",
                  marginTop: "20px",
                }}
                className="btn"
              >
                {" "}
                More
              </button> */}
              </div>
            </div>
            <div className="product-image">
              <img src="meditationPic.jpg" alt="" />
              <div className="info">
                <h2> Details</h2>
                <ul>
                  <li>
                    <strong>Batch Timimgs : </strong>6:00 - 7:00 am{" "}
                  </li>
                  <li>
                    <strong>Instructor : </strong>Mrs Karuna Ahuja
                  </li>
                  <li>
                    <strong>Requirement : </strong>Yoga Mat
                  </li>
                  {/* <li>
                  <strong>Material: </strong>Eco-Friendly
                </li> */}
                </ul>
              </div>
            </div>
          </div>

          {/* card 4 */}

          <div style={{ position: "relative" }} id="contained">
            <div
              style={{
                marginLeft: "50px",
                position: "absolute",
                marginTop: "20px",
              }}
              className="product-details"
            >
              <h1 style={{ marginLeft: "20px" }}>Dance Classes</h1>
              <span className="hint-star star">
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star-o" aria-hidden="true" />
              </span>
              <p className="information">
                " Dance is a performing art form consisting of sequences of
                movement, either improvised or purposefully selected.
              </p>
              <div>
                {/* <button
                style={{
                  padding: "10px",
                  marginLeft: "100px",
                  marginTop: "20px",
                }}
                className="btn"
              >
                {" "}
                More
              </button> */}
              </div>
            </div>
            <div className="product-image">
              <img src="dancePic.jpg" alt="" />
              <div className="info">
                <h2> Details</h2>
                <ul>
                  <li>
                    <strong>Batch Timimgs : </strong>6:00 - 7:00 am{" "}
                  </li>
                  <li>
                    <strong>Instructor : </strong>Mrs Karuna Ahuja
                  </li>
                  <li>
                    <strong>Requirement : </strong>Yoga Mat
                  </li>
                  {/* <li>
                  <strong>Material: </strong>Eco-Friendly
                </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
