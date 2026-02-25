import Contact from './assets/Contact';
import Counter from './assets/Counter';
import Hello from './assets/Hello';

function App() {
  const helloData = [
    { name: 'Kainapat', message: 'Hi there' },
    { name: 'Joji', message: 'Hello..' }
  ];

  return (
    <div className='App'>
      <Counter />
      {helloData.map((data, index) => (
        <Hello key={index} name={data.name} message={data.message} />
      ))}

      <Contact email="guy26466@gmail.com" phone="0944828221" />
    </div>
  );
}

export default App;
