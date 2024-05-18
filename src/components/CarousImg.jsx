import React, { useEffect, useRef, useState } from 'react';
import { Carousel, Spin } from 'antd';
import sale from '../assets/sale.jpg';
import girl from '../assets/girl.jpg';
import combo from '../assets/combo.jpg';
import coat from '../assets/coat.jpg';
import open from '../assets/open.jpg'

// Styles for the carousel content
const contentStyle = {
  height: '600px',
  color: '#fff',
  lineHeight: '350px',
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const imgStyle={
  maxheight:'100%',
  maxwidth:'100%',
  object:'cover'
}

const LazyImage = ({ src, alt }) => {
  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );
    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  return (
    <div ref={imgRef} style={{ width: '100%', height: '100%' }}>
      {isVisible ? (
        <img src={src} alt={alt} style={imgStyle} />
      ) : (
        <Spin size="large" />
      )}
    </div>
  );
};

const CarousImg = () => {
  return (
    <Carousel autoplay>
      <>
        <h3 style={contentStyle}>
          <LazyImage src={open} alt="open" />
        </h3>
      </>
      <>
        <h3 style={contentStyle}>
          <LazyImage src={girl} alt="girl" />
        </h3>
      </>
      <>
        <h3 style={contentStyle}>
          <LazyImage src={combo} alt="combo" />
        </h3>
      </>
      <>
        <h3 style={contentStyle}>
          <LazyImage src={coat} alt="coat" />
        </h3>
      </>
    </Carousel>
  );
};

export default CarousImg;
