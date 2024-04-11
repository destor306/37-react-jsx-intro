const Tweet = ({date, message, name, username}) =>{
    return (
        <div class="tweet">
            <span>{name}</span>
            <span>date: {date} </span>
            <span>message: {message} </span>
            <span>by: {username} </span>
        </div>
    )
}