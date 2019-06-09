import React from 'react';
import { Translate } from 'react-jhipster';
import { Row, Col, Alert, Card, CardTitle, CardBody, CardImg, CardText, CardSubtitle, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

class PageNotFound extends React.Component {
  render() {
    return (
      <Row className="justify-content-center mb-5 mt-5">
        <Col md="8" lg="6" xl="5">
          <Card className="text-center">
            <div className="text-center">
              <img width="200" src="https://coderthemes.com/minton/layouts/horizontal/dark/assets/images/error.svg" alt="Card image cap" />
            </div>
            <CardBody>
              <CardTitle className="h3 title">PAGE NOT FOUND</CardTitle>
              <CardSubtitle>&nbsp;</CardSubtitle>
              <CardText>您查看的内容未找到。</CardText>
              <Button tag={Link} to="/" replace color="primary">
                <FontAwesomeIcon icon="reply" />
                &nbsp;
                <span className="d-none d-md-inline">
                  <Translate contentKey="global.menu.home">Back</Translate>
                </span>
              </Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default PageNotFound;
