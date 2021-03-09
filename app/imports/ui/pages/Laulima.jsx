import React from 'react';
import { Segment } from 'semantic-ui-react';
import MiddlePic from '../components/MiddlePic';
import SplitMenu from '../components/SplitMenu';

export default class Laulima extends React.Component {

  render() {
    return (
        <div>
          <Segment style={{marginTop: -2, border: 'hidden', shadowOpacity: 0}}>
            <div style={{border: '1px solid lightgray'}}>
              <MiddlePic/>
              <SplitMenu/>
            </div>
          </Segment>
        </div>
    );
  }
}