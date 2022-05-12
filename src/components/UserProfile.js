import React from 'react'
import User from './User'
import UserStats from './UserStats'
import UserLinks from './UserLinks'


/**
 * avatar_url: "https://avatars.githubusercontent.com/u/13790799?v=4"
bio: "Frontend Engineer targeting React and JavaScript "
blog: ""
company: null
created_at: "2015-08-14T02:28:42Z"
email: null
events_url: "https://api.github.com/users/cperry24/events{/privacy}"
followers: 12
followers_url: "https://api.github.com/users/cperry24/followers"
following: 23
following_url: "https://api.github.com/users/cperry24/following{/other_user}"
gists_url: "https://api.github.com/users/cperry24/gists{/gist_id}"
gravatar_id: ""
hireable: true
html_url: "https://github.com/cperry24"
id: 13790799
location: "Pittsburgh, PA"
login: "cperry24"
name: "Cody Perry"
node_id: "MDQ6VXNlcjEzNzkwNzk5"
organizations_url: "https://api.github.com/users/cperry24/orgs"
public_gists: 3
public_repos: 43
received_events_url: "https://api.github.com/users/cperry24/received_events"
repos_url: "https://api.github.com/users/cperry24/repos"
site_admin: false
starred_url: "https://api.github.com/users/cperry24/starred{/owner}{/repo}"
subscriptions_url: "https://api.github.com/users/cperry24/subscriptions"
twitter_username: null
type: "User"
updated_at: "2022-04-06T15:55:34Z"
url: "https://api.github.com/users/cperry24"
 * 
 * 
 */

const UserProfile = ({user}) => {
    const {avatar_url: url, login: username, bio, created_at: joined, name} = user

    return (
        <div className="user-profile">
            <User
                name={name} 
                img={url} 
                username={username} 
                bio={bio} 
                joined={joined} 
            />
            <UserStats user={user} />
            <UserLinks user={user} />
        </div>
    )
}

export default UserProfile

