import React from "react";

interface Props {
  stages: string[];
}

const AssemblyLine: React.FC<Props> = ({ stages }) => {
  return (
    <div>
      <div>
        <h2>add an item</h2>
      </div>
    </div>
  );
};

export default AssemblyLine;
