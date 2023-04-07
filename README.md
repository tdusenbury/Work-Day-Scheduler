# Work-Day-Scheduler

## Technology Used 

| Technology Used         | Resource URL           | 
| ------------- |:-------------:| 
| JavaScript | [https://day.js.org/](https://day.js.org/); 
[https://www.w3schools.com/js/js_loop_for.asp](https://www.w3schools.com/js/js_loop_for.asp); [https://www.w3schools.com/js/js_if_else.asp] (https://developer.mozilla.org/en-US/docs/Web/API/Console/log); [https://developer.mozilla.org/en-US/docs/Web/API/Console/log](https://api.jquery.com/click/#post-97); [https://api.jquery.com/click/#post-97] (https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage); [https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage] (https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

## Description 

This application is a Password Generator. The Password Generator gives the user a series of questions including how long they would like their password and whether or not to include such characters as lower case alphabet, upper case alphabet, numbers, or symbols. Additionally, if the user chooses a password length that is too short or too long, a message appears with the available options. Also, a message alerts the user if they did not choose any character options and the process begins again.




![Screenshot of My Site](images/PG%20Site.PNG)




[Visit the Deployed Site](https://tdusenbury.github.io/Work-Day-Scheduler/)


## Code Example

Utilized div id for "past", "present", and "future" to apply styles to the time-block divs. I set up a 24-hour clock in javascript that is then used by a for loop to determine what color each line should be. The div id reflects the 24-hour clock, but I maintained the am/pm version in the visible text on the planner.

```
Set up 24-hour clock:
var currentTime = dayjs().format("H");
console.log(currentTime);

Then for loop:
for(var i=8; i <= 18; i++) {
  if(i < currentTime) {
    $(`#hour-${i}`).addClass('past');
  } else if(i == currentTime) {
    $(`#hour-${i}`).addClass('present');
    console.log("I am here");
  } else if(i > currentTime) {
    $(`#hour-${i}`).addClass('future');
  }
}
```


## Usage 

This Password Generator can be used by anyone who wants to control most of the length and types of characters in a random password.


## Learning Points 

This project involved utilizing JavaScript. I tried to approach it section by section initially, but became stuck. I was able to get advice from my tutor as well as classmates and went back to writing each section followed by a console.log to test that the code was working without error. I learned about arrays and objects, random number/character generation, the types of message boxes prompts, alerts, and confirms can produce.

I struggled with this project every time I tried to move to the next part before it was ready. It took lots of testing before I was able to get my "If not truthy" alert correct if someone did not choose any options. I was trying to evaluate it as an equality not as a true/false statement.
Fortunately, a great classmate helped explain my error and helped me simplify the statement.
Here are pictures of the code that finally worked and the message it now produces if no character options are chosen:

![Screenshot of My Site](images/Code%20if%20No%20Choices.PNG)


![Screenshot of My Site](images/No%20Choices%20Made%20Message.PNG)

## Author Info


TAMARA "T" DUSENBURY
```
    I am excited to take my knowledge of various industries into the virtual realm.

* [Portfolio](https://youtu.be/bHX54GCrDB4)
* [LinkedIn](https://www.linkedin.com/in/tamara-dusenbury-02ab8591/)
* [Github](https://github.com/tdusenbury)
```
```


## Credits

Shout out to Laurie Fish for helping keep the ideas rolling and weird for more hours than we care to admit; to my tutor Katie; and to Liubov Sobolevskaya for making me think so very hard!!!


## License

MIT License

Copyright (c) 2023 tdusenbury

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.