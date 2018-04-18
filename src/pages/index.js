import React from "react";
import Link from "gatsby-link";
import styled, {injectGlobal, keyframes} from 'styled-components';

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Poiret+One');
  
  *, *::before, *::after{
    margin: 0;
    padding: 0;
  }
  html,body{
    font-family: 'Poiret One', sans-serif;
    font-size: 16px;
    background: #040404;
    overflow: hidden;
  }
  @media(max-width: 600px){
    html,body{
      font-size: 12px;
    }
  }
  @media(max-width: 400px){
    html,body{
      font-size: 8px;
    }
  }
`

const Kiai = styled.h1`
  font-weight: normal;
  font-size: 4rem;
  text-align: center;
  width: 100%;
  padding: 0.5rem; 
  color: ${props => `rgba(234,234,67,${1/props.hoursLeft})`};
  position: absolute; 
`

const CountDown = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 600px;
  height: 100vh;
  color: white;
`
const Num = styled.div`
  font-size: 4rem;
`
const Label = styled.div`
  font-size: 2rem;
`
const Slot = styled.div`
  text-align: center;
`

const Logo = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Pulse = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.9);
  }
  50% {
    opacity: 0.05;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.9);
  }
`;

const StyledSvg = styled.svg`
  display: block;
  width: 600px;
  opacity: 0;
  animation: 12s ${Pulse} ease-in-out infinite
