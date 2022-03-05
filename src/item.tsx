import { MouseEventHandler, ReactChild } from "react";
import { Button } from "./button";

interface ItemProps {
  onClickCompleted: MouseEventHandler<HTMLButtonElement>;
  message: string;
  date: string;
}

// FIXME popped out button state

export default function Item({ onClickCompleted, message, date }: ItemProps) {
  return (
    <div className="pb-4">
      <section className="flex h-28 justify-between w-full xl:w-3/4 max-w-5xl mx-auto border-2 border-black rounded-2xl bg-white">
        <div className="pt-7 px-4">
          <Button
            onClick={(e) => {
              onClickCompleted(e);
            }}
          >
            Completed
          </Button>
        </div>
        <div className="text-2xl text-middle px-5 pt-9">{message}</div>
        <div className="text-lg text-right px-5 pt-10">{date}</div>
      </section>
    </div>
  );
}
