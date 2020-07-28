import { useState } from "react";
import { EventSourcePolyfill } from "event-source-polyfill";

const { useEffect } = require("react");

/**
 * A
 * @param {string} url - Event source URL
 */
const useEventSource = (url) => {
  const [state, setState] = useState();
  useEffect(() => {
    let eventSource = new EventSourcePolyfill(url, {
      headers: {
        Authorization: "TOKEN LIVES HERE",
      },
    });
    eventSource.onmessage = (data) => {
      setState(data);
    };
    return () => eventSource.close();
  }, [url]);

  return [state];
};

export default useEventSource;
