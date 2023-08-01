import { Switch } from "antd";

const DegreeSwitch = () => {
  return (
    <div className="switchWrapper">
      <div className="switch">
        <button>F°</button>
      </div>
      <div className="switch">
        <button>C°</button>
      </div>
    </div>
  );
};

export default DegreeSwitch;
