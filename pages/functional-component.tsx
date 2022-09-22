import React, { useEffect, useState } from 'react'

const styleFunctionComponent: any = {
    wrapper: { width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 40 },
    wrapperTodo: { backgroundColor: 'gray', borderRadius: 5, padding: '5px 10px', marginBottom: 5 },
    textTodo: { lineHeight: 'normal', margin: 0, color: 'white' }
}

const FunctionalComponent = () => {
    const [todos, setTodos] = useState<string[]>([]);

    const addTodos = (value: string) => {
        setTodos((prev) => ([...prev, value]));
    };

    useEffect(() => {
        document.title = `${todos.length} todo has been added`;
    }, [todos]);

    return (
        <div style={styleFunctionComponent.wrapper}>
            <h4>Demo Functional Component</h4>
            <div style={{ marginBottom: 15 }}>
                <input style={{ marginTop: 10 }} onKeyUp={(e) => {
                    if(e.key == 'Enter'){
                        addTodos(e.currentTarget.value)
                        e.currentTarget.value = ''
                    }
                }} />
            </div>
            {todos.map((e, index) => (
                <div key={index} style={styleFunctionComponent.wrapperTodo}>
                    <p style={styleFunctionComponent.textTodo}>{e}</p>
                </div>
            ))}
        </div>
    )
}

export default FunctionalComponent