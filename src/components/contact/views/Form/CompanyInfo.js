import React from "react";
import styled from "styled-components";

const WrapperCompanyInfo = styled.div`
  background: #fba93d;
`;

const CompanyName = styled.h3`
  margin: 0 0 1rem 0;
  text-align: center;
  color: #fff;
  font-size: 45px;
  @media (min-width: 700px) {
    text-align: left;
  }
`;

const WrapperList = styled.ul`
  list-style: none;
  margin: 0 0 1rem 0;
  padding: 0;
  text-align: center;
  font-size: 18px;
  @media (min-width: 700px) {
    text-align: left;
  }
`;

const CompanyInfo = () => (
  <WrapperCompanyInfo>
    <CompanyName>Moon IT</CompanyName>
    <WrapperList>
      <li>58 Raj Dream(3rd Floor), Vasane Road, Shantinagar, Dhaka-1217.</li>
      <li>+8801762688602</li>
      <li>support@moonitbd.com</li>
    </WrapperList>
  </WrapperCompanyInfo>
);

export default CompanyInfo;
