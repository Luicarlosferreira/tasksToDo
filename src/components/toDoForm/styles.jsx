import styled from "styled-components";

export const ContainerForm = styled.div`
  background-color: #f7f7f8;
  color: #6b48ff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 40px;
  width: 100%;
  button {
    padding: 9px 20px;
    border: none;
    border-radius: 4px;
    background-color: #6b48ff;
    color: #f7f7f8;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.2s linear;
  }
  button:hover {
    background-color: #522ff0;
  }

  .formContent {
    position: absolute;
    width: 100%;
    top: 0;
    z-index: 1000;
    left: 0;
    min-height: 100%;
    background-color: #0c1325ef;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: fadeEffect 0.2s forwards ease-in-out;
  }
  .formContent svg {
    position: relative;
    right: 0;
    color: red;
    width: 30px;
    height: 30px;
    top: -40px;
    cursor: pointer;
    border-radius: 4px;
    transition: all 0.1s linear;
  }
  .formContent svg:hover {
    background-color: white;
  }
  .formContent form {
    background-color: white;
    padding: 10px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: wrap;
    gap: 20px;
    border: 1px solid #6b48ff;
  }

  .inputForm {
    padding: 7px;
    border-radius: 4px;
    outline: none;
    border: solid 1px #4a22fa;
  }
  .inputForm:focus {
    border: solid 1px #6b48ff;
  }

  @keyframes fadeEffect {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media (max-width: 579px) {
    .formContent {
      position: absolute;
      width: 100%;
      top: 0;
      z-index: 1000;
      left: 0;
      min-height: 100%;
      background-color: #0c1325ef;
      display: flex;
      align-items: center;
      justify-content: center;
      animation: fadeEffect 0.2s forwards ease-in-out;
      padding: 15px;
    }
    .formContent form {
      background-color: white;
      padding: 15px;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-flow: column wrap;
      gap: 20px;
      border: 1px solid #6b48ff;
      width: 80%;
    }
    .formContent svg {
      position: relative;
      right: 0;
      color: red;
      width: 30px;
      height: 30px;
      top: -100px;
      cursor: pointer;
      border-radius: 4px;
      transition: all 0.1s linear;
    }
  }
  @media (max-width: 412px) {
    h1 {
      font-size: 1.3em;
    }
    .plusTask {
      padding: 9px 12px;
      border: none;
      border-radius: 4px;
      background-color: #6b48ff;
      color: #f7f7f8;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.2s linear;
    }

    .formContent svg {
      position: relative;
      right: 10px;
      color: red;
      width: 30px;
      height: 30px;
      top: -100px;

      cursor: pointer;
      border-radius: 4px;
      transition: all 0.1s linear;
    }
  }
  @media (max-width: 310px) {
    .formContent {
      position: absolute;
      width: 100%;
      top: 0;
      z-index: 1000;
      left: 0;
      min-height: 100%;
      background-color: #0c1325ef;
      display: flex;
      align-items: center;
      justify-content: center;
      animation: fadeEffect 0.2s forwards ease-in-out;
      padding: 15px;
    }
    .formContent form {
      background-color: white;
      padding: 15px;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-flow: column wrap;
      gap: 20px;
      border: 1px solid #6b48ff;
      width: 90%;
    }
    .formContent svg {
      position: relative;
      right: 0;
      color: red;
      width: 30px;
      height: 30px;
      top: -100px;
      cursor: pointer;
      border-radius: 4px;
      transition: all 0.1s linear;
    }
  }
`;
