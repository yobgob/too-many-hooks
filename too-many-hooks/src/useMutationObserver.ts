import { useEffect, useRef, useState } from 'react'

/**
 * `useMutationObserver` hook type
 *
 * @export
 * @typedef {UseMutationObserver}
 * @param {(Node | null)} target
 * @param {?MutationObserverInit} [options]
 * @returns {(MutationRecord | undefined)}
 */
export type UseMutationObserver = (
  target: Node | null,
  options?: MutationObserverInit,
) => MutationRecord | undefined

/**
 * Observes a node and returns the latest mutation record
 *
 * @implements {UseMutationObserver}
 * @param {(Node | null)} target
 * @param {?MutationObserverInit} [options]
 * @returns {(MutationRecord | undefined)}
 */
const useMutationObserver: UseMutationObserver = (
  target: Node | null,
  options?: MutationObserverInit,
): MutationRecord | undefined => {
  const [record, setRecord] = useState<MutationRecord>()

  const observer = useRef(
    new MutationObserver(records => {
      const newRecord = records[0]
      setRecord(newRecord)
    }),
  )

  useEffect(() => {
    if (target) {
      const current = observer.current
      current.observe(target, options)

      return () => {
        current.disconnect()
      }
    }
  }, [target, observer, options])

  return record
}

export default useMutationObserver
