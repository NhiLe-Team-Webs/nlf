import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";

const StatsSection = () => {
  const [stats, setStats] = useState({
    donated: 0,
    projects: 0,
  });

  useEffect(() => {
    const animateNumber = (
      target: number, 
      setter: (value: number) => void, 
      duration: number = 2500
    ) => {
      let start = 0;
      const increment = target / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setter(target);
          clearInterval(timer);
        } else {
          setter(Math.floor(start));
        }
      }, 16);
    };

    // Start animations with delay
    setTimeout(() => {
      animateNumber(602233144, (value) => setStats(prev => ({ ...prev, donated: value })));
      animateNumber(15, (value) => setStats(prev => ({ ...prev, projects: value })));
    }, 500);
  }, []);

  const formatNumber = (num: number) => {
    return num.toLocaleString('vi-VN');
  };

  return (
    <section className="py-16 bg-slate-100">
      <div className="container mx-auto px-6">
        {/* Statistics Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center mb-12">
          <div>
            <p className="text-4xl md:text-5xl font-bold text-primary">
              {formatNumber(stats.donated)}
            </p>
            <p className="text-slate-600 mt-2">VNĐ Đã Quyên Góp</p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl font-bold text-primary">
              {stats.projects}+
            </p>
            <p className="text-slate-600 mt-2">Dự Án Hoàn Thành</p>
          </div>
        </div>

        {/* Current Project Section */}
        <div className="text-center border-t border-slate-300 pt-8">
          <h3 className="text-xl font-bold text-slate-800 mb-2">
            Dự Án Hiện Tại
          </h3>
          <p className="text-lg italic text-slate-700 mb-4">
            Quỹ hỗ trợ NSA Kid - Quản lý bởi NhiLe Foundation & NSA
          </p>
          <a href="https://thiennguyen.app/donate-target/1958011484311146496" target="_blank" rel="noopener noreferrer">
            <Button className="bg-primary hover:bg-primary/90">
              Xem chi tiết & Ủng hộ
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;