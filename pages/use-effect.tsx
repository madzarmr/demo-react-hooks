import React, {useEffect, useState} from 'react'
import commonStyle from "../styles/Common.module.css";

interface UseEffectPageProps {

}

const UseEffectPage: React.FC<UseEffectPageProps> = ({}) => {
    const [count, setCount] = useState(0);
    const [countOther, setOtherCount] = useState(0);

    useEffect(() => {
        document.title = `Has been click ${count.toString()}`;
    }, [count]);

    return (
        <div className={commonStyle.wrapper}>
            <h4>Demo UseEffect</h4>
            <div className={commonStyle.flex}>
               <div className={commonStyle.wrapperCount}>
                   <p>{count}</p>
                   <button className={commonStyle.buttonCount} onClick={() => setCount((prev) => ++prev)}>
                       Change Count
                   </button>
               </div>
                <div className={commonStyle.wrapperCount}>
                    <p>{countOther}</p>
                    <button className={commonStyle.buttonCount} onClick={() => setOtherCount((prev) => ++prev)}>
                        Change Other Count
                    </button>
                </div>
            </div>
        </div>
    );
}

export default UseEffectPage