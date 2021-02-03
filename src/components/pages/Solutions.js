import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBView, MDBIcon } from 'mdbreact';

export default function Solutions() {
  return (
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
        }}>MoonIT Solutions</h1>

<br/>
    <MDBRow style={{paddingBottom: '15px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',}}>

            {/* Software */}
      <MDBCol md='2'>
        <MDBCard narrow >
          <MDBView cascade>
            <MDBCardImage
              hover
              zoom="20%"
              overlay='white-slight'
              className='card-img-top'
              src='https://i.imgur.com/ej83dJ8.png'
              alt='Software'
              style={{padding:"35px"}}
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
              Software Solutions
            </MDBCardTitle>

            <MDBBtn floating gradient="aqua"
                style={{ float: 'right' }}
                href="/software-solutions">Read More</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

    {/* Enterprise Solution */}
      <MDBCol md='2'>
        <MDBCard narrow >
          <MDBView cascade>
            <MDBCardImage
              hover
              zoom="20%"
              overlay='white-slight'
              className='card-img-top'
              src='https://i.imgur.com/F66jgnu.png'
              alt='Enterprise Solution'
              style={{padding:"35px"}}
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
              Enterprise Solutions
            </MDBCardTitle>

            <MDBBtn floating gradient="aqua"
                style={{ float: 'right' }}
                href="/enterprise-solutions">Read More</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

            {/* IoT */}
      <MDBCol md='2'>
        <MDBCard narrow >
          <MDBView cascade>
            <MDBCardImage
              hover
              zoom="20%"
              overlay='white-slight'
              className='card-img-top'
              src='https://i.imgur.com/MLTahBp.png'
              alt='IoT Solutions'
              style={{padding:"35px"}}
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
             IoT Solutions
            </MDBCardTitle>

            <MDBBtn floating gradient="aqua"
                style={{ float: 'right' }}
                href="/iot-solutions">Read More</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
{/* IT Security Solution */}
      <MDBCol md='2'>
        <MDBCard narrow >
          <MDBView cascade>
            <MDBCardImage
              hover
              zoom="20%"
              overlay='white-slight'
              className='card-img-top'
              src='https://i.imgur.com/R0MaQ2B.png'
              alt='IT Security Solution'
              style={{padding:"35px"}}
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
              IT Security Solutions
            </MDBCardTitle>

            <MDBBtn floating gradient="aqua"
                style={{ float: 'right' }}
                href="/it-security-solutions">Read More</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
      <br />

      <MDBRow style={{paddingBottom: '15px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',}}>
            {/* Cloud */}
      <MDBCol md='2'>
        <MDBCard narrow >
          <MDBView cascade>
            <MDBCardImage
              hover
              zoom="20%"
              overlay='white-slight'
              className='card-img-top'
              src='https://i.imgur.com/7Z7UwzB.png'
              alt='Cloud'
              style={{padding:"35px"}}
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
              Cloud Solutions
            </MDBCardTitle>

            <MDBBtn floating gradient="aqua"
                style={{ float: 'right' }}
                href="/cloud-solutions">Read More</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

            {/* Deployment */}
      <MDBCol md='2'>
        <MDBCard narrow >
          <MDBView cascade>
            <MDBCardImage
              hover
              zoom="20%"
              overlay='white-slight'
              className='card-img-top'
              src='https://i.imgur.com/NIPwCZi.png'
              alt='Deployment'
              style={{padding:"35px"}}
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
              Deployment Solutions
            </MDBCardTitle>

            {/* <MDBCardText>
              Sed ut perspiciatis unde omnis iste natus sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.
            </MDBCardText> */}

            <MDBBtn floating gradient="aqua"
                style={{ float: 'right' }}
                href="/deployment-solutions">Read More</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

{/* Call center Solution */}
      <MDBCol md='2'>
        <MDBCard narrow >
          <MDBView cascade>
            <MDBCardImage
              hover
              zoom="20%"
              overlay='white-slight'
              className='card-img-top'
              src='https://i.imgur.com/H8tOdzg.png'
              alt='Call center Solution'
              style={{padding:"35px"}}
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
              Call Center Solutions
            </MDBCardTitle>

            <MDBBtn floating gradient="aqua"
                style={{ float: 'right' }}
                href="/call-center-solutions">Read More</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

