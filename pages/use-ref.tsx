import React, { useRef } from 'react'
import commonStyle from "../styles/Common.module.css";

const UseRefPageProps = () => {

    const refInputHtml = useRef<HTMLInputElement>(null);

    return (
        <div className={commonStyle.wrapper}>
            <input type="text" ref={refInputHtml} />
            <div className={commonStyle.flex}>

                <button style={{ marginTop: 25, marginLeft: 5 }} onClick={() => {
                    refInputHtml.current?.focus();
                }}>
                    Focus
                </button>
            </div>
        </div>
    );
}

export default UseRefPageProps