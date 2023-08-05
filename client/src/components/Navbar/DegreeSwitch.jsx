import { Switch } from "antd";
import "./DegreeSwitch.css";

const DegreeSwitch = ({ setUnit }) => {
  const handleSwitch = (e) => {
    if (e) return setUnit("imperial");
    if (!e) return setUnit("metric");
  };

  return (
    <Switch
      checkedChildren="Farenheit"
      className="w-[100px]"
      unCheckedChildren="Celsius"
      defaultChecked
      onChange={handleSwitch}
    />
  );
};

export default DegreeSwitch;
