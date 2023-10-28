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
  const arrayData = countries.concat(cities).sort(() => 0.5 - Math.random())

  const [selectedButton, setSelectedButton] = React.useState<string | null>(null)
  const [wrongPair, setWrongPair] = React.useState<Array<string> | null>(null)

  function handleSetSelected(item: string) {
    console.log(item)
    if(selectedButton === null){
        setSelectedButton(item)
        setWrongPair(null)
    }
    else{
        
    }
  }

  return (
    <>
        {arrayData.map((item) => {
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
    </>
  );
}

export default CountryCapitalGame;
