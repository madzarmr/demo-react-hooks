import React, { createContext, useContext } from 'react'
import commonStyle from '../styles/Common.module.css';

const UseContextPageContext = createContext<{ count: number }>({ count: 0 });

const UseContextPage = () => {
    return (
        <UseContextPageContext.Provider value={{ count: 0 }}>
           <div className={commonStyle.wrapper}>
               <h4>Demo UseContext</h4>
               <ChildContextPage />
           </div>
        </UseContextPageContext.Provider>
    );
}

export default UseContextPage;

const ChildContextPage = () => {

    const { count } = useContext(UseContextPageContext);

    return (
        <div className={commonStyle.wrapperContextCount}>
            <div>{count}</div>
        </div>
    )
}