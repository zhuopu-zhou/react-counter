function ConditionalRender({username}) {
    return(
        <>
        <section>
            <h1>Hello {username || "guest"}</h1>
        </section>
        {username && <p>Welcome back {username}.</p>}
        </>
        
    )
}

export default ConditionalRender;
