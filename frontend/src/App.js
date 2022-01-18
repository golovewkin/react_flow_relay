import "./App.css";

// @flow
function foo(x: ?number): string {
  if (x) {
    return x;
  }
  return 222;
}

foo()

function App() {
  return (
    <div className="App">
      <header># To Do</header>
    </div>
  );
}

export default App;
