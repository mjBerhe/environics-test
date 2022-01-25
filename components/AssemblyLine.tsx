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

  const handleItemMove = (
    e: React.MouseEvent<HTMLElement>,
    stageIndex: number,
    groupIndex: number
  ) => {
    e.preventDefault();
    if (e.type === "click") {
      handleMoveRight(stageIndex, groupIndex);
    }
    if (e.type === "contextmenu") {
      handleMoveLeft(stageIndex, groupIndex);
    }
  };

  const handleMoveRight = (stageIndex: number, groupIndex: number) => {
    const tempStageItems = [...stageItems];
    const item = tempStageItems[stageIndex][groupIndex];

    tempStageItems[stageIndex].splice(groupIndex, 1);
    if (tempStageItems[stageIndex + 1]) {
      tempStageItems[stageIndex + 1].unshift(item);
    }
    setStageItems(tempStageItems);
  };

  const handleMoveLeft = (stageIndex: number, groupIndex: number) => {
    const tempStageItems = [...stageItems];
    const item = tempStageItems[stageIndex][groupIndex];

    tempStageItems[stageIndex].splice(groupIndex, 1);
    if (tempStageItems[stageIndex - 1]) {
      tempStageItems[stageIndex - 1].push(item);
    }
    setStageItems(tempStageItems);
  };

  return (
    <div className="min-h-screen">
      <div className="flex flex-col divide-y space-y-4 p-10">
        <div className="flex items-center">
          <label htmlFor="">Add an item:</label>
          <input
            type="text"
            className="assembly-add-item outline-none ml-4 p-1 border border-white"
            value={itemInput}
            onChange={(e) => setItemInput(e.target.value)}
            onKeyPress={handleAddItem}
          />
        </div>
        <div className="pt-2 flex">
          {stages?.map((stage, i) => (
            <div
              key={stage}
              className="assembly-stage px-4 flex flex-col border border-red-300"
            >
              <h3 className="text-lg">{stage}</h3>
              {stageItems[i]?.map((item, j) => (
                <button
                  name={item}
                  key={`${item} - ${j}`}
                  onClick={(e) => handleItemMove(e, i, j)}
                  onContextMenu={(e) => handleItemMove(e, i, j)}
                >
                  {item}
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AssemblyLine;
