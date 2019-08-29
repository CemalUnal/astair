import React, { Component } from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import DropdownMenu from "./dropdownMenu";
import CheckBoxGroup from "./checkboxgroup";
import color from "@material-ui/core/colors/brown";
import { maxWidth, maxHeight } from "@material-ui/system";
import SummaryPanel from "./summarypanel";
import Options from "./options";

import axios from "axios";
import Toast from "./toast";

const urlServer = process.env.REACT_APP_ASTAIR_MANAGEMENT_BACKEND;

class ButtonPanel extends Component {
  state = {};

  getSummaryPanel = () => {
    if (this.props.showSummary) {
      return (
        <div
          style={{
            marginTop: 30,
            backgroundColor: "#43494D",
            width: maxWidth
          }}
        >
          <SummaryPanel
            showToast={this.props.showToast}
            hideToast={this.props.hideToast}
            data={this.props.summaryData}
            onCreateMeeting={this.props.onCreateMeeting}
            onShowDialog={this.props.onShowDialog}
          />
        </div>
      );
    } else {
      return;
    }
  };

  getRoomsPanel = () => {
    return (
      <CheckBoxGroup
        onSelectedItems={roomset => {
          this.props.onMultiRoomSelected(roomset);
        }}
        items={this.props.rooms}
      />
    );
  };

  getOptionsPanel = () => {
    return (
      <Options
        showWeekly={this.props.showWeekly}
        onRangeClick={this.props.onRangeClick}
      ></Options>
    );
  };

  render() {
    return (
      <div>
        <Container>
          {this.getOptionsPanel()}
          {this.getRoomsPanel()}
          {this.getSummaryPanel()}
        </Container>
      </div>
    );
  }
}

export default ButtonPanel;
