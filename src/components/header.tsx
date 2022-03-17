import React from 'react'
import { MouseEventHandler } from "react";
import { Button } from "./button";
import MoogleIcon from "../moogle.png";

//FIXME these extra div tags r a mess lol

interface HeaderProps {
  onClickSort: MouseEventHandler<HTMLButtonElement>;
  onClickNew: MouseEventHandler<HTMLButtonElement>;
}

export default function Header({ onClickSort, onClickNew }: HeaderProps) {
  return (
    <div className="pb-8">
      <section className="flex h-28 justify-between w-full xl:w-3/4 max-w-5xl mx-auto border-2 border-black rounded-2xl bg-white">
        <div className="flex">
          <div className="text-5xl font-bold text-left px-5 pt-7">
            Moogle Keep
          </div>
          <div className="pt-4">
            <img src={MoogleIcon} alt="moogle" width={47} height={72}></img>
          </div>
        </div>
        <div className="flex">
          <div className="pt-7 px-4">
            <Button
              onClick={(e) => {
                onClickSort(e);
              }}
            >
              Sort
            </Button>
          </div>
          <div className="pt-7 px-4">
            <Button
              onClick={(e) => {
                onClickNew(e);
              }}
            >
              New
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
