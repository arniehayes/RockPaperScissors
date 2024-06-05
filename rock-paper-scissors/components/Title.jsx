"use client";
import React, { useContext, useState } from "react";
import style from ".././styles/Title.module.scss";
import { AddressContext } from "../src/app/page";

const Title = () => {

  const { score } = useContext(AddressContext);
  return (
    <div className={style.outerContainer}>
      <div className={style.titleContainer}>
        <h1 className={style.title}>
          Rock <br /> Paper <br /> Scissors
        </h1>
      </div>
      <div className={style.scoreContainer}>
        <p className={style.score}>SCORE</p>
        <p className={style.number}>{score}</p>
      </div>
    </div>
  );
};

export default Title;
