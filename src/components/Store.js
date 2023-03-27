import React from "react";
import {
  Text,
  Button,
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Divider,
  CardFooter,
  ButtonGroup,
} from "@chakra-ui/react";
import "./Store.css";
export default function Store() {
  const data = [
    {
      img: "mat.png",
      title: "Yoga Mat (6mm)",
      content:
        "It is a specialized mat designed to provide a supportive and comfortable surface for practicing yoga. ",
      price: "499",
    },
    {
      img: "rope.png",
      title: "Skipping Rope",
      content:
        "A skipping rope is a long rope used for a variety of activities including exercise, fitness training.",
      price: "149",
    },
    {
      img: "comb.png",
      title: "Wooden Comb",
      content:
        "A wooden comb is a grooming tool used to style and manage hair. It is typically made of wood.",
      price: "179",
    },
  ];
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        height: "80vh",
        marginTop: "200px",
      }}
    >
      <div style={{ marginTop: "120px" }}>
        <Text
          style={{ textAlign: "center" }}
          bgGradient="linear(to-l, #00000087, #000000)"
          bgClip="text"
          fontSize="4xl"
          fontWeight="extrabold"
        >
          Aura Health <br /> Care Store
        </Text>

        <Button
          style={{
            background: "#A139B4",
            color: "white",
            marginLeft: "35px",
            marginTop: "20px",
          }}
          size="lg"
        >
          Explore 🚀
        </Button>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          //   border: "1px solid black",
          width: "70vw",
          height: "30vh",
          marginRight: "-650px",
          zIndex: "100",
          marginTop: "20px",
          //   position: "absolute",
        }}
      >
        {data.map((d) => (
          <div>
            {/* <div
            style={{
              width: "200px",
              height: "30vh",
              border: "1px solid black",
              borderRadius: "20px",
              //   boxShadow: "0px 0px 20px 0px lightGray",
              borderRadius: "20px",
              background: "white",
              //   padding: "10px",
            }}
          >
            <div style={{ width: "200px", height: "18vh", paddingTop: "20px" }}>
              <img
                style={{
                  borderRadius: "20px",
                  objectFit: "cover",
                  height: "100%",
                  margin: "auto",
                }}
                src={d.img}
                alt=""
              />
            </div>

            <p
              style={{
                textAlign: "center",
                marginTop: "10px",
                fontWeight: "600",
                fontSize: "18px",
              }}
            >
              {d.title}
            </p>
            <p
              style={{
                textAlign: "center",
                marginTop: "5px",
                fontWeight: "600",
                fontSize: "18px",
              }}
            >
              Rs. {d.price}
            </p>
          </div> */}
            <Card style={{ width: "20vw" }}>
              <CardBody>
                <div style={{ height: "180px" }}>
                  <Image
                    style={{
                      objectFit: "cover",
                      height: "100%",
                      margin: "auto",
                    }}
                    src={d.img}
                    alt="Green double couch with wooden legs"
                    borderRadius="lg"
                  />{" "}
                </div>

                <Stack mt="6" spacing="3">
                  <Heading size="md"> {d.title} </Heading>
                  <Text>{d.content}</Text>
                  <Text color="blue.600" fontSize="2xl">
                    Rs. {d.price}
                  </Text>
                </Stack>
              </CardBody>
            </Card>
          </div>
        ))}
      </div>

      <div
        style={{
          width: "600px",
          height: "230px",
          background: "#9636AB",
          marginTop: "-100px",
          borderRadius: "20px",
        }}
      ></div>
    </div>
  );
}
