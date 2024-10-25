interface CustomFunction {
    f(x: number, y: number): number;
}

function findSolution(customfunction: CustomFunction, z: number): number[][] {


    let x: number = 1, y: number = z;


    let result: number[][] = [];


    while (y > 0 && x <= 1000) {


        let value: number = customfunction.f(x, y);


        if (value === z) {


            result.push([x, y]);


            x++;
            y--;
        } else if (value > z) {


            y--;
        } else {


            x++;
        }
    }


    return result;
};