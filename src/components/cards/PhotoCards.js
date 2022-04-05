import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { useState } from 'react';

const styles = {
  photo: {
    maxWidth: '320px',
    maxHeight: '200px',
    height: 'auto',
    width: '100%',
    borderWidth: '2px',
    borderColor: '#C7911B',
    borderStyle: 'solid',
    margin: 'auto',
    objectFit: 'cover',
  },
  card: {
    borderColor: 'transparent',
  },
  button: {
    backgroundColor: 'transparent',
    border: 'none',
  },
};

const PhotoCards = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card style={styles.card} className="col-sm-12 col-md-6 col-lg-3 mt-4">
        <button
          style={styles.button}
          onClick={handleShow}
          href={props.photo}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img style={styles.photo} src={props.photo} alt="lots" />
        </button>
      </Card>
      <Modal
        className="modal-backdrop"
        aria-labelledby="example-custom-modal-styling-title"
        size="lg"
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton className="modal-header"></Modal.Header>
        <Modal.Body className="mx-auto modal-body">
          <img className="img-fluid mx-auto" src={props.photo} alt="lots" />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default PhotoCards;
