"""
Create a class of Integrator which numerically integrates the function f(x)=x^2 * e^−x * sin(x).

You need to provide the class with the minimum value xMin, maximum value xMax and the number of steps N for integration.
Then the integration process should be carried out accroding to the below information.

Suppose that S=∫(xMin to xMax)f(x)dx ≈ ∑(from i = 0 to N−1)0f(xi)Δx
Δx=(xMax−xMin)/(N−1)
xi=xMin+iΔx.

The class is composed of three methods: _init_, integrate and show:

1. The method of _init_ should initialize the xMin, xMax, N and other

related parameters .

2. The method of integrate should perform the integration process with the given parameters.

3. The method of show should print on the screen the result of integration.

The starter file has been attached. Fill the blank and run the code.


Assign the parameters with value: xMin =1, xMax =3, N = 200.

The result of integration of f(x) equals to (5 digital of accuracy):


"""

import numpy as np
import math

class Integrator:
    def __init__(self, xMin, xMax, N):
        self.xMin = xMin
        self.xMax = xMax
        self.N = N
        self.result = 0

    def fx(self, x):
        return np.square(x) * np.exp(-x) * np.sin(x)


    def integrate(self):
        deltaX = (self.xMax - self.xMin) / (self.N )
        for i in range(N):
            xcurr = self.xMin + i * deltaX;
            # print(xcurr, 'xcurr')
            temp = self.fx(xcurr) * deltaX
            # if N %20 == 0:
                # print(temp, self.result)
            self.result += temp

    def show(self):
        print(self.result)


xMin =1.0
xMax =3.0
N = 199
examp = Integrator(xMin, xMax, N)
examp.integrate()
examp.show()

# 0.76374
