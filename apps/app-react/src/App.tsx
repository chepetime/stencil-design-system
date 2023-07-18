import "./App.css";
import { MyButton, defineCustomElements } from "@chepe/stencil-react";

void defineCustomElements();

function App() {
  return (
    <>
      <main>
        <section>
          <h1>App React</h1>
        </section>

        <section>
          <h2>Stencil Components</h2>
          <div className="component-row">
            <MyButton></MyButton>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
