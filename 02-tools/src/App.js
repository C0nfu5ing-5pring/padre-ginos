import React from "react";
import { createRoot } from "react-dom/client";

const Pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.description),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Padre Gino's"),
    React.createElement(Pizza, {
      name: "Pepparoni Pizza",
      description: "FIREEEEE",
    }),
    React.createElement(Pizza, {
      name: "Americano",
      description: "French Fries and hot dogs",
    }),
    React.createElement(Pizza, {
      name: "Hawaiin",
      description: "Pineapple and ham",
    }),
    React.createElement(Pizza, {
      name: "Baked Potato Pizza",
      description: "The unholy potato mash",
    }),
  ]);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
