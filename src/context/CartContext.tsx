import { createContext } from "react"
import IActions from "./interfaces/IActions"
import ICourse from "./interfaces/ICourse"

interface ICartContext {
  date: Omit<ICourse, "image">[],
  dispatch: (action: IActions) => void 
}

const CartContext = createContext<ICartContext>({} as ICartContext);

export default CartContext;