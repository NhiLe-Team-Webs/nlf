export interface Transaction {
  id: string;
  bankAccountId: string | null;
  refId: string;
  transactionTime: string;
  type: "CREDIT" | "DEBIT";
  method: string | null;
  transactionAmount: number;
  feeAmount: number | null;
  otherBankCode: string | null;
  otherBankName: string | null;
  otherBankPhoto: string | null;
  otherAccountDisplayName: string;
  otherAccountNo: string | null;
  otherAccountName: string;
  narrative: string;
  narrativeHiddenConfig: string | null;
  hiddenNarrative: boolean;
  showDonateMessage: boolean;
  note: string | null;
  hiddenNote: boolean;
  userName: string | null;
  bankAccountNo: string | null;
  donateTargetName: string | null;
  incognito: boolean;
}

export interface TransactionResponse {
  status: number;
  code: string;
  error: string;
  codes: string | null;
  data: {
    transactions: Transaction[];
    count: number;
    pageNumber: number;
    accountBalance: number | null;
    totalDebit: number;
    totalCredit: number;
    creditAmountInTime: number;
    debitAmountInTime: number;
    accountNumber: string;
    accountName: string;
    fullName: string;
    userId: string;
    username: string;
    countDebit: number;
    totalCountCredit: number;
    hasNextPage: boolean;
  };
}

export interface TransactionFilters {
  fromDate: string;
  toDate: string;
  keyword?: string;
  pageNumber: number;
  pageSize: number;
}