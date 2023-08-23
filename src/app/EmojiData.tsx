"use client";

import type { EmojiClickData } from "emoji-picker-react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/table";

type Props = {
  emoji: EmojiClickData;
};

export function EmojiData({ emoji }: Props) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px] text-center">Emoji</TableHead>
          <TableHead>Names</TableHead>
          <TableHead>Code</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="text-center text-[40px]">
            {emoji.emoji}
          </TableCell>
          <TableCell>{emoji.names?.join(", ")}</TableCell>
          <TableCell className="font-mono">{emoji.unified}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
