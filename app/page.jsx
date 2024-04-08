import React from 'react'

const HomePage = () => {
  return (
    <div>
      <h1>Home page</h1>
      <h2>CI/CD pipeline   created.   +</h2>
      <h3>NGINX in place,  proxy from 3000 to 80(single app)  + </h3>
      <h3>Domain name updated(propagated)  + </h3>
      <h3>SSL Cert Bot in place.  + </h3>
      <h3> Replicate for remaining sites, to ensure GHA workers and nginx and CertBot will  works isolated  and as expected - </h3>
    </div>
    
  )
}

export default HomePage