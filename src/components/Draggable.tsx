import { useLayoutEffect, useRef, useState, type PointerEvent } from 'react'

const Draggable = () => {

  const pos = useRef({ x: 0, y: 0 })
  const coords = useRef<DOMRect | null>(null)
  const elRef = useRef<HTMLDivElement | null>(null)

  const [held, setHeld] = useState<boolean>(false)

  useLayoutEffect(() => {
    const element = elRef.current
    if (!element) return

    const ro = new ResizeObserver(() => {
      coords.current = element.getBoundingClientRect()
    })

    ro.observe(element)

    return () => ro.disconnect()
  }, [])

  const onPointerDown = (e: PointerEvent) => {
    const element = e.currentTarget

    // Set the element as the target of future pointer events (i.e: retrievable by e.currentTarget).
    // Ensures the element keeps receiving pointer events, even if they happen out of its boundaries, until capture
    // is released (via Element.releasePointerCapture() or the pointerup event is fired)
    element.setPointerCapture(e.pointerId)
    setHeld(true)
  }

  const onPointerUp = () => {
    setHeld(false)
  }

  const onPointerMove = (e: PointerEvent) => {
    if (!held) return

    pos.current.x += e.movementX
    pos.current.y += e.movementY

    elRef.current!.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`
  }

  return (
    <div
      ref={ elRef }
      onPointerUp={ onPointerUp }
      onPointerDown={ onPointerDown }
      onPointerMove={ onPointerMove }
      style={{ touchAction: 'none' }}
      className={`select-none w-fit ${held ? 'cursor-grabbing' : 'cursor-grab'}`}
    >
      This is a draggable, lets see how big it is
    </div>
  )

}

export default Draggable