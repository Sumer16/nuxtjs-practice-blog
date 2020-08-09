<template>
  <div class="home-page">
    <section class="intro">
      <h1>Get the latest tech news</h1>
    </section>
    <section class="featured-posts">
      <nuxt-link v-bind:to="'/posts/' + 1" class="post-preview">
        <article>
          <div class="post-thumbnail" style="background-image: url('https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')">
          </div>
          <div class="post-content">
            <h1>Post Title 1</h1>
            <h1>Falana Dikana</h1>
          </div>
        </article>
      </nuxt-link>
      <nuxt-link v-bind:to="'/posts/' + 2" class="post-preview">
        <article>
          <div class="post-thumbnail" style="background-image: url('https://images.pexels.com/photos/193349/pexels-photo-193349.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')">
          </div>
          <div class="post-content">
            <h1>Post Title 2</h1>
            <h1>Dikana Falana</h1>
          </div>
        </article>
      </nuxt-link>
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-position: center;
  background-size: cover;
  text-align: center;
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}

.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.post-preview {
  border: 1px solid #ccc;
  box-shadow: 0 2px 2px #ccc;
  background-color: white;
  width: 90%;
}

a {
  text-decoration: none;
  color: black;
}

@media (min-width: 850px) {
  .post-preview {
    width: 400px;
    margin: 10px;
  }
}

.post-thumbnail {
  width: 100%;
  height: 200px;
  background-position: center;
  background-size: cover;
}

.post-content {
  padding: 10px;
  text-align: center;
}

a:hover .post-content,
a:active .post-content {
  background-color: #ccc;
}
</style>
