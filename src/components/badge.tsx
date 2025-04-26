interface LevelProps {
  level: number | string;
  difficulty: "master" | "remaster";
}

interface ChartTypeProps {
  chartType: "DX" | "STD";
}

export default function Badge({ level, difficulty }: LevelProps) {
  const difficultyText = difficulty === "master" ? "MASTER" : "Re:MASTER";
  const color =
    difficulty === "master"
      ? "bg-[#9F51DC] text-white "
      : "bg-purple-200 text-[#DA5AFF]";
  return (
    <div
      className={`flex flex-row w-fit items-center font-bold rounded-xs p-0.5 pl-1 gap-1 ${color}`}
    >
      <p className={difficulty === "remaster" ? "strokeme" : ""}>
        {difficultyText}
      </p>
      <div className="bg-white px-1 text-black rounded-xs">{level}</div>
    </div>
  );
}

function BadgeLarge({ level, difficulty }: LevelProps) {
  const difficultyText = difficulty === "master" ? "MASTER" : "Re:MASTER";
  const color =
    difficulty === "master"
      ? "bg-[#9F51DC] text-white "
      : "bg-purple-200 text-[#DA5AFF]";
  return (
    <div
      className={`text-3xl flex flex-row w-fit items-center font-bold rounded-md p-1 pl-2 gap-2 ${color}`}
    >
      <p className={difficulty === "remaster" ? "strokeme-l" : ""}>
        {difficultyText}
      </p>
      <div className="bg-white px-2 py-1 text-black rounded-sm">{level}</div>
    </div>
  );
}

function ChartTypeBadge({ chartType }: ChartTypeProps) {
  const color =
    chartType === "DX"
      ? "bg-white border-2 border-[#68B5E2] text-whitex"
      : "bg-[#46AFFF] text-white";
  return (
    <div
      className={`flex flex-row w-fit justify-center items-center font-bold rounded-full px-4 ${color}`}
    >
      {chartType === "DX" ? <p className="dx">DX</p> : <p className="">STD</p>}
    </div>
  );
}

export { BadgeLarge, ChartTypeBadge };
