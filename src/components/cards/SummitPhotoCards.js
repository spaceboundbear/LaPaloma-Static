import React from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import summitAerialOne from '../../assets/photos/summit/summit-aerial.jpg';
import summitAerialTwo from '../../assets/photos/summit/summit-aerial-2.jpg';
import summitFence from '../../assets/photos/summit/summit-fence.jpg';
import summitTrail from '../../assets/photos/summit/summit-trail.jpg';
import summitFieldTwo from '../../assets/photos/summit/summit-field-2.jpg';
import summitField from '../../assets/photos/summit/summit-field.jpg';
import summitTree from '../../assets/photos/summit/summit-tree-1.jpg';
import summitTreeTwo from '../../assets/photos/summit/summit-tree-2.jpg';

import summitAerialOneTN from '../../assets/photos/summit/summit-aerial_tn.jpg';
import summitAerialTwoTN from '../../assets/photos/summit/summit-aerial-2_tn.jpg';
import summitFenceTN from '../../assets/photos/summit/summit-fence_tn.jpg';
import summitTrailTN from '../../assets/photos/summit/summit-trail_tn.jpg';
import summitFieldTwoTN from '../../assets/photos/summit/summit-field-2_tn.jpg';
import summitFieldTN from '../../assets/photos/summit/summit-field_tn.jpg';
import summitTreeTN from '../../assets/photos/summit/summit-tree-1_tn.jpg';
import summitTreeTwoTN from '../../assets/photos/summit/summit-tree-2_tn.jpg';

import { Card, Row } from 'react-bootstrap';

const images = [
  summitAerialOne,
  summitAerialTwo,
  summitFence,
  summitTrail,
  summitFieldTwo,
  summitField,
  summitTree,
  summitTreeTwo,
];

const styles = {
  photo: {
    maxWidth: '320px',
    maxHeight: '160px',
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
              src={summitAerialOneTN}
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
              src={summitAerialTwoTN}
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
              src={summitFenceTN}
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
              src={summitTrailTN}
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
              src={summitFieldTwoTN}
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
              src={summitFieldTN}
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
              src={summitTreeTN}
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
              src={summitTreeTwoTN}
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
