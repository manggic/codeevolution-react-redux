import { connect } from "react-redux";
import { buyCake, buyIceCream } from "../redux";

const ItemContainer = (props) => {
  const { item, cake, buyItem } = props;
  return (
    <>
      <div>
        <span>{cake ? "cake" : "ice-cream"} </span>count : {item}
      </div>
      <button onClick={() => buyItem()}>buy</button>
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  const prop = ownProps.cake
    ? state.cake.noOfCakes
    : state.iceCream.noOfIceCream;

  return {
    item: prop,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFun = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream());

  return {
    buyItem: dispatchFun,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
