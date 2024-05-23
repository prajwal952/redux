import { createStore } from "redux";
import {reducer} from '../product-reducer/Reducer'

export const Store= createStore(reducer,{});