import React from 'react'
import { Button } from '../../../storybook-common/components'
import useArray from '../useArray'
import { BOOKS, UNUSED_BOOKS } from './constants'

const Bookshelf: React.FC = () => {
  const [books, { insertAt, removeAt, push }] = useArray(BOOKS)
  const [unusedBooks, { removeAt: removedUnusedAt, push: pushUnused }] = useArray(UNUSED_BOOKS)

  const value = new Graph<string>()
  value.setAtCoordinates('test')
  console.log(value.getAtCoordinates())

  const arr = new Graph<string, 1>(1)
  const setArr = arr.setAtCoordinates<[]>
  const setAtIndex = arr.setAtCoordinates<[number]>
  setArr({ 0: 'test 2', 1: 'test 3' })
  setAtIndex('test 4', [2])
  const getArr = arr.getAtCoordinates
  const getAtIndex = arr.getAtCoordinates<[number]>
  console.log(getArr())
  console.log(getAtIndex([2]))

  const graph = new Graph<string, 2>(2)
  const setGraph = graph.setAtCoordinates<[]>
  const setAtX = graph.setAtCoordinates<[number]>
  const setAtXY = graph.setAtCoordinates<[number, number]>
  setGraph({ 0: { 0: 'test 5' } })
  setAtX({ 0: 'test 6' }, [1])
  setAtXY('test 7', [2, 0])

  const getGraph = graph.getAtCoordinates
  const getAtX = graph.getAtCoordinates<[number]>
  const getAtXY = graph.getAtCoordinates<[number, number]>
  console.log(getGraph())
  console.log(getAtX([1]))
  console.log(getAtXY([2, 0]))
  console.log(graph.mapAllEdges(str => str.split(' ')).getAtCoordinates())
  graph.updateAllEdges(str => str.split(' ').join('---'))
  console.log(getGraph())

  return (
    <div className="flex max-w-lg flex-wrap gap-y-4 border-l-8 border-t border-l-yellow-900 border-t-yellow-800 bg-yellow-700 p-4 [border-style:outset]">
      {books.map(({ name, colors }, i) => (
        <Fragment key={name}>
          <div className="flex border-b-2 border-b-yellow-900">
            <div className="contents-center flex h-28 items-center border-b-4 border-b-yellow-900 bg-yellow-800 p-1 pr-4">
              <Button
                onClick={() => {
                  insertAt(i, unusedBooks[0])
                  removedUnusedAt(0)
                }}
              >
                +
              </Button>
            </div>
            <button
              className="relative cursor-pointer appearance-none hover:scale-110"
              onClick={() => {
                pushUnused({ name, colors })
                removeAt(i)
              }}
            >
              <div
                className={`${colors} flex h-28 w-8 items-center justify-center overflow-hidden border-r-0 border-t-yellow-900 p-1 text-center leading-none [font-size:0.5rem] [writing-mode:vertical-rl] before:absolute before:right-full before:top-0 before:h-28 before:w-2 before:border-b-4 before:border-r-8 before:border-b-transparent before:bg-transparent`}
              >
                {name}
              </div>
            </button>
          </div>
          {(i + 1) % 6 === 0 && (
            <div className="flex-1 border-b-2 border-b-yellow-900">
              <div className="h-28 border-b-4 border-b-yellow-900 bg-yellow-800" />
            </div>
          )}
        </Fragment>
      ))}
      <div className="flex-1 border-b-2 border-b-yellow-900">
        <div className="h-28 border-b-4 border-b-yellow-900 bg-yellow-800 p-1">
          <div className="contents-center flex h-full items-center">
            <Button
              onClick={() => {
                push(unusedBooks[0])
                removedUnusedAt(0)
              }}
            >
              +
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bookshelf
