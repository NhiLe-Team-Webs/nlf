import { Shield } from 'lucide-react';

const TransparencySection = () => {
  return (
    <section id="transparency" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Minh Bạch Là Nền Tảng Của Niềm Tin
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto">
            Chúng tôi cam kết công khai mọi hoạt động thu chi. Toàn bộ sao kê và báo cáo tài chính đều được cập nhật và xác thực qua Cổng thông tin điện tử nhân đạo quốc gia.
          </p>
        </div>
        <div className="max-w-2xl mx-auto bg-accent border-2 border-primary rounded-2xl p-8 text-center shadow-lg">
          <div className="flex justify-center mb-4">
            <Shield className="h-16 w-16 text-primary" />
          </div>
          <h3 className="text-xl font-bold mb-2">Sao Kê Minh Bạch</h3>
          <p className="text-slate-600 mb-6">
            Mọi khoản đóng góp của bạn đều được ghi nhận và công khai trên hệ thống của Cổng thông tin điện tử nhân đạo quốc gia.
          </p>
          <a 
            href="https://thiennguyen.app/user/nhilefoundation" 
            target="_blank" 
            className="bg-primary text-primary-foreground font-semibold py-3 px-8 rounded-full hover:bg-primary-dark transition-colors inline-block"
          >
            Xem Sao Kê trên thiennguyen.app
          </a>
        </div>
      </div>
    </section>
  );
};

export default TransparencySection;