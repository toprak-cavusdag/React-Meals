import Header from './components/Layout/Header';
import Meal from './components/Meals/Meal';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <>
      <Cart />
      <Header />
      <main>
        <Meal />
      </main>
    </>
  );
}

export default App;
