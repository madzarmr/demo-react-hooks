import React from "react";

const styleClassComponent: any = {
    wrapper: { width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 40 },
    wrapperTodo: { backgroundColor: 'gray', borderRadius: 5, padding: '5px 10px', marginBottom: 5 },
    textTodo: { lineHeight: 'normal', margin: 0, color: 'white' }
}

type ClassComponentState  = {
    todos: string[];
}

export default class ClassComponent extends React.Component<any, ClassComponentState> {
    state: ClassComponentState = {
        todos: []
    };

    addTodo (value: string){
        this.setState({
            todos: this.state.todos.concat(value),
        });
    }

    componentDidMount() {
        document.title = `${this.state.todos.length} todo has been added`;
    }

    componentDidUpdate() {
       document.title = `${this.state.todos.length} todo has been added`;
    }

    render() {
        const { todos } = this.state;

        return (
            <div style={styleClassComponent.wrapper}>
                <h4>Demo Class Component</h4>
                <div style={{ marginBottom: 15 }}>
                    <input style={{ marginTop: 10 }} onKeyUp={(e) => {
                        if(e.key == 'Enter'){
                            this.addTodo(e.currentTarget.value)
                            e.currentTarget.value = ''
                        }
                    }} />
                </div>
                {todos.map((e, index) => (
                    <div key={index} style={styleClassComponent.wrapperTodo}>
                        <p style={styleClassComponent.textTodo}>{e}</p>
                    </div>
                ))}
            </div>
        )
    }
}