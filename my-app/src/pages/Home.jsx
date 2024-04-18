import Form from "../components/Form";
import PostFeed from "../components/posts/PostFeed";

const Home = ()=>{  
    return(
        <>
        <Form placeholder={"What's happening"}/>
        <PostFeed/>
        </>
    );
}

export default Home;