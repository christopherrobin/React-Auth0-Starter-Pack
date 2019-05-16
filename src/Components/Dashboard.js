import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';


export type Props = {
  testProp: string,
};

export class DashboardComponent extends React.Component {
  props: Props;
  render() {
    const { testProp } = this.props;
    return (
      <Grid className='dashboardView' id='Dashboard-View'>
        <Row>
          <Col xs={12}>
            <h2>Dashboard component</h2>
            <p>Test prop: {testProp}</p>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default (DashboardComponent);