{/* IT Automation */}
      <MDBCol md='2'>
        <MDBCard narrow >
          <MDBView cascade>
            <MDBCardImage
              hover
              zoom="20%"
              overlay='white-slight'
              className='card-img-top'
              src='https://i.imgur.com/u3fylr1.png'
              alt='IT Automation'
              style={{padding:"35px"}}
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
              IT Automation Solutions
            </MDBCardTitle>

            <MDBBtn floating gradient="aqua"
                style={{ float: 'right' }}
                href="/it-automation-solutions">Read More</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
      <br />

      <MDBRow style={{paddingBottom: '15px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',}}>
            {/* Green IT */}
      <MDBCol md='2'>
        <MDBCard narrow >
          <MDBView cascade>
            <MDBCardImage
              hover
              zoom="20%"
              overlay='white-slight'
              className='card-img-top'
              src='https://i.imgur.com/5hrKhFa.png'
              alt='Green IT'
              style={{padding:"35px"}}
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
              Green IT Solutions
            </MDBCardTitle>

            <MDBBtn floating gradient="aqua"
                style={{ float: 'right' }}
                href="/green-it-solutions">Read More</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

            {/* Blockchain Solutions */}
      <MDBCol md='2'>
        <MDBCard narrow >
          <MDBView cascade>
            <MDBCardImage
              hover
              zoom="20%"
              overlay='white-slight'
              className='card-img-top'
              src='https://i.imgur.com/ONFzx9u.png'
              alt='Blockchain Solutions'
              style={{padding:"35px"}}
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
              Blockchain Solutions
            </MDBCardTitle>

            <MDBBtn floating gradient="aqua"
                style={{ float: 'right' }}
                href="/blockchain-solutions">Read More</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

            {/* AI Solutions */}
      <MDBCol md='2'>
        <MDBCard narrow >
          <MDBView cascade>
            <MDBCardImage
              hover
              zoom="20%"
              overlay='white-slight'
              className='card-img-top'
              src='https://i.imgur.com/jIDSmUZ.png'
              alt='AI Solutions'
              style={{padding:"35px"}}
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
              AI Solutions
            </MDBCardTitle>

            <MDBBtn floating gradient="aqua"
                style={{ float: 'right' }}
                href="/ai-solutions">Read More</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

            {/* Digital Marketing */}
      <MDBCol md='2'>
        <MDBCard narrow >
          <MDBView cascade>
            <MDBCardImage
              hover
              zoom="20%"
              overlay='white-slight'
              className='card-img-top'
              src='https://i.imgur.com/cm86Cho.png'
              alt='Digital Marketing'
              style={{padding:"35px"}}
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
              Digital Marketing
            </MDBCardTitle>

            <MDBBtn floating gradient="aqua"
                style={{ float: 'right' }}
                href="/digital-marketing-solutions">Read More</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
      <br />

      <MDBRow style={{paddingBottom: '15px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',}}>

            {/* IT Audit */}
      <MDBCol md='2'>
        <MDBCard narrow >
          <MDBView cascade>
            <MDBCardImage
              hover
              zoom="20%"
              overlay='white-slight'
              className='card-img-top'
              src='https://i.imgur.com/5LYHuP4.png?1'
              alt='IT Audit'
              style={{padding:"35px"}}
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
              IT Audit Solutions
            </MDBCardTitle>

            <MDBBtn floating gradient="aqua"
                style={{ float: 'right' }}
                href="/it-audit-solutions">Read More</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

            {/* Data Center Solutions */}
      <MDBCol md='2'>
        <MDBCard narrow >
          <MDBView cascade>
            <MDBCardImage
              hover
              zoom="20%"
              overlay='white-slight'
              className='card-img-top'
              src='https://i.imgur.com/dfKOm6t.png'
              alt='Data Center Solutions'
              style={{padding:"35px"}}
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
              Data Center Solutions
            </MDBCardTitle>

            <MDBBtn floating gradient="aqua"
                style={{ float: 'right' }}
                href="/data-center-solutions">Read More</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

