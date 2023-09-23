import { useEffect, useState } from 'react';

export function useTokenExists() {
  // Initialize state with false since we assume the token doesn't exist initially
  const [tokenExists, setTokenExists] = useState(false);

  useEffect(() => {
    // Check if a token exists in localStorage when the component mounts
    const token = localStorage.getItem('token');

    // Update the state based on whether the token exists
    setTokenExists(!!token);

    // You can also add additional logic here, like checking the token's validity
    // or refreshing it if it's expired.

    // This effect will run once when the component mounts and whenever the token in localStorage changes.

    // Clean up the effect when the component unmounts
    return () => {
      // Add any cleanup logic here if needed
    };
  }, []); // Empty dependency array to run this effect only once

  return tokenExists;
}

