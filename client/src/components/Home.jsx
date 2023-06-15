import React from 'react'

const Home = () => {
  return (
    <div class='home'>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="https://www.google.com/">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="https://www.google.com/">Home <span class="sr-only"></span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="https://www.google.com/">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="https://www.google.com/">Pricing</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="https://www.google.com/">Disabled</a>
      </li>
    </ul>
  </div>
</nav>
</div>
  )
}

export default Home