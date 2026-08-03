import { useState, useEffect } from "react";

function MouseTracker() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleMouseMove(e) {
      setCoords({
        x: e.clientX,
        y: e.clientY,
      });
    }

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div>
      <h2>Mouse Tracker</h2>

      <p>Mouse X: {coords.x}</p>
      <p>Mouse Y: {coords.y}</p>
    </div>
  );
}

export default MouseTracker;