import { useLocation } from "react-router-dom";
const Blog = () => {
    console.log("Rendering Blog component"); // Add this line
let location=useLocation()
    return (
        <div>
            <p> I am Blog  and my data is{location.state.x} </p>
        </div>
    );
}

export default Blog;
