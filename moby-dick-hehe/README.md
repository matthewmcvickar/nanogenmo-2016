# Moby Dick (hehe)

A juvenile remix of the classic novel.


## Concept

This is the full text of *Moby Dick* by Herman Melville with one difference: every instance of the words 'Dick' and 'sperm whale' is followed by a parenthesized chuckle.

Like this:

> "Who told thee that?" cried Ahab; then pausing, "Aye, Starbuck; aye, my hearties all round; it was Moby Dick (hehe) that dismasted me; Moby Dick (ahaha) that brought me to this dead stump I stand on now. Aye, aye," he shouted with a terrific, loud, animal sob, like that of a heart-stricken moose; "Aye, aye! it was that accursed white whale that razed me; made a poor pegging lubber of me for ever and a day!"

Check out [Chapter 36](https://matthewmcvickar.github.io/nanogenmo-2016/moby-dick-hehe/output/moby-dick-hehe.html#chapter-36.-the-quarter-deck.)—there's a lot of talk about the titular (hehe) white whale there.


## Read It

- [Pretty formatting as HTML](https://matthewmcvickar.github.io/nanogenmo-2016/moby-dick-hehe/output/moby-dick-hehe.html) thanks to [Marked](http://marked2app.com/)'s 'Upstanding Citizen' HTML export template.
- [Markdown, PDF, and raw text](https://github.com/matthewmcvickar/nanogenmo-2016/tree/master/moby-dick-hehe/output) also available.


## How I Made It

1. Grabbed the [full text of *Moby Dick* from Project Gutenberg](http://onlinebooks.library.upenn.edu/webbin/gutbook/lookup?num=2701).

1. Manually stripped the metadata so only the book text remained and removed the hard-wrap line breaks.

1. Wrote a script to insert the laughter ([generate.js](generate.js)). This script makes two passes through the text:

    - First it runs a regular expression on the entire novel, replacing instances of 'dick' and 'sperm' with a textual marker (`~LOL~`).

    - Then it tokenizes the entire novel (splitting the whole thing by spaces), stepping through word by word and replacing the `~LOL~` marker with a random chuckle.

      By doing two loops, I'm able to count the number of words since the last replacement and ramp up the laughter if there are a lot of funny words close together.

1. I took the generated text and ran a few simple find-and-replace commands to make a [Markdown version](output/Moby Dick (hehe).md).


## Running It Yourself

1. Make sure you're in this directory.

    ```sh
    cd nanogenmo-2016/moby-dick-hee
    ```

1. Run the `generate.js` script. This will process `./source/moby-dick_no-text-wrap.txt` into `./output/moby-dick-hehe.txt`.

    ```sh
    npm start
    ```
