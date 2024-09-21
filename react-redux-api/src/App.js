
import './App.css';
import { useGetAllPostQuery, useGetPostByIdQuery , useGetPostByLimitQuery,useDeletePostMutation, useCreatePostMutation, useUpdatePostMutation } from './services/Post';

function App() {
  // const responseInfo = useGetAllPostQuery()
  // const responseInfo = useGetPostByIdQuery(50)
  // const responseInfo = useGetPostByLimitQuery(5)
  // const [deletePost, responseInfo] = useDeletePostMutation()
  // const [createPost, responseInfo] =  useCreatePostMutation ()
  const [updatePost, responseInfo] =  useUpdatePostMutation ()

  const newMethod = {
    title: 'this is new Title',
    body : 'This is New Body',
    userId : 1,
  }
  const updatePostData = {
    id:1,
    title: 'this is update new Title',
    body : 'This is update New Body',
    userId : 1,
  }


  console.log("Response Information : ", responseInfo)
  console.log("Data : ", responseInfo.data)
  console.log("Success : ", responseInfo.isSuccess)

  if (responseInfo.isLoading) return <div>Loading....</div>
  if (responseInfo.isError) return <div>an error occured....</div>

  return (

    // get all data
    // <div className="App">
    //   <h1>Redux Toolkit - RTK Query (Get All Data)</h1>
    //   {
    //     responseInfo.data.map((post,i) =>
    //       <div  key={i}>
    //         <h2>{post.id} {post.title}</h2>
    //         <p>{post.body}</p>
    //       </div>
    //   )
    //    }
    // </div>

    //for single data
    // <div className="App">
    //    <h1>Redux Toolkit - RTK Query (Get single Data)</h1>
    //    <h2>{responseInfo.data.id} {responseInfo.data.title}</h2>
    //    <p>{responseInfo.data.body}</p>
    // </div>



    //get limited data
  //   <div className="App">
  //   <h1>Redux Toolkit - RTK Query (Get limited Data)</h1>
  //   {
  //     responseInfo.data.map((post,i) =>
  //       <div  key={i}>
  //         <h2>{post.id} {post.title}</h2>
  //         <p>{post.body}</p>
  //       </div>
  //   )
  //    }
  // </div>


  // delete data
  // <div className="App">
  //   <h1>Redux Toolkit - RTK Query (Delete Data)</h1>
  //   <button onClick={() => {deletePost(2)}}>Delete post</button>
  // </div>

  // create data
  // <div className="App">
  //   <h1>Redux Toolkit - RTK Query (Create Data)</h1>
  //   <button onClick={() => { createPost() }}>Create post</button>
  // </div>

  

  // Update data
  <div className="App">
    <h1>Redux Toolkit - RTK Query (Update Data)</h1> 
    <button onClick={() => { updatePost(updatePostData) }}>update post</button>
  </div>

  );
}

export default App;
