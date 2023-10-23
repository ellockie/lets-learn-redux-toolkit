import React from 'react'
import './App.css'
import {useCount} from "./hooks/useCount";


function BC() {

    console.log('Rendering:  BC')

    const {count} = useCount();

    return (
        <div className="BC">
            <header className="Subcomponent-header">
                <p className="component-title">Component: BC (with custom "count" hook)</p>
                <div className="bouttons">
                    {count}
                </div>
            </header>
        </div>
    )
}

export {BC}
