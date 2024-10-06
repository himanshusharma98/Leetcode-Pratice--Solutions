function sortPeople(names: string[], heights: number[]): string[] {
    let indices = Array.from({ length: heights.length }, (_, i) => i)
    indices = indices.sort((a, b) => heights[b] - heights[a])
    return indices.map((i) => names[i])
  }