import { useState } from "react";

import "./App.css";
import { roundRobinList, finalList } from "./data";
import type { songData } from "./types";
import Badge, { ChartTypeBadge } from "./components/badge";

function App() {
  const roundRobinSongAmt = roundRobinList.length;
  const finalSongAmt = finalList.length;

  const [isFinal, setIsFinal] = useState<number>(0);
  const [randomValue, setRandomValue] = useState(0);
  const [result, setResult] = useState<songData | undefined>();
  const [counter, setCounter] = useState(0);
  const [isRandoming, setIsRandoming] = useState<boolean>(false);

  const handleRandomClick = async () => {
    setIsRandoming(true);
    await new Promise((res) => setTimeout(res, 500));
    const songResult = getRandomSongNo(
      isFinal ? finalSongAmt : roundRobinSongAmt,
    );
    setCounter(counter + 1);
    setRandomValue(songResult);
    setResult(isFinal ? finalList[songResult] : roundRobinList[songResult]);
    setIsRandoming(false);
  };

  const getRandomSongNo = (v: number) => Math.floor(Math.random() * v);

  return (
    <>
      <h3 className="text-gray-400 mb-9">
        {result ? randomValue : "press random button to get a song"}
      </h3>
      <h1 className="!text-6xl font-medium my-4">{result?.name}</h1>
      <h2 className="">{result?.artist}</h2>
      <div className="mt-12 w-full flex flex-row justify-center gap-8">
        {result && (
          <>
            <ChartTypeBadge chartType={result.chartType} />
            <Badge difficulty={result.difficulty} level={result.level} />
          </>
        )}
      </div>
      <div className="flex flex-col items-center justify-center gap-8 mt-12">
        <button
          className="flex p-8 items-center justify-center w-32 bg-gray-200 hover:bg-gray-600"
          onClick={handleRandomClick}
          disabled={isRandoming}
        >
          {isRandoming ? (
            <div
              className="animate-spin inline-block size-6 border-3 border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500"
              role="status"
              aria-label="loading"
            >
              <span className="sr-only">randoming...</span>
            </div>
          ) : (
            "🎲Random"
          )}
        </button>
        <p className="text-gray-400">random count: {counter}</p>
        <label className="inline-flex items-center cursor-pointer mt-12">
          <span className="me-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            roundRobin
          </span>
          <input
            type="checkbox"
            value={isFinal}
            onChange={() => setIsFinal(isFinal === 0 ? 1 : 0)}
            className="sr-only peer"
          />
          <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600" />
          <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            final
          </span>
        </label>
      </div>
    </>
  );
}

export default App;
