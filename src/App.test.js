import { render, screen } from '@testing-library/react';
import App from "./App";

describe("App", () => {
  it('should say hello', () => {
    render(<App />);
  
    expect(screen.getByText("Hello world!")).toBeInTheDocument();
  });
});
