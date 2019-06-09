import './landing.scss';

import React from 'react';
import { Link } from 'react-router-dom';
import { Translate } from 'react-jhipster';
import { connect } from 'react-redux';
import { Row, Col, Alert, Button } from 'reactstrap';

import { IRootState } from 'app/shared/reducers';
import { getSession } from '../../shared/reducers/authentication';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface IHomeProp extends StateProps, DispatchProps {}

export class HomeLanding extends React.Component<IHomeProp> {
  componentDidMount() {
    this.props.getSession();
  }

  render() {
    const { account } = this.props;
    return (
      <Row>
        <header className="header_area animated">
          <div className="container-fluid">
            <div className="row align-items-center">
              <Col lg="10">
                <div className="menu_area">
                  <nav className="navbar navbar-expand-lg navbar-light">
                    <a className="navbar-brand" href="#">
                      Ca.
                    </a>
                    <Button className="navbar-toggler">
                      <span className="navbar-toggler-icon" />
                    </Button>
                    <div className="collapse navbar-collapse" id="ca-navbar">
                      <ul className="navbar-nav ml-auto" id="nav">
                        <li className="nav-item active">
                          <a className="nav-link" href="#home">
                            Home
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#about">
                            About
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#features">
                            Features
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#screenshot">
                            Screenshot
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#pricing">
                            Pricing
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#testimonials">
                            Testimonials
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#team">
                            Team
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#contact">
                            Contact
                          </a>
                        </li>
                      </ul>
                      <div className="sing-up-button d-lg-none">
                        <a href="#">Sign Up Free</a>
                      </div>
                    </div>
                  </nav>
                </div>
              </Col>
              <Col lg="2">
                <div className="sing-up-button d-none d-lg-block">
                  <a href="#">Sign Up Free</a>
                </div>
              </Col>
            </div>
          </div>
        </header>
        <section className="wellcome_area clearfix" id="home">
          <div className="container h-100">
            <div className="row h-100 align-items-center">
              <div className="col-12 col-md">
                <div className="wellcome-heading">
                  <h2>Colorlib app</h2>
                  <h3>C</h3>
                  <p>Everything You Need. To Start Selling Online Beautifully</p>
                </div>
                <div className="get-start-area">
                  <form action="#" method="post" className="form-inline">
                    <input type="email" className="form-control email" placeholder="name@company.com" />
                    <input type="submit" className="submit" value="Get Started" />
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="welcome-thumb wow fadeInDown" data-wow-delay="0.5s">
            <img src="img/bg-img/welcome-img.png" alt="" />
          </div>
        </section>
      </Row>
    );
  }
}

const mapStateToProps = storeState => ({
  account: storeState.authentication.account,
  isAuthenticated: storeState.authentication.isAuthenticated
});

const mapDispatchToProps = { getSession };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeLanding);
