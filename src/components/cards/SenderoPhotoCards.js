import React from 'react';
import Lightbox from 'react-image-lightbox';

import 'react-image-lightbox/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import senderoTurkey from '../../assets/photos/sendero/sendero-deer-turkey.jpg';
import senderoDeer from '../../assets/photos/sendero/sendero-deer.jpg';
import senderoTreesThree from '../../assets/photos/sendero/sendero-trees3.jpg';
import senderoTreesTwo from '../../assets/photos/sendero/sendero-trees2.jpg';
import senderoTreesOne from '../../assets/photos/sendero/sendero-trees1.jpg';
import senderoEntrance from '../../assets/photos/sendero/sendero-entrance.jpg';
import senderoSunset from '../../assets/photos/sendero/sendero-sunset.jpg';
import senderoOverview from '../../assets/photos/sendero/sendero-overview.jpg';

import senderoTurkeyTN from '../../assets/photos/sendero/sendero-deer-turkey_tn.jpg';
import senderoDeerTN from '../../assets/photos/sendero/sendero-deer_tn.jpg';
import senderoTreesThreeTN from '../../assets/photos/sendero/sendero-trees3_tn.jpg';
import senderoTreesTwoTN from '../../assets/photos/sendero/sendero-trees2_tn.jpg';
import senderoTreesOneTN from '../../assets/photos/sendero/sendero-trees1_tn.jpg';
import senderoEntranceTN from '../../assets/photos/sendero/sendero-entrance_tn.jpg';
import senderoSunsetTN from '../../assets/photos/sendero/sendero-sunset_tn.jpg';
import senderoOverviewTN from '../../assets/photos/sendero/sendero-overview_tn.jpg';

import { Card, Row } from 'react-bootstrap';

const images = [
  senderoTurkey,
  senderoDeer,
  senderoTreesThree,
  senderoTreesTwo,
  senderoTreesOne,
  senderoEntrance,
  senderoSunset,
  senderoOverview,
];

const styles = {
  photo: {
    maxWidth: '320px',
    maxHeight: '170px',
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
              src={senderoTurkeyTN}
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
              src={senderoDeerTN}
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
              src={senderoTreesThreeTN}
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
              src={senderoTreesTwoTN}
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
              src={senderoTreesOneTN}
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
              src={senderoEntranceTN}
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
              src={senderoSunsetTN}
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
              src={senderoOverviewTN}
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
