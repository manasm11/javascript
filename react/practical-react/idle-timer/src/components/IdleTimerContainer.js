import React from 'react'
import IdleTimer from 'react-idle-timer'

function IdleTimerContainer({children}) {
    const ref = React.useRef(null)
    return (
        <div>
            <IdleTimer ref={ref} timeout={5000} onIdle={handleIdle} >
                {children}
            </IdleTimer>
        </div>
    )

    function handleIdle(){
        console.log('TIMER GONE !!!')
    }
}

export default IdleTimerContainer
