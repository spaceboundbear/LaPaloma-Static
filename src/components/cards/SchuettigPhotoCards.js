import React from 'react';
import Lightbox from 'react-image-lightbox';

import 'react-image-lightbox/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import schuettigFenceOne from '../../assets/photos/schuettig/schuettig-fence.jpg';
import schuettigFenceTwo from '../../assets/photos/schuettig/schuettig-fence-2.jpg';
import schuettigTree from '../../assets/photos/schuettig/schuettig-tree.jpg';
import schuettigRd from '../../assets/photos/schuettig/schuettig-rd.jpg';
import schuettigFieldTwo from '../../assets/photos/schuettig/schuettig-field-2.jpg';
import schuettigField from '../../assets/photos/schuettig/schuettig-field.jpg';
import schuettigZoom from '../../assets/photos/schuettig/schuettig-zoom.jpg';
import schuettigZoomTwo from '../../assets/photos/schuettig/schuettig-zoom-2.jpg';

import { Card, Row } from 'react-bootstrap';

const images = [
  schuettigFenceOne,
  schuettigFenceTwo,
  schuettigTree,
  schuettigRd,
  schuettigFieldTwo,
  schuettigField,
  schuettigZoom,
  schuettigZoomTwo,
];

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
              src={schuettigFenceOne}
              style={styles.photo}
              alt="schuettig-fence"
              onClick={() => this.setState({ isOpen: true, photoIndex: 0 })}
            />
          </Card>
          <Card
            style={styles.card}
            className="col-sm-12 col-md-6 col-lg-3 mt-4"
          >
            <img
              src={schuettigFenceTwo}
              style={styles.photo}
              alt="schuettig-fence-2"
              onClick={() => this.setState({ isOpen: true, photoIndex: 1 })}
            />
          </Card>
          <Card
            style={styles.card}
            className="col-sm-12 col-md-6 col-lg-3 mt-4"
          >
            <img
              src={schuettigTree}
              style={styles.photo}
              alt="schuettig-tree"
              onClick={() => this.setState({ isOpen: true, photoIndex: 2 })}
            />
          </Card>
          <Card
            style={styles.card}
            className="col-sm-12 col-md-6 col-lg-3 mt-4"
          >
            <img
              src={schuettigRd}
              style={styles.photo}
              alt="schuettig-rd"
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
              src={schuettigFieldTwo}
              style={styles.photo}
              alt="schuettig-field"
              onClick={() => this.setState({ isOpen: true, photoIndex: 4 })}
            />
          </Card>
          <Card
            style={styles.card}
            className="col-sm-12 col-md-6 col-lg-3 mt-4"
          >
            <img
              src={schuettigField}
              style={styles.photo}
              alt="schuettig-field-2"
              onClick={() => this.setState({ isOpen: true, photoIndex: 5 })}
            />
          </Card>
          <Card
            style={styles.card}
            className="col-sm-12 col-md-6 col-lg-3 mt-4"
          >
            <img
              src={schuettigZoom}
              style={styles.photo}
              alt="schuettig-tree"
              onClick={() => this.setState({ isOpen: true, photoIndex: 6 })}
            />
          </Card>
          <Card
            style={styles.card}
            className="col-sm-12 col-md-6 col-lg-3 mt-4"
          >
            <img
              src={schuettigZoomTwo}
              style={styles.photo}
              alt="schuettig-tree-2"
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
