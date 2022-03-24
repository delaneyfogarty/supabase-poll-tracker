## The Golden Rule:

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1) **Make a drawing of your app. Simple "wireframes"**
1) **Look at the drawing and name the HTML elements you'll need to realize your vision**
1) **Look at the drawing and imagine using the app. What _state_ do you need to track?**
1) **For each HTML element ask: Why do I need this? (i.e., "we need div to display the results in")**
1) **Once we know _why_ we need each element, think about how to implement the "Why" as a "How" (i.e., `resultsEl.textContent = newResults`)**
1) **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change? Does any DOM update?**
1) **Think about how to validate each of your features according to a Definition of Done. (Hint: console.log usually helps here.)**
1) **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

Additional considerations:
- Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
- Consider your data model.
  - What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need?
  - What are the key/value pairs?
  - What arrays might you need?
  - What needs to live in a persistence layer?
- Is there some state we need to initialize?
- Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be reused?)


## MY PLAN
1.) Set up supabase table with appropriate columns, add RLS enable ALL policy, and change email confirmation settings.
    - input cdn in html
2.) Create Wire frame.
3.) Create poll folder with poll html and js - add .. to all hrefs in html.
4.) HTML SETUP
1.) Div - current poll
  A. H1 for current question
  B. Div - display option1 and option 1 votes
  C. Div - display option2 and option 2 votes
2.) Voting buttons for option 1 (+/-) and voting buttons for option 2 (+/-)
3.) Publish poll button
4.) Div - current poll form
 A. Input for question within label tag
 B. Label inputs for option1 and option2
 C. Submit button

5.) Section for past polls
 A. H1 for question
 B. Div - display option1 and option 1 votes
 C. Div - display option2 and option 2 votes
5.) STATE
  A. Local - current poll
  B. Supabase - past polls
6.) EVENTS
  A. question and inputs go into a div for users to interact with
    1.) update form in state and then clear it out
  B. User clicks finish poll
    1.) Clear everything out
    2.) send results to supabase to add a row to past polls table
    3.) clear out DOM, refetch past polls, render and append
  C. + and - buttons
    1.) votes for chosen option increment or decrement
    2.) update display with new votes
  D. ON LOAD
    1.) fetch, render, and append past polls FOR THAT USER



