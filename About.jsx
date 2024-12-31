import React from "react";
import { FaGift, FaTree, FaSnowflake } from "react-icons/fa"; // Import các biểu tượng Giáng Sinh
import "animate.css"; // Thêm thư viện animate.css để sử dụng các hiệu ứng

const About = () => {
  return (
    <div className="about-container p-10 bg-gray-900 text-white pt-40 relative">
      {/* Biểu tượng Giáng Sinh */}
      <FaGift className="text-red-500 text-6xl position-absolute top-10 left-10 animate__animated animate__bounceIn" />
      <FaTree className="text-green-600 text-6xl position-absolute bottom-10 left-20 animate__animated animate__bounceIn" />
      <FaSnowflake className="text-white text-4xl position-absolute bottom-10 right-10 animate__animated animate__fadeIn animate__delay-1s" />

      <h1 className="text-4xl font-extrabold text-yellow-500 mb-6 text-center animate__animated animate__fadeIn">
        Giới Thiệu Về PHIM MỚI
      </h1>
      <div className="about-content animate__animated animate__fadeIn animate__delay-2s">
        <p className="text-lg leading-relaxed mb-6">
          Chào mừng bạn đến với PHIM MỚI – nền tảng xem phim trực tuyến hàng
          đầu! Tại đây, chúng tôi mang đến cho bạn những bộ phim chất lượng cao,
          đa dạng thể loại từ hành động, kinh dị, hài hước, tình cảm cho đến
          viễn tưởng.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Chúng tôi cam kết cung cấp cho bạn trải nghiệm xem phim tuyệt vời nhất
          với giao diện dễ sử dụng, tốc độ tải nhanh, và những bộ phim mới nhất.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Đặc biệt, chúng tôi cũng cung cấp các chức năng như đánh giá phim, tạo
          danh sách yêu thích, và khám phá các bộ phim theo các thể loại khác
          nhau.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          <strong>Những tính năng nổi bật:</strong>
          <ul className="list-disc pl-8 mt-4">
            <li>Xem phim chất lượng cao từ nhiều thể loại khác nhau.</li>
            <li>Khả năng tìm kiếm dễ dàng và chính xác.</li>
            <li>Giao diện thân thiện trên mọi thiết bị.</li>
          </ul>
        </p>
        <p className="text-lg leading-relaxed">
          Cảm ơn bạn đã chọn PHIM MỚI là nơi để tận hưởng những bộ phim tuyệt
          vời
        </p>
      </div>
    </div>
  );
};

export default About;