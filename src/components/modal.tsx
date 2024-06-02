import React from "react";
import { Dialog } from "@material-tailwind/react";

interface ModalProps {
  open: boolean;
  children?: React.ReactNode;
  handler: () => void;
}
export function Modal({ open, children, handler }: ModalProps) {
  return (
    <>
      <Dialog size="lg" open={open} handler={handler} className="shadow-none">
        <div>{children}</div>
      </Dialog>
    </>
  );
}
