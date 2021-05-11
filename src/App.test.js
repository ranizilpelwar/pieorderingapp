import { render } from '@testing-library/react';
import App from "./App";

describe("App", () => {
  it('should say hello', () => {
    const { queryByText } = render(<App />);
  
    expect(queryByText("Hello world!")).toBeInTheDocument();
  });
});
