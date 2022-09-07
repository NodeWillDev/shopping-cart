import { createContext } from "react"
import IActions from "./interfaces/IActions"
import ICourse from "./interfaces/ICourses"

interface ICartContext {
  date: ICourse[],
  dispatch: (action: IActions) => void 
}

const CartContext = createContext<ICartContext>({} as ICartContext);

export default CartContext;