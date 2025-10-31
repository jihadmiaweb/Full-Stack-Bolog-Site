import { baseApi } from "@/redux/baseApi";

const categoryApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        create: builder.mutation({
            query: (data) => ({
                method: "POST",
                url: "/Categories/create",
                data: data
            }),
            invalidatesTags: ["CATEGORY"]
        }),
        getCategories: builder.query({
            query: () => ({
                method: "GET",
                url: "/Categories/all-categories",
            }),
            providesTags: ["CATEGORY"]
        }),
        viewCategory: builder.query({
            query: (id) => ({
                method: "GET",
                url: `/Categories/view-category/${id}`,
            }),
        }),
    }),
})


export const {
    useCreateMutation,
    useGetCategoriesQuery,
    useViewCategoryQuery
} = categoryApi;

