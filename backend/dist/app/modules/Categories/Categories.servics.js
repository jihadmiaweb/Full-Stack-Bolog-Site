import { Categories } from "./Categories.model.js";
const Create = async (payload) => {
    const result = await Categories.create(payload); // ✅ proper mongoose method
    return result;
};
export const CategoriesServices = { Create };
//# sourceMappingURL=Categories.servics.js.map