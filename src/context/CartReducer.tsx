import { useReducer } from "react"
import IActions from "./interfaces/IActions"
import ICourse from "./interfaces/ICourse"

const CartReducer = () => useReducer((course: Omit<ICourse, "image">[], action: IActions) => {

  switch (action.type) {

    case 'addItemCart':
      return [...course, ...[action.payload]];

    case 'removeItemCart':
      return [...course.filter((item => item.id !== action.payload.id))];

    default:
      return course;
  }
}, []);

export default CartReducer;