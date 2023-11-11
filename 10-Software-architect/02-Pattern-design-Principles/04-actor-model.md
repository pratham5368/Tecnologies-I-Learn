## The model
The actor model is a conceptual model to deal with concurrent computation. It defines some general rules for how the system’s components should behave and interact with each other. The most famous language that uses this model is probably Erlang. I’ll try to focus more on the model itself and not in how it’s implemented in different languages or libraries.

## Actors
An actor is the primitive unit of computation. It’s the thing that receives a message and does some kind of computation based on it.

The idea is very similar to what we have in object-oriented languages: An object receives a message (a method call) and does something depending on which message it receives (which method we are calling).

The main difference is that actors are completely isolated from each other and they will never share memory. It’s also worth noting that an actor can maintain a private state that can never be changed directly by another actor.

### One ant is no ant
And one actor is no actor. They come in systems. In the actor model everything is an actor and they need to have addresses so one actor can send a message to another.

## Actors have mailboxes
It’s important to understand that, although multiple actors can run at the same time, an actor will process a given message sequentially. This means that if you send 3 messages to the same actor, it will just execute one at a time. To have these 3 messages being executed concurrently, you need to create 3 actors and send one message each.

Messages are sent asynchronously to an actor, that needs to store them somewhere while it’s processing another message. The mailbox is the place where these messages are stored.
![](https://www.brianstorti.com/assets/images/actors.png)

## What actors do
When an actor receives a message, it can do one of these 3 things:

- Create more actors
- Send messages to other actors
- Designate what to do with the next message

The first two bullet points are pretty straightforward, but the last one is interesting.
I said before that an actor can maintain a private state. “Designating what to do with the next message” basically means defining how this state will look like for the next message it receives. Or, more clearly, it’s how actors mutate state.

## Fault tolerance
Erlang introduced the “let it crash” philosophy. The idea is that you shouldn’t need to program defensively, trying to anticipate all the possible problems that could happen and find a way to handle them, simply because there is no way to think about every single failure point.

What Erlang does is simply letting it crash, but make this critical code be supervised by someone whose only responsibility is to know what to do when this crash happens (like resetting this unit of code to a stable state), and what makes it all possible is the actor model.

Every code run inside a process (that is basically how Erlang calls its actors). This process is completely isolated, meaning its state is not going to influence any other process. We have a supervisor, that is basically another process (everything is an actor, remember?), that will be notified when the supervised process crashes and then can do something about it.

This makes it possible to create systems that “self heal”, meaning that if an actor gets to an exceptional state and crashes, by whatever reason, a supervisor can do something about it to try to put it in a consistent state again (and there are multiple strategies to do that, the most common being just to restart the actor with its initial state).