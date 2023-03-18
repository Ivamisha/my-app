import Balance from "src/components/UI/Balance/Balance";
import { FC } from "react";
import Wrapper from "../components/Wrapper/Wrapper";
import DatePicker from "src/components/UI/DatePicker/DatePicker";
import DropDown from "src/components/UI/DropDown/DropDown";

const Client: FC = () => {
  return (
    <Wrapper>
      {/* <Balance cost={272} />
      <DatePicker text="3 дня" handleClick={() => null} /> */}
      <DropDown
        data={[1, 2]}
        handleClick={() => null}
        open={false}
        setOpen={() => null}
      />
    </Wrapper>
  );
};
export default Client;
