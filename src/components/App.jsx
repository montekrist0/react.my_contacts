import React from "react";
import Contacts from "/src/contacts.js";
import Avatar from "./Avatar";
import Card from "./Card";

function createCard(contact) {
  return (
    <Card
      key={contact.phone}
      name={contact.name}
      imgURL={contact.imgURL}
      phone={contact.phone}
      email={contact.email}
    />
  );
}

function CardList(contacts) {
  // const cards = contacts.cards;
  return contacts.cards.map((card) => (
    <Card
      key={card.phone}
      name={card.name}
      imgURL={card.imgURL}
      phone={card.phone}
      email={card.email}
    />
  ));
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar url="https://sun9-86.userapi.com/impg/bwRLt9PSuLalQ3QMmTU7qUdwziP48kBnL9Jomw/Qo6LdBJxM2I.jpg?size=1620x2160&quality=96&sign=14e17e53d2f56bf91b0b44242e60fe3b&type=album" />
      <CardList cards={Contacts} />
      {Contacts.map(createCard)}
    </div>
  );
}

export default App;
