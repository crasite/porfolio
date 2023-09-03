import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import Icon from "./Icon";
import { cn } from "../utils";

export default function Component({
  showOutsideDays = true,
  className,
  classNames,
  showTime = false,
  mode,
  ...props
}: Props) {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [time, setTime] = useState<string>("00:00");

  const handleDaySelect = (date: Date | undefined) => {
    if (!time || !date) {
      setDate(date);
      return;
    }
    const [hours, minutes] = time.split(":").map((str) => parseInt(str, 10));
    const newDate = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      hours,
      minutes,
    );
    setDate(newDate);
    (props as any).onSelect?.(newDate);
  };

  function setDateFromTime(date: Date | undefined) {
    (props as any).onSelect?.(date);
  }
  return (
    <div>
      <DayPicker
        showOutsideDays={showOutsideDays}
        className={cn("p-3", className)}
        classNames={{
          months:
            "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
          month: "space-y-4",
          caption: "flex justify-center pt-1 relative items-center",
          caption_label: "text-sm font-medium",
          nav: "space-x-1 flex items-center",
          nav_button: cn(
            baseButton,
            "border-input hover:bg-primary border hover:text-white",
            "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
          ),
          nav_button_previous: "absolute left-1",
          nav_button_next: "absolute right-1",
          table: "w-full border-collapse space-y-1",
          head_row: "flex",
          head_cell:
            "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
          row: "flex w-full mt-2",
          cell: "text-center text-sm p-0 relative [&:has([aria-selected])]:bg-primary rounded-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
          day: cn(
            baseButton,
            "hover:bg-primary hover:text-white",
            "h-9 w-9 p-0 font-normal aria-selected:opacity-100",
          ),
          day_selected:
            "bg-primary text-white hover:bg-primary/80 hover:text-white focus:bg-primary focus:text-white",
          day_today: "bg-primary/50 text-white",
          day_outside: "text-muted-foreground opacity-50",
          day_disabled: "text-muted-foreground opacity-50",
          day_range_middle: "aria-selected:bg-primary aria-selected:text-white",
          day_hidden: "invisible",
          ...classNames,
        }}
        components={{
          IconLeft: () => <Icon name="chevron-up" className="h-4 w-4" />,
          IconRight: () => <Icon name="chevron-down" className="h-4 w-4" />,
        }}
        footer={
          showTime ? (
            <TimePicker
              selected={date}
              setSelected={setDateFromTime}
              setTime={setTime}
            />
          ) : undefined
        }
        {...props}
        selected={date}
        mode="single"
        onSelect={(d) => {
          handleDaySelect(d);
        }}
      />
    </div>
  );
}

function TimePicker({
  selected,
  setSelected,
  setTime,
}: {
  selected: Date | undefined;
  setSelected: (d: Date | undefined) => void;
  setTime: (time: string) => void;
}) {
  const [timeValue, setTimeValue] = React.useState<string>("00:00");

  const handleTimeChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const time = e.target.value;
    if (!selected) {
      setTimeValue(time);
      return;
    }
    const [hours, minutes] = time.split(":").map((str) => parseInt(str, 10));
    const newSelectedDate = new Date(
      selected.getFullYear(),
      selected.getMonth(),
      selected.getDate(),
      hours,
      minutes,
    );
    setTimeValue(time);
    setTime(time);
    setSelected(newSelectedDate);
  };

  return (
    <div className="flex items-center">
      <label className="font-medium">Time:</label>
      <input
        type="time"
        value={timeValue}
        onChange={handleTimeChange}
        className="px-4"
      />
    </div>
  );
}

const baseButton =
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

type Props = { showTime?: boolean } & React.ComponentProps<typeof DayPicker>;
