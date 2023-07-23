import { useEffect, useState } from "react";

import * as queryString from "query-string";

const useReceiver = () => {
  const [receiver, setReceiver] = useState("");

  useEffect(() => {
    const { to } = queryString.parse(location.search);
    setReceiver((to as string) || "");
  }, []);

  return {
    receiver,
  };
};

export default useReceiver;
