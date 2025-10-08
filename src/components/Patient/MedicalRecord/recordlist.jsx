import React from 'react'
import Recordfilter from './recordfilter';
import Recordcasrd from './recordcasrd';
import { useState } from 'react';
const recordlist = ({records}) => {
  const [filter, setFilter] = useState("All");

  const filteredRecords =
    filter === "All" ? records : records.filter((r) => r.type === filter);

  return (
    <div className="mt-4">
      <Recordfilter filter={filter} setFilter={setFilter} />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {filteredRecords.map((record) => (
          <Recordcasrd key={record.id} record={record} />
        ))}
      </div>
    </div>
  );
}

export default recordlist
