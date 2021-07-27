import { useRef } from 'react';
export default function FunctionUsingUseRef(){
    const myBtn = useRef(null);

    const clickIt = () => myBtn.current.click();
    const helloButtonClicked = () => console.log('hello button clicked');

    return (
        <div>
            <p>Check the console.</p>
            <button ref={myBtn} onClick={helloButtonClicked}>Hello Button</button>
            <button onClick={clickIt}>Click Me! When You Click Me, You Indirectly Click 'Hello Button', Isn't that interesting.</button>
        </div> 
    );
}
