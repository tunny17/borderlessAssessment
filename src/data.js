export const apiData = {
  status: 'success',
  data: {
    balance: 24000,
    transactions: [
      {
        title: 'mac book',
        type: 'debit',
        amount: 500000,
      },
      {
        title: 'Starlink',
        type: 'debit',
        amount: 445000,
      },
      {
        title: 'Salary',
        type: 'credit',
        amount: 100000,
      },
      {
        title: 'Shopping',
        type: 'debit',
        amount: 23000,
      },
    ],
  },
};

// the api isn't working, there's a security blocking my requests so i copied the response i got from my thunder client extensions and worked with that instead CORS i think
