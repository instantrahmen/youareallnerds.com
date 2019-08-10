import { useEffect, useRef, useState } from 'react';

export const useUrlParams = (paramNames = []) => {
  const urlParamsRef = useRef(null);
  const [paramValues, setParamValues] = useState([]);

  // When first mounted, grab the url params if they exist and store them in the urlParams ref
  useEffect(() => {
    // If this is running on a server or window is undefined for some other reason, just do nothing.
    if (typeof window === 'undefined') return;

    urlParamsRef.current = new URLSearchParams(window.location.search);

    setParamValues(paramNames.map(name => urlParamsRef.current.get(name)));
  }, [paramNames]);

  return paramValues;
};
