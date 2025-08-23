import heroImage from '@/assets/hero-children.jpg';

const HeroSection = () => {
  const scrollToAction = () => {
    const element = document.getElementById('join-us');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative py-24 md:py-40 bg-background text-center">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="container mx-auto px-6 relative">
        <h2 className="text-4xl md:text-6xl font-extrabold charity-text-gradient leading-tight mb-4">
          Lan Tỏa Yêu Thương, Chắp Cánh Tương Lai
        </h2>
        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
          Mỗi đóng góp, dù nhỏ nhất, đều góp phần tạo nên những thay đổi lớn lao cho cuộc đời của các em nhỏ có hoàn cảnh khó khăn.
        </p>
        <button 
          onClick={scrollToAction}
          className="bg-primary text-primary-foreground font-bold py-3 px-8 rounded-full hover:bg-primary-dark transition-all transform hover:scale-105 shadow-lg"
        >
          Chung Tay Hành Động
        </button>
      </div>
    </section>
  );
};

export default HeroSection;