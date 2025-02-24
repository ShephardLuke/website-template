'use client'

import { useState } from "react";
import Button from "./template/buttons/button";
import SubmitButton from "./template/buttons/submitButton";
import WarningButton from "./template/buttons/warningButton";
import Footer from "./template/global/footer";
import Header from "./template/global/header";
import { NameLink } from "./template/link/nameLink";

export default function Home() {

  const [clicked, setClicked] = useState<string>("");
  const [clickCount, setClickCount] = useState(0);

  let feedbackMessage = "";

  if (clickCount === 0) {
    feedbackMessage = "Press a button.";
  }
  else if (clickCount === 1) {
    feedbackMessage = "Pressed " + clicked + "."
  } else {
    feedbackMessage += "Pressed " + clicked + " " + clickCount + " times.";
  }


  function clickedButton(name: string) { // Change clicked to current button
    if (clicked == name) {
      setClickCount(clickCount + 1);
    } else {
      setClicked(name);
      setClickCount(1)
    }
  }

  return (
    <>
      <Header currentPage="Home"/>
      <div className="main">
        <h1>Website Template</h1>
        <p>This is a template I use for creating my websites.</p>
        <br/>
  
        <div className="whitespace-pre text-wrap">
          <p>Your device is in the
          <span className="font-bold sm:hidden"> extra small </span>
          <span className="font-bold hidden sm:inline-block md:hidden"> small </span>
          <span className="font-bold hidden md:inline-block lg:hidden"> medium </span>
          <span className="font-bold hidden lg:inline-block xl:hidden"> large </span>
          <span className="font-bold hidden xl:inline-block 2xl:hidden"> extra large </span>
          <span className="font-bold hidden 2xl:inline-block"> extra extra large </span>
          responsive design category.</p>
        </div>
        <br/>

        <p>{new NameLink("Link example", "https://tic-tac-toe.shephardluke.co.uk").generateElement()}</p>
        <p>{new NameLink("Disabled link example", "https://tic-tac-toe.shephardluke.co.uk", false).generateElement()}</p>
        
        <div className="pt-5 pb-5 flex flex-col  space-y-5 md:flex-row md:space-y-0 md:space-x-5 ">
          <Button className="w-max" text={"Button"} clicked={() => {clickedButton("button")}}/>
          <SubmitButton className="w-max" text={"Submit Button"} clicked={() => {clickedButton("submit button")}}/>
          <WarningButton className="w-max" text={"Warning Button"} clicked={() => {clickedButton("warning button")}}/>
        </div>
        {feedbackMessage}
      </div>
      <Footer/>
    </>
  );
}
