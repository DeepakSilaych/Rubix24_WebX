import React from 'react'
import style from './style.module.css'

function NotFound() {
  return (
    <div className={style.notfound}>
      <div className={style.container}>
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>
          Sorry, but the page you are looking for has not been found. Try checking the URL for error, then hit the refresh button on your browser or try found something else in our app.
        </p>
      </div>
    </div>
  )
}

export default NotFound