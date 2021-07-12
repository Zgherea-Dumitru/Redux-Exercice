import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
    counter: state
});
const LightComponent = ({ counter, dispatch }) => (
    <div>
        <h2>Counter</h2>
        <p >{counter}</p>
        <button onClick={() => dispatch({ type: "ADDONE" })}>+1</button>
        <button onClick={() => dispatch({ type: "REMOVEONE" })}>-1</button>
        <button onClick={() => dispatch({ type: "ADDTEN" })}>+10</button>
        <button onClick={() => dispatch({ type: "REMOVETEN" })}>-10</button>
        <button onClick={() => dispatch({ type: "RESET" })}>reset</button>
    </div>
);
export default connect(mapStateToProps)(LightComponent);