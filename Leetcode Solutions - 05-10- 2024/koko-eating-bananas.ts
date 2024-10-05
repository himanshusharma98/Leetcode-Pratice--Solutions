function minEatingSpeed(piles: number[], h: number): number {

  let left = 1;
  let right = Math.max(...piles);


  let smallestK;

  while (left <= right) {
    const numOfBananaPerHour = left + Math.trunc((right - left) / 2);

    let totalTimeToEatAllBananas = 0;
    for (let j = 0; j < piles.length; j++) {
      totalTimeToEatAllBananas += Math.ceil(piles[j] / numOfBananaPerHour);
    }


    if (totalTimeToEatAllBananas <= h) {

      smallestK = numOfBananaPerHour;


      right = numOfBananaPerHour - 1;
    }


    else {
      left = numOfBananaPerHour + 1;
    }
  }

  return smallestK;
}