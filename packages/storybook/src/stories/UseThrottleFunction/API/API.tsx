import { useThrottleFunction } from '@yobgob/too-many-hooks'
import React, { useState } from 'react'
import COUNTRIES from './assets/countries.json'

interface Props {
  firstName: string
  countryCode: keyof typeof COUNTRIES
}

const API: React.FC<Props> = ({ firstName, countryCode }) => {
  const [predictedAge, setPredictedAge] = useState<string>()

  useThrottleFunction(
    async (params: { name: string; country_id: keyof typeof COUNTRIES }) =>
      fetch('https://api.agify.io?' + new URLSearchParams(params))
        .then(res => res.json())
        .then(data => setPredictedAge(data.age)),
    2000,
    { name: firstName, country_id: countryCode },
  )

  return (
    <div className="prose flex flex-col items-center gap-4 text-4xl">
      <p>
        Enter a name and country in &quot;Controls&quot; to get a predicted age, updated at most
        every 2 seconds
      </p>
      <p>
        {predictedAge
          ? `Predicted age: ${predictedAge}`
          : firstName
            ? 'No age result for entered name and location'
            : 'No name entered'}
      </p>
    </div>
  )
}

export default API
