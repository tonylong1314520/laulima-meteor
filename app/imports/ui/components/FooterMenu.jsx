import React from 'react';

export default class FooterMenu extends React.Component {
  render() {
    return (
        <div className="footer">
          <p>
            <a href={""}><u>Request Assistance</u></a> | <a href={""}><u>Request Site</u></a> | <a href={""}><u>Suggestion Box</u></a> |
            <a href={""}><u>Accessibility Info</u></a>| <a href={""}><u>Title IX</u></a> | <a href={""}><u>MySuccess</u></a> |
            <a href={""}><u>University of Hawaii</u></a> | <a href={""}><u>Info Tech Svcs</u></a></p>
          <p>
            Unauthorized access is prohibited by law in accordance with Hawai'i Revised Statutes.
            All use is subject to University of Hawaii Executive Policy E2.210.
          </p>
          <i>
            Front page based on a design developed by an ohana of faculty and instructional designers from across our UH System - Mahalo!
          </i>
        </div>
    );
  }
}