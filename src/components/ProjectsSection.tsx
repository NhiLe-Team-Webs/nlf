import booksImage from '@/assets/project-books.jpg';
import mealsImage from '@/assets/project-meals.jpg';
import clothingImage from '@/assets/project-clothing.jpg';
import { ArrowRight } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Tủ Sách Vùng Cao",
      description: "Mang tri thức đến cho các em nhỏ tại các điểm trường khó khăn, xây dựng tủ sách và trao tặng sách giáo khoa, truyện tranh.",
      image: booksImage
    },
    {
      title: "Bữa Cơm Có Thịt",
      description: "Cải thiện bữa ăn dinh dưỡng hàng ngày cho các em tại các mái ấm, nhà mở, đảm bảo sự phát triển thể chất toàn diện.",
      image: mealsImage
    },
    {
      title: "Áo Ấm Mùa Đông",
      description: "Trao tặng áo ấm, chăn và các vật dụng cần thiết cho trẻ em các tỉnh miền núi phía Bắc trước mỗi mùa đông giá rét.",
      image: clothingImage
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
                <button className="font-semibold text-primary hover:text-primary-dark flex items-center gap-2 group">
                  Xem chi tiết 
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;