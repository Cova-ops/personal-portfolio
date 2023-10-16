import React from 'react'
import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'

import Card from './Card'

describe('Card', () => {
  test('should render', () => {
    render(
      <Card>
        <h1>Card</h1>
      </Card>
    )

    expect(screen.getByText('Card')).toBeDefined()
  })
})
