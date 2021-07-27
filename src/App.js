import './App.css';
import HookUseState from './hooks/use_state'
import HookUseEffect from './hooks/use_effect'
import HookUseContext from './hooks/use_context'
import HookUseRef from './hooks/use_ref'
import HookUseReducer from './hooks/use_reducer'

function App() {
  return (
    <div className="App">
        <div>
            <h1>React Hooks</h1>
            <ol>
              <li>
                <h3>useState</h3>
                <p>Every time you update the state using the second button, The component will call the <strong><i>useState()</i></strong>, and update the <i>count</i> variable with the new value.</p>
                <HookUseState />
              </li>
              <li>
                <h3>useEffect</h3>
                <p>Every time you update the state using the second button, The component will call the <strong><i>useEffect()</i></strong>, and execute everything that's inside them.</p>
                <p>See the output in the Console.</p>
                <HookUseEffect/>
              </li>
              <li>
                <h3>useContext</h3>
                <p>When you click on any button to change the state of the <i>Parent Component</i>, 
                It will automatically update the value in the clild functions without actually passing the value in props, through <i>useContext() and createContext()</i>.</p>
                <HookUseContext/>
              </li>
              <li>
                <h3>useRef</h3>
                <p>It's a way to create a reference to a value in the component, and use it in the component's lifecycle.</p>
                <p>It is <i>Mutable</i>, but, it doesn't re-render UI. It is mainly used to grab</p>
                <p>More common usecase of <i>useRef</i> is to grab native HTML elements from JSX.</p>
                <HookUseRef />
              </li>
              <li>
                <h3>useReducer</h3>
                <p>Redux type of functionality, to <strong><i>useReducer</i></strong>  to update state in Functional Components in React.</p>
                <HookUseReducer />
              </li>
              <li>
                <h3>useLayoutEffect</h3>
              </li>
            </ol>
        </div>
    </div>
  );
}

export default App;
