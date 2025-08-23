import { useEffect, useState } from 'react';

const StatsSection = () => {
  const [stats, setStats] = useState({
    donated: 0,
    projects: 0,
    children: 0
  });

  useEffect(() => {
    const animateNumber = (
      target: number, 
      setter: (value: number) => void, 
      duration: number = 2500,
      suffix: string = ''
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
      animateNumber(1500000000, (value) => setStats(prev => ({ ...prev, donated: value })));
      animateNumber(12, (value) => setStats(prev => ({ ...prev, projects: value })));
      animateNumber(500, (value) => setStats(prev => ({ ...prev, children: value })));
    }, 500);
  }, []);

  const formatNumber = (num: number) => {
    return num.toLocaleString('vi-VN');
  };

  return (
    <section className="py-16 bg-slate-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-4xl md:text-5xl font-bold text-primary">
              {formatNumber(stats.donated)}
            </p>
            <p className="text-slate-600 mt-2">VNĐ Đã Quyên Góp</p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl font-bold text-primary">
              {stats.projects}
            </p>
            <p className="text-slate-600 mt-2">Dự Án Hoàn Thành</p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl font-bold text-primary">
              {stats.children}+
            </p>
            <p className="text-slate-600 mt-2">Em Nhỏ Được Giúp Đỡ</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;