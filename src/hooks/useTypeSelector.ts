import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import type { RootState } from "../store/index";

export const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector;
