import { render, screen } from "@testing-library/react";
import { describe, test, expect, vi } from "vitest";
import NoteCard from "../../components/NoteCard";
import { NotesContext } from "../../context/NotesContext";

const setSelectedNote = vi.fn();

const note = {
  $id: "3",
  body: JSON.stringify(
    'Resources:\n- Book: "You Don\'t Know JS: Scope & Closures" by Kyle Simpson.\n\n- Online Course: "JavaScript Patterns" on Udemy.\n\n- Articles:\n"Understanding JavaScript Closures" on Medium.\n\n"Mastering JavaScript Modules" on Dev.to.'
  ),
  colors: JSON.stringify({
    id: "color-yellow",
    colorHeader: "#FFEFBE",
    colorBody: "#FFF5DF",
    colorText: "#18181A",
  }),
  position: JSON.stringify({ x: 605, y: 500 }),
};

const mockContextValue = { setSelectedNote };

const renderWithContext = (component) => {
  return render(
    <NotesContext.Provider value={mockContextValue}>
      {component}
    </NotesContext.Provider>
  );
};

describe("NoteCards Component", () => {
  test("renders the correct number of NoteCard components", () => {
    renderWithContext(<NoteCard note={note} />);
    expect(screen.getByText(/Resources:/i)).toBeInTheDocument();
    expect(screen.getByTestId("note-card")).toBeInTheDocument();
  });
});
