import { useReducer } from "react"
import IActions from "./interfaces/IActions"
import ICourse from "./interfaces/ICourses"

const CartReducer = () => useReducer((course: ICourse[], action: IActions) => {

  if (action.type == 'addItemCart')
    course.push(action.payload);

  if (action.type == 'removeItemCart')
    course.filter(date => date.id == action.payload.id);

  return course;
}, {} as ICourse[]);

export default CartReducer;