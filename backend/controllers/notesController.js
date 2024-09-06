import { StickyNote } from "../models/sticky_note.js";

const createNote = async (req, res) => {
  const { body, colors, position } = req.body;
  try {
    const note = await StickyNote.create({
      user: req.user.id,
      body,
      colors,
      position,
    });
    res.status(201).json(note);
  } catch (error) {
    res.status(400).json({ message: "Invalid note data" });
  }
};

const getNotes = async (req, res) => {
  try {
    const notes = await StickyNote.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

const updateNote = async (req, res) => {
  const updates = req.body;

  try {
    const note = await StickyNote.findByIdAndUpdate(
      req.params.id,
      { $set: updates },
      { new: true }
    );

    if (!note || note.user.toString() !== req.user.id) {
      return res.status(404).json({ message: "Note not found" });
    }

    Object.assign(note, updates);
    await note.save();
    res.json(note);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

const deleteNote = async (req, res) => {
  try {
    const note = await StickyNote.findById(req.params.id);

    if (!note || note.user.toString() !== req.user.id) {
      return res.status(404).json({ message: "Note not found" });
    }

    await StickyNote.findByIdAndDelete(req.params.id);

    res.json({ message: "Note removed" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export { createNote, getNotes, updateNote, deleteNote };
