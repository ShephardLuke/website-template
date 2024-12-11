'use client'

import { useEffect, useState } from "react";
import Button from "./template/buttons/button";
import SubmitButton from "./template/buttons/submitButton";
import WarningButton from "./template/buttons/warningButton";
import Footer from "./template/global/footer";
import Header from "./template/global/header";
import { NameLink } from "./template/link/nameLink";

export default function Home() {

  const [clicked, setClicked] = useState("none.");
  const [clickCount, setClickCount] = useState(1);

  let feedbackMessage = "Clicked "  + clicked;

  if (clickCount > 1) {
    feedbackMessage += " " + clickCount + " times.";
  }

  useEffect(() => { // Reset click count when button changes
    setClickCount(1);
  }, [clicked])

  function clickedButton(name: string) { // Change clicked to current button
    if (clicked == name) {
      setClickCount(clickCount + 1);
    } else {
      setClicked(name);
    }
  }

  return (
    <>
      <Header currentPage="Home"/>
      <div className="main">
        <h1>This is a template I use for creating my websites</h1>
        <p>Link {new NameLink("example", "https://tic-tac-toe.shephardluke.co.uk").generateElement()}</p>
        
        <div className="pt-5 pb-5 flex gap-4">
          <Button text={"Button"} clicked={() => {clickedButton("button")}}/>
          <SubmitButton text={"Submit Button"} clicked={() => {clickedButton("submit button")}}/>
          <WarningButton text={"Warning Button"} clicked={() => {clickedButton("warning button")}}/>
        </div>
        {feedbackMessage}
      </div>
      <Footer/>
    </>
  );
}
