import React, { useEffect, useState, KeyboardEvent } from "react";

interface Props {
  stages: string[];
}

const AssemblyLine: React.FC<Props> = ({ stages }) => {
  const [itemInput, setItemInput] = useState<string>("");
  const [stageItems, setStageItems] = useState<string[][]>([]);

  useEffect(() => {
    if (stages?.length > 0) {
      const tempStages = [];
      for (let i = 0; i < stages.length; i++) {
        tempStages.push([]);
      }
      setStageItems(tempStages);
    }
  }, [stages]);

  useEffect(() => {
    console.log(stageItems);
  }, [stageItems]);

  const handleAddItem = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter") {
      const tempStageItems = stageItems;
      tempStageItems[0].unshift(itemInput);
      setStageItems(tempStageItems);
      setItemInput("");
    }
  };

  return (
    <div className="min-h-screen">
      <div className="flex flex-col divide-y space-y-4 p-10">
        <div className="flex items-center">
          <label htmlFor="">Add an item:</label>
          <input
            type="text"
            className="outline-none ml-4 p-1 border border-white"
            value={itemInput}
            onChange={(e) => setItemInput(e.target.value)}
            onKeyPress={handleAddItem}
          />
        </div>
        <div className="pt-2 flex">
          {stages?.map((stage, i) => (
            <div
              key={stage}
              className="px-4 flex flex-col border border-red-300"
            >
              <h3 className="text-lg">{stage}</h3>
              {stageItems[i]?.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AssemblyLine;
