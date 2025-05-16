import { apiSlice } from "../services/apiSlice"

export const extendExempleSlice = apiSlice.injectEndpoints({
    endpoints:build=>({
        getExemple: build.query({
            query:()=>({
                url:'/endpoint',
            }),
        }), 
    })
})

export const { useGetExempleQuery } = extendExempleSlice
