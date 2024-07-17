# Modularity! The Unix Philosophy

*Building simple components that are easy to maintain and reuse*




## Modularity
*noun*

[The Unix philosophy](https://en.wikipedia.org/wiki/Unix_philosophy) emphasizes building simple, compact, clear, modular, and extensible code that can be easily maintained and repurposed by developers other than its creators. The Unix philosophy favors composability as opposed to monolithic design.

## Examples

### Client hires you to build a castle

<details>
<summary>So you build it...</summary>
<img src="https://imgs.search.brave.com/RKtQDUZ2zUcJAgOBHaGdw8RFlUcsDtv2rzu2-IxppBc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzE4NTM5MDE3L3Iv/aWwvNmE3OWVmLzQy/Mjc2OTY0NjcvaWxf/NjAweDYwMC40MjI3/Njk2NDY3XzZyejku/anBn" />
</details>

<br />
But then another client asks for the empire state building. If you had built it with modular components...
<br />
<br />


<details>
<summary>You could reuse your castle components...</summary>
<img src="https://imgs.search.brave.com/h23-KWBDQ3KS4i9-7Cum8EAFdkvChBa_A6UeMobIFQo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFpR2wwSy1kVkwu/anBn" />
</details>


### `Building an app as one giant file` vs `Breaking things into reusable components`

When things are in small components, it's easy to see what's imported and exported, and what the parameters are.

### `Quarantine your business logic`

When writing your application, look out for words that are related to transportation or the client and keep them only in specific areas of the code. The more they are spread around the code, the harder it will be to reuse components. For example:

the `/ui` folder and the `/helpers` folder

In most front end projects, you can have a `/ui` folder that holds components that don't know anything about what application they are in. For example a component that just renders a Select field or an arrow Icon. These can be easily reused in other projects, but only if you're careful to organize them into modular components. [UI TimeStamp example](https://github.com/kittelson/vjust-dashboard/blob/add-quick-projects-view/src/Components/TimeStamp.tsx).

Same with a `/helpers` folder. Often there are helpers that can have their business logic abstracted away so that what remains is small bits of reusable code. ([Example: service helper functions](https://github.com/kittelson/vjust-dashboard/blob/master/src/service/serviceHelper.ts))

Architecture plays a big role here, too. Keep different parts of the app in their own file trees. Example here ([Penn dot lane closure library/package](https://github.com/kittelson/freeway-closure-analysis))

## Keepin' it modular with: Abstraction

Abstraction means you only share necessary information between components. It makes things simpler to reason about if your text fields don't need to know the shape of the global data store, they just need to focus on rendering an html input and calling a handler when something changes.

[A computer science professor](https://engineering.tufts.edu/cs/people/faculty/mark-sheldon) once described abstraction to me this way: if you're emailing someone about how you're going to be late for dinner tomorrow, you don't need to say `Hey I'm going to be 30 minutes late tomorrow because my daughter is feeling sick, and when she's sick she likes to have homemade soup and my fridge is empty, so I need to go to the store...`

Having a monolithic/non-modular component is like sending all of that in the email and letting the recipient figure out what's relevant - you're going to be 30 minutes late tomorrow.

When designing components introduce abstractions, so each component only handles one task and doesn't need to know what the other tasks are.

Example:

How could we make a component like this more modular?

```js,
export default function TextInput({value, name, label, state, stateSlice}) {
    return (
        <label>
            {label}
            <input name={name} onChange={(e) => state.update({...state[stateSlice], e.target.value})} value={value} />
        </label>
    );
}
```

<details>
<summary>Maybe something like this?</summary>

```js,
export default function TextInput({value, name, label, handleChange}) {
    return (
        <label>
            {label}
            <input name={name} onChange={handleChange} value={value} /> {/* this should be easier to use in any project */}
        </label>
    );
}
```
</details>

<br />
<br />
<br />


What about something like this?

```js,
export default function TextInput({value, name, label, state, stateSlice}) {
    return (
        <label>
            {label}
            <input name={name} onChange={(e) => state.update({...state[stateSlice], e.target.value})} value={value} />
        </label>
    );
}
```


## Developing a modularity sense of smell

Your "code smell" senses might start to kick in if you see any of the following things that could lead to code that's hard to understand and reuse

1. long files
2. code that mixes...
    - ui elements and business logic
    - back end architecture or data handling with business logic
3. repeated code
4. component props like `isCurrentPageHomepage` or `isUserLoggedIn` or `isFreewaySegment`
    - if you're just rendering a chart or input or header, things can be more modular if the props are `isBold`, `withBackButton`, or `iconImg`

### What's "business logic?"
Anything that's specific to your client or use case. In our projects it's the part of the code that knows what intersections or road segments or delay is

## Keepin' it modular through... patience!

You don't have to architect everything you're going to build all up front. Just start building things, and when you see yourself writing a super long file or repeated logic, think `Huh, this is something I'm already reusing. Maybe I should add extra abstraction so this can be used anywhere in the project, or in ANY project!`

## Modularity - so what?

Imagine this...

<details>
<summary>We start building modular components...</summary>
    <details>
        <summary>Which work super well and save us and our clients time...</summary>
        <details>
            <summary>Which brings down the cost of transportation infrastructure...</summary>
            <details>
                <summary>Which increases government competence...</summary>
                    <div>And ultimately restores faith in democracy itself.</div>
                    <iframe src="https://giphy.com/embed/RCtKcMeeIlIFskmH7C" width="480" height="274" style="" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
            </details>
        </details>
    </details>
</details>
