import React, { useState, useRef, useEffect } from "react";

export default function Stopwatch({ changeTurn, player, board, winner }) {
  // console.log("stopwatch", board);
  const Ref = useRef(null);
  const [timer, setTimer] = useState("03");

  const getDeadTime = () => {
    let deadline = new Date();
    deadline.setSeconds(deadline.getSeconds() + 3);
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

    setTimer("03");
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

  return (
    <div className="App">
      <h2>{timer}</h2>
    </div>
  );
}
