import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Comments from './profile'
import AuthorProfile from './profile/userprofile'
import PostComment from './login/postcomment'
import Updatecomment from './login/updatecomment'
import PostAuthor from './login/postauthor'
import UpdateAuthor from './login/updateauthor'

const Index = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/comment"> <Comments /></Route>
                    <Route exact path="/author"> <AuthorProfile /></Route>
                    <Route exact path="/postcoment"><PostComment /></Route>
                    <Route exact path="/updatecomment"><Updatecomment/></Route>
                    <Route exact path="/postauthor"><PostAuthor /></Route>
                    <Route exact path="/updateauthor"><UpdateAuthor/></Route>
                </Switch>
            </Router>
        </div>
    )
}

export default Index
