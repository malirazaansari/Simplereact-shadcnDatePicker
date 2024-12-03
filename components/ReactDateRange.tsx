import React, { useState } from "react";
import { LucideCalendar } from "lucide-react";
import { DateRange, Range, RangeKeyDict } from "react-date-range";

const ReactDateRange: React.FC = () => {
  const [isShowDate, setIsShowDate] = useState<boolean>(false);
  const [state, setState] = useState<Range[]>([
    {
      startDate: new Date("2024-01-05"),
      endDate: new Date("2024-01-10"),
      key: "selection",
    },
  ]);

  const handleDateChange = (ranges: RangeKeyDict) => {
    const selection = ranges.selection;
    if (selection) {
      setState([selection]);
    }
  };

  return (
    <div className="flex items-center justify-center h-full mt-10">
      <div className="relative">
        <h1>
          Selected Range: {state[0]?.startDate?.toDateString()} to{" "}
          {state[0]?.endDate?.toDateString()}
        </h1>
        <button
          onClick={() => setIsShowDate(!isShowDate)}
          className="flex items-center gap-x-1 text-sm rounded-lg border px-4 py-2 bg-[#7f56d9] text-white"
        >
          <LucideCalendar className="text-lg" />
          <span className="font-medium">Select date</span>
        </button>
        {isShowDate && (
          <div className="absolute flex items-center justify-center mt-5 -right-[300px]">
            <DateRange
              editableDateInputs={true}
              onChange={handleDateChange}
              moveRangeOnFirstSelection={false}
              ranges={state}
              showDateDisplay={false}
              months={2}
              showPreview={false}
              className="rounded-lg shadow-md"
              direction="horizontal"
              rangeColors={["#7f56d9"]}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ReactDateRange;
