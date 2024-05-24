const navs = [
  {
    name: 'Home',
    icon: '/navigation/home.svg',
    active: false,
  },
  {
    name: 'Activity',
    icon: '/navigation/bolt.svg',
    active: true,
  },
  {
    name: 'Discover',
    icon: '/navigation/discover.svg',
    active: false,
  },
  {
    name: 'Settings',
    icon: '/navigation/settings.svg',
    active: false,
  },
];

const Navigation = () => {
  return (
    <div className='w-[20%] p-5 border hidden md:block'>
      <div className='flex flex-row items-center justify-center gap-2 text-[#3579DC]'>
        <h1 className='text-6xl sourceSansPro-bold'>r</h1>
        <p className='text-lg font-normal mt-2 sourceSansPro-semibold'>state</p>
      </div>

      <ul className='w-[80%] mx-auto px-5 flex flex-col justify-center items-start gap-10 mt-10'>
        {navs.map((nav, i) => (
          <li key={i} className='flex gap-5 cursor-pointer'>
            <img src={nav.icon} alt='' className='' />
            <p
              className={`sourceSansPro-semibold text-sm  ${
                nav.active ? 'text-[#3579DC]' : 'text-[#8E97A4]'
              } hover:text-[#3579DC] transition-all duration-300`}>
              {nav.name}
            </p>
          </li>
        ))}
      </ul>
      {/* come back to the bg gradient */}
      <div className='rounded-md w-[90%] mx-auto px-5 pt-12 pb-4 border mt-10 text-white gradient'>
        <h1 className='sourceSansPro-semibold'>GET more with PRO</h1>
        <p className='sourceSansPro-light text-sm mt-1'>
          {' '}
          Upgrade to pro subscription for $9 / month
        </p>
      </div>
    </div>
  );
};

export default Navigation;
