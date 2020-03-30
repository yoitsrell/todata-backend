/********************
 * HELPER FUNCTIONS *
 ********************/
const getTodoName = function(todo) {
  return todo.text
}
const getCompleteness = function(todo) {
  return todo
}
const getPriority = function(todo) {
  return todo.priority
}
const isComplete = function(todo) {
  return todo.complete
}
const isHighPriority = function(todo) {
  return todo.priority > 1
}

/***********************
 * ITERATION FUNCTIONS *
 ***********************/
const names = function(array) {
  return array.map(getTodoName)
}
const priorities = function(array) {
  return array.map(getPriority)
}
const namesAndPriorities = function(array) {
  return array.map(getTodoName + ' ' + getPriority)
}
const justNotComplete = function() {}
const justComplete = function() {}
const priority2Only = function() {}
const priority1Only = function() {}


module.exports = {
  getTodoName,
  getCompleteness,
  getPriority,
  isComplete,
  isHighPriority,
  names,
  priorities,
  namesAndPriorities,
  justNotComplete,
  justComplete,
  priority2Only,
  priority1Only,
}
