import React from 'react';
import { Image, Menu, Button } from 'semantic-ui-react';

export default class TopMenu extends React.Component {
  render() {
    return (
        <div className='top'>
          <Menu secondary>
            <Menu.Item fitted position='left'>
              <Image src="https://laulima.hawaii.edu/library/skin/morpheus-default/images/logo-laulima.png" size='small'></Image>
            </Menu.Item>
            <Menu.Item fitted position='right' style={{marginLeft:40}}>
              <i style={{color:'white'}}><small>can't login?&nbsp; | &nbsp;</small></i>
              <Button style={{backgroundColor:'#17a2b8', color:'white'}}>UH Login</Button>
              <p>&nbsp;&nbsp;</p>
              <Button style={{backgroundColor:'#17a2b8', color:'white'}}>Guest Login</Button>
              <p>&nbsp;&nbsp;</p>
            </Menu.Item>
          </Menu>
        </div>
    );
  }
}