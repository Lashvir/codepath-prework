# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Hiram E. Vasquez Padilla

Time spent: 5 hours spent in total

Link to project: https://glitch.com/edit/#!/incandescent-mountainous-replace || https://incandescent-mountainous-replace.glitch.me/

## Required Functionality

The following **required** functionality is complete:

* [ ] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [ ] "Start" button toggles between "Start" and "Stop" when clicked. 
* [ ] Game buttons each light up and play a sound when clicked. 
* [ ] Computer plays back sequence of clues including sound and visual cue for each button
* [ ] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [ ] User wins the game after guessing a complete pattern
* [ ] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [ ] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [ ] Buttons use a pitch (frequency) other than the ones in the tutorial
* [ ] More than 4 functional game buttons
* [ ] Playback speeds up on each turn
* [ ] Computer picks a different pattern each time the game is played
* [ ] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
This first gif is not fully loading, the link I used >http://g.recordit.co/a9NBtGtChi.gif fully plays but not on Github
![](http://g.recordit.co/a9NBtGtChi.gif)
![](http://g.recordit.co/s3BhhueDK1.gif)
![](gif3-link-here)
![](gif4-link-here)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
[   
1. W3schools>>>https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_countdown 
    2. Mozilla>>>https://developer.mozilla.org/en-US/docs/Web/API/setInterval
    3. W3schools in general>>>https://www.w3schools.com/js/js_intro.asp]

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
[In this project the biggest challenge was correctly implementing a countdown timer. I was not familiar with "setInterval()" and had to try a few different things to get the hang of it. By this I mean the setInterval() itself and making the site update the timer in real time so the player can see it. DOM helped a lot on that end, after some testing I used it to update the html to show the player the timer live. I used examples and read up on this on W3schools to get a base for it and then just experimented. The trickiest part was learning where to call the setinterval and clear it too. Initially I had multiple calls to it and calls at incorrect places but little by little I figured out where to call and clear it.]

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
[Algorithms. Algorithms are something I personally feel that I do not know enough about. Besides algorithms I have questions about how security is handled and how the entire web app comes together, there is a lot going on in a web app from different programs written in different languages that have to come together and work hopefully without bugs. I also have more questions but are related more to asking about practical experience.]

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
[First thing I would do is clean up the web page and make it more pretty like improving the visual of the timer editing the header and visually improve the game button area. I would add a light/dark mode(my preference is dark) and change a the layout of the page too. Second thing I would do is experiment with adding custom sounds and then cleaning up some of my code, I believe that there are some things in the css that can be deleted since it is redundant or unnecessary. Same thing in the JS and HTML, I think there are some things that are probably redundant and can be removed.]



## Interview Recording URL Link

[My 5-minute Interview Recording](https://www.loom.com/share/ceefe83aec334d28b925eb76b5f42031)


## License

    Copyright Hiram E. Vasquez Padilla

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
