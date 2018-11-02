import React, { Component } from 'react';
import {
  Row,
  Col
} from 'reactstrap';

import Page4 from '../../Page4';

export class Top extends Component {

 render() {
    return (
      <div style = {{height : "600px",background: "#26292b", width : "100%", borderBottom : "1px solid #9d9a9a"}}>
        <Page4 />
      </div>
    );
  }
}

export default Top;