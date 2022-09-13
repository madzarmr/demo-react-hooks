import React, {memo, useCallback, useState} from 'react'
import commonStyle from '../styles/Common.module.css';

const styleUseCallBack: any = {
    wrapper: { width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 40 },
    wrapperTodo: { backgroundColor: 'gray', borderRadius: 5, padding: '5px 10px', marginBottom: 5 },
    textTodo: { lineHeight: 'normal', margin: 0, color: 'white' }
}

const UseCallBackPage = () => {
    const [todos, setTodos] = useState<string[]>([]);

    const addWithCallback = useCallback((value: string) => {
        setTodos((prev) => ([...prev, value]));
    }, []);

    return (
        <div style={styleUseCallBack.wrapper}>
            <h4>Demo UseCallback</h4>
            <ChildUseCallbackPage addCount={addWithCallback} />
            {todos.map((e, index) => (
                <div key={index} style={styleUseCallBack.wrapperTodo}>
                    <p style={styleUseCallBack.textTodo}>{e}</p>
                </div>
            ))}
        </div>
    );
}

const ChildUseCallbackPage = memo((props: { addCount: (value: string) => void }) => {
    console.log('rendering');

    return (
        <div style={{ marginBottom: 15 }}>
            <input style={{ marginTop: 10 }} onKeyUp={(e) => {
                if(e.key == 'Enter'){
                    props.addCount(e.currentTarget.value)
                    e.currentTarget.value = ''
                }
            }} />
        </div>
    )
})

export default UseCallBackPage
