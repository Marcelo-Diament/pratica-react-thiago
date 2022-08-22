import { MdSearch } from "react-icons/md";
import { HeaderTag, InputBlock } from "./styles";

const Header = () => {
  return (
    <HeaderTag>
      <h1>LOGO</h1>
      <div>
        <InputBlock>
          <MdSearch />
          <input type="text" />
        </InputBlock>
      </div>
      <button>Login</button>
    </HeaderTag>
  );
};

export default Header;
