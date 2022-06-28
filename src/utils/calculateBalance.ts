import { getDaysBetween } from "./getDaysBetween";

interface Invoice {
  amount: number;
  invoiceId: number;
  issueDate: string;
  issuerId: number;
  paymentDate: string;
  receiverId: number;
}

export const calculateBalance = (invoices: Array<Invoice>, companyId: null | number, initialDate: string, days: number) => {
  let entries = 0;
  let expenses = 0;
  invoices.filter((invoice: Invoice) => {
    if (
      invoice.issuerId === companyId &&
      getDaysBetween(initialDate, invoice.paymentDate, days)
    ) {
      entries += invoice.amount;
    }
    if (
      invoice.receiverId === companyId &&
      getDaysBetween(initialDate, invoice.paymentDate, days)
    ) {
      expenses += invoice.amount;
    }
  });
  return {
    entries,
    expenses,
  };
};
