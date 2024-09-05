import { screen, render, fireEvent, waitFor } from "@testing-library/react";
import { describe, test, expect, beforeEach, afterEach, vi } from "vitest";
import { mockFetch } from "../fetchMocks";
import { NotesContext } from "../../context/NotesContext";
import { AuthContext } from "../../context/AuthContext";
import AddButton from "../../components/AddButton";

const setNotes = vi.fn();
const userToken = "random-token";
const mockNotesContext = { setNotes };
const mockAuthContext = { userToken };

const renderWithContext = (component) => {
  return render(
    <AuthContext.Provider value={mockAuthContext}>
      <NotesContext.Provider value={mockNotesContext}>
        {component}
      </NotesContext.Provider>
    </AuthContext.Provider>
  );
};

beforeEach(() => {
  mockFetch();
});
afterEach(() => {
  vi.restoreAllMocks();
});

describe("AddButton Component", () => {
  test("it renders the add button", () => {
    renderWithContext(<AddButton />);
    expect(screen.getByTestId("add-button")).toBeInTheDocument();
  });

  test("it adds a new note when add button is clicked", async () => {
    renderWithContext(<AddButton />);
    const addButton = screen.getByTestId("add-button");
    fireEvent.click(addButton);

    await waitFor(() => {
      expect(setNotes).toHaveBeenCalled();
    });
  });
});
