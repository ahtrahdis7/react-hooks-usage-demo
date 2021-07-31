import './App.css';
import HookUseState from './hooks/use_state'
import HookUseEffect from './hooks/use_effect'
import HookUseContext from './hooks/use_context'
import HookUseRef from './hooks/use_ref'
import HookUseReducer from './hooks/use_reducer'
import HookUseMemo from './hooks/use_memo'
import HookUseCallback from './hooks/use_callback'

function App() {
  return (
    <div className="App">
        <div>
            <h1>React Hooks <span style={{fontSize:50}}>|</span> <sub style={{fontSize:20}} >Written/Compiled by Sidhartha Mallick</sub></h1>
            <div>
              <div className="hook">
                <h3>useState</h3>
                <p>Every time you update the state using the second button, The component will call the <strong><i>useState()</i></strong>, and update the <i>count</i> variable with the new value.</p>
                <HookUseState />
              </div>
              <div className="hook">
                <h3>useEffect</h3>
                <p>Every time you update the state using the second button, The component will call the <strong><i>useEffect()</i></strong>, and execute everything that's inside them.</p>
                <p>See the output in the Console.</p>
                <HookUseEffect/>
              </div>
              <div className="hook">
                <h3>useContext</h3>
                <p>When you click on any button to change the state of the <i>Parent Component</i>, 
                It will automatically update the value in the clild functions without actually passing the value in props, through <i>useContext() and createContext()</i>.</p>
                <HookUseContext/>
              </div>
              <div className="hook">
                <h3>useRef</h3>
                <p>It's a way to create a reference to a value in the component, and use it in the component's lifecycle.</p>
                <p>It is <i>Mutable</i>, but, it doesn't re-render UI. It is mainly used to grab DOM Elements.</p>
                <p>More common usecase of <i>useRef</i> is to grab native HTML elements from JSX.</p>
                <HookUseRef />
              </div>
              <div className="hook">
                <h3>useReducer</h3>
                <p>Redux type of functionality, to <strong><i>useReducer</i></strong>  to update state in Functional Components in React.</p>
                <HookUseReducer />
              </div>
              <div className="hook">
                <h3>useMemo</h3>
                <p>useMemo is a higher-order component that takes a function as an argument and returns a memoized version of that function.</p>
                <HookUseMemo />
              </div>
              <div className="hook">
                <h3>useCallback</h3>
                <p>In order to <i>Memoize</i> a whole function, <i>useCallback</i> is used.</p>
                <p>
                  The <i>showCount</i> function is called from multiple childs in the same DOM Tree, they will help prevent <i>un-necessary</i> re-renders of the same object as they will
                  be using the same function object.
                </p>
                <HookUseCallback />
              </div>
              <div className="hook">
                <h3>useLayoutEffect</h3>
                <p>It is similar to <i>useEffect</i> with a small difference.  <br></br>
                It runs after <i>render</i> but before it it is visually updated. <br></br>
                It blocks visual updates until the Callback exection is finished.</p>
              </div>
            </div>
        </div>
    </div>
  );
}

export default App;
