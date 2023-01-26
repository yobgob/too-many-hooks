import React, { useEffect } from 'react'
import { useMutationObserver } from 'too-many-hooks'

interface Props {
  attributeMutation: (name?: string | null) => string
  attribute: string
}

const Attributes: React.FC<Props> = ({ attributeMutation, attribute }) => {
  const record = useMutationObserver(document.body, {
    attributes: true,
    subtree: true,
  })
  useEffect(() => {
    const exampleDiv = document.getElementById('example-div')
    attributeMutation(
      `Observed mutation with record attributeName ${record?.attributeName}, div data set to ${exampleDiv?.dataset.attribute}`,
    )
  }, [attributeMutation, record])
  return (
    <div id="example-div" className="prose" data-attribute={attribute}>
      Use the controls to trigger a mutation, viewable in the &quot;Actions&quot; tab
    </div>
  )
}

export default Attributes
