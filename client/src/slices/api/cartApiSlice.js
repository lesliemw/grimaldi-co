import { apiSlice } from "./apiSlice";

export const cartApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    getCart: builder.query({
      query: (data) => ({
        url: `/cart`,
        method: "GET",
        body: data,
      }),

    addToCart: builder.mutation({
      query: (data) => ({
        url: `/cart/addToCart/:${data.id}`,
        method: "POST",
        body: data
      }),
      
    removeFromCart: builder.mutation({
      query: (data)=>({
        url: "/cart/remove",
        method: "DELETE",
        body: data,
      }),
    })
        
      
    })
    }),
  }),
});

export const { useGetCartQuery } = cartApiSlice;
