export default function (context) {
  console.log('checck-auth');
  context.store.dispatch('initAuth', context.req);
}