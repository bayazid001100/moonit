import React from 'react';
import '../../App.css';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBView, MDBIcon } from 'mdbreact';
import MikroTik from '../../images/product/MikroTik CCR1009-7G-1C-1S+.png';

export default function NetworkRouter() {
  return (
    // <>
    //   {/* <h1 className='network_router'>Network Router</h1> */}
      
    // </>
    <>
    <h1 className='font-weight-bold'
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textDecoration: 'underline',
          textDecoration: 'underline',
          textDecorationColor: '#FFA500',
          // fontSize: '350%',
          fontSize: '50px',
        }}>Network Router</h1>
      <br />
    <MDBRow style={{paddingBottom: '15px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',}}>
      <MDBCol md='2'>
        <MDBCard narrow>
          <MDBView cascade>
            <MDBCardImage
              hover
              zoom="20%"
              overlay='white-slight'
              className='card-img-top'
              src={MikroTik}
              alt='MikroTik'
            />
          </MDBView>

          <MDBCardBody>
            <MDBCardTitle className='font-weight-bold'
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign:'center'
            }}>
              MikroTik CCR1009-7G-1C-1S+
            </MDBCardTitle>

            {/* <MDBCardText>
              Sed ut perspiciatis unde omnis iste natus sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.
            </MDBCardText> */}

            <MDBBtn floating gradient="peach"
                style={{ float: 'right' }}
                href="/mikroTik">Read More</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol md='2'>
        <MDBCard narrow>
          <MDBView cascade>
            <MDBCardImage
              hover
              zoom="20%"
              overlay='white-slight'
              className='card-img-top'
              src={MikroTik}
              alt='MikroTik'
            />
          </MDBView>

          <MDBCardBody>
            <MDBCardTitle className='font-weight-bold'
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign:'center'
            }}>
              MikroTik CCR1009-7G-1C-1S+
            </MDBCardTitle>

            {/* <MDBCardText>
              Sed ut perspiciatis unde omnis iste natus sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.
            </MDBCardText> */}

            <MDBBtn floating gradient="peach"
                style={{ float: 'right' }}
                href="/mikroTik">Read More</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol md='2'>
        <MDBCard narrow>
          <MDBView cascade>
            <MDBCardImage
              hover
              zoom="20%"
              overlay='white-slight'
              className='card-img-top'
              src={MikroTik}
              alt='MikroTik'
            />
          </MDBView>

          <MDBCardBody>
            <MDBCardTitle className='font-weight-bold'
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign:'center'
            }}>
              MikroTik CCR1009-7G-1C-1S+
            </MDBCardTitle>

            {/* <MDBCardText>
              Sed ut perspiciatis unde omnis iste natus sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.
            </MDBCardText> */}

            <MDBBtn floating gradient="peach"
                style={{ float: 'right' }}
                href="/mikroTik">Read More</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol md='2'>
        <MDBCard narrow>
          <MDBView cascade>
            <MDBCardImage
              hover
              zoom="20%"
              overlay='white-slight'
              className='card-img-top'
              src={MikroTik}
              alt='MikroTik'
            />
          </MDBView>

          <MDBCardBody>
            <MDBCardTitle className='font-weight-bold'
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign:'center'
            }}>
              MikroTik CCR1009-7G-1C-1S+
            </MDBCardTitle>

            {/* <MDBCardText>
              Sed ut perspiciatis unde omnis iste natus sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.
            </MDBCardText> */}

            <MDBBtn floating gradient="peach"
                style={{ float: 'right' }}
                href="/mikroTik">Read More</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
    </>
  );
}
