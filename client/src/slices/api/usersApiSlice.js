import { apiSlice } from "./apiSlice";

export const usersApiSlice = apiSlice.injectEndpoints({
    reducerPath:"usersApi",
    endpoints: (builder) => ({
        user: builder.query({
            query: ()=> "/user"
        }),
        login: builder.mutation({
            query: (data)=> ({
                url: "/user/login",
                method: "POST",
                body: data              
            })
        })
    })
})

export const {useLoginMutation} = usersApiSlice