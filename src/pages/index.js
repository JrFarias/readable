import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import Template from '../templates'
import Header from '../organisms/Header/Header'
import Aside from '../organisms/Aside/Aside.container'
import Content from '../organisms/Content/Content'
import Footer from '../organisms/Footer/Footer'
import PostDetails from '../organisms/Posts/molecules/PostDetails/PostDetails.container'

const index = () => (
  <Switch>
    <Route
      exact
      path="/"
      render={() =>
        <Template
          header={<Header />}
          aside={<Aside />}
          content={<Content />}
          footer={<Footer />}
        />
      }
    />
    <Route
      exact
      path="/:category"
      render={() =>
        <Template
        header={<Header />}
        aside={<Aside />}
        content={<Content />}
        footer={<Footer />}
      />
      }
    />
    <Route
      exact
      path="/:category/:id"
      render={({ match }) => (
          <Template
          header={<Header />}
          aside={<Aside />}
          content={<PostDetails  postId={match.params.id}/>}
          footer={<Footer />}
        />
        )
      }
    />
  </Switch>
)

export default withRouter(index);
