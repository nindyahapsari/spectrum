export interface UserBillInfo {
  firstName: string;
  lastName: string;
  email?: string;
  userName?: string;
}

export interface CardPaymentInfo {
  fullName: string;
  cardNumber: string;
  expiryDate?: string;
  cvv?: string;
}
