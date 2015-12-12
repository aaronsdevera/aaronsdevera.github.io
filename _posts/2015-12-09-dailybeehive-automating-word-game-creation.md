---
layout: post
title: @dailybeehive- Automating Word Game Creation
---

There is a word game that appears every Sunday in the New York Times Magazine called "Spelling Bee" that I like to play (especially when one of my sisters is around to compete against). I'm not too sure of the origins; created each by Frank Longo, there doesn't seem to be too much information online about the game or its history.

I like this game so much I stacked up the whole summer's worth of NYT Mag just to blow through the puzzle. Without many online resources about the game, there aren't many places to get new puzzles, and I have to wait until I visit my parents to play. Frustrating!

So I decided to create my own: Daily Beehive, a daily automated word puzzle that [will be posted on Twitter @dailybeehive](http://www.twitter.com/dailybeehive).

## Rules
- Make as many words as possible
- All words must use the center letter at least once
- Letters can be used multiple times
- No proper nouns (so no names, places, companies)
- Words must be longer than 5 letters (In Longo's games this minimum word would vary dependent on puzzle difficulty).

## Making the game 
Using a handful of past games, I started out looking for patterns in the letters Longo selected. My strategy was to track the [letter frequency](https://en.wikipedia.org/wiki/Letter_frequency) of the letters Longo used. A letter with high letter frequency means it is more likely to appear in words, conversations, and writing. It makes sense to me that it would be easier to create words with high letter frequencies, with puzzle difficulty dependent on the lwoer frequncy letters included in the puzzle. 

With RStudio I analyzed the freuencies of past letter Longo has used, discriminating for consonants, vowel, and center letters in the puzzles. Each letter type had an average frequency that would be useful in generating new letters (below).

<table>
  <thead>
    <tr>
      <th>Letter type</th>
      <th>Avg. Letter Frequency</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Consonants</td>
      <td>4.9</td>
    </tr>
    <tr>
      <td>Vowels</td>
      <td>8.5</td>

    </tr>
    <tr>
      <td>Center Letter</td>
      <td>0.9</td>
    </tr>
  </tbody>
</table>

So if I wanted to pick some consonant letters for a new puzzle, each individual letter frequency would be in the ballpark of 4.9. For this method, this would mean developing an allowance based on the statical variation (you see this in political polling all the time: 4.9 ± .5 or so). However I chose to instead set a minimum threshold for these average frequencies, meaning that the average of each group of consonants picked for a new puzzle will be 4.9 or above. This will make the puzzle consistently less difficult for now, but that could be good for audience onboarding. These thresholds are easy to tweak, so I developing more diffuclty puzzles will as easy as tweaking the parameters in the algorithm.

## Python Stack
The generation of letters was created with Python. Basically I created rand functions that pick consonants, vowels, and center letters, with each function checking for the letter frequency parameters discussed above. With a list of letters and frequencies I can track the frequencies pretty easily, checking for quality and difficulty along the way. One way I measure difficulty is ALF, which stands for Average Letter Frequency. This is determined by taking the letter frequency of each letter found in a single game and finding the average. Since it is easier to make words with higher letter frequencies, games with higher ALF will be easier than games with lower ALF. After generating the letters, the Python script uses the python-twitter library to then format the post. With some crude ASCII generation, I insert the selected letters into a hive shape.

![@dailybeehive Twitter profile, where puzzles are generated daily.](../../../../public/img/post_img/2015-12-09-dailybeehive-automating-word-game-creation.png "@dailybeehive Twitter profile, where puzzles are generated daily.")

##### *@dailybeehive Twitter profile, where puzzles are generated daily.*

## Free and open-source
I may continue to tweak the game, and I welcome anyone to [visit the source code on GitHub](https://github.com/aaronsdevera/dailybeehive). Currently the dailybeehive stack is designed to update and run everyday; It'll be interesting to see what it turns out, and comapre the playability to gamemaster Longo's work! 