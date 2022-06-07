import React, { useState, useEffect } from "react";
import "./Test.css";
import { data } from "./base";

const Test = () => {
  const [first, setfirst] = useState("");
  const [second, setsecond] = useState([]);
  const [count, setCount] = useState(0);
  const [replay, setReplay] = useState([]);

  const handleInput = (e) => {
    setfirst(e.target.value);
  };

  const submit = () => {
    if (second.at(-1) != "") {
      data.push(second.at(-1));
    }

    setCount(count + 1);

    setTimeout(() => {
      setReplay(replay.concat(true));
      console.log(replay);
    }, 600);

    setfirst("");
  };

  useEffect(() => {
    setsecond([...second, first]);
  }, [first]);

  useEffect(() => {
    setReplay([...replay, false]);
  }, [first]);

  return (
    <div className="container">
      <div className="card">
        <div className="container">
          <div className="card-title">
            <p>les messages privées</p>
          </div>
          <div className="card-content">
            {data.map((n) => (
              <div key={n}>
                <p className="pop"> {n} </p>
                <p className="replay">je suis generé automatiquement.</p>
              </div>
            ))}
          </div>
          <div className="card-action">
            <input
              type="text"
              className=""
              value={first}
              onChange={handleInput}
            />
            <span>
              <a href="#" className="right btn-small indigo" onClick={submit}>
                <i className="material-icons">send</i>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
