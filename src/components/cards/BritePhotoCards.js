import React from 'react';
import Lightbox from 'react-image-lightbox';

import 'react-image-lightbox/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import briteAerialOne from '../../assets/photos/brite/brite-aerial-1.jpg';
import briteAerialTwo from '../../assets/photos/brite/brite-aerial-2.jpg';
import briteCreek from '../../assets/photos/brite/brite-creek.jpg';
import briteField from '../../assets/photos/brite/brite-field-2.jpg';
import briteFieldTwo from '../../assets/photos/brite/brite-field-3.jpg';
import briteFieldThree from '../../assets/photos/brite/brite-field-4.jpg';
import briteTrees from '../../assets/photos/brite/brite-trees-1.jpg';
import briteTreesTwo from '../../assets/photos/brite/brite-trees-2.jpg';

import briteAerialOneTN from '../../assets/photos/brite/brite-aerial-1_tn.jpg';
import briteAerialTwoTN from '../../assets/photos/brite/brite-aerial-2_tn.jpg';
import briteCreekTN from '../../assets/photos/brite/brite-creek_tn.jpg';
import briteFieldTN from '../../assets/photos/brite/brite-field-2_tn.jpg';
import briteFieldTwoTN from '../../assets/photos/brite/brite-field-3_tn.jpg';
import briteFieldThreeTN from '../../assets/photos/brite/brite-field-4_tn.jpg';
import briteTreesTN from '../../assets/photos/brite/brite-trees-1_tn.jpg';
import briteTreesTwoTN from '../../assets/photos/brite/brite-trees-2_tn.jpg';

import { Card, Row } from 'react-bootstrap';

const images = [
  briteAerialOne,
  briteAerialTwo,
  briteCreek,
  briteField,
  briteFieldTwo,
  briteFieldThree,
  briteTrees,
  briteTreesTwo,
];

const styles = {
  photo: {
    maxWidth: '320px',
    maxHeight: '190px',
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

export default class Photos extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;

    return (
      <div>
        <Row>
          <Card
            style={styles.card}
            className="col-sm-12 col-md-6 col-lg-3 mt-4"
          >
            <img
              src={briteAerialOneTN}
              style={styles.photo}
              alt="sendero"
              onClick={() => this.setState({ isOpen: true, photoIndex: 0 })}
            />
          </Card>
          <Card
            style={styles.card}
            className="col-sm-12 col-md-6 col-lg-3 mt-4"
          >
            <img
              src={briteAerialTwoTN}
              style={styles.photo}
              alt="sendero"
              onClick={() => this.setState({ isOpen: true, photoIndex: 1 })}
            />
          </Card>
          <Card
            style={styles.card}
            className="col-sm-12 col-md-6 col-lg-3 mt-4"
          >
            <img
              src={briteCreekTN}
              style={styles.photo}
              alt="sendero"
              onClick={() => this.setState({ isOpen: true, photoIndex: 2 })}
            />
          </Card>
          <Card
            style={styles.card}
            className="col-sm-12 col-md-6 col-lg-3 mt-4"
          >
            <img
              src={briteFieldTN}
              style={styles.photo}
              alt="sendero"
              onClick={() => this.setState({ isOpen: true, photoIndex: 3 })}
            />
          </Card>
        </Row>
        <Row>
          <Card
            style={styles.card}
            className="col-sm-12 col-md-6 col-lg-3 mt-4"
          >
            <img
              src={briteFieldTwoTN}
              style={styles.photo}
              alt="sendero"
              onClick={() => this.setState({ isOpen: true, photoIndex: 4 })}
            />
          </Card>
          <Card
            style={styles.card}
            className="col-sm-12 col-md-6 col-lg-3 mt-4"
          >
            <img
              src={briteFieldThreeTN}
              style={styles.photo}
              alt="sendero"
              onClick={() => this.setState({ isOpen: true, photoIndex: 5 })}
            />
          </Card>
          <Card
            style={styles.card}
            className="col-sm-12 col-md-6 col-lg-3 mt-4"
          >
            <img
              src={briteTreesTN}
              style={styles.photo}
              alt="sendero"
              onClick={() => this.setState({ isOpen: true, photoIndex: 6 })}
            />
          </Card>
          <Card
            style={styles.card}
            className="col-sm-12 col-md-6 col-lg-3 mt-4"
          >
            <img
              src={briteTreesTwoTN}
              style={styles.photo}
              alt="sendero"
              onClick={() => this.setState({ isOpen: true, photoIndex: 7 })}
            />
          </Card>
        </Row>

        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
      </div>
    );
  }
}
