import { useEffect, useReducer, useRef } from 'react';


function useFetch(url, options) {
    console.log('use fetch',url)
  const cache = useRef();

  // Used to prevent state update if the component is unmounted
  const cancelRequest = useRef(false);

  const initialState = {
    error: null,
    data: null
  };

  // Keep state logic separated
  const fetchReducer = (state, action) => {
    switch (action.type) {
      case 'loading':
        return { ...initialState };
      case 'fetched':
        return { ...initialState, data: action.payload };
      case 'error':
        return { ...initialState, error: action.payload };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(fetchReducer, initialState);

  useEffect(() => {
    // Do nothing if the url is not given
    if (!url) return;

    cancelRequest.current = false;

    const fetchData = async () => {

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const data = (await response.json());
        dispatch({ type: 'fetched', payload: data });
      } catch (error) {
        if (cancelRequest.current) return;

        dispatch({ type: 'error', payload: error });
      }
    }

    fetchData();

    // Use the cleanup function for avoiding a possibly...
    // ...state update after the component was unmounted
    return () => {
      cancelRequest.current = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url])

  return state;
}

export default useFetch;