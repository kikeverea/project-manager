import Indicator from '../assets/indicator.svg?react'

const LoadingIndicator = ({ centered = true }: { centered?: boolean }) => {
  return (
    <div role='status' aria-label='loading' className={centered ? 'mx-auto w-fit' : ''}>
      <Indicator/>
    </div>
  )
}

export default LoadingIndicator
