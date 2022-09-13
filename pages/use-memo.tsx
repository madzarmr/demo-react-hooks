import React, { useState, useMemo } from 'react'

const styleUseMemoPage: any = {
    wrapper: { width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 40 },
    input: { marginTop: 10, marginBottom: 15 },
    wrapperTodo: { backgroundColor: 'gray', borderRadius: 5, padding: '5px 10px', marginBottom: 5 },
    textTodo: { lineHeight: 'normal', margin: 0, color: 'white' },
    divider: { width: '100%', height: 2, backgroundColor: 'black', marginTop: 10, marginBottom: 10 },
    wrapperCount: { display: 'flex', alignItems: 'center' },
    buttonAdd: { height: 25, marginLeft: 10 }
}

const UseMemo = () => {

    const [todos, setTodos] = useState<string[]>([]);
    const [count, setCount] = useState(0);

    const expensiveCalculation = (num: number) => {
        console.log("Calculating...");
        for (let i = 0; i < 1000000000; i++) {
            num += 1;
        }
        return num;
    };

    const expensiveCount = useMemo(() => {
        return expensiveCalculation(count);
    }, [count]);

    const addTodos = (value: string) => {
        setTodos((prev) => ([...prev, value]));
    }

    // const expensiveCount = expensiveCalculation(count);

    return (
        <div style={styleUseMemoPage.wrapper}>
            <h4>Demo UseMemo</h4>
            <input style={styleUseMemoPage.input} onKeyUp={(e) => {
                if(e.key == 'Enter'){
                    addTodos(e.currentTarget.value);
                    e.currentTarget.value = '';
                }
            }} />
            {todos.map((e, index) => (
                <div key={index} style={styleUseMemoPage.wrapperTodo}>
                    <p style={styleUseMemoPage.textTodo}>{e}</p>
                </div>
            ))}
            <div style={styleUseMemoPage.divider} />
            <div style={styleUseMemoPage.wrapperCount}>
                <p>Count {count}</p>
                <button style={styleUseMemoPage.buttonAdd} onClick={() => setCount((prev) => ++prev)}>Add</button>
            </div>
            <p>Calculation {expensiveCount}</p>
        </div>
    );
}

export default UseMemo