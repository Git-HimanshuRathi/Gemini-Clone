import { createContext, useState } from "react";
import run from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {
    const [input, setInput] = useState("")
    const [recentPrompt, setRecentPrompt] = useState("")
    const [prevPrompt, setPrevPrompt] = useState([])
    const [showResult, setShowResult] = useState(false)
    const [loading, setLoading] = useState(false)
    const [resultData, setResultData] = useState("")
    const [error, setError] = useState(null)

    const onSent = async () => {
        setResultData("")
        setLoading(true)
        setShowResult(true)
        setRecentPrompt(input)

        
        await run(input)
    }

    const contextValue = {
        prevPrompt,
        setPrevPrompt,  
        recentPrompt,
        setRecentPrompt,
        input,
        setInput,
        showResult,
        setShowResult,
        loading,
        resultData,
        setResultData,
        error,
        onSent
    }

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;