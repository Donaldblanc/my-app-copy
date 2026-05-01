
const FooAPICallComponent = async () =>{
console.log("foo example of api call")

const response = await fetch("https://jsonplaceholder.typicode.com/posts/1/comments")

const user = await response.json()

console.log("in foo pages",user)
  return (
  
  <>
  {" "}
    <p>pageTesting</p>
  </>)

}

export default FooAPICallComponent