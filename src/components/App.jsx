import React from "react";
import Contacts from "/src/contacts.js";
import Avatar from "./Avatar";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avatar url={props.imgURL} />{" "}
      </div>
      <div className="bottom">
        <p className="info">{props.phone}</p>
        <p className="info">{props.email}</p>
      </div>
    </div>
  );
}

function CardList(contacts) {
  const cards = contacts.cards;
  return (
    <div>
      {cards.map((card) => (
        <Card
          key={card.phone}
          name={card.name}
          imgURL={card.imgURL}
          phone={card.phone}
          email={card.email}
        />
      ))}
    </div>
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <CardList cards={Contacts} />
    </div>
  );
}

export default App;
