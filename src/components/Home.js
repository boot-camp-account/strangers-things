import React from 'react';

const Home = ({username, token}) => {
    return (
        
        <div id="home">
            {
                token ? (
                    <div>
                        <h1>Welcome to Stranger's Things!</h1>
                        <h2>A fun place for Strangers to buy and sell things</h2>
                        <br></br>
                        <h3>You are currently signed in as:  {`${username}`}</h3>
                        <br></br>
                        <img src={require('./Stranger_Things_logo.png')}></img>
                    </div>) 
                    
                    : (
                        <div>
                            <h1>Welcome to Stranger's Things!</h1>
                            <h2>A fun place for Strangers to buy and sell things</h2>
                            <br></br>
                            <img src={require('./Stranger_Things_logo.png')}></img>
                        </div>
                        )
            }
        </div>
    )
}

export default Home;