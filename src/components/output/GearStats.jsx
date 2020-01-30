import React, { useContext, useEffect } from "react";
import GearContext from "../../context/gearContext";

export default props => {
  const gearContext = useContext(GearContext);
  useEffect(() => {
    console.log(gearContext);
    console.log(props);
  }, [gearContext]);
  return (
    <div>
      <p>GearStats</p>
      <p>{gearContext.weapon || "Nothing"}</p>
    </div>
  );
};
