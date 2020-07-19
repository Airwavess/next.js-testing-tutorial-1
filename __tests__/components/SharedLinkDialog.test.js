import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SharedLinkDialog from "../../components/SharedLinkDialog";

describe("SharedLinkDialog testing", () => {
  test("copy embed url", () => {
    const expectedUrl = "embed.url";
    render(<SharedLinkDialog embedUrl={expectedUrl} open />);

    const input = screen.getByTestId("embed-url");

    input.focus();

    const { selectionStart, selectionEnd } = input;
    const selectedUrl = input.value.substring(selectionStart, selectionEnd);

    expect(input).toHaveFocus();
    expect(selectedUrl).toBe(expectedUrl);
  });
});
