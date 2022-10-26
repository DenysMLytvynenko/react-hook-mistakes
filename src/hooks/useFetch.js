import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        // To cancel requests when component unmount or url data is outdated you can use AbortController object.
        const controller = new AbortController();

        setLoading(true);
        fetch(url, { signal: controller.signal })
            .then((data) => setData(data))
            .catch((error) => setError(error))
            .finally(() => setLoading(false));

        // Simply add abort function in cleanup of useEffect hook
        return () => controller.abort();
    }, [url]);

    return { loading, data, error };
};

export default useFetch;
