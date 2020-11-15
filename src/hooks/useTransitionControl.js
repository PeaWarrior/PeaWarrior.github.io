import useTransitionState from './useTransitionState';

const STATE = {
    ENTERING: 'entering',
    ENTERED: 'entered',
    EXITING: 'exiting',
    EXITED: 'exited',
}

function useTransitionControl(duration) {
    const [state, setState] = useTransitionState(duration);

    const enter = () => {
        if (state !== STATE.EXITING) {
            setState(STATE.ENTERING);
        }
    };

    const exit = () => {
        if (state!== STATE.ENTERING) {
            setState(STATE.EXITING);
        }
    };

    return [state, enter, exit];
}

export default useTransitionControl;