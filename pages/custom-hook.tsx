import React, { memo } from 'react'
import useCustomHookPage from "../components/custom-hook/useCustomHookPage";

const styleCustomHook: any = {
    wrapper: { width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 40 },
    wrapperTodo: { backgroundColor: 'gray', borderRadius: 5, padding: '5px 10px', marginBottom: 5 },
    textTodo: { lineHeight: 'normal', margin: 0, color: 'white' }
}

const CustomHookPage = () => {
    const { todos, addWithCallback } = useCustomHookPage();

    return (
        <div style={styleCustomHook.wrapper}>
            <h4>Demo Custom Hook</h4>
            <ChildComponent addCount={addWithCallback} />
            {todos.map((e, index) => (
                <div key={index} style={styleCustomHook.wrapperTodo}>
                    <p style={styleCustomHook.textTodo}>{e}</p>
                </div>
            ))}
        </div>
    );
}

const ChildComponent = memo((props: { addCount: (value: string) => void }) => {
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

export default CustomHookPage