{/* Data Science */}
      <MDBCol md='2'>
        <MDBCard narrow >
          <MDBView cascade>
            <MDBCardImage
              hover
              zoom="20%"
              overlay='white-slight'
              className='card-img-top'
              src='https://i.imgur.com/nyId8HM.png'
              alt='Data Science'
              style={{padding:"35px"}}
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
              Data Science
            </MDBCardTitle>

            <MDBBtn floating gradient="aqua"
                style={{ float: 'right' }}
                href="/data-science-solutions">Read More</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

            {/* Data recovery */}
      <MDBCol md='2'>
        <MDBCard narrow >
          <MDBView cascade>
            <MDBCardImage
              hover
              zoom="20%"
              overlay='white-slight'
              className='card-img-top'
              src='https://i.imgur.com/1IykZxm.png'
              alt='Data recovery'
              style={{padding:"35px"}}
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
              Data Recovery
            </MDBCardTitle>

            <MDBBtn floating gradient="aqua"
                style={{ float: 'right' }}
                href="/data-secovery-solutions">Read More</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
      <br />

      <MDBRow style={{paddingBottom: '15px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',}}>

            {/* IT Training */}
      <MDBCol md='2'>
        <MDBCard narrow >
          <MDBView cascade>
            <MDBCardImage
              hover
              zoom="20%"
              overlay='white-slight'
              className='card-img-top'
              src='https://i.imgur.com/64Wpats.png'
              alt='IT Training'
              style={{padding:"35px"}}
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
              IT Training Solutions
            </MDBCardTitle>

            <MDBBtn floating gradient="aqua"
                style={{ float: 'right' }}
                href="/it-training-solutions">Read More</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

            {/* Website */}
      <MDBCol md='2'>
        <MDBCard narrow >
          <MDBView cascade>
            <MDBCardImage
              hover
              zoom="20%"
              overlay='white-slight'
              className='card-img-top'
              src='https://i.imgur.com/OyV9BmQ.png'
              alt='Website'
              style={{padding:"35px"}}
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
              Website Solutions
            </MDBCardTitle>

            <MDBBtn floating gradient="aqua"
                style={{ float: 'right' }}
                href="/website-solutions">Read More</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

            {/* Network & Server Monitoring */}
      <MDBCol md='2'>
        <MDBCard narrow >
          <MDBView cascade>
            <MDBCardImage
              hover
              zoom="20%"
              overlay='white-slight'
              className='card-img-top'
              src='https://i.imgur.com/xDCgPV5.png'
              alt='Network & Server Monitoring'
              style={{padding:"35px"}}
            />
          </MDBView>

          <MDBCardBody>
            <MDBCardTitle className='font-weight-bold'
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign:'center',
            }}>
              Network & Server 
            </MDBCardTitle>

            <MDBBtn floating gradient="aqua"
                style={{ float: 'right' }}
                href="/network-server-monitoring-solutions">Read More</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

            {/* E commerce */}
      <MDBCol md='2'>
        <MDBCard narrow >
          <MDBView cascade>
            <MDBCardImage
              hover
              zoom="20%"
              overlay='white-slight'
              className='card-img-top'
              src='https://i.imgur.com/0YMOGyW.png'
              alt='E commerce'
              style={{padding:"35px"}}
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
              Ecommerce Solutions
            </MDBCardTitle>

            <MDBBtn floating gradient="aqua"
                style={{ float: 'right' }}
                href="/e-commerce-solutions">Read More</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
      <br />

      <MDBRow style={{paddingBottom: '15px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',}}>

            {/* Apps*/}
      <MDBCol md='2'>
        <MDBCard narrow >
          <MDBView cascade>
            <MDBCardImage
              hover
              zoom="20%"
              overlay='white-slight'
              className='card-img-top'
              src='https://i.imgur.com/z7KdFQN.png'
              alt='Apps'
              style={{padding:"35px"}}
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
              Apps Solutions
            </MDBCardTitle>

            <MDBBtn floating gradient="aqua"
                style={{ float: 'right' }}
                href="/apps-solutions">Read More</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      </MDBRow>
      <br />
    </>
  );
}
