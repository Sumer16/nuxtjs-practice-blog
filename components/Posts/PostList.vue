<template>
  <section class="post-list">
      <PostPreview 
      id="1"
      :is-admin="isAdmin" 
      thumbnail="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
      title="Hello there!" 
      previewText="Falana Dikana" />
      <PostPreview 
      id="2" 
      :is-admin="isAdmin"
      thumbnail="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
      title="Hello there again!" 
      previewText="Falana Dikana" />
      <PostPreview 
      id="3" 
      :is-admin="isAdmin"
      thumbnail="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
      title="Hello there again now!" 
      previewText="Falana Dikana"/>
    </section>
</template>

<script>
import PostPreview from '@/components/Posts/PostPreview'

export default {
  components: {
    PostPreview
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}
</style>