import { useEffect, useState } from 'react';
// import { apiData } from '../data';

const Body = () => {
  const [transactionData, setTransactionData] = useState(null);

  useEffect(() => {
    const fetchTransactionData = async () => {
      try {
        const response = await fetch(
          'https://v2.base-borderless.com/api/transactions'
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setTransactionData(data);
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    };

    fetchTransactionData();
  }, []);

  console.log('transactionData', transactionData);

  return (
    <div className='w-full md:w-[60%] p-10'>
      <h1 className='font-bold sourceSansPro-semibold text-[#404650]'>
        Trending Topics
      </h1>

      {/*  */}
      <div className='flex md:flex-row gap-y-5 flex-col justify-between mt-10'>
        <figure className='w-full md:w-[47%] flex items-center gap-5 shadow-md rounded-md px-3 py-6'>
          <div className='bg-[#E9EBEC] px-3 py-3.5 rounded-md'>
            <img src='/navigation/body-home-icon.svg' alt='' />
          </div>

          {/*  */}
          <figcaption className='text-sm'>
            <h1 className='font-semibold'>Hashtag Research</h1>
            <p className='mt-1'>Upgrade to pro subscription for $9 / month</p>
          </figcaption>
        </figure>

        <figure className='w-full md:w-[47%] flex items-center gap-5 shadow-md rounded-md px-3 py-6'>
          <div className='bg-[#E9EBEC] px-3 py-3.5 rounded-md'>
            <img src='/navigation/body-home-icon.svg' alt='' />
          </div>

          {/*  */}
          <figcaption className='text-sm'>
            <h1 className='font-semibold'>Hashtag Research</h1>
            <p className='mt-1'>Upgrade to pro subscription for $9 / month</p>
          </figcaption>
        </figure>
      </div>

      <div className='flex md:flex-row gap-y-5 flex-col-reverse justify-between items-center'>
        <img src='/scratching-head.svg' alt='' className='w-[40%]' />

        <div className='mt-10 shadow-md p-7 w-full'>
          <h3 className='text-sm sourceSansPro-semibold'>Balance</h3>
          <h1 className='text-4xl sourceSansPro-semibold'>
            {' '}
            {transactionData?.data.balance && transactionData.data.balance}
          </h1>

          <div>
            {/*  */}
            {transactionData?.data.transactions && (
              <div>
                {transactionData?.data.transactions.map((transactions, i) => (
                  <div
                    key={i}
                    className='flex justify-between items-center border-b py-5'>
                    <p className='sourceSansPro-regular text-sm'>
                      {transactions.title}
                    </p>

                    <div className='flex gap-5 items-center'>
                      <div className='px-2.5 rounded-full border flex justify-center items-center'>
                        <button
                          type='button'
                          className='text-lg font-bold text-[#404650] '>
                          +
                        </button>
                      </div>
                      <p
                        className={`${
                          transactions.type === 'debit'
                            ? 'text-red-600'
                            : 'text-green-600'
                        }`}>
                        {transactions.amount}
                      </p>
                      <div className='px-2.5 rounded-full border flex justify-center items-center'>
                        <button
                          type='button'
                          className='text-lg font-bold text-[#404650] '>
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
