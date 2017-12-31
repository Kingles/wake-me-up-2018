import React, { Component } from "react";
import "antd/dist/antd.css";
import { Layout } from "antd";
import Countdown from "react-countdown-now";
import logo from "./logo.svg";
import moment from "moment";
import styled from "styled-components";
import ReactPlayer from "react-player";

const { Header, Footer, Content } = Layout;

const StyledCountdown = styled(Countdown)`
  flex: 1;
  width: 100%;
  height: 100%;
  font-size: 40vmin;
`;

// const startTime = moment("2017-12-31 23:58:57");
// const cantWakeUpTime = moment("2018-01-01 00:00:00");
const targetTime = moment("2018-01-01 00:00:00"); //.add(2, "seconds");
const startTime = targetTime.clone().subtract(64, "seconds");
const calculateProperTime = () => {
  return Math.abs(startTime.diff(moment())) / 1000;
};

// target - 63 seconds === ideal time. VideoT = currentTime.diff(idealTime)

class App extends Component {
  render() {
    return (
      <Layout>
        <Header />
        <Content>
          <span> Start your year off right </span>
          <StyledCountdown date={startTime}>
            <ReactPlayer
              url={`https://youtu.be/3YxaaGgTQYM?t=${calculateProperTime()}`}
              playing
              youtubeConfig={{ preload: true }}
            />
            <StyledCountdown date={targetTime}>
              <div>
                <span>Happy New Year!</span>
              </div>
            </StyledCountdown>
          </StyledCountdown>
        </Content>
        <Footer />
      </Layout>
    );
  }
}

export default App;
