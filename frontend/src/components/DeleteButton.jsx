import { useContext } from "react";
import PropTypes from "prop-types";
import Trash from "../icons/Trash";
import { db } from "../appwrite/databases";
import { NotesContext } from "../context/NotesContext";

const DeleteButton = ({ noteId }) => {
  const { setNotes } = useContext(NotesContext);
  const handleDelete = async () => {
    db.notes.delete(noteId);
    setNotes((prevState) => prevState.filter((note) => note.$id !== noteId));
  };

  return (
    <div onClick={handleDelete}>
      <Trash />
    </div>
  );
};

DeleteButton.propTypes = {
  noteId: PropTypes.string,
};

export default DeleteButton;
