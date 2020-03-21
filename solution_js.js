function solution(progresses, speeds) {
    var answer = [];
    let max = 0;
    let day;
    let work;
    
    let days = progresses.reduce((acc, cur, i) => {
        day = 1
        while ((cur + day * speeds[i]) < 100)
            day++;
        acc.push(day);
        return (acc);
    }, [])
    
    work = 0;
    while (days.length)
    {
        if (max < days[0])
        {
            answer.push(work);
            work = 1;
            max = days.shift();
        }
        else
        {
            work++;
            days.shift();
        }
    }
    answer.push(work);
    answer.shift();
    
    return answer;
}