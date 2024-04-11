const App = () =>{
    return (
        <div>
            <Tweet name ="jason yoo" username="jason" date={new Date().toDateString()} message="TESTTEST"/>
            <Tweet name ="ellen yoo" username="ellen" date={new Date().toDateString()} message="ellen"/>
            <Tweet name ="ace yoo" username="ace" date={new Date().toDateString()} message="ace"/>
        
        </div>
    )

}