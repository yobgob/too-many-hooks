import throttle from 'lodash.throttle'
import React, { useRef, useState } from 'react'
import { useDeepCompareEffect } from 'too-many-hooks'
import COUNTRY_CODES from './countryCodes.json'

interface Props {
  firstName: string
  countryKey: keyof typeof COUNTRY_CODES
}

const API: React.FC<Props> = ({ firstName, countryKey }) => {
  const [predictedAge, setPredictedAge] = useState<string>()

  const getThrottledPrediction = useRef(
    throttle(
      (params: { name: string; country_id: typeof COUNTRY_CODES[keyof typeof COUNTRY_CODES] }) =>
        fetch('https://api.agify.io?' + new URLSearchParams(params))
          .then(res => res.json())
          .then(data => setPredictedAge(data.age)),
      2000,
    ),
  )

  const fetchArgs = { name: firstName, country_id: COUNTRY_CODES[countryKey] }

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
