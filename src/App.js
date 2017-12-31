import React, { Component } from "react";
import Countdown, { zeroPad } from "react-countdown-now";
import moment from "moment";
import styled from "styled-components";
import ReactPlayer from "react-player";
import { Tweet, Follow } from "react-twitter-widgets";

const ZERO_PAD_LENGTH = 2;

const normalizedZeroPad = numToZeroPad => zeroPad(numToZeroPad, ZERO_PAD_LENGTH);

const StyledCountdown = styled.span`
  font-size: 18vmin;
  color: #CD5551;
`;

const Root = styled.div`
   width: 100vw;
   height: 100vh;
   font-family: "Roboto", sans-serif;
   background: #e0e4cc; /* Old browsers */
   background: linear-gradient(to bottom, #100515 1%,#191126 73%,#442A37 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
`;

const CountdownView = styled.div`
   display: flex;
   flex: 1;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   width: 100%;
   height: 100%;
`;

const Layout = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;
const Content = styled.div`
  display: flex;
  flex: 1;
  width: 100vw;
  flex-direction: column;
  color: #CD5551;
  justify-content: center;
  align-items: center;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
`;

const CounterRender = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 4vmin;
`;

const TweetHolder = styled.div`
  align-self: center;
  position: relative;
`;

const renderer = ({ days, hours, minutes, seconds, completed, children }) => {
  if (completed) {
    // Render a completed state
    return children
  } else {
    // Render a countdown
    return (<CounterRender>
      <span>The experience starts in:</span>
      <StyledCountdown>{normalizedZeroPad(days)}:{normalizedZeroPad(hours)}:{normalizedZeroPad(minutes)}:{normalizedZeroPad(seconds)}</StyledCountdown>
    </CounterRender>);
  }
};

// const startTime = moment("2017-12-31 23:58:57");
// const cantWakeUpTime = moment("2018-01-01 00:00:00");
const targetTime = moment("2018-01-01 00:00:00"); //.add(2, "seconds");
// const targetTime = moment().add(30, "seconds");
const startTime = targetTime.clone().subtract(64, "seconds");
const calculateProperTime = () => {
  return Math.abs(startTime.diff(moment())) / 1000;
};

class App extends Component {
  render() {
    return (
      <Root>
      <Layout>
        <Content>
          <CountdownView>
            <Countdown date={startTime} renderer={renderer}>
              <ReactPlayer
                url={`https://youtu.be/3YxaaGgTQYM?t=${calculateProperTime()}`}
                playing
                youtubeConfig={{ preload: true }}
              />
            </Countdown>
          </CountdownView>
          <Footer>
            <TweetHolder>
              <Tweet tweetId="942831896165343234" options={{theme: "dark", align: "center", width: 375, }}/>
            </TweetHolder>
            <Follow username="wegieanchor" options={{size: "large"}}/>
          </Footer>
        </Content>
      </Layout>
      </Root>
    );
  }
}

export default App;
