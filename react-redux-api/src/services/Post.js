import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const PostApi = createApi({
    reducerPath: 'PostApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
    endpoints: (builder) => ({
      getAllPost: builder.query({
        query: ()=>({
           url: 'posts',
           method: 'GET' 
        })
      }),
      getPostById: builder.query({
        query: (id)=>({
          url: `posts/${id}`,
          method: 'GET' 
       })
  
    }), 
    getPostByLimit: builder.query({
      query : (num) => {
        console.log("Limit number", num)
        return{
          url: `posts?_limit=${num}`,
          method: 'GET' 
        }
      }
    }),

    deletePost: builder.mutation({
      query : (id) => {
        console.log("Delete Id:", id)
        return{
          url: `posts/${id}`,
          method: 'DELETE' 
        }
      }
    }),
    createPost : builder.mutation({
      query : () => {
        console.log("Create Post:" )
        return{
          url: `posts`,
          method: 'POST',
          body: {
            title: 'This is crete api',
            body : 'code club',
            userId: 1,
          },
          headers: {
            'Content-type': 'application/jason; charset=UTF-8',
          } 
        }
      }
    }),
    updatePost: builder.mutation({
      query : (updatePostData) => {
        console.log("Update Post:" , updatePostData)
        const {id, ...data} = updatePostData
        console.log("Actual Update Post:" , data)
        return{
          url: `posts/${id}`,
          method: 'PUT',
          body: data,
          headers: {
            'Content-type': 'application/jason; charset=UTF-8',
          } 
        }
      }
    }),
  })
})
  export const { useGetAllPostQuery,useGetPostByIdQuery, useGetPostByLimitQuery,useDeletePostMutation, useCreatePostMutation, useUpdatePostMutation } = PostApi