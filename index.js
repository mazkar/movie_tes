function anagrams(input) {
  const map = new Map();

  for (let i = 0; i < input.length; ++i) {
    const key = [...input[i]].sort().join("");
    const value = map.has(key) ? map.get(key) : [];
    value.push(input[i]);
    map.set(key, value);
  }

  return [...map.values()];
}

/*below it will print the expected result*/
console.log(anagrams(["kita", "atik", "tika", "aku", "kua", "kia", "makan"]));
