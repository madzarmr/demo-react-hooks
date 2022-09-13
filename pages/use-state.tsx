import React, { useState } from 'react';
import commonStyle from '../styles/Common.module.css';

interface UseStatePageProps {

}

const UseStatePage: React.FC<UseStatePageProps> = () => {

    const [isActive, setIsActive] = useState(false);

    return (
        <div className={commonStyle.wrapper}>
            <h4>Demo UseState</h4>
            {isActive ? (
                <div>Active</div>
            ) : (
                <div>Not Active</div>
            )}
            <button className={commonStyle.button} onClick={() => setIsActive((prev) => !prev)}>
                Change
            </button>
        </div>
    );
}

export default UseStatePage