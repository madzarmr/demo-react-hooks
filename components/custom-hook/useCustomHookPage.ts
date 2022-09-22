import {useCallback, useEffect, useState} from "react";


const useCustomHookPage = () => {
    const [todos, setTodos] = useState<string[]>([]);

    const addWithCallback = useCallback((value: string) => {
        setTodos((prev) => ([...prev, value]));
    }, []);

    useEffect(() => {
        document.title = `${todos.length} todo has been added`;
    }, [todos])

    return {
        todos,
        addWithCallback,
    }
}

export default useCustomHookPage;