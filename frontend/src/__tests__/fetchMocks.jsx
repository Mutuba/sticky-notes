import { vi } from "vitest";

const API_URL = import.meta.env.VITE_API_BASE_URL;

const mockGetNotesResponse = () =>
  Promise.resolve([
    {
      _id: "1",
      body: "The first note",
      colors: {
        id: "color-blue",
        colorHeader: "#9BD1DE",
        colorBody: "#A6DCE9",
        colorText: "#18181A",
      },
      position: { x: 305, y: 110 },
    },
    {
      _id: "2",
      body: "The second note",
      colors: {
        id: "color-blue",
        colorHeader: "#9BD1DE",
        colorBody: "#A6DCE9",
        colorText: "#18181A",
      },
      position: { x: 305, y: 110 },
    },
  ]);

const mockPostNoteResponse = () =>
  Promise.resolve({
    _id: "5",
    body: "The latest note available",
    colors: {
      id: "color-blue",
      colorHeader: "#9BD1DE",
      colorBody: "#A6DCE9",
      colorText: "#18181A",
    },
    position: { x: 305, y: 110 },
  });

const mockPutNoteResponse = (url) => {
  const _id = parseInt(url.split("/").pop(), 10);
  return Promise.resolve({
    _id,
    body: "Hello, world",
    colors: {
      id: "color-blue",
      colorHeader: "#9BD1DE",
      colorBody: "#A6DCE9",
      colorText: "#18181A",
    },
    position: { x: 305, y: 110 },
  });
};

const mockDeleteNoteResponse = () => Promise.resolve({});

export const mockFetch = () => {
  globalThis.fetch = vi.fn((url, options) => {
    const method = options?.method || "GET";

    switch (true) {
      case url === `${API_URL}/notes` && method === "GET":
        return Promise.resolve({ json: mockGetNotesResponse, ok: true });

      case url === `${API_URL}/notes` && method === "POST":
        return Promise.resolve({ json: mockPostNoteResponse, ok: true });

      case url.startsWith(`${API_URL}/notes`) && method === "PUT":
        return Promise.resolve({
          json: () => mockPutNoteResponse(url),
          ok: true,
        });

      case url.startsWith(`${API_URL}/notes`) && method === "DELETE":
        return Promise.resolve({ json: mockDeleteNoteResponse, ok: true });

      default:
        return Promise.reject(new Error("Unknown URL"));
    }
  });
};
