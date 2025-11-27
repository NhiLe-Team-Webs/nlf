import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { useLanguage, useTranslations } from "@/contexts/language-context";
import { API_ENDPOINTS, BANK_ACCOUNT_ID } from "@/config/api";
import { TransactionResponse } from "@/types/transaction";

const StatsSection = () => {
  const { stats } = useTranslations();
  const { language } = useLanguage();
  const [animatedValues, setAnimatedValues] = useState({
    donated: 0,
    projects: 0,
  });
  const [totalCredit, setTotalCredit] = useState(0);
  const [totalDebit, setTotalDebit] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchStats = async () => {
    setLoading(true);
    try {
      const filters = {
        fromDate: new Date(new Date().setFullYear(new Date().getFullYear() - 1)).toISOString().split('T')[0], // 1 year ago
        toDate: new Date().toISOString().split('T')[0], // today
        keyword: '',
        pageNumber: 1,
        pageSize: 1, // We only need totals, not actual transactions
      };
      
      const url = API_ENDPOINTS.BANK_TRANSACTIONS(BANK_ACCOUNT_ID, filters);
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error('Failed to fetch stats');
      }
      
      const data: TransactionResponse = await response.json();
      
      if (data.status === 200) {
        setTotalCredit(data.data.totalCredit);
        setTotalDebit(data.data.totalDebit);
      }
    } catch (error) {
      console.error('Error fetching stats:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  useEffect(() => {
    const animateNumber = (
      target: number,
      setter: (value: number) => void,
      duration = 2500,
    ) => {
      let current = 0;
      const increment = target / (duration / 16);

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setter(target);
          clearInterval(timer);
        } else {
          setter(Math.floor(current));
        }
      }, 16);
    };

    const timeout = setTimeout(() => {
      animateNumber(totalDebit, (value) =>
        setAnimatedValues((prev) => ({ ...prev, donated: value })),
      );
      animateNumber(15, (value) =>
        setAnimatedValues((prev) => ({ ...prev, projects: value })),
      );
    }, 400);

    return () => clearTimeout(timeout);
  }, [totalDebit]);

  const formatNumber = (value: number) =>
    value.toLocaleString(language === "vi" ? "vi-VN" : "en-US");

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    }).format(amount);
  };

  return (
    <section className="bg-slate-100 py-16">
      <div className="container mx-auto px-6">
        <div className="mb-12 grid grid-cols-1 gap-8 text-center md:grid-cols-2">
          <div>
            <p className="text-4xl font-bold text-primary md:text-5xl">
              {formatNumber(animatedValues.donated)}
            </p>
            <p className="mt-2 text-slate-600">{stats.raisedLabel}</p>
            {loading && (
              <div className="mt-2 text-sm text-gray-500">
                {language === 'vi' ? 'Đang cập nhật...' : 'Updating...'}
              </div>
            )}
          </div>
          <div>
            <p className="text-4xl font-bold text-primary md:text-5xl">
              15+
            </p>
            <p className="mt-2 text-slate-600">{language === 'vi' ? 'Dự án' : 'Projects'}</p>
          </div>
        </div>

        <div className="border-t border-slate-300 pt-8 text-center">
          <h3 className="mb-2 text-xl font-bold text-slate-800">
            {stats.currentHeading}
          </h3>
          <p className="mb-4 text-lg italic text-slate-700">
            {stats.currentDescription}
          </p>
          <a
            href="https://thiennguyen.app/donate-target/1958011484311146496"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-primary hover:bg-primary/90">
              {stats.cta}
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
