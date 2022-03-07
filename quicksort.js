const quicksort = list => 
{
    if(list.length == 0) 
    {
        return [];

    }
    var left = []
    var right = []
    var pivot = list[0]
    for (var i = 1; i < list.length; i ++) 
    {
        if(list[i] < pivot) 
        {
            console.log("moving to the left ")
            left.push(list[i]) 


        }
        else 
        {
            console.log(" moving to the right ")
            right.push(list[i])

        }

    }
    return quicksort(left).concat(pivot, quicksort(right));



}
console.log(quicksort([9,8,88,7,6]))