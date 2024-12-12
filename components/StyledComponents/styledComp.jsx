import styled, { keyframes } from "styled-components";
import Themes from "../reusables/Theme";

export const SplashCont = styled.div`
  position: absolute;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: ${window.innerWidth}px;
  height: 100%;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  background:${Themes.main};

  .splash {
    width: 18em;
    height: 18em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 9em;
    .text {
      color: ${Themes.main};
      letter-spacing: 2em;
      font-weight: bolder;
      padding-left: 2em;
    }
    .motto {
      margin: 1em;
      color: white;
      font-weight: bolder;
      letter-spacing: 2px;
      text-align: center;
    }
  }
`;

const rotateAnimation = keyframes`
  0% {
    transform: rotate(-7deg);
  }
  50% {
    transform: rotate(7deg);
  }
  100% {
    transform: rotate(-7deg);
  }
`;

export const StreakLogo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5em;
  width: 9em;
  padding: 1em;

  .mobile {
    height: 12em;
    width: 100%;
    padding: 1em;
    background: white;
    border-radius: 1.5em;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    gap: 3em;
    .logo {
      width: 4em;
      height: 4em;
    }
    .logo img {
      width: 100%;
      height: 100%;
    }
    .streakBtn {
      width: 1.5em;
      height: 1.5em;
      background: ${Themes.purpish};
      border-radius: 0.75em;
    }
    animation: ${rotateAnimation} 0.4s infinite alternate ease-in-out;
  }
  .base {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5em;
    .line1 {
      width: 100%;
      padding: 0.1em;
      background: ${Themes.gold};
      border-radius: 0.2em;
    }
    .line2 {
      width: 80%;
      padding: 0.1em;
      background: ${Themes.gold};
      border-radius: 0.2em;
    }
    .line3 {
      width: 60%;
      padding: 0.1em;
      background: ${Themes.gold};
      border-radius: 0.2em;
    }
    .line4 {
      width: 30%;
      padding: 0.1em;
      background: ${Themes.gold};
      border-radius: 0.2em;
    }
  }
`;
