import React from "react";
import {
  render,
  screen,
  fireEvent,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import Index, { getStaticProps } from "../../pages/index";
import { getImageData } from "../../lib/data";

describe("Index testing", () => {
  const images = [
    {
      id: "image1",
      url: "test.jpg",
      title: "test image",
      content: "test image content",
    },
    {
      id: "image2",
      url: "test.jpg",
      title: "test2 image",
      content: "test image content 2",
    },
  ];

  test("Should render content correctly", () => {
    render(<Index images={images} />);

    const cards = screen.getAllByTestId("card");

    cards.forEach((card, i) => {
      expect(card.querySelector("img").src).toBe(
        `http://localhost/${images[i].url}`
      );
      expect(card).toHaveTextContent(images[i].title);
      expect(card).toHaveTextContent(images[i].content);
    });
  });

  describe("Dialog Testing", () => {
    test("Should popup dialog after clicking 'share' button on image card", async () => {
      render(<Index images={images} />);

      // open dialog
      fireEvent.click(screen.getAllByTestId("share-btn")[0]);
      await waitFor(() =>
        expect(screen.getByRole("presentation")).toBeInTheDocument()
      );
    });

    test("Dialog no longer display in DOM", async () => {
      render(<Index images={images} />);

      // open dialog
      fireEvent.click(screen.getAllByTestId("share-btn")[0]);
      await waitFor(() =>
        expect(screen.getByRole("presentation")).toBeInTheDocument()
      );

      // close dialog
      const dialog = screen.getByRole("presentation");
      fireEvent.click(dialog.firstChild);

      await waitForElementToBeRemoved(() => screen.getByRole("presentation"));
    });
  });

  describe("getStaticProps testing", () => {
    test("return correct data", async () => {
      const expected = getImageData();
      const response = await getStaticProps();
      expect(response).toStrictEqual({ props: { images: expected } });
    });
  });
});
