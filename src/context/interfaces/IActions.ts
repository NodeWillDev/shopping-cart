import TypeActions from "../types/TypeActions";
import ICourse from "./ICourse";

export default interface IActions {
  type: TypeActions
  payload: Omit<ICourse, "image">
}