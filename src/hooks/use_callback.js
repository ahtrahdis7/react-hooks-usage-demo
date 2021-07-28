import { useMemo, useState, useCallback } from 'react';

export default function FunUseCallback(){
    const [count, setCount] = useState(60);

    // useMemo is a higher-order component that takes a function as an argument
    // and returns a memoized version of that function.
    
    const expensiveCount = useMemo(() => {
        return count ** 2;
    }, [count]);

    const showCount = useCallback(() => {
        console.log(`Show Count is Clicked: ${count}`);
    }, [count]);

    // const showCount = () => {
    //     alert(`Show Count is Clicked: ${count}`);
    // }

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>
            Count : {count}
            </button>
            <p>Expensive Count : {expensiveCount}</p>
            <ChildOne handler={showCount} />
        </div>
    );
}


function ChildOne(props){
    return(
        <div>
            <button onClick={props.handler}>I am inside Child One</button>
            <ChildTwo handler={props.handler} />
        </div>
    )
}  
function ChildTwo(props){
    return(
        <div>
            <button onClick={props.handler}>I am inside Child Three</button>
            <ChildThree handler={props.handler}/>
        </div>
    )
}

function ChildThree(props){
    return(
        <div>
            <button onClick={props.handler}>I am inside Child Two</button>
        </div>
    )
}  