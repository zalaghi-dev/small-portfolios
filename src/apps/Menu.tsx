import AppButtons from "../components/common/AppButtons";
import { tabsConfig } from "../config/tabsConfig";

const Menu = () => {
  return (
    <div className="flex flex-wrap gap-6 place-content-center max-w-6xl m-auto">
      {tabsConfig
        .filter((x) => x.to !== "/")
        .map((props) => (
          <AppButtons {...props} />
        ))}
    </div>
  );
};

export default Menu;
