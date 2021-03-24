import { render } from '@redwoodjs/testing'

import RedBox from './RedBox'

describe('RedBox', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RedBox />)
    }).not.toThrow()
  })
})
