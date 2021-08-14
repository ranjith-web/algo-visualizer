import { useEffect, useState } from "react";

let clearTime;
const Timer = ({start, stop}) => {
    const [text, setText] = useState('00:00:00');
    var hr = 0;
    var min = 0;
    var sec = 0;
    var stoptime = true;

    useEffect(() => {
        if( start ){
            resetTimer();
            startTimer();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [start])
    useEffect(() => {
        if( stop ){
            stopTimer();
            if( clearTime ) {
                clearTimeout(clearTime);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [stop])

    const timerCycle = () => {
        if (stoptime === false) {
            sec = parseInt(sec);
            min = parseInt(min);
            hr = parseInt(hr);

            sec = sec + 1;

            if (sec === 60) {
                min = min + 1;
                sec = 0;
            }
            if (min === 60) {
                hr = hr + 1;
                min = 0;
                sec = 0;
            }

            if (sec < 10 || sec === 0) {
                sec = '0' + sec;
            }
            if (min < 10 || min === 0) {
                min = '0' + min;
            }
            if (hr < 10 || hr === 0) {
                hr = '0' + hr;
            }

            setText(hr + ':' + min + ':' + sec);
            clearTime = setTimeout(timerCycle, 1000);
        }
    }
    
    const startTimer = () => {
        if (stoptime === true) {
            stoptime = false;
            console.log("startTimer===")
            timerCycle();
        }
    }  
    
    const stopTimer = () => {
        if (stoptime === false) {
            stoptime = true;
        }
    }

    const resetTimer = () => {
        setText('00:00:00');
    }

    return (
        <div className="badge-container">
            <span className="badge badge-bg">Start Timer: {text}</span>
        </div>
    )
}

export default Timer;