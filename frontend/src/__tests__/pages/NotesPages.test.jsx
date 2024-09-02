import { describe, test, expect, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { NotesContext } from "../../context/NotesContext";
import NotesPage from "../../pages/NotesPage";
import { fakeData as notes } from "../../assets/fakeData";

const mockContextValue = { notes };

const renderWithContext = (component) => {
  return render(
    <NotesContext.Provider value={mockContextValue}>
      {component}
    </NotesContext.Provider>
  );
};

describe("NotesPage Component", () => {
  beforeEach(() => {
    renderWithContext(<NotesPage />);
  });

  test("Should show note cards", async () => {
    await waitFor(() => {
      expect(screen.getAllByTestId("note-card")).toHaveLength(notes.length);
    });
  });

  test("Should show title", async () => {
    await waitFor(() => {
      const cardText = screen.getAllByText(/Resources:/i);
      expect(cardText[0]).toBeInTheDocument();
    });
  });
});
