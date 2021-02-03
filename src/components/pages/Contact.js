import React, { Component } from "react";
// inject global styles from styled-components. border-sizing, body.
//import { injectGlobal } from "styled-components";
import { createGlobalStyle } from "styled-components";
// holds all components
import Main from "../contact/views/Main/Main";

export const GlobalStyled = createGlobalStyle`
  * {
    box-sizing: border-box; 
  }
  body { 
    line-height: 1.6; 
    font-family: Tahoma, Geneva, Verdana, sans-serif; 
    padding: 1em; 
  }
`;

// injectGlobal`
//   * {
//     box-sizing: border-box;
//   }
//   body {
//     line-height: 1.6;
//     font-family: Tahoma, Geneva, Verdana, sans-serif;
//     padding: 1em;
//   }
// `;

class Contact extends Component {
  render() {
    return (
      <div>
        <Main />

        <br />
      </div>
    );
  }
}

export default Contact;
