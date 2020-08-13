const func1 = (p1, p2) => console.log("func1", p1, p2)
const func2 = (p1, p2) => console.log("func2", p1, p2)

const compose = (...fns) => (...args) => {
  fns.forEach (fn => fn(...args))
}

const func3 = compose(func1, func2)

func3("Samara", "Miranda")
func3(111, 222)