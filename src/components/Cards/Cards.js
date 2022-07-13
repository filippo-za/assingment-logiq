import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ModalHome from "../ModalHome/ModalHome";

import "./Cards.css";

function Cards({ data }) {
  const [modal, setModal] = useState(false);
  const [info, setInfo] = useState([]);

  const openModal = () => {
    setModal(!modal);
  };

  const getData = (img, title) => {
    let tempData = [img, title];
    setInfo(() => [...tempData]);
    return setModal(true);
  };

  return (
    <div>
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={data.img} />
          <Card.Body>
            <Card.Title>{data.title}</Card.Title>
            <Card.Text>{data.delivery}</Card.Text>
            <Card.Text>{data.fermentation}</Card.Text>
            <Card.Text>{data.fermentation02}</Card.Text>
            <Card.Text>{data.fermentation03}</Card.Text>
            <Card.Text>{data.bottling}</Card.Text>
            <Card.Text>{data.bottling02}</Card.Text>
            <Card.Text>{data.pressing}</Card.Text>
            <Card.Text>{data.treatments}</Card.Text>
            <Card.Text>{data.treatments02}</Card.Text>
            <Card.Text>{data.treatments03}</Card.Text>
            <Card.Text>{data.harvest}</Card.Text>
            <Card.Text>{data.harvest02}</Card.Text>
            <Button
              onClick={() => getData(data.img, data.title)}
              variant="primary"
            >
              Visualizza
            </Button>
          </Card.Body>
        </Card>
        {modal ? (
          <ModalHome openModal={openModal} title={info[1]} img={info[0]} />
        ) : null}
      </div>
    </div>
  );
}

export default Cards;
