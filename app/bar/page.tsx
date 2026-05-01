"use client";

import { useState } from "react";

const makePostRequest = async () => {
  const payload = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: "super Pilot" }),
  };

  const response = await fetch(`/api/test-route`, payload);

  const data = await response.json();

  return { data };
};

const Bar = () => {
  const [name, setName] = useState("");

  const onClick = async () => {
    console.log('Button clicked')
    const { data } = await makePostRequest();
    setName(data.name);
  };

  return (
    <>
      <h1>Hello {name} from bar page</h1>
      <button
        onClick={onClick}
        style={{
          border: "2px solid red",
          borderRadius: "4px",
          padding: "8px 16px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.3)",
          cursor: "pointer",
          background: "linear-gradient(to bottom, #fff 0%, #f0f0f0 100%)",
        }}
      >
        click me
      </button>
    </>
  );
};

export default Bar;
