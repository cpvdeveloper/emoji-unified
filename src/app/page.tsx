"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import type { EmojiClickData } from "emoji-picker-react";
import { EmojiData } from "./EmojiData";

const EmojiPicker = dynamic(() => import("emoji-picker-react"), { ssr: false });

export default function Home() {
  const [emoji, setEmoji] = useState<EmojiClickData | null>(null);
  return (
    <div className="flex flex-col align-center min-h-screen w-[350px] m-auto ">
      <div className="py-8">
        <EmojiPicker onEmojiClick={setEmoji} />
      </div>
      {emoji && <EmojiData emoji={emoji} />}
    </div>
  );
}
