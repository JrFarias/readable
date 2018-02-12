import React from 'react'
import Template from '../templates'
import Header from '../organisms/Header/Header'
import Aside from '../organisms/Aside/Aside.container'
import Content from '../organisms/Content/Content'
import Footer from '../organisms/Footer/Footer'
import { Route } from 'react-router-dom'

const index = () => (
  <Route
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
)

export default index;