`;


export default class ComingSoon extends React.Component {
  constructor(){
    super();
    this.state = {
      days: '00',
      hours: '00',
      minutes: '00',
      seconds: '00'
    }
    this.getTimeLeft = this.getTimeLeft.bind(this);
  }
  getTimeLeft(){
    const date = new Date(), 
          days = 30 - date.getDate(),
          hours = 24 - date.getHours(),
          minutes = 60 - date.getMinutes(),
          seconds = 60 - date.getSeconds();
    
    this.setState({ days, hours, minutes, seconds })
  }

  render(){
    setInterval(this.getTimeLeft, 300);    
    const {seconds, minutes, hours, days} = this.state;
    return (
      <div>
        <Kiai hoursLeft={days * 24 + hours}>Kiai Digital</Kiai>
        <Logo>
          <StyledSvg viewBox="0 0 120 114" version="1.1" xmlns="http://www.w3.org/2000/svg" >
            <g id="Canvas" transform="translate(-128 -60)">
              <g id="logo">
                <g id="Vector">
                  <use href="#path0_fill" transform="matrix(0.399999 0 0 0.399999 128 60.6)" fill="#FFFFFF"/>
                </g>
                <g id="path6000">
                  <use href="#path1_fill" transform="matrix(0.399999 0 0 0.399999 128.003 60.6007)" fill="#FFFFFF"/>
                </g>
              </g>
            </g>
            <defs>
              <path id="path0_fill" d="M 73.653 -9.83583e-07C 61.6849 7.15709 50.8165 16.0945 41.1396 26.1531L 131.88 26.1531C 123.133 40.7602 107.312 49.0505 91.8039 54.4096C 69.5854 61.8382 46.1917 65.1672 22.8235 65.2123C 20.2859 65.161 17.7103 65.0121 15.1319 64.7787C 11.1394 73.1436 7.90187 81.8703 5.45146 90.817C 36.3388 92.8502 67.6118 89.2673 97.2359 80.2423C 117.763 73.6851 137.952 62.6914 150.612 44.6216C 151.607 45.0858 152.655 47.2664 153.751 48.3695C 167.905 65.7785 188.92 75.8395 210.068 81.7324C 236.68 89.2195 264.528 92.0686 292.108 90.8185C 293.125 90.4291 296.769 91.349 295.64 89.5807C 293.242 80.9837 290.086 72.6059 286.251 64.5561C 261.684 66.1586 236.847 62.2912 213.278 55.4136C 197.424 50.4377 181.41 42.6549 171.362 28.8601C 170.699 27.695 168.444 25.5037 171.217 26.1532L 260.057 26.1532C 250.083 16.1817 239.383 6.49492 226.836 0.000158849L 73.653 -9.83583e-07ZM 1.84064 106.593C 0.511316 115.24 -0.0869271 123.997 0.0101534 132.746L 152.987 132.746L 152.987 106.593L 152.187 106.593L 1.84064 106.593ZM 169.353 106.593L 169.353 132.746L 195.32 132.746L 195.32 106.593L 194.52 106.593L 169.353 106.593ZM 1.15264 149.229C 2.30333 158.084 4.15849 166.85 6.78387 175.382L 148.181 175.382L 148.181 213.184L 24.44 213.184C 30.722 222.606 37.8808 231.454 45.9965 239.337L 255.154 239.337C 279.676 215.594 295.846 183.249 299.998 149.23L 299.083 149.23C 199.77 149.23 100.462 149.23 1.1494 149.23L 1.15264 149.229ZM 174.15 175.382L 266.906 175.382C 266.787 175.692 266.669 176.001 266.55 176.31C 261.285 189.804 253.718 202.327 244.234 213.184L 174.15 213.184L 174.15 175.382ZM 65.905 255.82C 91.4171 273.122 122.189 282.578 152.977 281.966L 152.977 255.82L 152.177 255.82L 65.905 255.82ZM 169.349 255.82L 169.349 280.832C 178.142 279.674 186.843 277.796 195.316 275.157L 195.316 255.82L 194.516 255.82L 169.349 255.82Z"/>
              <path id="path1_fill" d="M 299.083 149.23C 199.77 149.23 100.462 149.23 1.14916 149.23C 2.29985 158.086 4.15502 166.851 6.78039 175.383L 148.177 175.383L 148.177 213.185L 24.4365 213.185C 30.7185 222.607 37.8773 231.455 45.993 239.338L 255.15 239.338C 279.672 215.595 295.842 183.25 299.994 149.231L 299.079 149.231L 299.083 149.23ZM 295.638 89.5805C 293.24 80.9836 290.085 72.6058 286.249 64.5559C 261.682 66.1584 236.845 62.2906 213.277 55.4131C 197.422 50.4371 181.408 42.6548 171.36 28.8599C 170.697 27.6948 168.442 25.5035 171.215 26.1531L 260.055 26.1531C 250.081 16.1815 239.381 6.49476 226.834 -2.0852e-06L 73.6533 -2.0852e-06C 61.6852 7.15708 50.8168 16.0945 41.1399 26.1531L 131.88 26.1531C 123.134 40.7601 107.313 49.0501 91.8042 54.4092C 69.5857 61.8378 46.192 65.1668 22.8238 65.2123C 20.2861 65.161 17.7106 65.0122 15.1322 64.7788C 11.1397 73.1437 7.90216 81.8704 5.45175 90.8171C 36.3391 92.8503 67.6121 89.2674 97.2362 80.2424C 117.763 73.6852 137.952 62.6915 150.612 44.6217C 151.608 45.0859 152.655 47.2663 153.751 48.3694C 167.905 65.7785 188.92 75.8395 210.067 81.7324C 236.68 89.2194 264.528 92.0681 292.108 90.818C 293.124 90.4287 296.768 91.3489 295.639 89.5806L 295.638 89.5805ZM 266.546 176.312C 261.28 189.806 253.714 202.329 244.229 213.186L 174.145 213.186L 174.145 175.384L 266.902 175.384C 266.783 175.693 266.665 176.002 266.546 176.311L 266.546 176.312ZM 194.518 106.594L 169.351 106.594L 169.351 132.747L 195.318 132.747L 195.318 106.594L 194.918 106.594L 194.518 106.594ZM 194.514 255.823L 169.347 255.823L 169.347 280.834C 178.14 279.676 186.841 277.799 195.314 275.16L 195.314 255.823L 194.914 255.823L 194.514 255.823ZM 152.185 106.594L 1.84064 106.594C 0.511316 115.241 -0.0869266 123.998 0.0101539 132.747L 152.987 132.747L 152.987 106.594L 152.587 106.594L 152.185 106.594ZM 152.178 255.823L 65.9052 255.823C 91.4173 273.125 122.189 282.581 152.978 281.969L 152.978 255.823L 152.578 255.823L 152.178 255.823Z"/>
            </defs>
          </StyledSvg>
        </Logo>
        <CountDown>
          <Slot>
            <Num>{days}</Num>
            <Label>Days</Label>
          </Slot>
          <Slot>
            <Num>{hours}</Num>
            <Label>Hours</Label>
          </Slot>
          <Slot>
            <Num>{minutes}</Num>
            <Label>Minutes</Label>
          </Slot>
          <Slot>
            <Num>{seconds}</Num>
            <Label>Seconds</Label>
          </Slot>
        </CountDown>
      </div>
    )
  }
}