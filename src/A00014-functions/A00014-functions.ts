type MapStringCallBack = (item: string) => string;

export function mapString(
  array: string[],
  callback: MapStringCallBack,
): string[] {
  const newArray: string[] = [];

  for (let i = 0; i < newArray.length; i++) {
    const item = array[i];
    newArray.push(callback(item));
  }
  return newArray;
}
const abc = ['a', 'b', 'c'];

const abcMapped = mapString(abc, (item) => item.toUpperCase());
console.log(abcMapped);
