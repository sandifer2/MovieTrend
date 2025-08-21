import React from 'react'

const App = () => {
  return (
    <main>
      <div className='pattern'/>
      <div className='wrapper'>
        <header>
          <img src='./hero.png' alt='hero banner'/>
          <h1>
            Find <span className='text-gradient'>Movies</span> You'll enjoy without the hassle
          </h1>
        </header>
        <p>Search</p>
      </div>
    </main>
  )
}

export default App






















/*
  useEffect(() => {
    console.log('hello');
  }, [hasLiked]); //deps - dependency array, only if changed effect is called

  //useEffect(()=> {}, []) runs only on first app/mount of component
  */