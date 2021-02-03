import React, { Component } from "react";
//import all child components
import Container from "../../compo/Container";
import Title from "../../compo/Title";
import CompanyInfo from "../../views/Form/CompanyInfo";
import ContactForm from "../../views/Form/ContactForm";

class Main extends Component {
  render() {
    return (
      <Container>
        <br />
        <Title text="Contact Us" />
        <Container wrapper>
          <CompanyInfo />
          <ContactForm />
        </Container>
      </Container>
    );
  }
}

export default Main;
