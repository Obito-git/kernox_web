---
num: 49
title: "Group Anagrams"
category: "Arrays & Hashing"
subcategories: 
        - "Array"
        - "Hash Table"
        - "String"
        - "Sorting"
difficulty: "Medium"
url: "https://leetcode.com/problems/group-anagrams/description/"
draft: false
---

## Description

Given an array of strings `strs`, group the `anagrams` together. You can return the answer in any order.

An `anagram` is a word or phrase formed by rearranging the letters of a different word or phrase, using all the original letters exactly once.

### Examples

- **Example 1:**
  - **Input:** `strs = ["eat","tea","tan","ate","nat","bat"]`
  - **Output:** `[["bat"],["nat","tan"],["ate","eat","tea"]]`
  - **Explanation:**
    - There is no string in `strs` that can be rearranged to form `"bat"`.
    - The strings `"nat"` and `"tan"` are anagrams because they can be rearranged to form each other.
    - The strings `"ate"`, `"eat"`, and `"tea"` are anagrams because they can be rearranged to form each other.

- **Example 2:**
  - **Input:** `strs = [""]`
  - **Output:** `[[""]]`

- **Example 3:**
  - **Input:** `strs = ["a"]`
  - **Output:** `[["a"]]`

### Constraints

- `1 <= strs.length <= 10<sup>4</sup>`
- `0 <= strs[i].length <= 100`
- `strs[i]` consists of lowercase English letters.

## Test

```rust
#[cfg(test)]
mod tests {
    use super::*;

    fn sort_groups(groups: &mut Vec<Vec<String>>) {
        for group in groups.iter_mut() {
            group.sort();
        }
        groups.sort_by(|a, b| a[0].cmp(&b[0]));
    }

    #[test]
    fn test_example1() {
        let input = vec![
            "eat".to_string(),
            "tea".to_string(),
            "tan".to_string(),
            "ate".to_string(),
            "nat".to_string(),
            "bat".to_string(),
        ];
        let mut output = group_anagrams(input);
        sort_groups(&mut output);
        let mut expected = vec![
            vec!["bat".to_string()],
            vec!["nat".to_string(), "tan".to_string()],
            vec!["ate".to_string(), "eat".to_string(), "tea".to_string()],
        ];
        sort_groups(&mut expected);
        assert_eq!(output, expected);
    }

    #[test]
    fn test_example2() {
        let input = vec!["".to_string()];
        let output = group_anagrams(input);
        let expected = vec![vec!["".to_string()]];
        assert_eq!(output, expected);
    }

    #[test]
    fn test_example3() {
        let input = vec!["a".to_string()];
        let output = group_anagrams(input);
        let expected = vec![vec!["a".to_string()]];
        assert_eq!(output, expected);
    }
}
```

## Prototype

```rust
pub fn group_anagrams(strs: Vec<String>) -> Vec<Vec<String>> {
    todo!()
}
```

## Solutions

Both solutions will use a similar approach here. Let's review what we want to do. We have a list of strings that we need to group by a specific property. Obviously, when grouping items, the best approach is usually to use a hash map, where each key corresponds to a group of items. The final two questions are: what should we use as the key, and how do we determine that an item has the required property? This part will vary for each case.

### Sorting

The first approach uses sorting. We sort each string and use the sorted string as the key in our hash map, with the original string as the value. For the final result, we only take the values from the hash map.

```rust
pub fn group_anagrams_sort(strs: Vec<String>) -> Vec<Vec<String>> {
    let mut storage: HashMap<String, Vec<String>> = HashMap::new();

    for str in strs {
        let sorted: String = {
            let mut tmp = str.chars().collect::<Vec<char>>();
            tmp.sort_unstable();
            tmp.into_iter().collect()
        };
        storage.entry(sorted).or_default().push(str);
    }
    storage.into_values().collect()
}
```

- **Time Complexity:** O(m * n log n)  
- **Space Complexity:** O(m * n)

Where `m` is the number of strings in `strs` and `n` is the length of the longest string in `strs`.

### Hash table

The second approach is faster because it avoids sorting. Since the strings contain only ASCII lowercase characters, the task is simplified. Each key can be represented as a fixed-size array of 26 elements, where each element corresponds to the count of a specific character (index 0 for 'a', index 1 for 'b', and so on). This method is much faster than sorting. After creating this mapping, we use it as the key in our hash map and the original string as the value. For the final result, we only take the values from the hash map.

```rust
pub fn group_anagrams(strs: Vec<String>) -> Vec<Vec<String>> {
    let mut storage: HashMap<[usize; 26], Vec<String>> = HashMap::new();

    for str in strs {
        let mut key = [0; 26];
        str.bytes().for_each(|v| key[(v - b'a') as usize] += 1);
        storage.entry(key).or_default().push(str);
    }
    storage.into_values().collect()
}
```

- **Time Complexity:** O(n * m)  
- **Space Complexity:** O(m)

Where `m` is the number of strings in `strs` and `n` is the length of the longest string in `strs`.
