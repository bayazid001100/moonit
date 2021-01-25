import React from 'react';
import '../../App.css';
import Slider from '../slider/slider';
import Banner from '../banner/Banner';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";


export default function Home() {
  return (
    <>
      <Banner/>
      <Slider/>
    </>
  );
}
