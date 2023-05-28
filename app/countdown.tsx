"use client";

import { useEffect, useState } from "react";

export default function Countdown({ enddate }: { enddate: string }) {
  const realEnddate = new Date(enddate).getTime();
  const [countdown, setCountdown] = useState(
    realEnddate - new Date().getTime()
  );

  const days = Math.floor(countdown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countdown % (1000 * 60)) / 1000);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(realEnddate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [setCountdown]);

  return (
    <div className="border-2 border-black rounded text-center px-8 py-4 text-2xl my-4">
      L'ICO aura lieu dans : {days} jours, {hours} heures, {minutes} minutes et{" "}
      {seconds} secondes
    </div>
  );
}
