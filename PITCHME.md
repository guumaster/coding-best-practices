
# Good Coding Practices
---
## What is Bad Code?
+++

### Readability
1. Un-consistent naming scheme (code and files)
2. Too deep nesting
3.  Abusing the language (ex: nested ternary operators)
4. Infinite line length
5. Not meaningful names (or too short/long)
6. No line separation


+++?code=code/readability_bad.js&lang=javascript&title=Readability Bad
@[1](Function name and parameters don't show meaning or intention)
@[2](Var name not meaningful)
@[4-6]("Magic value" lost in middle of code, not reusable)

+++?code=code/readability_good.js&lang=javascript&title=Readability Good

+++
### Comments
1. Zero comments
2. Too extensive (if you need to explain much, is sign of bad code)
3. Captain Obvious
4. Calendar reminder or blaming comments
5. Mark ending of functions


+++?code=code/comments_bad1.js&lang=javascript&title=Comments Bad
@[1-2](Captain Obvious attack)
@[4](Not needed, any IDE can mark this better)
@[6-7](This info already is on GIT, not useful here)
@[9-13](Funny, consider standup comedy instead of programming)

+++?code=code/comments_bad2.js&lang=javascript&title=Comments Bad (cont)
@[1-10](Developers wasting 42 hours?)


+++
### Code smells
1. God class/method
2. Duplicated code
3. Too many parameters
4. Dead code

+++?code=code/dead_code.js&lang=javascript&title=Dead Code
@[3-6](Don't leave this commented out, remove it!)
@[10](If your IDE shows you unused methods, remove them)


---
## Creating Good Code
+++

### General rules
1. Follow language standard conventions
2. Choose a set of rules and guidelines and stick to them
3. Keep it simple. Simpler is always better. Reduce complexity as much as possible
4. Boy scout rule. Leave the campground cleaner than you found it.
5. Don't sacrifice clarity for efficiency.
+++

### Readability tips
1. Be consistent. If you do something a certain way, do all similar things in the same way.
2. Use explanatory variables.
3. Group concept together. Leave a blank line when you start a different thing.
4. Keep lines short.
+++

### Names rules
1. Choose descriptive and unambiguous names.
3. Use pronounceable names.
4. Use searchable names.
5. Replace magic numbers with named constants.
+++

### Functions rules
1. Small.
2. Do one thing.
3. Use descriptive names. Show intention.
4. Prefer fewer arguments. Avoid four arguments or have a good justification for it.
5. Do something, return something.
6. Have no side effects.
+++

### Comments rules
1. Least as possible. Always try to explain yourself in code.
2. Don't be redundant or add obvious noise.
4. Don't comment out code. Just remove.
5. Use as clarification of code.
6. Use as explanation for weird cases.
7. Use to explain why the code is doing something, and not what is doing.
+++

### Versioning guidelines
1. Short and meaningful commit messages.
2. Keep your commits polite and clean.
3. Write what the commit will do once applied. No past tense.
4. Semantic messages.
5. Reference your Issue tracker if you are using one.

+++
### Versioning guidelines (cont.)
6. Explain _what_  and  _why_  and not _how_.
7. Rebase your branch before merging.
8. Use feature branches.
9. Separate your commits properly.
10. Do a quick review of your code before pushing.  
11. Avoid `git add .` all the time. You are the first reviewer.
---


## How to stay in the Good Track
+++

### Dev Tools
- Quality and Style tools (Editorconfig, StandardJS, ESLint)
- Good IDE (VSCode, WebStorm, JetBrain IDEs)
+++

### Automation
- Pass the linter on every commit. Even before tests (GitlabCI)
- Submit your code to an static analyzer (Codeclimate, SonarQube, etc)
- Add semantic-release to your pipeline.
- Generate automatic `CHANGELOG` file. 
+++

### Code Review
- Only review after automatic check already past (linter, tests).
- Read carefully. Take your time to understand what's changed.
- Look for signs of bad code or code smells.
- Look for inconsistencies that may have pass the linter.
+++

### Code Review (cont.)
- Ask questions. Suggest changes.
- Do in-person review if:
	- Changes is too big or complex. 
	- There is a difference in experience or expertise. 
- Always be positive in your comments.
+++

### Pair Programming
- Plan and discuss briefly before coding.
- When driving always communicate what your are doing. 
- When navigating be alert and pay attention.
+++

### Pair Programming (cont.)
- Disagreement is good, talk it through, find the best solution.
- Don't do it for long period of time.
- Exchange roles of driver/navigator.
+++


@snap[midpoint]
# Thanks!
@snapend
