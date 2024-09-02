import { useContext } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NotesContext } from "../context/NotesContext";
import { db } from "../appwrite/databases";

const Color = ({ color }) => {
  const { selectedNote, notes, setNotes } = useContext(NotesContext);

  const changeColor = () => {
    try {
      const currentNoteIndex = notes.findIndex(
        (note) => note.$id === selectedNote.$id
      );

      const updatedNote = {
        ...notes[currentNoteIndex],
        colors: JSON.stringify(color),
      };

      const newNotes = [...notes];
      newNotes[currentNoteIndex] = updatedNote;
      setNotes(newNotes);

      db.notes.update(selectedNote.$id, {
        colors: JSON.stringify(color),
      });
    } catch (error) {
      const toastId = "color-error-toast";
      toast.dismiss(toastId);
      toast.error("You must select a note before changing colors", {
        toastId,
      });
    }
  };

  return (
    <div
      onClick={changeColor}
      className="color"
      style={{ backgroundColor: color.colorHeader }}
    ></div>
  );
};

Color.propTypes = {
  color: PropTypes.shape({ colorHeader: PropTypes.string }),
};

export default Color;
