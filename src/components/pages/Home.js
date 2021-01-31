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
      <span>
			<h1 class="elementor-heading-title elementor-size-default" className="slider">WE BUILD ROI DRIVEN SOFTWARE PRODUCT</h1>
      <p className="msg">Flyte Solutions is a client Oriented Custom software development company Provide Strategic Solutions for Building ROI Driven Software Development, Web & Mobile Application Development Services within your budget. We help Startup, SMBS & Large Enterprise building Cost-effective Custom Software products. We delivers high-performance software engineering and offshore outsourcing software development solutions that help businesses to achieve goals, reduce costs & accelerate growth for more successful tomorrow.</p>
      </span>
      <br/> <br/>
      <span>
			<h1 class="elementor-heading-title elementor-size-default" className="slider1">Our Products</h1>
      <h4 className="msg1">MOON IT LTD is an Information Technology super market. Anything and everything relating to Networking, CATV & CCTV under single roof.</h4>		
      </span>
      <Slider/>
      <div class="column column--flex-center p-top-40 pb-20">

            <a href="/products" class="button button--clear button--blue">View More Product<i class="isoi-angle-right"></i></a>
        </div>
    </>
  );
}
