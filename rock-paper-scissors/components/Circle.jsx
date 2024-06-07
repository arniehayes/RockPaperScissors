import React, { useContext, useEffect, useState } from "react";
import { AddressContext } from "../src/app/page";
import style from ".././styles/Circle.module.scss";
import Image from "next/image";

const Circle = () => {

    const { setUserChoice } = useContext(AddressContext);

  const choiceObj = [
    {
      name: "rock",
      wins: "scissors",
      loses: "paper",
      ties: "rock",
      image: "/icon-rock.svg",
      class: `${style.circleOne}`
    },
    {
      name: "paper",
      wins: "rock",
      loses: "scissors",
      ties: "paper",
      image: "/icon-paper.svg",
      class: `${style.circleTwo}`
    },
    {
      name: "scissors",
      wins: "paper",
      loses: "rock",
      ties: "scissors",
      image: "/icon-scissors.svg",
      class: `${style.circleThree}`
    },
  ];

  return (
    <div className={style.circleContainer}>
      {choiceObj.map((item, key) => (
        <div
          className={item.class}
          onClick={() => {
            setUserChoice(item.name)
          }}
          id={key}
        >
          <Image src={item.image} width={50} height={50} />
        </div>
      ))}
    </div>
  );
};

export default Circle;
