import React from "react";
import styled from "styled-components";

const List = styled.ul`
  background: ${props => props.theme.theme.background};
  color: ${props => props.theme.theme.color};
  font-family: sans-serif;
  font-size: 18px;
  li {
    line-height: 36px;
  }
`;

const TodoList = () => (
  <List>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
    <li>Item 4</li>
    <li>Item 5</li>
    <li>Item 7</li>
    <li>Item 8</li>
    <li>Item 9</li>
    <li>Item 10</li>
   </List>
);

export default TodoList;