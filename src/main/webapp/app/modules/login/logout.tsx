import React from 'react';
import { connect } from 'react-redux';

import { IRootState } from 'app/shared/reducers';
import { logout } from 'app/shared/reducers/authentication';
import { Translate, translate } from 'react-jhipster';
import { Row, Col, Alert, Card, CardTitle, CardBody, CardImg, CardText, CardSubtitle, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

export interface ILogoutProps extends StateProps, DispatchProps {
  idToken: string;
  logoutUrl: string;
}

export class Logout extends React.Component<ILogoutProps> {
  componentDidMount() {
    this.props.logout();
  }

  render() {
    const logoutUrl = this.props.logoutUrl;
    if (logoutUrl) {
      // if Keycloak, logoutUrl has protocol/openid-connect in it
      window.location.href =
        logoutUrl.indexOf('/protocol') > -1
          ? logoutUrl + '?redirect_uri=' + window.location.origin
          : logoutUrl + '?id_token_hint=' + this.props.idToken + '&post_logout_redirect_uri=' + window.location.origin;
    }

    return (
      <div className="container">
        <Row className="justify-content-center mb-5 mt-5">
          <Col md="8" lg="6" xl="5">
            <Card className="text-center p-4">
              <div className="text-center mt-4">
                <img src="content/images/logo-jhipster.png" alt="Logo" />
              </div>
              <div className="text-center mt-4">
                <img src="https://img.icons8.com/cotton/128/000000/checkmark.png" color="green" width="128px" />
              </div>
              <CardTitle className="h4 mt-4">See you again !</CardTitle>
              <p>You are now successfully sign out.</p>
            </Card>
            <div className="mt-3 text-center">
              <p className="text-muted">
                Back to <a href="/login">Sign in</a>
              </p>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (storeState: IRootState) => ({
  logoutUrl: storeState.authentication.logoutUrl,
  idToken: storeState.authentication.idToken
});

const mapDispatchToProps = { logout };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Logout);
