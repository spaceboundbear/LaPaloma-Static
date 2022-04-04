import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import Headshot from '../assets/headshot/lydia-headshot.jpg';

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
  return (
    <div style={styles.formBg}>
      <Container>
        <Row className="mx-auto">
          <Col sm={12} md={8} xs={12} className="mx-auto">
            <h3 style={styles.head} className="text-center mt-4">
              Email La Paloma for More Information
            </h3>
            <form>
              <div>
                <input
                  type="text"
                  className="form-control mt-2"
                  placeholder="First Name"
                />
              </div>
              <div>
                <input
                  type="text"
                  className="form-control mt-2"
                  placeholder="Last Name"
                />
              </div>
              <div>
                <input
                  type="email"
                  className="form-control mt-2"
                  id="email"
                  placeholder="Email Address"
                />
              </div>
              <div>
                <input
                  type="text"
                  className="form-control mt-2"
                  id="phone"
                  placeholder="Phone Number"
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
                    value="option1"
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
                    value="option2"
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
                    value="option3"
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
                    value="option4"
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
                    value="option5"
                    checked
                  />
                  <label className="form-check-label" for="gridRadios5">
                    Other
                  </label>
                </div>
              </div>
            </form>
            <div className="text-center mb-5">
              <button style={styles.button} className="btn btn-primary">
                Enter
              </button>
            </div>
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
