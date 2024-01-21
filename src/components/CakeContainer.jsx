import { buyCake } from "../redux";

import { connect } from "react-redux";

const CakeContainer = ({ noOfCakes, buyCake }) => {
  return (
    <div>
      <h2>Number of cakes - {noOfCakes}</h2>
      <button onClick={() => buyCake()} >Buy</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    noOfCakes: state.noOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
