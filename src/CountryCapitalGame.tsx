import React from 'react';

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

  return (
    <>

    </>
  );
}

export default CountryCapitalGame;
