const Home = () => {

    const handleClick= () =>{
        alert("hello Ninjas");
    }

    const click= (name)=>{
        alert("Hello again Ninja " + name);
    }

    return ( 
        <div className="home">
        <h2>Home page</h2>
        <button onClick={handleClick}>Click me</button>
        <button onClick={()=>{click('Nemerem')}}>Click me again</button>
        </div>
     );
}
 
export default Home;