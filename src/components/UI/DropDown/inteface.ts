export interface IDropDown {
  handleClick: () => void;
  open: boolean;
  setOpen: () => void;
  data: number[];
}
