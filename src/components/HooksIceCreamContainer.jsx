import { useSelector, useDispatch } from "react-redux";
import { buyIceCream } from "../redux";

const IceCreamContainer = () => {
  const count = useSelector((state) => state.iceCream.noOfIceCream);

  const dispatch = useDispatch();
  return (
    <div>
      <p>(ice cream using hooks )</p>
      <h2>Number of ice-cream : {count}</h2>
      <button onClick={() => dispatch(buyIceCream())}>Buy a ice-cream</button>
    </div>
  );
};

export default IceCreamContainer;
