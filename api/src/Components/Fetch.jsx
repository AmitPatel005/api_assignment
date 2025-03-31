// import React, { useEffect, useState } from 'react'


//   const Fetch=()=>{
//     const [data,setData] =useState([])
//     const [error,setError] =useState(null)
//     const [loading,setLoading] =useState(true)

//     useEffect(()=>{
//         fetch("https://jsonplaceholder.typicode.com/posts")
//         .then(response=>response.json())
//         .then(dataa=>setData(dataa))
//         .catch(err=>setError(err))
//         .finally(() => {
//             setLoading(false); 
//         });
//     },[])
//     if(loading){
//         return <>loding....</>
//     }
//     if(error){
//         return <>error...{error}</>
//     }


//     return(
//         <>
//             <h2>data list</h2>
//             <ul>
//             {data.map((post) => (
//                 <li key={post.id}>
//                     <h3>{post.title}</h3>
//                     <p>{post.body}</p>
//                 </li>
//             ))}
//       </ul>
//         </>
//     )
// }

// export default Fetch



import React, { useEffect, useState } from 'react';

const Fetch = () => {
  const [data, setData] = useState([]);  // State to store data
  const [error, setError] = useState(null);  // State to store errors
  const [loading, setLoading] = useState(true);  // State for loading indicator

  useEffect(() => {
    // Define an async function to fetch data
    const posts = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const dataa = await response.json();
        setData(dataa);  // Set the fetched data to state
      } catch (err) {
        setError(err);  // Handle any errors
      } finally {
        setLoading(false);  // Set loading to false after the fetch is done
      }
    };

    // Call the async function
    posts();
  }, []);  // Empty dependency array ensures this effect runs once on mount

  if (loading) {
    return <>Loading....</>;  // Display loading text while data is being fetched
  }

  if (error) {
    return <>Error... {error.message}</>;  // Display error if any occurred
  }

  return (
    <>
      <h2>Data List</h2>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Fetch;
