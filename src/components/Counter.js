import { Button } from "antd";
import { useContext } from "react";
// import { CounterContext } from "../contexts/counter.context";
import { decrement, increment, reset } from "../store/reducers/counter.reducer";
import { useDispatch } from "react-redux";

export function Counter() {

    // const { increment, decrement, reset } = useContext(CounterContext);
    const dispatch = useDispatch();

    const plus = () => dispatch(increment());
    const minus = () => dispatch(decrement());
    const clear = () => dispatch(reset());

    return (
        <>
            <h2>Counter manager</h2>

            <Button onClick={plus}>Increment</Button>
            <Button onClick={minus}>Decrement</Button>
            <Button onClick={clear}>Reset</Button>
        </>
    );
}