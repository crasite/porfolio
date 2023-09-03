import React, { useState } from "react";
import Popover from "./Popover";
import Calendar, { type Props as CalendarProps } from "./Calendar";
import Icon from "./Icon";

export default function DatePicker(props: Props) {
  const [date, setDate] = useState<Date | undefined>(new Date());
  function handleDateChange(date: Date | undefined) {
    setDate(date);
    props.onSelect?.(date);
  }
  return (
    <Popover label={DateDisplay({ date })} position="center">
      <Calendar
        onSelect={handleDateChange}
        selected={date}
        {...props.calendarProps}
      />
    </Popover>
  );
}

function DateDisplay({ date }: { date: Date | undefined }) {
  return (
    <div className="flex items-center p-2">
      <Icon name="calendar" className="pr-1" />
      <span className="ml-2 text-sm font-extralight italic">
        {date?.toLocaleString()}
      </span>
    </div>
  );
}

type Props = {
  onSelect?: (date: Date | undefined) => void;
  calendarProps: CalendarProps;
};
