import Number, { props, events } from "./Number";
import { connect } from "react-redux";
import { addCount } from "./actions";

const mapStateToProps = (state): props => {
    return {displayNumber: state.displayNumber, buttonText: "increment"}
}
const mapDispatchToProps = (dispatch): events => {
    return {onButtonClick: () => {
        dispatch(addCount(1))
    }}
}

export default connect(mapStateToProps, mapDispatchToProps)(Number)