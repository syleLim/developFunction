Developping function
===

## Explain
Your team is progressing imporvement of functions. Each functions can be applied in service when progressing percentage reaches 100%.<br><br><br>

Also, because times that need to develop each functions are different, a function positioned back is developped first. if that, this function is published when a function positioned front is published.<br><br><br>

inputs are array of progressing percentages of developping function in order and array of each speeds of developping function.
write a function that returns how many functions are published at one time.<br><br><br>

CONSTRAINT
 - progresses, speeds length is 100 or less.
 - progressing percentage is natural number 100 less.
 - developing speed is natural number 100 or less.
 - publishing can be a time by a day, end of day. For example, 95% progressing percentage function, speed is 4%, pusblishing 2 day after. <br><br><br>

Ex >
|progresses|speeds|return|
|:---|:---|:---|
|[93, 30, 55]|[1, 30, 5]|[2, 1]|

first function is 93%, speed is 1%, so can be published 7 days after.<br>
second function is 30%, speed is 30%, so can be published 3 days after. but first function not end up yet, so published 7 days after with first function.<br>
third is 55%, speed is 5%, so can be published 9 days after.<br>
As a result, first publishing includes 2 functions at day 7, and second publishing includes 1 function at day 9.

source : https://programmers.co.kr/learn/courses/30/lessons/42586
출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
