import mongoose from "mongoose";
const CategoriesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "title is required"],
        trim: true,
        minlength: [3, "Name must be at least 3 characters long"],
    },
}, { timestamps: true, versionKey: false });
export const Categories = mongoose.model("Categories", CategoriesSchema);
//# sourceMappingURL=Categories.model.js.map