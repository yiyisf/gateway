import React from 'react';
import { NavItem, Button, NavLink, Form, Input } from 'reactstrap';
import { AvField } from 'availity-reactstrap-validation';
import { translate } from 'react-jhipster';

export const MenuSearch = props => (
  <Form className="form-inline ">
    <Input type="text" name="search" id="search" placeholder={translate('global.menu.search.placeholder')} size="sm" />
    {/*<Button className="btn btn-secondary my-2 my-sm-0">Submit</Button>*/}
  </Form>
);

export default MenuSearch;
