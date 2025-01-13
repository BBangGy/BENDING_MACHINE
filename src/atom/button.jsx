import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${(props) => props.bgColor || "white"};
  color: ${(props) => props.textColor || "black"};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  &:hover {
    background-color: skyblue;
    color: white;
    transform: scale(1.1);
    transition: 0.1s ease;
  }
  ${(props)=>
    props.size==="small"&&
    `
    width:9em;
    height:auto;
    font-size: 10px;
    `
  }
  ${(props) =>
    props.size === "normal" &&
    `
    width: 130px;
    height: 35px;
    font-size: 16px;
  `}

  ${(props) =>
    props.size === "large" &&
    `
    width: 130px;
    height: 100px;
    font-size: 16px;
  `}
`;

export default function Button({ text, size = "normal", bgColor, textColor ,onClick}) {
  return (
    <StyledButton size={size} bgColor={bgColor} textColor={textColor} onClick={onClick}>
      {text}
    </StyledButton>
  );
}
