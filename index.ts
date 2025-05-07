

function formatString(input: string, toUpper?: boolean): string {
    if (toUpper === false) {
        return input.toLocaleLowerCase()
    } else {
        return input.toUpperCase()
    }
}

// console.log(formatString('Mahadi', true));




type ItemType = {
    title: string,
    rating: number
}

function filterByRating(items: ItemType[]): ItemType[] {

    return items.filter(item => item.rating >= 4)

}

const laptops = [
    { productName: 'Lenovo', rating: 4.5 },
    { productName: 'Mahadi', rating: 5 },
    { productName: 'HP', rating: 4 },
    { productName: 'Dell', rating: 3.5 },
    { productName: 'Asus', rating: 2 }
]

// console.log(filterByRating(laptops));



function concatenateArrays<T>(...arrays: T[][]): T[] {
    const finalArray: T[] = [];
    for (let array of arrays) {
        finalArray.push(...array)
    }

    return finalArray
}

//   console.log(concatenateArrays([1, 2], [3, 4], [5]));



class Vehicle {
    private make: string;
    year: number

    constructor(make: string, year: number) {
        this.make = make;
        this.year = year
    }
    getInfo() {
        return `Make: ${this.make}, Year: ${this.year}`
    }
}



class Car extends Vehicle {
    private model: string;

    constructor(make: string, year: number, model: string) {
        super(make, year);
        this.model = model
    }

    getModel() {
        return `Model: ${this.model}`
    }
}

const myCar = new Car("Toyota", 2020, "Saka Laka Boom Boom");
// console.log(myCar.getModel());



type valueType = string | number

function processValue(value: valueType): number {
    if (typeof value === 'string') {
        return value.length
    }
    return value * 2
}
// console.log(processValue('Mahadi'));


const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 }
];

interface Product {
    name: string;
    price: number
}
function getMostExpensiveProduct(products: Product[]): Product | null {

    if (products.length === 0) {
        return null
    }

    let mostExpensiveProduct: Product = products[0];

    for (let product of products) {
        if (product.price > mostExpensiveProduct.price) {
            mostExpensiveProduct = product
        }
    }
    return mostExpensiveProduct;

}

// console.log(getMostExpensiveProduct(products));


enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

function getDayType(day: Day): string {
    if (day === Day.Sunday) {
        return 'Weekend'
    }
    return 'Weekday'
}

// console.log(getDayType(Day.Sunday))



async function squareAsync(n: number): Promise<number> {

    if (n < 0) {
        return Promise.reject(new Error("Negative number not allowed"));
    }
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(n * n);
        }, 1000);
    });
}

// squareAsync(-4).catch(console.error)