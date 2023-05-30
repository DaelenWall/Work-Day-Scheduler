# Work-Day-Scheduler
UConn Bootcamp Chapter 5 Third Party APIs Challenge

## Description
In this chapter 5 challenge I took my knowledge of Third Party APIs and used it to create a Work Day Scheduler.  I now have a valuable asset to use in my journey towards becoming a web developer as I can use this Work Day Scheduler for projects or as a part of my coding portfolio.


## Process
* The first thing I did after creating the repository was installing 'day.js' so that I could create my time and date functions.  I also added in the base files that were already written out (index.js and style.css).
![tpasidebarimg](https://github.com/DaelenWall/Work-Day-Scheduler/assets/122398507/0c08f685-f775-402e-98db-bdab1a5d04c8)


* The next step was to sort out my index.html, which only had example time-blocks.  I made sure the tenses were removed and that the times were accurate military times.  Otherwise the day.js wouldn't parse correctly.
![tpatimeblocks](https://github.com/DaelenWall/Work-Day-Scheduler/assets/122398507/82eaf52a-dee1-4283-a1e7-9b642eb40a38)


* Next, I started my script.js by adding in a click function that saved event text to local storage. Then, I had to add an each function that displayed event values that had been saved in the local storage.  This meant, even if the page was closed and then reopened, the events would still display.
![tpaclickfunctionimg](https://github.com/DaelenWall/Work-Day-Scheduler/assets/122398507/59ddc139-0d65-4b82-83b0-35c2d7b540f9)


* The next step was to add in my liveTime function that displayed the time at the top of the webpage.  I used day.js syntax to accurately display the time and date.  I then needed to add a ticker that counted up by 1 second (every second).
![tpalivetimeimg](https://github.com/DaelenWall/Work-Day-Scheduler/assets/122398507/c0aad8e6-a368-4cd8-8b6d-9969009f8f71)


* Finally, I added in an if loop for coloring time blocks based off currentTime.  Red, Green, and Grey for Past, Future, and Present, respectively.
![tpaifloopimg](https://github.com/DaelenWall/Work-Day-Scheduler/assets/122398507/dbed676a-4fb7-4ab4-bd1d-9f5e18de8b41)


## Conclusion
Overall, this was a very useful and fun project to work on.  I enjoyed using the 'day.js' extension and the action of displaying live time and date was very interesting to me.  It was difficult for me to get the if loop fully functional, but it was all worth it in the end.
