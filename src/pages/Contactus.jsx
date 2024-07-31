import React from "react";

const Contactus = () => {
  const profilePicDefault =
    "https://static.vecteezy.com/system/resources/previews/002/318/271/non_2x/user-profile-icon-free-vector.jpg";

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
  };

  return (
    <div>
      <h1>추모공간 생성</h1>
      <h3>정보를 입력해주세요</h3>
      <h3>메인프로필</h3>
      <div className="profile-section">
        <img
          src={
            localStorage.getItem("img")
              ? localStorage.getItem("img")
              : profilePicDefault
          }
          alt="profile_pic"
          className="img-thumbnail"
          height={250}
          width={250}
        />
      </div>

      <div className="파일선택">
        <input
          type="file"
          id="file"
          className="form-control-file"
          style={{ display: 'none' }}
        />
        <label htmlFor="file" className="btn-primary">
          선택
        </label>
      </div>

      <h3>기본 정보</h3>
      <div className="border p-4">
        <div className="이름">
          <label htmlFor="name" className="form-label">
            이름
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="이름을 입력하세요"
          />
        </div>
        <div className="생년월일">
          <label htmlFor="birthdate" className="form-label">
            생년월일
          </label>
          <input
            type="text"
            className="form-control"
            id="birthdate"
            placeholder="생년월일을 입력하세요"
          />
        </div>
        <div className="기일">
          <label htmlFor="date" className="form-label">
            기일
          </label>
          <input
            type="text"
            className="form-control"
            id="date"
            placeholder="기일을 입력하세요"
          />
        </div>
        <div className="소개글">
          <label htmlFor="bio" className="form-label">
            소개글
          </label>
          <input
            type="text"
            className="form-control"
            id="bio"
            placeholder="소개글을 입력하세요"
          />
        </div>
        <button type="submit" className="btn-submit" onClick={handleSubmit}>
          생성
        </button>
      </div>
    </div>
  );
};

export default Contactus;