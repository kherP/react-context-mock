import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { LanguageMenu } from './LanguageMenu';

describe("LanguageMenu", () => {
  const setLanguage: jest.Mock = jest.fn();
  const mockUseContext: jest.SpyInstance = jest.spyOn(React, "useContext");

  beforeEach(() => {
    mockUseContext.mockReturnValue({
      language: "",
      setLanguage
    });
  });

  it('should be able to set swedish by clicking on button', () => {
    render(<LanguageMenu />);
    fireEvent.click(screen.getByText('Swedish'));
    expect(setLanguage).toBeCalledWith("sw");
  });
});

