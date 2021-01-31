import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBView, MDBIcon } from 'mdbreact';


const CardExample = () => {
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
        }}>Products</h1>
      <br />

      <MDBRow style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>

        {/* Network Router */}
        <MDBCol md='2'>
          <MDBCard>
            <MDBCardBody >
              <MDBCardTitle className='font-weight-bold'
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                Network Router
            </MDBCardTitle>

              <MDBCardText>
                Best network router price range in D-Link, Netgear, Prolink, TP-Link, Trendnet, C-net, Huawei, CISCO, Mikrotik, Totolink, Netis, Mi, Tenda, and more with ...
            </MDBCardText>

              <MDBBtn floating gradient="peach"
                style={{ float: 'right' }}
                href="/network-router">Explore</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

      {/* Network Switch */}
        <MDBCol md='2'>
          <MDBCard>
            <MDBCardBody >

              <MDBCardTitle className='font-weight-bold'
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                Network Switch
            </MDBCardTitle>

              <MDBCardText>
              A network switch is a device that operates at the Data Link layer of the ... Switches are a common component of networks based on ethernet, ...
            </MDBCardText>

              <MDBBtn floating gradient="peach"
                style={{ float: 'right' }}
                href="/network-switch">Explore</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        {/* Fttx */}
        <MDBCol md='2'>
          <MDBCard>
            <MDBCardBody >

              <MDBCardTitle className='font-weight-bold'
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                FTTX
            </MDBCardTitle>

              <MDBCardText>
              Fiber to the x (FTTx) is a collective term for various optical fiber delivery topologies that are categorized according to where the fiber terminates.
            </MDBCardText>

              <MDBBtn floating gradient="peach"
                style={{ float: "right" }}
                href="/fttx">Explore</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        {/* Wireless Networking */}
        <MDBCol md='2'>
          <MDBCard>
            <MDBCardBody >

              <MDBCardTitle className='font-weight-bold'
              className='font-weight-bold'
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              Wireless Networking
            </MDBCardTitle>

              <MDBCardText>
              A wireless network connects computers without using network cables. Computers use radio communications to send data between each other. You can ...
            </MDBCardText>

              <MDBBtn floating gradient="peach"
                style={{ float: "right" }}
                href="/wireless-networking">Explore</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      <br />

      <MDBRow style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>

        {/* Wireless Router */}
        <MDBCol md='2'>
          <MDBCard>
            <MDBCardBody >

              <MDBCardTitle className='font-weight-bold'
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              Wireless Router
            </MDBCardTitle>

              <MDBCardText>
              A wireless router is a device that enables wireless network packet forwarding and routing, and serves as an access point in a local area network. It works much ...
            </MDBCardText>

              <MDBBtn floating gradient="peach"
                style={{ float: 'right' }}
                href="/wireless-router">Explore</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        {/* Networking Cables */}
        <MDBCol md='2'>
          <MDBCard>
            <MDBCardBody >

              <MDBCardTitle className='font-weight-bold'
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              Networking Cables
            </MDBCardTitle>

              <MDBCardText>
              Network cables are used to connect and transfer data and information between computers, routers, switches and storage area networks . These cables are ...
            </MDBCardText>

              <MDBBtn floating gradient="peach"
                style={{ float: 'right' }}
                href="/networking-cables">Explore</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        {/* Fiber Optic Networking Accessories */}
        <MDBCol md='2'>
          <MDBCard>
            <MDBCardBody >

              <MDBCardTitle className='font-weight-bold'
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign:'center'
              }}>
                Fiber Optic Networking Accessories
            </MDBCardTitle>

              <MDBCardText>
              Fibre Networking Cables & Accessories. We stock a wide range of fibre optic cables and ...
            </MDBCardText>

              <MDBBtn floating gradient="peach"
                style={{ float: "right" }}
                href="/fiber-optic-networking-accessories">Explore</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        {/* Lan Networking Accessories */}
        <MDBCol md='2'>
          <MDBCard>
            <MDBCardBody >

              <MDBCardTitle className='font-weight-bold'
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign:'center'
              }}>
                Lan Networking Accessories
            </MDBCardTitle>

              <MDBCardText>
              Industrial Wireless LAN antennas and accessories for SCALANCE W ... To protect plants, systems ...
            </MDBCardText>

              <MDBBtn floating gradient="peach"
                style={{ float: "right" }}
                href="/lan-networking-accessories">Explore</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      <br />

      <MDBRow style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>

        {/* Network Testing Equipment */}
        <MDBCol md='2'>
          <MDBCard>
            <MDBCardBody >

              <MDBCardTitle className='font-weight-bold'
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign:'center'
              }}>
                Network Testing Equipment
            </MDBCardTitle>

              <MDBCardText>
              Deliver devices to networks and proved the best possible device experience across operator networks.
            </MDBCardText>

              <MDBBtn floating gradient="peach"
                style={{ float: 'right' }}
                href="/network-testing-equipment">Explore</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        {/* CATV Products */}
        <MDBCol md='2'>
          <MDBCard>
            <MDBCardBody >

              <MDBCardTitle className='font-weight-bold'
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                CATV Products
            </MDBCardTitle>

              <MDBCardText>
                We have a wide range of products related to head-end Electronics, Analogue, Amplifiers, Audio / Video, Combiners, Demodulators, Filters, ...
            </MDBCardText>

              <MDBBtn floating gradient="peach"
                style={{ float: 'right' }} href="/catv-products">Explore</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        {/* Server Rack Cabinet */}
        <MDBCol md='2'>
          <MDBCard>
            <MDBCardBody >

              <MDBCardTitle className='font-weight-bold'
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                Server Rack Cabinet

            </MDBCardTitle>

              <MDBCardText>
              From a budget friendly rack to a high end custom cabinet solution, we can help. Servers come in a wide variety of depths, that's why ...
            </MDBCardText>

              <MDBBtn floating gradient="peach"
                style={{ float: "right" }} href="/server-rack-cabinet">Explore</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        {/* Accessories */}
        <MDBCol md='2'>
          <MDBCard>
            <MDBCardBody >

              <MDBCardTitle className='font-weight-bold'
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                Accessories 
            </MDBCardTitle>

              <MDBCardText>
                Browse all the best computer accessories to match your computing needs. From laptop cases, keyboards and cables, to speakers, webcams and UPS.
            </MDBCardText>

              <MDBBtn floating gradient="peach"
                style={{ float: "right" }} href="/accessories">Explore</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      <br />

    </>

  )
}

export default CardExample;
