import './App.css';
import Checkout from './components/Checkout';
import ProductProvider from './contexts/ProductProvider';
import CheckoutStepsProvider from './contexts/StepProvider';

function App() {
  return (
    <div className="App" data-testid="app-root">
      <ProductProvider>
        <CheckoutStepsProvider>
          <Checkout />
        </CheckoutStepsProvider>
      </ProductProvider>
    </div>
  );
}

export default App;
