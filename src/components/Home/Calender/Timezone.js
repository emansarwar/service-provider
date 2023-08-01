import React, { useState } from "react";

import TimezoneSelect from "react-timezone-select";

const Timezone = () => {
  const [selectedTimezone, setSelectedTimezone] = useState(Intl.DateTimeFormat().resolvedOptions().timeZone);
  const date = new Date();
  const showTime = date.getHours() + ":" + date.getMinutes();

  return (
    <div style={{ marginTop: 0 }}>
      <div style={{ display: "flex", marginTop: 0 }}>
        <h4> {showTime} -</h4>

        <h4>({JSON.stringify(selectedTimezone, null, 2)})</h4>
      </div>
      <div style={{ display: "none" }}>
        <TimezoneSelect value={selectedTimezone} onChange={setSelectedTimezone} />
      </div>
    </div>
  );
};
export default Timezone;
