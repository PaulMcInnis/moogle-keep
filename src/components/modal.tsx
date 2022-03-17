import React from "react";
import { Button } from "./button";

// Ripped a bunch of the style from here
// https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/react/modals/regular

interface ModalProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentMessage: React.Dispatch<React.SetStateAction<string>>;
  currentMessage: string;
  onClickSubmit: () => void; // FIXME type safety?
}

export default function Modal({
  setShowModal,
  setCurrentMessage,
  currentMessage,
  onClickSubmit,
}: ModalProps) {
  const handleSubmitButtonClick = () => {
    if (currentMessage) {
      setShowModal(false);
      onClickSubmit();
    } else {
      alert("enter your reminder, kupo.");
    }
  };

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="mx-auto max-w-3xl">
          <div className="w-full bg-white p-6 border-4 border-black rounded-2xl">
            <input
              type="text"
              name="reminder-message"
              onChange={(e) => setCurrentMessage(e.target.value)}
              style={{
                height: "100px",
                width: "440px",
                background: "lightgrey",
              }}
              autoComplete="off"
            />

            <div className="flex items-end">
              <Button
                isRed={true}
                onClick={() => {
                  setCurrentMessage(""); // NOTE: good bug here if we dont do this
                  setShowModal(false);
                }}
              >
                Close
              </Button>

              <Button onClick={handleSubmitButtonClick}>Remind me!</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}
