import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NoteCard from "../components/NoteCard";
import { NotesContext } from "../context/NotesContext";
import { AuthContext } from "../context/AuthContext";
import Controls from "../components/Controls";

const NotesPage = () => {
  const { notes } = useContext(NotesContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <div>
      {notes.map((note) => (
        <NoteCard note={note} key={note._id} />
      ))}
      <Controls />
    </div>
  );
};

export default NotesPage;
