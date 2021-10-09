import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Menu } from './Menu';

describe("Menu", () => {
  const setLanguage: jest.Mock = jest.fn();
  const setTheme: jest.Mock = jest.fn();
  const mockUseContext: jest.SpyInstance = jest.spyOn(React, "useContext");

  beforeEach(() => {
    mockUseContext.mockReturnValue({
      setTheme,
      setLanguage
    });
  });

  it('should be able to set swedish by clicking on button', () => {
    render(<Menu />);
    fireEvent.click(screen.getByText('Swedish'));
    expect(setLanguage).toBeCalledWith("sw");
  });

  it('should be able to set dark theme by clicking on dark button', () => {
    render(<Menu />);
    fireEvent.click(screen.getByText('Dark'));
    expect(setTheme).toBeCalledWith("dark");
  });
});
