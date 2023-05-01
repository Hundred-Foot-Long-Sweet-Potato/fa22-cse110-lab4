1. Prints out "3". prices.length is 3 so when it hits 3 it will break the for loop, hence i is 3.
2. Prints "150" The final discounted price is 150 as 300 * 0.5 is 150.
3. Prints "150" This is still 150 because we just multiplied a whole number by 100 rounded it and then divided.
4. It will return an array of all the prices discounted. discounted is within scope so all values is stored nicely. [50,100,150]
5. Error It won't print anything as let i means it will be out of scope
6. Error DiscountedPrice is still out of scope and nothing will print.
7. It will print out 150 because that is the last final price. This is also in scope.
8. It will return the same array as Q4 as returning a let is no different than returning a var when they are both in scope. [50,100,150]
9. This is the same error as 5 as it is still a let and still out of scope.
10. You get 3. This const never gets an new assignment so no error would occur.
11. You will just get the same array as 4. Const is still within scope.[50,100,150]
12. 
12a - student.name
12b - student['Grad Year']
12c - student.greeting()
12d - student['Favorite Teacher'].name
12e - student.courseLoad[0]
13.
13a - 32, mapped integer 2 into a string and then concatenated since "3" is first and "+" works as append
13b - 1, mapped string into integer as strings don't have a "-" operator so it 
13c - 3, mapped null into an integer which is just 0.
13d - 3null, mapped null into a string just due to priorities
13e - 4, mapped boolean into an integer as it doesn't have a "+" operator
13f - 0, mapped both into integers
13g - 3undefined, mapped undefined into a string and then appended
13h - NaN, integers adding/subtracting by undefined will result in Not a Number
14.
14a - true, as '2' becomes a number and then is compared
14b - false, compared '2' with the '1' in '12' and 2 is in fact greater than 1.
14c - true, turns '2' into 2
14d - false, "===" Checks equality without type conversion and since we are comparing 2 different types it's false.
14e - false, changes true into 1 and realises that 1 is not equal to 2.
14f - true, Boolean(2) treats 2 as 1 (I guess because it's greater than 1 it just floors it) and since it uses the Boolean() function it has the boolean type. In boolean 1 === 1
15. "==" attempts to check equality even if the variables have different types. "===" checks equality with no conversions at all to types
17. Go to modifyArray -> Iterate through array length (3 times) -> Each loop call dosomething with array[i] (This goes through the array) -> do something returns the number * 2 -> Push that new number into a new array -> Return new array. Final Result: [2,4,6]