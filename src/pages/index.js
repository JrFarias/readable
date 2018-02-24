import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import Template from '../templates'
import Header from '../organisms/Header/Header'
import Aside from '../organisms/Aside/Aside.container'
import Content from '../organisms/Content/Content'
import Footer from '../organisms/Footer/Footer'
import PostDetails from '../organisms/Posts/molecules/PostDetails/PostDetails.container'
import NotFound from '../atoms/NotFound/NotFound'

const index = () => {

  return (
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
      path="/404"
      render={() => (
          <Template
          header={<Header />}
          aside={<Aside />}
          content={<NotFound />}
          footer={<Footer />}
        />
        )
      }
    />
    <Route
      exact
      path="/post/add"
      render={() => (
          <Template
          header={<Header />}
          aside={<Aside />}
          content={<PostDetails />}
          footer={<Footer />}
        />
        )
      }
    />
    <Route
      exact
      path="/:category?"
      render={({ match }) => (
        <Template
          header={<Header />}
          aside={<Aside />}
          content={<Content category={match.params.category} />}
          footer={<Footer />}
        />
      )}
    />
    <Route
      exact
      path="/:category/:postId"
      render={({ match }) => (
          <Template
          header={<Header />}
          aside={<Aside />}
          content={<PostDetails  postId={match.params.postId}/>}
          footer={<Footer />}
        />
        )
      }
    />
  </Switch>
)
}

export default withRouter(index);
