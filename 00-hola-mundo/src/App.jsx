import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
export function App() {
  const formatUserName = (userName) => `@${userName}`
  const users = [
    {
      userName: 'jersonandino',
      name: 'Jerson Andino',
      isFollowing: false
    },
    {
      userName: 'jersonandinoepn',
      name: 'Jerson Andino',
      isFollowing: true
    },
    {
      userName: 'carfox',
      name: 'Carlos Lopez',
      isFollowing: false
    }
  ]
  return (
    <section className='App'>
      {
        users.map(user => {
          const {userName, name, isFollowing} = user
          return (
            <TwitterFollowCard
            formatUserName={formatUserName}
              userName={userName}
              name={name}
              initialIsFollowing={isFollowing}
            />
          )
        })
      }
    </section>
  )
}