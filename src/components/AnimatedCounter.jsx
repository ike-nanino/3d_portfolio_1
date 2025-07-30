import { counterItems } from "../constants";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const AnimatedCounter = () => {
  const [hasViewed, setHasViewed] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      setHasViewed(true);
    }
  }, [inView]);

  return (
    <div id="counter" className="padding-x-lg xl:mt-0 mt-32" ref={ref}>
      <div className="mx-auto grid-4-cols">
        {counterItems.map((item, index) => (
          <div
            key={index}
            className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center"
          >
            <div className="counter-number text-white-50 text-5xl font-bold mb-2">
              {hasViewed ? (
                <CountUp suffix={item.suffix} end={item.value} duration={2} />
              ) : (
                "0" + (item.suffix || "")
              )}
            </div>
            <div className="text-white-50 text-lg">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;
