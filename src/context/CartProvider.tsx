import { ReactNode } from "react";
import CartContext from "./CartContext";
import CartReducer from "./CartReducer";

interface ICartProvider {
  children: ReactNode
}

const CartProvider = ({ children }: ICartProvider) => {

  const [date, dispatch] = CartReducer();

  return (
    <CartContext.Provider value={{ date, dispatch }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider;