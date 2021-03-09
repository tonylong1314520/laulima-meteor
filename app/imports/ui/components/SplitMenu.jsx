import React from 'react';
import { Header, List, Item } from 'semantic-ui-react';

export default class SplitMenu extends React.Component {
  render() {
    return (
        <div className="split">
          <div className="splitOne">
            <Header as='h2' style={{textAlign: 'center', marginTop: 10}}><b>Notices</b></Header>
            <p className="theItems">
              <b>Daily Down Time:</b> Laulima will be unavailable daily from 3:00am-4:00am HST for server backup and maintenance.
            </p>
            <p className="theItems">
              <b>Auto Log-Off:</b> Laulima automatically logs off if no activity is detected for two hours. A warning message will appear prior to log-off. Laulima does not detect typing within a single message or document unless it is saved or refreshed.
            </p>
            <p className="theItems">
              <b>Laulima:</b> <a href=""><u>Technical Requirements</u></a>
            </p>
            <p className="theItems">
              <b>Additional Laulima downtime</b>, Sunday 03/21/21 from 6:00am to 10:00am HST.
            </p>
            <p className="theItems">
              <b>Spring 2021 courses have been published</b>(made accessible to students). Fall 2020 courses have been unpublished
            </p>
            <p className="theItems">
              <b>Spring 2021 courses have been published</b>(made accessible to students). Fall 2020 courses have been unpublished.
            </p>
            <p className="theItems">
              <b>Missing a course?</b> If you do not see your Spring 2021 course listed in the tab cluster near the top of the page, check if it is listed in the "Sites" drawer. To <a href={""}><u>put sites</u></a> into the tab cluster on the top, click the star next to the title in the Sites drawer. Note that instructors can also <a href={""}><u>manually publish and unpublish</u></a> courses, so you may not see all of the courses you are associated with (or you may see more if an instructor re-published an older site). If it is not there, please fill out a <a href={""}><u>"Site Request"</u></a> form and provide detailed information about the course you are looking for. During very busy registration times courses may take a while to show up in your account. (Updated: 01/04/21)
            </p>
            <p className="theItems" style={{marginTop: 40}}>
              <b>Current info:</b> <a href="">more notices</a>
            </p>
            <p className="theItems" style={{marginBottom: 20}}>
              -- <a href="">Archive of Past Posts</a> ----
            </p>
          </div>
          <div className="splitTwo">
            <Header as='h2' style={{textAlign: 'center', marginTop: 10}}><b>Resources</b></Header>
            <p className="theItems">
              <b>Faculty Resources</b>
            </p>
            <div style={{marginLeft: 40, marginBottom: 20}}>
              <List bulleted>
                <List.Item className="theItems">Laulima <a href={""}><u>Resource Guide</u></a> for Faculty</List.Item>
                <List.Item className="theItems">Laulima <a href={""}><u>Course Design Assistance</u></a></List.Item>
                <List.Item className="theItems">UH System and Campus-based <a href={""}><u>Instructional Design Services</u></a></List.Item>
              </List>
            </div>
            <p className="theItems">
              <b>Student Resources</b>
            </p>
            <div style={{marginLeft: 40}}>
              <List bulleted>
                <List.Item className="theItems">
                  <a href={""}><u>Remote Learning Resources</u></a> for Students
                </List.Item>
              </List>
            </div>
          </div>
        </div>
    );
  }
}