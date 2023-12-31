import React, { useEffect } from 'react';

interface CountryCapitalMap {
  [country: string]: string;
}

interface Props {
  data: CountryCapitalMap;
}

const CountryCapitalGame: React.FC<Props> = ({ data }) => {
  const countries = Object.keys(data)
  const cities = Object.values(data)

  const [gameData, setGameData] = React.useState<Array<string>>()
  const [selectedButton, setSelectedButton] = React.useState<string | null>(null)
  const [wrongPair, setWrongPair] = React.useState<Array<string | null>>([])

    useEffect(() => {
        setGameData(makeGameData())
    }, [])

  function makeGameData(){
    return countries.concat(cities).sort(() => 0.5 - Math.random())
  }

  function handleSetSelected(item: string) {
    if(selectedButton === null){
        setSelectedButton(item)
        setWrongPair([])
    }
    else{
        checkForMatch(item)
    }
  }

  function checkForMatch(item: string) {
    function makeNewGameData(item1: string, item2: string){
        let newGameData = gameData
        newGameData?.splice(newGameData.indexOf(item1), 1)
        newGameData?.splice(newGameData.indexOf(item2), 1)
        return newGameData
    }
    if(typeof(selectedButton) === 'string' && 
        (countries.indexOf(item) === cities.indexOf(selectedButton) && countries.indexOf(item) > -1 ||
        cities.indexOf(item) === countries.indexOf(selectedButton) && cities.indexOf(item) > -1)){
            setGameData(makeNewGameData(item, selectedButton))
            setWrongPair([])
    }
    else setWrongPair([selectedButton, item])
    setSelectedButton(null)
    
  }

  return (
    <>
        {gameData?.map((item) => {
            return(
                <button 
                    value={item}
                    className={selectedButton === item ? "selected" :
                                wrongPair?.includes(item) ? "wrong-pair" : ""}
                    onClick={() => handleSetSelected(item)} 
                    key={item}>
                        {item}
                </button>
            )
        })}
        {gameData?.length === 0 && <h1>Congratulations</h1>}
        <button onClick={() => setGameData(makeGameData())} className='reset-button'>Reset</button>
    </>
  );
}

export default CountryCapitalGame;
