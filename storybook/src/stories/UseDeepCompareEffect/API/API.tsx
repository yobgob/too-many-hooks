import throttle from 'lodash.throttle'
import React, { useRef, useState } from 'react'
import { useDeepCompareEffect } from 'too-many-hooks'
import COUNTRIES from './assets/countries.json'

interface Props {
  firstName: string
  countryCode: keyof typeof COUNTRIES
}

const API: React.FC<Props> = ({ firstName, countryCode }) => {
  const [predictedAge, setPredictedAge] = useState<string>()

  const getThrottledPrediction = useRef(
    throttle(
      (params: { name: string; country_id: keyof typeof COUNTRIES }) =>
        fetch('https://api.agify.io?' + new URLSearchParams(params))
          .then(res => res.json())
          .then(data => setPredictedAge(data.age)),
      2000,
    ),
  )

  const fetchArgs = { name: firstName, country_id: countryCode }

  useDeepCompareEffect(() => {
    if (fetchArgs?.name && fetchArgs.country_id) {
      getThrottledPrediction.current(fetchArgs)
    }
  }, [fetchArgs])

  return (
    <div className="prose flex flex-col items-center gap-4 text-4xl">
      <p>Enter a name and country in &quot;Controls&quot; to get a predicted age</p>
      <p>{predictedAge ? `Predicted age: ${predictedAge}` : 'No name entered'}</p>
    </div>
  )
}

export default API
