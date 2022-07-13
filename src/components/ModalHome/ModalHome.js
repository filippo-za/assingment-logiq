import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";

const ModalHome = ({ openModal, title, img }) => {
  return (
    <>
      <Modal show={openModal}>
        <Modal.Header>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Image src={img} />
        <Modal.Footer>
          <Button variant="secondary" onClick={openModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalHome;
