export default function (context) {
  console.log('auth');
  if(!context.store.getters.isAuth) {
    context.redirect('/admin/auth');
  }
}