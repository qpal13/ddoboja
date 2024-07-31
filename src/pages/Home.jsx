import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // 캐러셀 기본 스타일

import img1 from "../assets/1.png"; // 이미지 경로
import img2 from "../assets/2.png"; // 이미지 경로

function Home() {
  return (
    <div className="carousel-container">
      <Carousel 
        showThumbs={false} 
        infiniteLoop={true}
        showArrows={true} 
        showStatus={false} // 슬라이드 개수 표시 제거
      >
        <div>
          <img src={img1} alt="Slide 1" />
        </div>
        <div>
          <img src={img2} alt="Slide 2" />
        </div>
      </Carousel>
    </div>
  );
}

export default Home;
