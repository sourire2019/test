import React, { Component } from 'react';
import {
  Row,
  Col
} from 'reactstrap';
import Left from './Left';
import Middle from './Middle';
import Right from './Right';

export class Main extends Component {

 render() {
    return (
      <div>
        <div>
         	<Row>
         		<Col sm = '2' className = 'padding'>
         			<Left />
         		</Col>
         		<Col sm = '8' className = 'padding' >
         			<Middle />
         		</Col>
         		<Col sm = '2' className = 'padding'>
         			<Right />
         		</Col>
         		
         	</Row>
        </div>
      </div>
    );
  }
}

export default Main;