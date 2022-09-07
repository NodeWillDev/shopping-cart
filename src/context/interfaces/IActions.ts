import TypeActions from "../types/TypeActions";
import ICourse from "./ICourses";

export default interface IActions {
  type: TypeActions
  payload: ICourse
}