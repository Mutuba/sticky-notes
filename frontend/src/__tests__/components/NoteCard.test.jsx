import { render, screen } from "@testing-library/react";
import { describe, test, expect, vi } from "vitest";
import NoteCard from "../../components/NoteCard";
import { NotesContext } from "../../context/NotesContext";
import { AuthContext } from "../../context/AuthContext";

const setSelectedNote = vi.fn();
const userToken = "random-token";

const mockContext = { setSelectedNote };
const mockToken = { userToken };

const renderWithContext = (component) => {
  return render(
    <AuthContext.Provider value={mockToken}>
      <NotesContext.Provider value={mockContext}>
        {component}
      </NotesContext.Provider>
    </AuthContext.Provider>
  );
};

describe("NoteCards Component", () => {
  const note = {
    _id: "3",
    body: "You Don't Know JS: Scope & Closures",
    colors: {
      id: "color-yellow",
      colorHeader: "#FFEFBE",
      colorBody: "#FFF5DF",
      colorText: "#18181A",
    },
    position: { x: 605, y: 500 },
  };

  test("renders the correct number of NoteCard components", () => {
    renderWithContext(<NoteCard note={note} />);
    expect(
      screen.getByText(/You Don't Know JS: Scope & Closures/i)
    ).toBeInTheDocument();
    expect(screen.getByTestId("note-card")).toBeInTheDocument();
  });
});
