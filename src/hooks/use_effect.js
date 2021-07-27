import { useState, useEffect } from 'react';
export default function FunctionUsingUseStateUseEffect(){
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log('Use Effect is called');
    }, [count]);
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>
                Count : {count}
            </button>
        </div>
    );
}
