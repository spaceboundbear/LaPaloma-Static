import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from 'react-bootstrap';
import Headshot from '../assets/headshot/lydia-headshot.jpg';

const styles = {
  photo: {
    height: '314px',
  },
};

const Form = () => {
  return (
    <Row className="mx-auto">
      <Col sm={8} xs={12}>
        <h4 className="text-center mt-4">
          Email La Paloma for More Information
        </h4>
        <form>
          <div>
            <label for="firstname">First Name</label>
            <input type="text" className="form-control" id="firstname" />
          </div>
          <div>
            <label for="lastname">Last Name</label>
            <input type="text" className="form-control" id="lastname" />
          </div>
          <div>
            <label for="email">Email Address</label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div>
            <label for="phone">Phone Number</label>
            <input type="text" className="form-control" id="phone" />
          </div>
          <div className="radios">
            <label for="radios">I am interested in:</label>
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
        <button>Enter</button>
      </Col>
      <Col>
        <div class="mt-4 text-center">
          <img class="headshot" src={Headshot} style={styles.photo} />
          <h4 class="">Lydia Rodriguez</h4>
          <p class="">Agent</p>
        </div>
      </Col>
    </Row>
  );
};

export default Form;
