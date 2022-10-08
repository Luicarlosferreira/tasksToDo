import styled from "styled-components";

export const Container = styled.div`
  background-color: #16213e;
  min-height: 93.9vh;
  color: white;
  padding: 20px 0;
  display: flex;
  flex-flow: column wrap;
  gap: 30px;
  .topInfo {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column wrap;
    color: white;
    font-weight: 400;
    letter-spacing: 1px;
    text-align: center;
  }

  .toDoElements {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: row wrap;
    gap: 20px;
    padding: 40px 10px;
  }
  .element {
    position: relative;
    padding: 5px;
    color: #6b48ff;
    display: flex;
    align-items: flex-start;
    justify-content: space-evenly;
    flex-flow: column;
    background-color: white;
    max-width: 350px;
    min-width: 350px;
    max-height: 200px;
    min-height: 200px;
    border-radius: 5px;
    gap: 1px;
    box-shadow: 1px 5px 10px -3px rgba(75, 50, 185, 0.945);
    animation: FadeEffect 0.3s forwards linear;
  }
  .info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 0;
    width: 100%;
    gap: 20px;
    border-bottom: 1px solid #ebecf0;
  }
  .info svg {
    width: 20px;
    height: 20px;
    color: red;
    cursor: pointer;
    transition: all 0.1s linear;
    border-radius: 5px;
  }
  .info svg:hover {
    background-color: red;
    color: white;
  }
  .taskDesc {
    overflow-y: scroll;
    color: grey;
    padding: 0 2px;
    font-weight: 400;
    height: 100vh;
    width: 100%;
  }
  .taskData {
    width: 100%;
    font-weight: bolder;
    color: #16213e;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
  }
  .taskData span {
    font-size: 1em;
    color: #5832ff;
    letter-spacing: 1px;
  }
  .taskData svg {
    width: 20px;
    height: 20px;
  }

  .confirmDelete {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: #000000e1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column wrap;
    gap: 10px;
    z-index: 900;
    color: white;
  }
  .confirmDelete div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    animation: FadeEffect 0.3s forwards linear;
  }
  .confirmDelete div button {
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    font-weight: bold;
    background-color: #6b48ff;
    color: white;
    transition: all 0.2s linear;
    cursor: pointer;
  }
  .confirmDelete div button:hover {
    background-color: #5832ff;
  }

  .clearAll {
    padding: 9px 20px;
    border: none;
    border-radius: 4px;
    width: 150px;
    margin: auto;
    background-color: #6b48ff;
    color: #f7f7f8;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.2s linear;
    animation: FadeEffect 0.3s forwards linear;
  }
  .clearAll:hover {
    background-color: #431df0;
  }

  @media (max-width: 400px) {
    .element {
      min-width: 250px;
      min-height: 200px;
    }
    .topInfo {
      padding: 10px;
    }
    .topInfo h1 {
      font-size: 1.2em;
    }
  }
  @media (max-width: 290px) {
    .element {
      min-width: 200px;
      min-height: 200px;
    }
  }

  @keyframes FadeEffect {
    0% {
      opacity: 0;
      bottom: -18px;
    }
    100% {
      opacity: 1;
      bottom: 0;
    }
  }
`;
