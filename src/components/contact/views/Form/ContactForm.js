import React from "react";
import styled from "styled-components";
import { css } from "styled-components";

//import components
import Form from "../../compo/Form";
import Label from "../../compo/Label";
import StyledButton from "../../compo/Button";
import Input from "../../compo/Input";
import TextArea from "../../compo/TextArea";

const WrapperGrid = styled.div`
  ${(props) =>
    props.full &&
    css`
      grid-column: 1 / 3;
    `}
`;

const ContactForm = () => (
  <div>
    <h3>Email Us</h3>
    <Form>
      <WrapperGrid>
        <Label>Name</Label>
        <Input type="text" name="name" />
      </WrapperGrid>
      <WrapperGrid>
        <Label>Organization</Label>
        <Input type="text" name="organization" />
      </WrapperGrid>
      <WrapperGrid>
        <Label>Email Address</Label>
        <Input type="email" name="email" />
      </WrapperGrid>
      <WrapperGrid>
        <Label>Phone Number</Label>
        <Input type="text" name="phone" />
      </WrapperGrid>
      <WrapperGrid full>
        <Label>Message</Label>
        <TextArea name="message" rows="5"></TextArea>
      </WrapperGrid>
      <WrapperGrid full>
        <StyledButton>Submit</StyledButton>
      </WrapperGrid>
    </Form>
  </div>
);

export default ContactForm;
