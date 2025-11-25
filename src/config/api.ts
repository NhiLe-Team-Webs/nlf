const API_BASE_URL = import.meta.env.DEV ? '' : (import.meta.env.VITE_API_BASE_URL);

export const API_ENDPOINTS = {
  BANK_TRANSACTIONS: (bankAccountId: string, params: {
    fromDate: string;
    toDate: string;
    keyword?: string;
    pageNumber: number;
    pageSize: number;
  }) => {
    const searchParams = new URLSearchParams({
      fromDate: params.fromDate,
      toDate: params.toDate,
      keyword: params.keyword || '',
      pageNumber: params.pageNumber.toString(),
      pageSize: params.pageSize.toString(),
    });
    
    const baseUrl = import.meta.env.DEV
      ? `/api/v2/bank-account-transaction/${bankAccountId}/transactionsV2`
      : `${API_BASE_URL}/api/v2/bank-account-transaction/${bankAccountId}/transactionsV2`;
    
    return `${baseUrl}?${searchParams.toString()}`;
  }
};

export const BANK_ACCOUNT_ID = '8711';