"use client";

import { List } from "@prisma/client";
import { ListForm } from "./list-form";

interface ListContainerProps {
  data: List[];
  boardId: string;
}

export const ListContainer = ({ boardId, data }: ListContainerProps) => {
  return (
    <ol>
      <ListForm />
      <div className="flex-shrink-0 w-1" />
    </ol>
  );
};
