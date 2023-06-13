import React, { useState, useRef, useEffect } from "react";
import "../scss/timer.scss";

export default function Stopwatch({ changeTurn, player, board, winner }) {
  // console.log("stopwatch", board);
  const Ref = useRef(null);
  const [timer, setTimer] = useState("30");

  const getDeadTime = () => {
    let deadline = new Date();
    deadline.setSeconds(deadline.getSeconds() + 30);
    return deadline;
  };

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    // console.log("getTimeRemaning", board);
    const seconds = Math.floor((total / 1000) % 60);
    return {
      total,
      seconds,
    };
  };

  const startTimer = (e) => {
    // console.log("startTimer", board);
    let { total, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      setTimer(seconds > 9 ? seconds : "0" + seconds);
    } else {
      setTimer("-1");
    }
  };

  const clearTimer = (e) => {
    // console.log("clearTimer", board);

    setTimer("30");
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };

  useEffect(() => {
    if (timer === "-1") {
      clearTimer(getDeadTime());
      changeTurn((prev) => !prev);
    }
  }, [timer]);

  useEffect(() => {
    clearTimer(getDeadTime());
  }, [player]);

  useEffect(() => {
    if (winner === 1 || winner === 2) {
      setTimer("00");
      if (Ref.current) clearInterval(Ref.current);
    }
  }, [winner]);

  return <div className="timer">{timer}s</div>;
}
