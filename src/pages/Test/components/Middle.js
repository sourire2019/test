import React, { Component } from 'react';
import {
  Row,
  Col
} from 'reactstrap';

import Top from './Top';
import Bottom from './Bottom'

export class Middle extends Component {

 render() {
    return (
      <div style = {{height : "800px"}}>
        <Col>
        	<Row>
        		<Top />
        	</Row>
        	<Row>
        		<Bottom />
        	</Row>
        </Col>
      </div>
    );
  }
}

export default Middle;