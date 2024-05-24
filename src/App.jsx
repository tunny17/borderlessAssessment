import Navigation from './components/Navigation';
import Body from './components/Body';
import History from './components/History';

const App = () => {
  return (
    <div className='flex flex-row sourceSansPro-regular'>
      <Navigation />
      <Body />
      <History />
    </div>
  );
};

export default App;
