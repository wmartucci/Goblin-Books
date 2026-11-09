import {createContext} from "react";
import type {CategoryItem} from "../types";

export const CategoryContext = createContext([] as CategoryItem[]);
CategoryContext.displayName = 'CategoryContext';
