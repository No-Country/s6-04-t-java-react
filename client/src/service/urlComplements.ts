export interface UrlComplement {
  register: () => string;
  login: () => string;
  billPayment: () => string;
  sendPayment: () => string;
  balance: () => string;
  messagesAuth: () => string;
  messagesByUserId: (userId: string) => string;
  messagesByMessageId: (messageId: string) => string;
  messagesSend: () => string;
  accountById: (accountId: string) => string;
  reservationsAmenities: () => string;
  reservationsList: () => string;
  reservationsById: (reservationId: string) => string;
  reportCreate: () => string;
  reportList: () => string;
  transactions: () => string;
  transactionsById: (transactionId: string) => string;
}

const getURLComplement = () =>
  <UrlComplement>{
    register: () => `/auth/register`,
    login: () => `/auth/login`,
    billPayment: () => `/transactions/billPayment`,
    sendPayment: () => `/transactions/sendPayment`,
    balance: () => `/accounts/balance`,
    messagesAuth: () => `/messages`,
    messagesByUserId: (userId: string) => `/messages/${userId}`,
    messagesByMessageId: (messageId: string) => `/messages/${messageId}`,
    messagesSend: () => `/messages/send`,
    accountById: (accountId: string) => `/accounts/${accountId}`,
    reservationsAmenities: () => `/reservations/amenities`,
    reservationsList: () => `/reservations/list`,
    reservationsById: (reservationId: string) => `/reservations/${reservationId}`,
    reportCreate: () => `/reports/create`,
    reportList: () => `/reports/list`,
    transactions: () => `/transactions`,
    transactionsById: (transactionId: string) => `/transactions/${transactionId}`,
  };

export { getURLComplement };