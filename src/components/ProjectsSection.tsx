import booksImage from '@/assets/project-1.jpg';
import mealsImage from '@/assets/project-2.jpg';
import clothingImage from '@/assets/project-3.jpg';
import { ArrowRight } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Những hạnh phúc giản đơn",
      description: "Là căn bếp có gạo, có đường, có mắm và muối. Là ngôi nhà có cả cha và mẹ. Là tiếng cười trẻ thơ được cắp sách tới trường. Đây đã gọi là sự HẠNH PHÚC của bà con vùng xa.",
      image: booksImage,
      link: "https://www.facebook.com/nlf.sg/posts/pfbid04LV34V3S3r6zny8pfkdN2s4VDpCGAyRC3vaJu5pPvBHJ5MXVq2SJAamLXH7xQJnyl"
    },
    {
      title: "Áo Ấm Mùa Đông",
      description: "Trao tặng áo ấm, chăn và các vật dụng cần thiết cho trẻ em các tỉnh miền núi phía Bắc trước mỗi mùa đông giá rét.",
      image: clothingImage,
      link: "#"
    },
        {
      title: "Hành trình xoa dịu nỗi đau da cam",
      description: "Dự án hướng đến việc sẻ chia, xoa dịu nỗi đau và đồng hành cùng các nạn nhân chất độc da cam, mang đến niềm tin và hy vọng vào một tương lai tốt đẹp hơn",
      image: mealsImage,
      link: "#"
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