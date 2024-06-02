import React from "react";
import {
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
} from "@material-tailwind/react";

interface ModalProps {
  open: boolean;
  children: React.ReactNode;
  handler: () => void;
}
export function Modal({ open, children, handler }: ModalProps) {
  return (
    <>
      <Dialog size="lg" open={open} handler={handler} className="shadow-none">
        {children}
      </Dialog>
    </>
  );
}
