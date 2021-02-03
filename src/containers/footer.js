import React from "react";
import Footer from "../components/footer";
import Icon from "../components/icons";

export function FooterContainer() {
  return (
    <Footer>
      <Footer.Wrapper>
        <Footer.Row>
          <Footer.Column>
            <Footer.Title>Address</Footer.Title>
            <Footer.Link>
              58 Raj Dream(3rd Floor), Vasane Road, Shantinagar, Dhaka-1217
            </Footer.Link>
          </Footer.Column>
          {/* <Footer.Column>
                <Footer.Title>Services</Footer.Title>
                    <Footer.Link href="#">Marketing</Footer.Link>
                    <Footer.Link href="#">Consulting</Footer.Link>
                    <Footer.Link href="#">Development</Footer.Link>
                    <Footer.Link href="#">Design</Footer.Link>
                </Footer.Column> */}
          <Footer.Column>
            <Footer.Title>24×7 Support</Footer.Title>
            <Footer.Link>+8801762688602</Footer.Link>
            <Footer.Link>support@moonitbd.com</Footer.Link>
            <Footer.Link>sales@moonitbd.com</Footer.Link>
            <Footer.Link>sales@moonltdbd.com</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Social</Footer.Title>
            <Footer.Link href="#">
              <Icon className="fab fa-facebook-f" />
              Facebook
            </Footer.Link>
            <Footer.Link href="#">
              <Icon className="fab fa-instagram" />
              Instagram
            </Footer.Link>
            <Footer.Link href="#">
              <Icon className="fab fa-youtube" />
              Youtube
            </Footer.Link>
            <Footer.Link href="#">
              <Icon className="fab fa-twitter" />
              Twitter
            </Footer.Link>
          </Footer.Column>
        </Footer.Row>
      </Footer.Wrapper>
    </Footer>
  );
}
