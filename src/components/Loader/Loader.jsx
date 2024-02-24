import React, { useState, useEffect } from 'react';
import ClipLoader from "react-spinners/ClipLoader";

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 5 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    // Cleanup timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="loader-container">
      {loading ? (
        <ClipLoader color="#535bf2" loading={loading} size={150} />
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Loader;

