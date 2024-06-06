import './App.css'
import { useState } from 'react'

export function TwitterFollowCard ({formatUserName, userName, name, initialIsFollowing}){
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    const imageSrc = `http://unavatar.io/${userName}`
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button'

    const handlerClick = () => {
        setIsFollowing(!isFollowing)
    }
    return (
        <article className='tw-followCard'>
        <header className='tw-followCard-header'>
            <img 
            className='tw-followCard-avatar'
            alt="el avatar" src={imageSrc}/>
            <div className='tw-followCard-info'>
                <strong>{name}</strong>
                <span>{formatUserName(userName)}</span>
            </div>
        </header>
        <aside>
            <button className={buttonClassName} onClick={handlerClick}>
            {text}
            </button>
        </aside>
        </article>
    )
}