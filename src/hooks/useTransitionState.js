import { useState, useEffect } from 'react';

const STATE = {
    ENTERING: 'entering',
    ENTERED: 'entered',
    EXITING: 'exiting',
    EXITED: 'exited',
}

function useTransitionState(duration = 1000) {
    const [state, setState] = useState();

    useEffect(() => {
        let timer;

        if (state === STATE.ENTERING) {
            timer = setTimeout(() => setState(STATE.ENTERED), duration);
        } else if (state === STATE.EXITING) {
            timer = setTimeout(() => setState(STATE.EXITING), duration);
        }

        return () => {
            timer && clearTimeout(timer);
        };
    });

    return [state, setState];
}

export default useTransitionState;