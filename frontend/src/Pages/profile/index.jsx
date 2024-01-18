import React from 'react'
import Layout from '../component/layout'
import style from './style.module.css'

function Profile() {
  return (
    <Layout color={'rgb(1,1,63)'}>
      <div className={style.profile} >
        <h1>Profile</h1>
        <div className={style.profile_head}>
          <div className={style.profile_image}>
            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="profile" />
          </div>
          <div className={style.profile_info}>
            <p>
              Deepak Silaych
            </p>
            <p>
              deepaksilaych@gmail.com
            </p>
            <p>
              +91 9001352750
            </p>
          </div>
        </div>
        <div className={style.ottlist}>
          <h2>Current Subscriptions</h2>
          <div className={style.ottlist_list}>
            {ott_data.map((item, index) => (
              <div className={style.ottlist_item} key={index}>
                <img src={item.logo} alt={item.name} />
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={style.ottlist}>
          <h2>Previous Subscriptions</h2>
          <div className={style.ottlist_list}>
            {ott_data.map((item, index) => (
              <div className={style.ottlist_item} key={index}>
                <img src={item.logo} alt={item.name} />
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={style.friendslist}>
          <h2>Friends</h2>
          <div className={style.friendslist_list}>
            {friends_data.map((item, index) => (
              <div className={style.friendslist_item} key={index}>
                <img src={item.image} alt={item.name} />
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Profile

const ott_data = [
  {
    name: 'Netflix',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png',
  },
  {
    name: 'Spotify',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/1200px-Spotify_logo_without_text.svg.png',
  },
  {
    name: 'Netflix',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png',
  },
  {
    name: 'Spotify',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/1200px-Spotify_logo_without_text.svg.png',
  },
  {
    name: 'Youtube Premium',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/1200px-YouTube_full-color_icon_%282017%29.svg.png',
  },
  {
    name: 'Netflix',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png',
  },
  {
    name: 'Spotify',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/1200px-Spotify_logo_without_text.svg.png',
  },
  
]

const friends_data = [
  {
    name: 'Deepak Silaych',
    image: 'https://www.w3schools.com/howto/img_avatar.png'
  },
  {
    name: 'Deepak Silaych',
    image: 'https://www.w3schools.com/howto/img_avatar.png'
  },
  {
    name: 'Deepak Silaych',
    image: 'https://www.w3schools.com/howto/img_avatar.png'
  },
  {
    name: 'Deepak Silaych',
    image: 'https://www.w3schools.com/howto/img_avatar.png'
  },
  {
    name: 'Deepak Silaych',
    image: 'https://www.w3schools.com/howto/img_avatar.png'
  },
  {
    name: 'Deepak Silaych',
    image: 'https://www.w3schools.com/howto/img_avatar.png'

  }
]