import pj1 from '@/assets/project-1.jpg';
import pj2 from '@/assets/project-2.jpg';
import pj3 from '@/assets/project-3.jpg';
import pj4 from '@/assets/project-4.jpg';
import pj5 from '@/assets/project-5.jpg';
import pj6 from '@/assets/project-6.jpg';
import pj7 from '@/assets/project-7.jpg';
import pj8 from '@/assets/project-8.jpg';
import pj9 from '@/assets/project-9.jpg';

import { ArrowRight } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
      {
        title: "Nụ cười chiến binh nhí",
        description: "Tại Bệnh viện Phụ sản – Nhi Đà Nẵng, các em nhỏ điều trị ung thư vẫn giữ nụ cười lạc quan, tiếp thêm sức mạnh và niềm tin cho những người xung quanh.",
        image: pj1,
        link: "https://www.facebook.com/nlf.sg/posts/pfbid024XqkqaGw1TxC14vSHiKDsq5PFMfWtSFuaHLrEECHTPamjJAszyZmpKsGrZGw2xkUl"
      },
      {
       title: "Trao quà, nhận yêu thương",
       description: "Tại xã A Ting (Quảng Nam), những món quà nhỏ mang lại niềm vui lớn cho các em nhỏ. Khoảnh khắc ánh mắt và nụ cười hồn nhiên đã trở thành món quà quý giá nhất mà tụi mình nhận lại sau chuyến đi.",
        image: pj2,
        link: "https://www.facebook.com/nlf.sg/posts/pfbid02EWKwZ778akS7K5NZMAbNTMAXYjaP4JSsUNdQq9Ejom7VkjeUffy5ZihMkFCnt6avl"
      },
          {
        title: "Mang nụ cười đến Làng Hy Vọng",
        description: "NhiLe Foundation đã trao tặng quà, sữa và dụng cụ học tập cho các em nhỏ tại Làng Hy Vọng, Đà Nẵng, không chỉ mang đến vật chất mà còn tạo nên những khoảnh khắc gắn kết, sẻ chia và tiếng cười rạng rỡ của các em.",
        image: pj3,
        link: "https://www.facebook.com/nlf.sg/posts/pfbid02cW7t3SHDxMumPuRk41n1PZT6Wh1qXosRK1XfFFygqGsBtJgN9gJWFhTtT8VZKG2rl"
      },
      {
        title: "Tết ấm no tại Nghệ An",
        description: "NhiLe Foundation khởi động chương trình Tết ấm no 2025 tại Trung Tâm Nhân Đạo Đô Lương, Nghệ An, mang đến nụ cười, tình yêu thương và những cái ôm ấm áp cho các em nhỏ.",
        image: pj4,
        link: "https://www.facebook.com/nlf.sg/posts/pfbid0YSSnrY6qomanumz5f15ni7WT9cu9pEq27Dr34NRzHK1ErTvxee7CG6NThq9fPmTkl"
      },
      {
        title: "Trao yêu thương tại chùa Từ Hạnh",
        description: "NhiLe Team đã gửi tặng 55 phần quà cho các em nhỏ, 55 phần quà cho các cụ già và quà cho các sư tại chùa Từ Hạnh, TP.HCM, mang đến niềm vui và nhắc nhở chúng mình về giá trị của sự sẻ chia và lòng nhân ái.",
        image: pj5,
        link: "https://www.facebook.com/nlf.sg/posts/pfbid0KAWn5jDioHAT8fBGA6oxCfoYxDzyLYqXehEQJKHs6cfPQhwzGGoDdNutSRufvvzEl"
      },
      {
        title: "Vẽ lại tuổi thơ bằng gam màu yêu thương",
        description: "NhiLe Foundation mang đến niềm vui cho các em nhỏ bị ảnh hưởng bởi chất độc da cam, với những tiếng cười, trò chơi, món quà nhỏ và khoảnh khắc ấm áp được vẽ nên bằng tình thương.",
        image: pj6,
        link: "https://www.facebook.com/nlf.sg/posts/pfbid09piuRXctzqpNqEBtjriLFb54igGBQyQej83YwSb9joYnkgBiRZYZAmkXiewT1qKml"
      },
      {
        title: "Ghé thăm ngôi trường đặc biệt ở Đà Nẵng",
        description: "NhiLe Foundation đến thăm trường dành cho các em nhỏ bị ảnh hưởng bởi chất độc da cam, mang theo quà và trò chơi, và nhận lại những nụ cười, ánh mắt háo hức cùng khoảnh khắc ấm áp khó quên.",
        image: pj7,
        link: "https://www.facebook.com/nlf.sg/posts/pfbid0ECdtSjNuTT3zsZ8PSNJ4HbVcAUuPq1D4PKnrS2pUfRRXAHbXzqJ3yzGSuXAxfET1l"
      },
      {
        title: "Tìm lại yêu thương qua sẻ chia",
        description: "Cống hiến cho cộng đồng và tham gia các hoạt động từ thiện cùng NhiLe Foundation không chỉ mang đến niềm vui cho những mảnh đời kém may mắn, mà còn giúp chúng ta tìm lại sự kết nối và cảm giác yêu thương trong cuộc sống.",
        image: pj8,
        link: "https://www.facebook.com/nlf.sg/posts/pfbid02vU6NpKr3NPhKTgMRFFoaH1hmEhRcTwSJbrz23HZYGsm3S2jnNjTWdocYbbdEqCk2l"
      },
      {
        title: "Nụ cười ở Làng Hy Vọng",
        description: "Tại Làng Hy Vọng, NhiLe Foundation mang đến những phần quà cho các em nhỏ khiếm thính và khỏe mạnh, và nhận lại những cái ôm, ánh mắt sáng rỡ cùng nụ cười hồn nhiên đầy ấm áp.",
        image: pj9,
        link: "https://www.facebook.com/nlf.sg/posts/pfbid02hNRn2ZujdWL6r7p3mAcwGB4r39GCbbMpmRCPb91H6jVSxfYpAu7jRLUvuPZ7ah5Gl"
      }
  ];

  return (
    <section id="projects" className="py-20 md:py-28 bg-slate-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Các Dự Án Nổi Bật</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Những hành trình yêu thương mà chúng ta đã cùng nhau thực hiện.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-background rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                <p className="text-slate-600 mb-4">{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <button className="font-semibold text-primary hover:text-primary-dark flex items-center gap-2 group">
                    Xem chi tiết 
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;