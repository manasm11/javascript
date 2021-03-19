import React from 'react'
import './TweetBox.css'
import {Button, Avatar} from '@material-ui/core'

function TweetBox() {
    return (
        <div className='tweetBox'>
            <form>
                <div className='tweetBox__input'>
                    <Avatar src='https://media.wired.com/photos/5b8999943667562d3024c321/master/w_2560%2Cc_limit/trash2-01.jpg'/>
                    <input placeholder='Whats happening ?' type='text' />
                </div>
                <Button className='tweetBox__tweetButton'>Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
