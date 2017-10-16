function to calculate the equilibrum index of an array-- it returns index of an equilibrium if it exists
or -1 if it doesn't

definition of equilbrium index is:

```The integer k is an equilibrium index of a sequence A[0],A[1]..,A[n-1]
if and only if 0<= k and sum(A[0..(k-1)])=sum(A[(k+1)..(n-1)]).
Assume the sum of zero elements is equal to zero
```

To run the function pass in the array as a string into node -- `node equilibrium '[-2,3,4,5,6..]'`

caveats

- javascript numbers only go up to +2^53 -1 (and same for -ve), so if the array sum to more than that it will just not calculate
- also doesn't find _all_ the indexes, as it stops as soon as one is found. can probably tweak it to return all of them...
