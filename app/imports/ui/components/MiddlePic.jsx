import React from 'react';
import { Segment, Image, Grid, Header, Button, Icon } from 'semantic-ui-react';

export default class MiddlePic extends React.Component {
  render() {
    return (
        <div className='middle'>
          <Segment>
            <Image src="https://laulima.hawaii.edu/lum/fp/laulima_full_banner.jpg" fluid></Image>
          </Segment>
          <div className='middleBottom'>
            <Header as='h4' style={{textAlign: 'center', color: 'white'}}><b><i>Laulima Support: 24 hours a day, 7 days a week, 365 days a year</i></b></Header>
            <Grid container verticalAlign="middle" columns="four">
              <Grid.Row>
                <Grid.Column>
                  <div className="one">
                    <Button medium style={{backgroundColor:'#17a2b8', color:'white'}}><Icon name='paper plane'/>UH Login</Button>
                    <p style={{color: 'white', textAlign:'center'}}><i><small>Fill out a request assistance ticket</small></i></p>
                  </div>
                </Grid.Column>
                <Grid.Column>
                  <div className="one">
                    <Button style={{backgroundColor:'#17a2b8', color:'white', marginTop: 20}}><Icon name='globe'/>Request Site</Button>
                    <p style={{color: 'white', textAlign:'center'}}>
                      <i><small>Faculty/Staff: request a development site or combining (crosslist) of courses</small></i>
                    </p>
                  </div>
                </Grid.Column>
                <Grid.Column>
                  <div className="one">
                    <Button style={{backgroundColor:'#17a2b8', color:'white'}}><Icon name='paper plane'/>Laulima Help</Button>
                    <p style={{color: 'white', textAlign:'center'}}>
                      <i><small>Search our Laulima System Help, User Guide, and FAQs</small></i>
                    </p>
                  </div>
                </Grid.Column>
                <Grid.Column>
                  <div className="one">
                    <Button style={{backgroundColor:'#17a2b8', color:'white', marginTop: 20}}><Icon name='phone'/>Help Desk</Button>
                    <p style={{color: 'white', textAlign:'center'}}>
                      <i><small>(808) 956-8883</small></i>
                      <i><small>Toll Free: (800) 558-2669</small></i>
                      <i><small>help@hawaii.edu</small></i>
                    </p>
                  </div>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
        </div>
    );
  }
}