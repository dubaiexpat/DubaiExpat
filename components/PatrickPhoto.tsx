"use client";

import { useState } from "react";

export default function PatrickPhoto() {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="flex h-full w-full items-center justify-center rounded-full bg-[#0A1628]">
        <span className="text-5xl font-bold text-[#C9A84C]">P</span>
      </div>
    );
  }

  return (
    <img
      src="/patrick.jpg"
      alt="Patrick, Founding Editor of Dubai Expat"
      className="h-full w-full object-cover object-top"
      onError={() => setFailed(true)}
    />
  );
}
