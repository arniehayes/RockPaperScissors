"use client";
import Title from "../../components/Title";
import style from "../../styles/Main.module.scss";
import Game from "../../components/Game";
import Rules from "../../components/Rules";
import React, { useContext, useState } from "react";



export const AddressContext = React.createContext();

export default function Home() {

  const [score, setScore] = useState(0);

  return (
    <AddressContext.Provider value={{ score, setScore }}>
      <main className={style.main}>
        <Title />
        <Game />
        <Rules />
      </main>
    </AddressContext.Provider>
  );
}
