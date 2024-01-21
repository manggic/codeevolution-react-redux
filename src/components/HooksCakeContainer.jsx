
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../redux'

const HooksCakeContainer = () => {

  const noOfCakes = useSelector(state => state.cake.noOfCakes)


  const dispatch = useDispatch() 

  return (
    <div>
      <p>(cake using hooks )</p>
        <h2> Number of cakes - {noOfCakes}</h2>
        <button onClick={() => dispatch(buyCake())}>Buy a cake</button>
    </div>
  )
}

export default HooksCakeContainer