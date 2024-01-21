import { useState } from "react";
import { buyCake } from "../redux";

import { connect } from "react-redux";

const CakeContainer = ({ noOfCakes, buyCake }) => {
  const [number, setNumber] = useState(1);
  return (
    <div>
      <h2>Number of cakes - {noOfCakes}</h2>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => buyCake(number)}>Buy {number} cake</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    noOfCakes: state.cake.noOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: (number) => dispatch(buyCake(number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
