import {
  createContext,
  useState,
  useEffect,
  useContext,
  useCallback,
} from "react";
import PropTypes from "prop-types";
import { AuthContext } from "./AuthContext";
import { listNotes } from "../services/notes_service";
import Spinner from "../icons/Spinner";

const NotesContext = createContext();

const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedNote, setSelectedNote] = useState(null);
  const [error, setError] = useState(null);
  const { userToken } = useContext(AuthContext);

  const fetchNotes = useCallback(async () => {
    if (!userToken) return;
    const response = await listNotes({}, userToken);
    if (response.success) {
      setNotes(response.data);
    } else {
      setError(response.error);
    }
    setLoading(false);
  }, [userToken]);

  useEffect(() => {
    fetchNotes();
  }, [fetchNotes]);

  console.log("In the notes context", notes);
  return (
    <NotesContext.Provider
      value={{ notes, setNotes, selectedNote, setSelectedNote, error }}
    >
      {loading ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          <Spinner size="100" />
        </div>
      ) : (
        children
      )}
    </NotesContext.Provider>
  );
};

NotesProvider.propTypes = {
  children: PropTypes.node,
};

export { NotesProvider, NotesContext };
