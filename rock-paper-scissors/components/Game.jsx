"use client";
import React, { useContext, useEffect, useState } from "react";
import style from ".././styles/Game.module.scss";
import Image from "next/image";
import { AddressContext } from "../src/app/page";

const Game = () => {
  const { score, setScore } = useContext(AddressContext);

  const handleScore = () => {
    setScore(score + 1);
  };

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
            handleScore();
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
            handleScore();
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
            handleScore();
            break;
        }
        break;
      default:
        console.log("Invalid choice");
    }
  };

  useEffect(() => {
    handleClick();
    setScore(0);
  }, [setScore]);

  return (
    <div className={style.outerContainer}>
      <div className={style.innerContainer}>
        {/* Circle 1 & 2 */}
        <div className={style.circleContainer}>
          <div
            className={style.circleOne}
            onClick={() => {
              handleClick("rock");
            }}
            value="rock"
          >
            <Image src={"/icon-rock.svg"} width={50} height={50} />
          </div>
          <div
            className={style.circleTwo}
            onClick={() => {
              handleClick("paper");
            }}
            value="paper"
          >
            <Image src={"/icon-paper.svg"} width={50} height={50} />
          </div>
        </div>

        {/* Circle 3 */}
        <div className={style.circleContainer}>
          <div
            className={style.circleThree}
            onClick={() => {
              handleClick("scissors");
            }}
            value="scissors"
          >
            <Image src={"/icon-scissors.svg"} width={50} height={50} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
