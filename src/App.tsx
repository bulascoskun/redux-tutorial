import Counter from './components/Counter';

// Store
interface CounterState {
  value: number;
}
interface UserState {
  isSignedIn: boolean;
}

// Actions
const incrementByAmount = { type: 'INCREMENT', payload: 10 };
const decrement = { type: 'DECREMENT' };

// Reducers

const App = () => {
  return (
    <div className="center">
      <h2>Redux Tutorial</h2>
      <Counter />
    </div>
  );
};
export default App;
