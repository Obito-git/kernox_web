---
num: 242
title: "Valid Anagram"
category: "Arrays & Hashing"
subcategories: 
        - "Hash Table"
        - "String"
        - "Sorting"
difficulty: "Easy"
url: "https://leetcode.com/problems/valid-anagram/description/"
draft: false
---

## Description

Given two strings `s` and `t`, return `true` if t is an `anagram` of `s`, and `false` otherwise.

An `anagram` is a word or phrase formed by rearranging the letters of a different word or phrase, using all the original letters exactly once.

### Examples

- **Example 1:**
  - **Input:** `s = "anagram", t = "nagaram"`
  - **Output:** `true`
  - **Explanation:** "nagaram" is an anagram of "anagram".

- **Example 2:**
  - **Input:** `s = "rat", t = "car"`
  - **Output:** `false`
  - **Explanation:** "car" is not an anagram of "rat".

### Constraints

- `1 <= s.length, t.length <= 5 * 10<sup>4</sup>`
- `s` and `t` consist of lowercase English letters.

## Test

```rust
#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_example1() {
        let s = "anagram".to_string();
        let t = "nagaram".to_string();
        assert!(is_anagram(s, t));
    }

    #[test]
    fn test_example2() {
        let s = "rat".to_string();
        let t = "car".to_string();
        assert!(!is_anagram(s, t));
    }

    #[test]
    fn test_same_string() {
        let s = "abc".to_string();
        let t = "abc".to_string();
        assert!(is_anagram(s, t));
    }

    #[test]
    fn test_different_lengths() {
        let s = "abc".to_string();
        let t = "ab".to_string();
        assert!(!is_anagram(s, t));
    }

    #[test]
    fn test_repeated_letters_anagram() {
        let s = "aabbcc".to_string();
        let t = "abcabc".to_string();
        assert!(is_anagram(s, t));
    }

    #[test]
    fn test_repeated_letters_non_anagram() {
        let s = "aabbcc".to_string();
        let t = "aabccc".to_string();
        assert!(!is_anagram(s, t));
    }

    #[test]
    fn test_single_character() {
        let s = "a".to_string();
        let t = "a".to_string();
        assert!(is_anagram(s, t));

        let s = "a".to_string();
        let t = "b".to_string();
        assert!(!is_anagram(s, t));
    }
}
```

## Prototype

```rust
pub fn is_anagram(s: String, t: String) -> bool {
    todo!()
}
```

## Solutions

### Sorting

We can obviously sort both strings and compare them. We could also add a check to verify that the sizes of both strings are equal, but this doesn't change the overall approach. It is not an efficient solution, so let's move on.

```rust
pub fn is_anagram(s: String, t: String) -> bool {
    let sort_str = |s: String| -> String {
        let mut chars: Vec<char> = s.chars().collect();
        chars.sort_unstable();
        chars.into_iter().collect()
    };
    sort_str(s) == sort_str(t)
}
```

**Time Complexity:** O(n log n + m log m)  
**Space Complexity:** O(n + m)

Here, `n` and `m` are the lengths of the two input strings.

---

### Hash Maps

Recall that an anagram is a string that uses exactly the same letters. We can simply count the occurrences of each letter in both strings using a hash map, where the key is the character and the value is its count, and then compare the two hash maps.

```rust
pub fn is_anagram(s: String, t: String) -> bool {
    // This check is necessary not only for an early return but also because
    // we iterate over both strings simultaneously. When the string lengths
    // are not equal, zip will only iterate over the shorter length.
    if s.len() != t.len() {
        return false;
    }

    let mut s_counts = HashMap::new();
    let mut t_counts = HashMap::new();

    for (c1, c2) in s.chars().zip(t.chars()) {
        *s_counts.entry(c1).or_insert(0) += 1;
        *t_counts.entry(c2).or_insert(0) += 1;
    }
    s_counts == t_counts
}
```

**Time Complexity:** O(n + m)  
**Space Complexity:** O(1), as the constraint states that we can have only English lowercase letters, so the maximum additional memory needed is 26 * 2, which is constant.

### Hash Table

I really like to progress towards the most efficient solution gradually. It helps to understand the approach step by step. This solution is actually a simplification of the previous one. It is not hard to see that we don't need two hash maps—we can use just one.

The trick is that instead of adding values to two separate hash maps, we can simply increment the count in the hash map when a character appears in one string and decrement it when it appears in the other. If, in the end, all values are zero, it means the counts are balanced.

#### Hash Map

```rust
pub fn is_anagram(s: String, t: String) -> bool {
    if s.len() != t.len() {
        return false;
    }

    let mut counts = HashMap::new();

    for (c1, c2) in s.chars().zip(t.chars()) {
        *counts.entry(c1).or_insert(0) += 1;
        *counts.entry(c2).or_insert(0) -= 1;
    }
    counts.values().all(|&v| v == 0)
}
```

#### Array

We can replace the hash map with an array since the maximum size is known. This solution works well because we can easily map characters to array indices, given that the problem guarantees all characters are ASCII lowercase. To find an index, we subtract the ASCII value of `a` from the character. This approach works well only when all characters are either lowercase or uppercase, whereas a hash map is preferred when no such guarantee exists.

```rust
pub fn is_anagram(s: String, t: String) -> bool {
    if s.len() != t.len() {
        return false;
    }
    
    let mut alphabet = [0; 26];

    for (c1, c2) in s.bytes().zip(t.bytes()) {
        alphabet[(c1 - b'a') as usize] += 1;
        alphabet[(c2 - b'a') as usize] -= 1;
    }
    alphabet.iter().all(|&c| c == 0)
}
```

- **Time Complexity:** O(n)  
- **Space Complexity:** O(1) - since fixed size of additional memory is needed
