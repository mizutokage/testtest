<template>
  <div>
    <section>
      <v-parallax :src="post.thumbnail.url" height="600">
        <v-layout
            column
            align-center
            justify-center
            class="white--text"
        >
          <h1 class="white--text mb-2 display-2 text-xs-center">{{post.title}}</h1>
          <p class="white-text text-xs-center subheading">{{ post.description }}</p>
        </v-layout>
      </v-parallax>
    </section>
    <v-content>
      <v-container>
        <v-layout row wrap justify-center>
          <v-flex xs12 md8>
            <p>{{ post.content }}</p>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </div>
</template>

<script>

  export default {
    name: 'PostDetail',
    data: () => ({
      post: {
        title: "sample title",
        description: "sample description",
        content: "amet, consectetur adipisicing elit. Culpa debitis dolores eius facilis officiis quo unde velit. Ab accusantium aperiam commodi cupiditate dignissimos eius eum sequi sunt tempore, vero voluptas.Consequuntur deleniti doloremque eius incidunt modi non repellendus sapiente ut vel. Autem neque, ullam. Atque aut eveniet, exercitationem illo illum inventore molestias numquam, optio quas recusandae, repellendus suscipit tenetur vero?Blanditiis consequuntur deserunt dolor ducimus modi necessitatibus, odit placeat quaerat quia saepe sequi unde ut voluptate? Aspernatur consectetur, dignissimos eaque fuga in laborum odit, quibusdam rem rerum sed sit soluta?Aliquam atque deleniti dolorem laborum maxime voluptates? A architecto, corporis earum explicabo fugiat labore porro velit! Adipisci at consequatur, error eveniet, laboriosam minus nemo nihil numquam quisquam rerum sequi temporibus.Deleniti, fuga, quibusdam! Aspernatur commodi cum doloremque esse est eum illo inventore ipsum itaque laborum molestias mollitia nostrum, odio officiis omnis perspiciatis possimus quia quidem recusandae tempore vero voluptate voluptates.",
        thumbnail: {
          url: "https://picsum.photos/1200/600?image=90"
        }
      }
    })
  }
</script>

<style>
  .v-parallax__image {
    opacity: 1!important;
  }
</style>
