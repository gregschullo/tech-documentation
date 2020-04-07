---
id: markdown-syntax
title: Markdown Syntax
---

Markdown

Processed

Emphasis

 

Emphasize or itallics

*Emphasize* _emphasize_

 

 

Bold or Strong

**Strong** __Strong__

 

Some WordPress.com themes may have different formatting for these styles

Inline Links

A [link](http://example.com "Title").

Most browsers show the title text when hovering over a link.

Please note that WordPress shortcodes, like [video] or [audio], will take priority over Markdown links and shouldn’t be used for link text.

A link.

Referenced Links

Some text with [a link][1] and

another [link][2].

 

[1]: http://example.com/ "Title"

[2]: http://example.org/ "Title"

The reference section can be anywhere in the document

Some text with a link and another link.

Inline Images

Logo: [Alt](/wp.png "Title")

The “Alt” text (alternative text) makes images accessible to visually impaired

Logo: 

Referenced Images

Smaller logo: [Alt][1]

 

[1]: /wp-smaller.png "Title"

Smaller logo: 

Linked Images

Linked logo: [[alt text](/wp-smaller.png)]

(http://wordpress.com/ "Title")

Linked logo: 

Footnotes

I have more [^1] to say up here.

 

[^1]: To say down here.

Footnotes will be added to the bottom of the document, with a link back to the original reference

I have more 1 to say up here.

 

 

Line breaks

<\br>

\

Line

Break

Line  (<-- two spaces)

Break

Bullet Lists

* Item
* Item
- Item
- Item

• Item
• Item
• Item
• Item

Numbered Lists

1. Item
2. Item

    1. Item
    2. Item

Mixed Lists

1. Item

2. Item

   - Mixed
   - Mixed  

3. Item

            1.         Item

            2.         Item

            ◦           Mixed

            ◦           Mixed

            3.         Item

Blockquotes

> Quoted text.
> > Quoted quote.
> * Quoted 
> * List

Quoted text.

Quoted quote.

- Quoted
- List

Pre-formatted

  Begin each line with 

  two spaces or more to 

  make text look

  e x a c t l y 

  like  you  type i

  t.

Begin each line with 

two spaces or more to 

make text look

e x a c t l y 

like  you  type i

t.

Code

`This is code`

This is code

Code block

~~~~

This is a 

piece of code 

in a block

~~~~

```
This too
```

Syntax highlighting

```css
#button {

    border: none;
}
```

#button {
    border: none;
}

Headers

# Header 1

## Header 2

### Header 3 

#### Header 4 ####

##### Header 5 #####

###### Header 6 ######

Closing hash marks are optional on all levels

 

Header 1

Header 2

Header 3

Header 4

Header 5

Header 6

Definition Lists

Using Markdown

GitHub Enterprise uses a syntax called Markdown to help you add basic text formatting to Issues, Pull Requests, and files with the .md extension.

Commonly Used Markdown Syntax

# Header

The # indicates a Header. # = Header 1, ## = Header 2, etc.

* List item

A single * or - followed by a space will create a bulleted list.

**Bold item**

Two asterix ** on either side of a string will make that text bold.

- [ ] Checklist

A - followed by a space and [ ] will create a handy checklist in your issue or pull request.

@mention

When you @mention someone in an issue, they will receive a notification - even if they are not currently subscribed to the issue or watching the repository.

#975

A # followed by the number of an issue or pull request (without a space) in the same repository will create a cross-link.

:smiley:

Tone is easily lost in written communication. To help, GitHub allows you to drop emoji into your comments. Simply surround the emoji id with :.