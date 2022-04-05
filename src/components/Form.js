import React, { useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import Headshot from '../assets/headshot/lydia-headshot.jpg';
import emailjs from '@emailjs/browser';

const styles = {
  photo: {
    height: '314px',
  },
  formBg: {
    backgroundColor: '#f6edde',
  },
  button: {
    fontFamily: 'helveticaStdBold',
    height: '40px',
    width: '100px',
    fontSize: '18px',
    backgroundColor: '#C7911B',
    borderStyle: 'none',
  },
  head: {
    fontFamily: 'HelveticaStdBold',
    color: '#803308',
    marginBottom: '25px',
    paddingTop: '15px',
  },
  name: {
    fontFamily: 'HelveticaStdBold',
    color: '#803308',
    paddingTop: '15px',
  },
  agent: {
    fontFamily: 'HelveticaStdObl',
    color: '#803308',
    fontSize: '20px',
  },
};

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_3uwljb7',
        'template_5z5x3di',
        form.current,
        'zBHofWcIbQsN5-ytm'
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Message Sent!');
        },
        (error) => {
          console.log(error.text);
          alert('Oops, Something Went Wrong');
        }
      );
  };

  return (
    <div style={styles.formBg}>
      <Container>
        <Row className="mx-auto">
          <Col sm={12} md={8} xs={12} className="mx-auto">
            <h3 style={styles.head} className="text-center mt-4">
              Email La Paloma for More Information
            </h3>
            <form ref={form} onSubmit={sendEmail}>
              <div>
                <input
                  type="text"
                  className="form-control mt-2"
                  placeholder="First Name"
                  name="first_name"
                />
              </div>
              <div>
                <input
                  type="text"
                  className="form-control mt-2"
                  placeholder="Last Name"
                  name="last_name"
                />
              </div>
              <div>
                <input
                  type="email"
                  className="form-control mt-2"
                  id="email"
                  placeholder="Email Address"
                  name="email"
                />
              </div>
              <div>
                <input
                  type="text"
                  className="form-control mt-2"
                  id="phone"
                  placeholder="Phone Number"
                  name="phone"
                />
              </div>
              <div className="radios mt-4">
                <label className="mb-3" for="radios">
                  I am interested in:
                </label>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gridRadios"
                    id="gridRadios1"
                    value="Sendero Crossing"
                    checked
                  />
                  <label className="form-check-label" for="gridRadios1">
                    Sendero Crossing
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gridRadios"
                    id="gridRadios2"
                    value="Schuettig Rd"
                    checked
                  />
                  <label className="form-check-label" for="gridRadios2">
                    Schuettig Rd
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gridRadios"
                    id="gridRadios3"
                    value="Brite Oaks"
                    checked
                  />
                  <label className="form-check-label" for="gridRadios3">
                    Brite Oaks
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gridRadios"
                    id="gridRadios4"
                    value="Summit Orchards"
                    checked
                  />
                  <label className="form-check-label" for="gridRadios4">
                    Summit Orchards
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gridRadios"
                    id="gridRadios5"
                    value="Other"
                    checked
                  />
                  <label className="form-check-label" for="gridRadios5">
                    Other
                  </label>
                </div>
              </div>
              <div className="text-center mb-5">
                <input
                  type="submit"
                  value="Submit"
                  style={styles.button}
                  className="btn btn-primary"
                />
              </div>
            </form>
          </Col>
          <Col>
            <div className="mt-4 text-center">
              <img
                className="headshot"
                src={Headshot}
                style={styles.photo}
                alt="lydia"
              />
              <h4 style={styles.name}>Lydia Rodriguez</h4>
              <p style={styles.agent}>Agent</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Form;
