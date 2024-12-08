import React, { createContext, useContext, useState, ReactNode } from "react";
import { DateRange } from "react-day-picker";

interface DateRangeContextType {
  dateRange: DateRange | undefined;
  setDateRange: React.Dispatch<React.SetStateAction<DateRange | undefined>>;
}

const DateRangeContext = createContext<DateRangeContextType | undefined>(
  undefined
);

export const useDateRange = () => {
  const context = useContext(DateRangeContext);
  if (!context) {
    throw new Error("useDateRange must be used within a DateRangeProvider");
  }
  return context;
};

interface DateRangeProviderProps {
  children: ReactNode;
}

export const DateRangeProvider: React.FC<DateRangeProviderProps> = ({
  children,
}) => {
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: new Date(2022, 0, 20),
    to: new Date(2022, 0, 20),
  });

  return (
    <DateRangeContext.Provider value={{ dateRange, setDateRange }}>
      {children}
    </DateRangeContext.Provider>
  );
};
