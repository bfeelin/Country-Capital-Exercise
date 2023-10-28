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
  const [wrongPair, setWrongPair] = React.useState<Array<string | null> | null>(null)

    useEffect(() => {
        setGameData(countries.concat(cities).sort(() => 0.5 - Math.random()))
    }, [])

  function handleSetSelected(item: string) {
    if(selectedButton === null){
        setSelectedButton(item)
        setWrongPair(null)
    }
    else{
        checkForMatch(item)
    }
  }

  function checkForMatch(item: string) {
    if(countries.indexOf(item) > -1){
        if(typeof(selectedButton) === 'string' && countries.indexOf(item) === cities.indexOf(selectedButton)){
            let newGameData = gameData
            newGameData?.splice(newGameData.indexOf(item), 1)
            newGameData?.splice(newGameData.indexOf(selectedButton), 1)
            setGameData(newGameData)
            setSelectedButton(null)
            setWrongPair(null)
        }
        else {
            setSelectedButton(null)
            setWrongPair([selectedButton, item])
        }
    }
    else if(cities.indexOf(item) > -1){
        if(typeof(selectedButton) === 'string' && cities.indexOf(item) === countries.indexOf(selectedButton)){
            let newGameData = gameData
            newGameData?.splice(newGameData.indexOf(item), 1)
            newGameData?.splice(newGameData.indexOf(selectedButton), 1)            
            setGameData(newGameData)
            setSelectedButton(null)
            setWrongPair(null)
        }
        else {
            setSelectedButton(null)
            setWrongPair([selectedButton, item])
        }
    }
    else console.log('error')
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
    </>
  );
}

export default CountryCapitalGame;
