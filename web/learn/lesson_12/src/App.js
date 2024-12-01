import './App.css';
import { useToggle } from './hooks/useToggle';
import { useGetCat } from './hooks/useGetCat';

function App() {
  const [isVisible, toggle] = useToggle();
  const [isVisible2, toggle2] = useToggle();
  const { data, refetchData, isCatLoading } = useGetCat();

  if (isCatLoading) {
    return <h1>Loading...</h1>
  }
  return (
    <div className="App">
      <button onClick={toggle}>{isVisible ? 'Hide' : 'Show'}</button>
      {isVisible && <h1>Hidden Text</h1>}
      <button onClick={toggle2}>{isVisible2 ? 'Hide' : 'Show'}</button>
      {isVisible2 && <h1>Hidden Text</h1>}
      <div>{data?.fact}</div>
      <button onClick={refetchData}>refetch</button>
    </div>
  );
}

export default App;
