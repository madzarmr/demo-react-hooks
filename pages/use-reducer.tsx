import React, { useReducer } from 'react'

const styleUseReducer: any = {
    wrapper: { width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 40 },
    wrapperTodo: { backgroundColor: 'gray', borderRadius: 5, padding: '5px 10px', marginBottom: 5, display: 'flex', alignItems: 'center' },
    textTodo: { lineHeight: 'normal', margin: 0, color: 'white' }
}

const reducer = (state: string[], action: { type: 'add' | 'remove'; value: any }) => {
    switch (action.type) {
        case 'add':
            return [...state, action.value]
        case 'remove':
            return state.filter((_, index) => index !== action.value);
        default:
            return []
    }
}

const useReducerPage = () => {
    const [todos, dispatch] = useReducer<any>(reducer, []);
    // @ts-ignore
    const addTodos = (value: string) => dispatch({ type: 'add', value });
    // @ts-ignore
    const removeTodo = (index: number) => dispatch({ type: 'remove', value: index })

    return (
        <div style={styleUseReducer.wrapper}>
            <h4>Demo UseReducer</h4>
            <div style={{ marginBottom: 15 }}>
                <input style={{ marginTop: 10 }} onKeyUp={(e) => {
                    if(e.key == 'Enter'){
                        addTodos(e.currentTarget.value)
                        e.currentTarget.value = ''
                    }
                }} />
            </div>
            {(todos as string[]).map((e, index) => (
                <div key={index} style={styleUseReducer.wrapperTodo} onClick={() => removeTodo(index)}>
                    <p style={styleUseReducer.textTodo}>{e}</p>
                    <div style={{ color: "white", cursor: "pointer", lineHeight: '11px', marginLeft: 15 }}>x</div>
                </div>
            ))}
        </div>
    );
}

export default useReducerPage
