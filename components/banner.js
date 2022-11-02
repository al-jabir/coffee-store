import React from 'react';
import styled from './banner.module.css';

const Banner = ({ btnText, handleOnClick }) => {
  return (
    <div className={styled.container}>
      <h1 className={styled.title}>
        <span className={styled.title1}>Coffee </span>
        <span className={styled.title2}>Connoisseur</span>
      </h1>
      <p className={styled.subTitle}>Discover your local coffee shops!</p>
      <button className={styled.button} onClick={handleOnClick}>
        {btnText}
      </button>
    </div>
  );
};

export default Banner;
