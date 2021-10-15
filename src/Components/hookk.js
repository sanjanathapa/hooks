import React,{ useState} from 'react'

function Hookk() {
    // const [language, setLanguage] = useState("ReactHook!!!");
    // const [years, setYears] = useState(0);
    const [state, setState] = useState({
        language:'REACT',
        years:'0'
    });

    function changelanguage(){
        setState({...state, language:"JAVA"});
    }
    function addyear(){
        setState(prev => {
        return {
            ...prev,
            years: prev.years + 1
        }
    }
    )}

    return (
        <div>
            <h1 onClick={changelanguage}>I have Learnd {state.language} for {state.years} Years</h1>
            <button onClick={addyear}>Add Year</button>
        </div>
    )
}

export default Hookk
