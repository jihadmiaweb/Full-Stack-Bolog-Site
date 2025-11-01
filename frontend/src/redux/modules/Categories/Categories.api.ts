import { baseApi } from "@/redux/baseApi";

const categoryApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        // 🟢 Create category
        create: builder.mutation({
            query: (data) => ({
                url: "/Categories/create",
                method: "POST",
                data,
            }),
            invalidatesTags: ["CATEGORY"],
        }),

        // 🟡 Update category
        update: builder.mutation({
            query: ({ data, id }) => ({
                url: `/Categories/delete/${id}`,
                method: "POST",
                data: data
            }),
            invalidatesTags: ["CATEGORY"],
        }),

        delete: builder.mutation({
            query: (id) => ({
                method: "POST",
                url: `/Categories/delete/${id}`,
                data: null
            }),
            invalidatesTags: ["CATEGORY"]
        }),

        // 🔵 Get all categories
        getCategories: builder.query({
            query: () => ({
                url: "/Categories/all-categories",
                method: "GET",
            }),
            providesTags: ["CATEGORY"],
        }),

        // 🟣 View single category
        viewCategory: builder.query({
            query: (id) => ({
                url: `/Categories/view-category/${id}`,
                method: "GET",
            }),
        }),
    }),
});

export const {
    useCreateMutation,
    useUpdateMutation,
    useGetCategoriesQuery,
    useViewCategoryQuery,
    useDeleteMutation
} = categoryApi;
