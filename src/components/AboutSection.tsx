import missionImage from '@/assets/mission-vision.jpg';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <img 
            src={missionImage} 
            alt="Sứ mệnh của NhiLe Foundation" 
            className="rounded-xl shadow-xl object-cover w-full h-[450px]"
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sứ Mệnh & Tầm Nhìn</h2>
          <p className="text-slate-600 text-lg mb-4">
            <strong>Sứ mệnh:</strong> NhiLe Foundation được thành lập với mục tiêu hỗ trợ và tạo điều kiện phát triển toàn diện cho trẻ em có hoàn cảnh đặc biệt khó khăn tại Việt Nam, tập trung vào giáo dục, sức khỏe và dinh dưỡng.
          </p>
          <p className="text-slate-600 text-lg">
            <strong>Tầm nhìn:</strong> Trở thành một tổ chức vững mạnh, minh bạch, là cầu nối tin cậy giữa cộng đồng và những mảnh đời cần giúp đỡ, góp phần xây dựng một thế hệ tương lai khỏe mạnh và trí tuệ.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;