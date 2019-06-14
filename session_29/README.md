### Currying and partials

1. Until now we have only been talking about binding this. Let’s take it a step further. We can bind not only this, but also arguments. That’s rarely done, but sometimes can be handy.
2. The full syntax of bind: let bound = func.bind(context, arg1, arg2, ...);
3. That’s called partial function application – we create a new function by fixing some parameters of the existing one.
4. For instance, we have a function send(from, to, text). Then, inside a user object we may want to use a partial variant of it: sendTo(to, text) that sends from the current user.

### Currying

