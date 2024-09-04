import mongoose from "mongoose";

const StickyNoteSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  body: { type: String, default: "" },
  colors: {
    id: { type: String, default: "color-blue" },
    colorHeader: { type: String, default: "#9BD1DE" },
    colorBody: { type: String, default: "#A6DCE9" },
    colorText: { type: String, default: "#18181A" },
  },
  position: {
    x: { type: Number, default: 0 },
    y: { type: Number, default: 0 },
  },
});

const StickyNote = mongoose.model("StickyNote", StickyNoteSchema);

export { StickyNote };
