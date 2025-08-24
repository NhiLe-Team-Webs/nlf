const CallToActionSection = () => {
  return (
    <section id="join-us" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Chung Tay Cùng Chúng Tôi</h2>
        <p className="text-slate-600 max-w-2xl mx-auto mb-8">
          Mỗi hành động của bạn đều có sức mạnh thay đổi một cuộc đời. Hãy chọn cách bạn muốn đồng hành cùng NhiLe Foundation.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <a
            href="https://thiennguyen.app/user/nhilefoundation"
            target="_blank"
            rel="noopener noreferrer"
           className="bg-primary text-primary-foreground font-bold py-4 px-10 rounded-full hover:bg-primary-dark transition-all transform hover:scale-105 shadow-lg w-full md:w-auto"
           >
            Quyên Góp Ngay
            </a>
          <a
            href="https://www.facebook.com/nlf.sg"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-100 text-slate-800 font-bold py-4 px-10 rounded-full hover:bg-slate-200 transition-colors w-full md:w-auto"
          >
            Trở Thành Tình Nguyện Viên
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;