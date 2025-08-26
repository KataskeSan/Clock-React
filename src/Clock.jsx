import { useState, useEffect } from "react";

export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval); // Limpa o intervalo quando o componente desmonta
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString();
  };

  return (
    <div style={{ textAlign: "center", fontSize: "3rem", marginTop: "2rem" }}>
      {formatTime(time)}
    </div>
  );
}
