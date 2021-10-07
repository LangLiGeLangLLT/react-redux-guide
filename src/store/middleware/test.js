export default store => next => action => {
  console.log('test 中间件被执行了');

  next(action)
}
