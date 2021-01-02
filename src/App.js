import React from "react";
import useSound from "use-sound";
import "./Tofu.css";

import back from "./img/back.PNG";

import patreon from "./img/patreon.PNG";

import abort from "./img/abort.gif";

import atreus from "./img/atreus.gif";

import bitch from "./img/bitch.gif";

import coochi from "./img/coochi.gif";

import cry from "./img/cry.gif";

import fuck from "./img/fuck.gif";

import hug from "./img/hug.gif";

import mood from "./img/mood.gif";

import ready from "./img/ready.gif";

import sensitive from "./img/sensitive.gif";

import ship from "./img/ship.gif";

import stupid from "./img/stupid.gif";

import comb from "./sound/tofucomb.wav";

export default function Tofuboard() {
  const [play, { stop }] = useSound(comb, {
    sprite: {
      bitch: [0, 6447],
      abort: [6787, 5467],
      coochi: [12593, 5600],
      cry: [18504, 3100],
      atreus: [22145, 5000],
      fuck: [27681, 4000],
      hug: [32308, 4200],
      mood: [37373, 5334],
      ready: [43719, 1967],
      sensitive: [46649, 4967],
      ship: [52636, 3833],
      stupid: [57511, 4333],
    },
  });

  function openYoutube() {
    window.open("https://www.youtube.com/c/QueenTofu");
  }

  return (
    <>
      <div className="tofu">
        <img
          className="backdrop"
          onClick={openYoutube}
          src={back}
          alt="Tofu backdrop"
        />

        <h1>Queen Tofuboard</h1>
        <span
          class="container"
          onClick={() => {
            stop();
            play({ id: "bitch" });
          }}
        >
          <img src={bitch} alt="Jesse Pinkman Impression" />
          <span class="text-overlay">Jesse Pinkman Impression</span>
        </span>
        <span
          class="container"
          onClick={() => {
            stop();
            play({ id: "abort" });
          }}
        >
          <img src={abort} alt="Abort" />
          <span class="text-overlay">Abort</span>
        </span>
        <span
          class="container"
          onClick={() => {
            stop();
            play({ id: "coochi" });
          }}
        >
          <img src={coochi} alt="She's a Badass" />
          <span class="text-overlay">She's a Badass</span>
        </span>
        <span
          class="container"
          onClick={() => {
            stop();
            play({ id: "cry" });
          }}
        >
          <img src={cry} alt="Too much emotion" />
          <span class="text-overlay">Too Much Emotion</span>
        </span>
        <span
          class="container"
          onClick={() => {
            stop();
            play({ id: "atreus" });
          }}
        >
          <img src={atreus} alt="Atreus" />
          <span class="text-overlay">Atreus</span>
        </span>
        <span
          class="container"
          onClick={() => {
            stop();
            play({ id: "fuck" });
          }}
        >
          <img src={fuck} alt="Fuckkk" />
          <span class="text-overlay">Fuckkk</span>
        </span>
        <span
          class="container"
          onClick={() => {
            stop();
            play({ id: "hug" });
          }}
        >
          <img src={hug} alt="Give me a Hug" />
          <span class="text-overlay">Hug Me Pls</span>
        </span>
        <span
          class="container"
          onClick={() => {
            stop();
            play({ id: "mood" });
          }}
        >
          <img src={mood} alt="Big Mood" />
          <span class="text-overlay">Big Mood</span>
        </span>
        <span
          class="container"
          onClick={() => {
            stop();
            play({ id: "ready" });
          }}
        >
          <img src={ready} alt="Ready for Anything" />
          <span class="text-overlay">Ready for Anything</span>
        </span>
        <span
          class="container"
          onClick={() => {
            stop();
            play({ id: "sensitive" });
          }}
        >
          <img src={sensitive} alt="Be nice" />
          <span class="text-overlay">Be Nice</span>
        </span>
        <span
          class="container"
          onClick={() => {
            stop();
            play({ id: "ship" });
          }}
        >
          <img src={ship} alt="I Ship it" />
          <span class="text-overlay">I Ship it</span>
        </span>
        <span
          class="container"
          onClick={() => {
            stop();
            play({ id: "stupid" });
          }}
        >
          <img src={stupid} alt="These People" />
          <span class="text-overlay">These People</span>
        </span>
      </div>
    </>
  );
}
