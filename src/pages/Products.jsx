import React from 'react';
import './Products.css';

const Products = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="profile">
          <img src="profile.jpg" alt="profile" className="profile-img" />
          <div className="profile-info">
            <h1>박을지</h1>
            <h4>1940.06.07~2021.07.23</h4>
            <p>그는 언제나 --- </p>
          </div>
        </div>
      </div>
      <div className="comment-box">
        <input type="text" placeholder="박을지님을 추모하는 ---" />
        <button></button>
      </div>
      <div className="post">
        <div className="post-content">
          <p>엄마에게 유난히 차갑게 대했던 지난주, 마음이 너무 불편하다. 조금 더 잘해드릴걸 그랬나보다. 엄마도 힘들다는 걸 알면서도 참 내 마음은 이기적이다. 다음 주말에는 꽃이라도 사서 찾아가야겠다. 항상 건강하셔야 할 텐데...</p>
          <div className="post-images">
            <img src="image1.jpg" alt="image1" />
            <img src="image2.jpg" alt="image2" />
          </div>
        </div>
        <div className="comments">
          <div className="comment">
            <p>좋은 생각이에요. 꼭 꽃 사서 다녀오세요!</p>
            <p className="comment-author">한정수</p>
          </div>
          <div className="comment">
            <p>맞아요, 부모님께 잘해드리는 게 중요하죠.</p>
            <p className="comment-author">김미정</p>
          </div>
          <div className="add-comment">
            <input type="text" placeholder="댓글을 추가하세요..." />
            <button>게시</button>
          </div>
        </div>
      </div>
      <div className="post">
        <div className="post-content">
          <p>아버지, 제가 어릴 때부터 늘 저희를 위해 고생하셨죠. 이제는 제가 아버지께 보답할 차례입니다. 항상 건강하시고 오래오래 함께해 주세요. 사랑합니다.</p>
          <div className="post-images">
            <img src="image3.jpg" alt="image3" />
            <img src="image4.jpg" alt="image4" />
          </div>
        </div>
        <div className="comments">
          <div className="comment">
            <p>정말 감동적이에요. 아버님이 참 행복하시겠어요.</p>
            <p className="comment-author">이지훈</p>
          </div>
          <div className="add-comment">
            <input type="text" placeholder="댓글을 추가하세요..." />
            <button>게시</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
