# Work-Day-Scheduler

## Technology Used 

| Technology Used         | Resource URL           | 
| ------------- |:-------------:| 
| JavaScript | [https://day.js.org/](https://day.js.org/);  [https://www.w3schools.com/js/js_loop_for.asp](https://www.w3schools.com/js/js_loop_for.asp); [https://www.w3schools.com/js/js_if_else.asp](https://www.w3schools.com/js/js_if_else.asp); [https://developer.mozilla.org/en-US/docs/Web/API/Console/log](https://developer.mozilla.org/en-US/docs/Web/API/Console/log); [https://api.jquery.com/click/#post-97](https://api.jquery.com/click/#post-97); [https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage); 
## Description 

This is a Work-Day Schedule application to keep track of events on a single day. The events are held in local storage so they remain as long as they are saved even after a refresh of the screen. Additionally, the hours of the day are color coded to past, present, and future so the user can easily determine what appointment/task is scheduled for the current hour, which are late, and those to come.




![Screenshot of My Site](images/Screen%20Pic%20Scheduler.PNG)




[Visit the Deployed Site](https://tdusenbury.github.io/Work-Day-Scheduler/)


## Code Example

Utilized div id for "past", "present", and "future" to apply styles to the time-block divs. I set up a 24-hour clock in javascript that is then used by a for loop to determine what color each line should be. The div id reflects the 24-hour clock, but I maintained the am/pm version in the visible text on the planner. Additionally I added a "Before Work" and "After Work" line as a placeholder for taking an application like this to the next logical place, a digital planner.

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

This scheduler might be useful for someone who wanted to deal with just a single day, but it really is the basis for creating a multi-day digital planner/organizer. This layout would be especially helpful to those people who prefer or need visual colors to help with their organization.

## Learning Points 

The most significant learning point for me with this project was getting the local storage to work. I learned about rechecking if it is a class or an id and how to format those items. Also, if you change how you refer to something, remembering to change it in all the places. 

I knew what I needed to do to change the colors, but I struggled with writing the for loop. Here I learned that talking to my classmates was very helpful. I was able to walk through my pseudocode with a classmate who was more familiar with the coding. By going over my pseudocode with me, she knew that I understood what needed to happen (half the battle at least!!) and helped me develop code walking through those steps.


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

Shout out to Laurie for helping it funny; and to Liubov for cheering along when I finally fix the thing!!!


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