import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

const styles = {
  faq: {
    fontFamily: 'HelveticaStdBold',
    color: '#803308',
    marginBottom: '25px',
    paddingTop: '15px',
  },
  formBg: {
    backgroundColor: '#f6edde',
    marginTop: '20px',
  },
  headers: {
    color: '#C7911B',
    fontSize: '23px',
  },
};

const FrequentlyAsked = () => {
  return (
    <div style={styles.formBg}>
      <Container className="py-2">
        <h3 style={styles.faq} className="text-center mt-2">
          Frequently Asked Questions
        </h3>
        <h5 style={styles.headers}>Where is Sendero Crossing Located?</h5>
        <ul>
          <li>
            Situated directly off State Hwy 173, with a 15 min drive to
            Jourdanton, 10 mins to Devine and less than an hour to San Antonio,
            this Atascosa County property is perfect for those seeking
            tranquility and convenience.
          </li>
          <li>
            This growing area boasts new developments and excellent small-town
            schools (Poteet ISD).
          </li>
        </ul>
        <h5 style={styles.headers}>Is there a HOA or Annual Dues?</h5>
        <ul>
          <li>
            An HOA with light restrictions and low annual dues is in place to
            protect your investment. Livestock, agriculture use and hunting are
            allowed.
          </li>
        </ul>
        <h5 style={styles.headers}>
          What Activities are Allowed in Sendero Crossing?
        </h5>
        <ul>
          <li>
            Horseback riding, hunting, agriculture use, livestock are all
            available in Sendero Crossing.
          </li>
        </ul>
        <h5 style={styles.headers}>What Wildlife is in the Area?</h5>
        <ul>
          <li>
            Wildlife around the area include white-tailed deer, wild turkey and
            hogs.
          </li>
        </ul>
      </Container>
    </div>
  );
};

export default FrequentlyAsked;
