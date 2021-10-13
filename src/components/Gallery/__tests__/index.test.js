import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Gallery from '..'

const portrait = { name: "portraits", description: "Portraits of people in my life" };
const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();
const mockContactSelected = jest.fn();
const mockSetContactSelected = jest.fn();

afterEach(cleanup)

describe('Gallery is rendering', () => {

  it('renders', () => {
    render(<Nav
      categories={categories}
      setCurrentCategory={mockSetCurrentCategory}
      currentCategory={mockCurrentCategory}
      contactSelected={mockContactSelected}
      setContactSelected={mockSetContactSelected}
    />);
  })
it('matches snapshot', () => {
    const { asFragment } = render(<Nav currentCategory={portrait} />)
    expect(asFragment()).toMatchSnapshot()
  })
  it('renders', () => {
    const { getByTestId } = render(<Nav currentCategory={portrait} />)
    expect(getByTestId('h1tag')).toHaveTextContent('Portraits')
  })
})