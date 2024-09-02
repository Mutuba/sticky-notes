const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const createNote = async (noteData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/notes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(noteData),
    });

    if (!response.ok) {
      throw new Error("Failed to create note");
    }

    return await response.json();
  } catch (error) {
    console.error("Error creating note:", error);
    throw error;
  }
};

export const updateNote = async (noteId, noteData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/notes/${noteId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(noteData),
    });

    if (!response.ok) {
      throw new Error("Failed to update note");
    }

    return await response.json();
  } catch (error) {
    console.error("Error updating note:", error);
    throw error;
  }
};

export const deleteNote = async (noteId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/notes/${noteId}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to delete note");
    }

    return await response.json();
  } catch (error) {
    console.error("Error deleting note:", error);
    throw error;
  }
};

export const getNote = async (noteId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/notes/${noteId}`, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch note");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching note:", error);
    throw error;
  }
};

export const listNotes = async (queries) => {
  try {
    const queryString = new URLSearchParams(queries).toString();
    const response = await fetch(`${API_BASE_URL}/notes?${queryString}`, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error("Failed to list notes");
    }

    return await response.json();
  } catch (error) {
    console.error("Error listing notes:", error);
    throw error;
  }
};
