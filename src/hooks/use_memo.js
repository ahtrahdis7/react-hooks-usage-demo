import { useMemo, useState } from 'react';
export default function FunUseMemo(){
    const [count, setCount] = useState(60);

    // useMemo is a higher-order component that takes a function as an argument
    // and returns a memoized version of that function.
    
    const expensiveCount = useMemo(() => {
        return count ** 2;
    }, [count]);

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>
            Count : {count}
            </button>
            <p>Expensive Count : {expensiveCount}</p>
        </div>
    );
}
