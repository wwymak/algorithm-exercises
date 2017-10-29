function karatsuba (x1, x2, n) {
    if (n === 1) {
        return x1 * x2
    } else {
        let a = parseInt(x1.toString().slice(0, n/2))
        let b = parseInt(x1.toString().slice(n/2, n))

        let c = parseInt(x2.toString().slice(0, n/2))
        let d = parseInt(x2.toString().slice(n/2, n))

        let p = a + b;
        let q = c + d;
    }
}
