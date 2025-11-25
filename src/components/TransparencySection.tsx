import { useState, useEffect } from "react";
import { format } from "date-fns";
import { vi, enUS } from "date-fns/locale";
import { 
  Calendar, 
  Search, 
  TrendingUp, 
  TrendingDown, 
  DollarSign,
  ArrowUpDown,
  ChevronLeft,
  ChevronRight,
  RefreshCw
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useTranslations, useLanguage } from "@/contexts/language-context";
import { API_ENDPOINTS, BANK_ACCOUNT_ID } from "@/config/api";
import { Transaction, TransactionResponse, TransactionFilters } from "@/types/transaction";

const TransparencySection = () => {
  const { transparency } = useTranslations();
  const { language } = useLanguage();
  const { toast } = useToast();
  
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(false);
  const [accountBalance, setAccountBalance] = useState<number | null>(null);
  const [totalCredit, setTotalCredit] = useState(0);
  const [totalDebit, setTotalDebit] = useState(0);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Calculate balance if API returns null
  const calculatedBalance = accountBalance !== null ? accountBalance : (totalCredit - totalDebit);
  
  const [filters, setFilters] = useState<TransactionFilters>({
    fromDate: format(new Date(Date.now() - 30 * 24 * 60 * 60 * 1000), 'yyyy-MM-dd'),
    toDate: format(new Date(), 'yyyy-MM-dd'),
    keyword: '',
    pageNumber: 1,
    pageSize: 10,
  });
  
  const [dateRange, setDateRange] = useState<{
    from: Date | undefined;
    to: Date | undefined;
  }>({
    from: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
    to: new Date(),
  });
  
  const [searchKeyword, setSearchKeyword] = useState('');
  const [pageSize, setPageSize] = useState(10);

  const fetchTransactions = async () => {
    setLoading(true);
    try {
      const url = API_ENDPOINTS.BANK_TRANSACTIONS(BANK_ACCOUNT_ID, filters);
      console.log('Fetching transactions from:', url);
      
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data: TransactionResponse = await response.json();
      
      if (data.status === 200) {
        setTransactions(data.data.transactions);
        setAccountBalance(data.data.accountBalance);
        setTotalCredit(data.data.totalCredit);
        setTotalDebit(data.data.totalDebit);
        setHasNextPage(data.data.hasNextPage);
        setCurrentPage(data.data.pageNumber);
        
        // Calculate total pages based on hasNextPage
        if (data.data.hasNextPage) {
          setTotalPages(data.data.pageNumber + 1);
        } else {
          setTotalPages(data.data.pageNumber);
        }
        
        console.log('API Response:', {
          accountBalance: data.data.accountBalance,
          totalCredit: data.data.totalCredit,
          totalDebit: data.data.totalDebit,
          calculatedBalance: data.data.accountBalance !== null ? data.data.accountBalance : (data.data.totalCredit - data.data.totalDebit)
        });
      } else {
        throw new Error(data.error || 'Unknown error');
      }
    } catch (error) {
      console.error('Error fetching transactions:', error);
      toast({
        title: language === 'vi' ? 'Lỗi' : 'Error',
        description: language === 'vi'
          ? `Không thể tải dữ liệu giao dịch: ${error instanceof Error ? error.message : 'Lỗi không xác định'}. Vui lòng thử lại.`
          : `Failed to load transaction data: ${error instanceof Error ? error.message : 'Unknown error'}. Please try again.`,
        variant: 'destructive',
      });
      
      // Set empty state on error
      setTransactions([]);
      setAccountBalance(null);
      setTotalCredit(0);
      setTotalDebit(0);
      setHasNextPage(false);
      setCurrentPage(1);
      setTotalPages(1);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, [filters]);

  const handleDateRangeChange = (range: { from?: Date; to?: Date } | undefined) => {
    if (range && range.from && range.to) {
      setDateRange(range);
      setFilters(prev => ({
        ...prev,
        fromDate: format(range.from, 'yyyy-MM-dd'),
        toDate: format(range.to, 'yyyy-MM-dd'),
        pageNumber: 1,
      }));
    }
  };

  const handleSearch = () => {
    setFilters(prev => ({
      ...prev,
      keyword: searchKeyword,
      pageNumber: 1,
    }));
  };

  const handlePageChange = (page: number) => {
    setFilters(prev => ({
      ...prev,
      pageNumber: page,
    }));
  };

  const handlePageSizeChange = (newPageSize: number) => {
    setPageSize(newPageSize);
    setFilters(prev => ({
      ...prev,
      pageSize: newPageSize,
      pageNumber: 1,
    }));
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return format(date, 'dd/MM/yyyy HH:mm', { locale: language === 'vi' ? vi : enUS });
  };

  const getTransactionTypeColor = (type: string) => {
    return type === 'CREDIT' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800';
  };

  const getTransactionTypeText = (type: string) => {
    return type === 'CREDIT' 
      ? (language === 'vi' ? 'Thu' : 'Credit')
      : (language === 'vi' ? 'Chi' : 'Debit');
  };

  return (
    <section id="transparency" className="bg-background py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-3 text-3xl font-bold md:text-4xl">
            {transparency.heading}
          </h2>
          <p className="mx-auto max-w-3xl text-slate-600">
            {transparency.description}
          </p>
        </div>

        {/* Summary Cards */}
        <div className="mb-8 grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {language === 'vi' ? 'Số dư tài khoản' : 'Account Balance'}
              </CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {formatCurrency(calculatedBalance)}
              </div>
              {accountBalance === null && (
                <div className="text-xs text-muted-foreground mt-1">
                  {language === 'vi' ? '(Tính từ Thu - Chi)' : '(Calculated from Income - Expenses)'}
                </div>
              )}
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {language === 'vi' ? 'Tổng Thu' : 'Total Income'}
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">
                {formatCurrency(totalCredit)}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {language === 'vi' ? 'Tổng Chi' : 'Total Expenses'}
              </CardTitle>
              <TrendingDown className="h-4 w-4 text-red-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">
                {formatCurrency(totalDebit)}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {language === 'vi' ? 'Tài khoản' : 'Account'}
              </CardTitle>
              <ArrowUpDown className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {BANK_ACCOUNT_ID}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>
              {language === 'vi' ? 'Bộ lọc giao dịch' : 'Transaction Filters'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              {/* Date Range Picker */}
              <div className="flex items-center gap-2">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-[300px] justify-start text-left font-normal">
                      <Calendar className="mr-2 h-4 w-4" />
                      {dateRange.from ? (
                        dateRange.to ? (
                          <>
                            {format(dateRange.from, "dd/MM/yyyy", { locale: language === 'vi' ? vi : enUS })} -{" "}
                            {format(dateRange.to, "dd/MM/yyyy", { locale: language === 'vi' ? vi : enUS })}
                          </>
                        ) : (
                          format(dateRange.from, "dd/MM/yyyy", { locale: language === 'vi' ? vi : enUS })
                        )
                      ) : (
                        <span>{language === 'vi' ? 'Chọn khoảng ngày' : 'Pick a date range'}</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <CalendarComponent
                      initialFocus
                      mode="range"
                      defaultMonth={dateRange.from}
                      selected={dateRange}
                      onSelect={handleDateRangeChange}
                      numberOfMonths={2}
                      locale={language === 'vi' ? vi : enUS}
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Search Input */}
              <div className="flex items-center gap-2">
                <Input
                  placeholder={language === 'vi' ? 'Tìm kiếm mã giao dịch hoặc số tài khoản...' : 'Search transaction ID or account number...'}
                  value={searchKeyword}
                  onChange={(e) => setSearchKeyword(e.target.value)}
                  className="w-[300px]"
                />
                <Button onClick={handleSearch} disabled={loading}>
                  <Search className="h-4 w-4" />
                </Button>
              </div>

              {/* Page Size Selector */}
              <div className="flex items-center gap-2">
                <Select value={pageSize.toString()} onValueChange={(value) => handlePageSizeChange(Number(value))}>
                  <SelectTrigger className="w-[120px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5">5</SelectItem>
                    <SelectItem value="10">10</SelectItem>
                    <SelectItem value="20">20</SelectItem>
                    <SelectItem value="50">50</SelectItem>
                  </SelectContent>
                </Select>
                <span className="text-sm text-muted-foreground">
                  {language === 'vi' ? 'mục/trang' : 'items/page'}
                </span>
              </div>

              {/* Refresh Button */}
              <Button onClick={fetchTransactions} disabled={loading} variant="outline">
                <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Transactions Table */}
        <Card>
          <CardHeader>
            <CardTitle>
              {language === 'vi' ? 'Lịch sử giao dịch' : 'Transaction History'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="flex justify-center py-8">
                <RefreshCw className="h-8 w-8 animate-spin" />
              </div>
            ) : (
              <>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>{language === 'vi' ? 'Mã giao dịch' : 'Transaction ID'}</TableHead>
                      <TableHead>{language === 'vi' ? 'Thời gian' : 'Time'}</TableHead>
                      <TableHead>{language === 'vi' ? 'Loại' : 'Type'}</TableHead>
                      <TableHead>{language === 'vi' ? 'Người chuyển/Nhận' : 'Sender/Receiver'}</TableHead>
                      <TableHead>{language === 'vi' ? 'Số tiền' : 'Amount'}</TableHead>
                      <TableHead>{language === 'vi' ? 'Nội dung' : 'Description'}</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {transactions.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={6} className="text-center py-8">
                          {language === 'vi' ? 'Không có giao dịch nào' : 'No transactions found'}
                        </TableCell>
                      </TableRow>
                    ) : (
                      transactions.map((transaction) => (
                        <TableRow key={transaction.id}>
                          <TableCell className="font-mono text-sm">
                            {transaction.refId}
                          </TableCell>
                          <TableCell>
                            {formatDate(transaction.transactionTime)}
                          </TableCell>
                          <TableCell>
                            <Badge className={getTransactionTypeColor(transaction.type)}>
                              {getTransactionTypeText(transaction.type)}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            {transaction.otherAccountDisplayName}
                          </TableCell>
                          <TableCell className={transaction.type === 'CREDIT' ? 'text-green-600' : 'text-red-600'}>
                            {formatCurrency(transaction.transactionAmount)}
                          </TableCell>
                          <TableCell className="max-w-xs truncate">
                            {transaction.narrative}
                          </TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex items-center justify-between px-2 py-4">
                    <div className="text-sm text-muted-foreground">
                      {language === 'vi' 
                        ? `Trang ${currentPage} / ${totalPages}`
                        : `Page ${currentPage} / ${totalPages}`
                      }
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                      >
                        <ChevronLeft className="h-4 w-4" />
                        {language === 'vi' ? 'Trước' : 'Previous'}
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={!hasNextPage}
                      >
                        {language === 'vi' ? 'Tiếp' : 'Next'}
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                )}
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default TransparencySection;
