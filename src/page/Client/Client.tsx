import Balance from "src/components/UI/Balance/Balance";
import { FC, useCallback, useEffect } from "react";
import Wrapper from "../../components/Wrapper/Wrapper";
import DatePicker from "src/components/UI/DatePicker/DatePicker";
import DropDown from "src/components/UI/DropDown/DropDown";
import "./style.scss";
import Table from "src/components/Table/Table";
import { useActions } from "src/hooks/useActions";
import { useTypeSelector } from "src/hooks/useTypeSelector";

const Client: FC = () => {
  const { getClients } = useActions();
  const { clients, isFething } = useTypeSelector((state) => state);

  const getClientFromDataBase = useCallback(() => {
    getClients();
  }, []);

  useEffect(() => {
    if (isFething) {
      return;
    }

    getClientFromDataBase();
  }, [getClientFromDataBase]);

  return (
    <Wrapper>
      <div className="client-status">
        <Balance cost={272} />

        <DatePicker text="3 дня" handleClick={() => null} />
      </div>

      <DropDown
        data={[1, 2]}
        handleClick={() => null}
        open={false}
        setOpen={() => null}
      />
      <div className="client_table">
        <Table data={clients} />
      </div>
    </Wrapper>
  );
};
export default Client;
