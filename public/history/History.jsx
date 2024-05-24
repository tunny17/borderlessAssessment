const history = [
  {
    action: 'Email opened',
    date: 'July 2, 2021 8am',
    icon: 'opened-email-icon',
    active: true,
  },
  {
    action: 'Email sent',
    date: 'July 2, 2021 8am',
    icon: 'closed-email-icon',
    active: false,
  },
  {
    action: 'Visited Website',
    date: 'July 2, 2021 8am',
    icon: 'visited-website-icon',
    active: false,
  },
  {
    action: 'Email sent',
    date: 'July 2, 2021 8am',
    icon: 'closed-email-icon',
    active: false,
  },
  {
    action: 'Email sent',
    date: 'July 2, 2021 8am',
    icon: 'closed-email-icon',
    active: false,
  },
];

const History = () => {
  return (
    <div className='w-[20%] shadow-md border p-5'>
      <h1 className='mt-5 font-bold sourceSansPro-semibold text-[#404650]'>
        History
      </h1>

      <div className='flex flex-col'>
        {history.map((data, i) => (
          <figure key={i} className='flex items-start gap-5'>
            <div className='flex flex-col justify-center items-center'>
              <div
                className={`${
                  data.active ? 'bg-[#3579DC]' : ''
                } p-2  rounded-full border`}>
                <img src={`/history/${data.icon}.svg`} alt='' className='w-3' />
              </div>
              <img src='/history/history-line.svg' alt='' />
            </div>
            <figcaption>
              <h1 className='text-[#3579DC] sourceSansPro-semibold'>
                {data.action}
              </h1>
              <p className='text-xs text-[#8E97A4]'>{data.date}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
};

export default History;
