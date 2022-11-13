# The .call() method
-------
### Using the .call() method to borrow a method from another Object

[Read the code here](./call_method.js)

Notes about the .call() method:

The ***.call() method*** is a function method that allows us to borrow objects methods from a certain object to another object. It excludes the need to repeat the code when creating similar objects that has similar methods.

The number of arguments that the ***.call()*** method will receive will depend on the original method that we are borrowing, but the important point here is that ***the first argument will always be the name of the object that we are borrowing the method. It means that the .call() method will always have at least one argument. The others arguments will be the arguments to attend the parameters of the original method if it is necessary.***

**The following sequence of what happened in the code above:**

- We called the ***book method*** using `qatarAirlines.book`
- As ***book*** is also a function so we were able to use the ***.call()*** method - Here we are saying: <ins>"Hey, qatarAirlines, can you borrow your ***book*** method so that i can use it in my new Airline?”</ins>
- The we pass as the first argument the ***emiratesAirline***, it says to the code that we are borrowing the ***book*** method from the ***qatarAirlines*** to use in the ***emiratesAirline.***

#### This repository is in my #100-Days-Of-Code Challenge log
[100-Days-Of-Code log](https://github.com/Holiv/100DaysOfCode/blob/main/log.md)

Complete information about .call() method [here](https://nostalgic-judge-413.notion.site/The-Complete-JavaScript-Course-8c76c6a65eee4faeb8fdcd0f30bdc3a4) (Notion)