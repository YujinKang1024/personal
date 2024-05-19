import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { vi } from "vitest";
import Loading from "../components/Loading";

test("Loading component should show text prop", () => {
  const TEXT = "hello world";

  render(<Loading text={TEXT} />);
  expect(screen.getByText(TEXT)).toBeInTheDocument();
});

test("Loading component should show after mounting", async() => {
  const TEXT = "Loading";
  render(<Loading test={TEXT} />);
  const LoadingText = screen.getByText(TEXT);

  await waitFor(() => {
    expect(LoadingText).toBeInTheDocument();
  });
});

test("matches snapshot", () => {
  const loading = render(<Loading />);
  expect(loading.container).toMatchInlineSnapshot(`
    <div>
      <p
        class="content"
      >
        Loading
      </p>
    </div>
  `);
});

test("setInterval should be called.", async() => {
  const setIntervalSpy = vi.spyOn(global, "setInterval");

  render(<Loading />);

  await waitFor(() => {
    expect(setIntervalSpy).toHaveBeenCalled(1);
  })
});

test("clearInterval should be called.", () => {
  const clearIntervalSpy = vi.spyOn(global, "clearInterval");
  const loading = render(<Loading />);

  render(<Loading />);
  loading.unmount();

  expect(clearIntervalSpy).toHaveBeenCalled(1);
});
