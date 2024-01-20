import { apiSlice } from "./apiSlice";

export const cartApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addToCart: builder.mutation({
      query: (data) => ({
        url: `/cart/${data.id}`,
        method: "GET",
        body: data,
      }),
    }),
  }),
});

export const { useAddToCartMutation } = cartApiSlice;
