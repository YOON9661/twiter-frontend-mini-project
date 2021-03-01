import { useState, useCallback } from "react";

const useInput = (state = null) => {
    const [value, setValue] = useState(state);
    const handler = useCallback((e) => {
        setValue(e.target.value);
    }, []);
    return [value, handler];
}

export default useInput;