"use client";
import React, { useContext, useEffect, useState } from "react";
import style from ".././styles/Game.module.scss";
import Image from "next/image";
import { AddressContext } from "../src/app/page";
import Circle from "./Circle";

const Game = () => {
  const { score, setScore, userChoice, setUserChoice } = useContext(AddressContext);

  const handleClick = (userChoice) => {
    // this will pick a random choice of rock paper or scissors
    const choices = ["rock", "paper", "scissors"];
    const rand = Math.floor(Math.random() * (3 - 0) + 0);

    switch (userChoice) {
      case choices[rand]:
        console.log("Tie");
        break;
      case "rock":
        switch (choices[rand]) {
          case "paper":
            console.log("AI wins");
            break;
          case "scissors":
            console.log("You win");
            setScore(score + 1);
            break;
        }
        break;
      case "paper":
        switch (choices[rand]) {
          case "scissors":
            console.log("AI wins");
            break;
          case "rock":
            console.log("You win");
            setScore(score + 1);
            break;
        }
        break;
      case "scissors":
        switch (choices[rand]) {
          case "rock":
            console.log("AI wins");
            break;
          case "paper":
            console.log("You win");
            setScore(score + 1);
            break;
        }
        break;
      default:
        console.log("Invalid choice");
    }
  };

  useEffect(() => {
    // console.log(userChoice);
    handleClick(userChoice);
    setUserChoice("");
  }, [userChoice]);

  return (
    <div className={style.outerContainer}>
      <div className={style.innerContainer}>
        <Circle />
      </div>
    </div>
  );
};

export default Game;
