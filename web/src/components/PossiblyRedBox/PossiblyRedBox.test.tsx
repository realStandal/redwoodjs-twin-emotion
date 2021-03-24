import { render } from '@redwoodjs/testing'

import PossiblyRedBox from './PossiblyRedBox'

describe('PossiblyRedBox', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PossiblyRedBox />)
    }).not.toThrow()
  })
})
