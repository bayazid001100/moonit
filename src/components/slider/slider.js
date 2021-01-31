import React from "react";
import Carousel from "react-elastic-carousel";
import Item from './item';
import './style.css';
import slider1 from '../../images/product/AC-NET-1-onppgrw0mfk3zf1mk60l1te5dnos0hdzdfguzhv13k.png';
import slider2 from '../../images/product/Cambium-2-onppdhgcpb1zcjtnrqtlbna2j3wj2mbsx59oimqmvk.png';
import slider3 from '../../images/product/Cisco-2-onppdjc12z4jzrqxgrmugmszpvn9i0j9leknh6nuj4.png';
import slider4 from '../../images/product/Edimax-2-onppgtrp03mommyw96tu6sx2kffifvlg1orty1s8r4.png';
import slider5 from '../../images/product/G-com-1-onppgtrp03mommyw96tu6sx2kffifvlg1orty1s8r4.png';
import slider6 from '../../images/product/Mikrotik-2-onppdl7pgn74mzo75sg3lmbwwndzxeqq9nvmfql26o.png';
import slider7 from '../../images/product/V-Sol-2-onppdn3dub9pa7lgut9cqluu3f4qcsy6xx6leai9u8.png';
import slider8 from '../../images/product/Wavlink-2-onppdoz27zc9xfiqju2lvldra6vgs75nm6hkcufhhs.png';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

export default function Slider() {
  return (
    <>
      <div className="slider">
        <Carousel breakPoints={breakPoints}>
          <Item><img src={slider1} alt= "slider"/></Item>
          <Item><img src={slider2} alt= "slider"/></Item>
          <Item><img src={slider3} alt= "slider"/></Item>
          <Item><img src={slider4} alt= "slider"/></Item>
          <Item><img src={slider5} alt= "slider"/></Item>
          <Item><img src={slider6} alt= "slider"/></Item>
          <Item><img src={slider7} alt= "slider"/></Item>
          <Item><img src={slider8} alt= "slider"/></Item>
        </Carousel>
      </div>
    </>
  );
}