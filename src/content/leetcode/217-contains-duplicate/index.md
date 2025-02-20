---
num: 217
title: "Contains duplicate"
category: "Arrays & Hashing"
subcategories: 
        - "Array"
        - "Hash Table"
        - "Sorting"
difficulty: "Easy"
url: "https://leetcode.com/problems/contains-duplicate/description/"
draft: false
---

## Description

Given an integer array `nums`, return `true` if any value appears **at least twice** in the array, and return `false` if every element is distinct.

### Examples

**Example 1:**

- **Input:** `nums = [1,2,3,1]`
- **Output:** `true`
- **Explanation:** The element `1` occurs at the indices `0` and `3`.

---

**Example 2:**

- **Input:** `nums = [1,2,3,4]`
- **Output:** `false`
- **Explanation:** All elements are distinct.

---

**Example 3:**

- **Input:** `nums = [1,1,1,3,3,4,3,2,4,2]`
- **Output:** `true`

### Constraints

- 1 <= nums.length <= 10<sup>5</sup>
- -10<sup>9</sup> <= nums[i] <= 10<sup>9</sup>

## Test

```rust
fn main() {
    assert_eq!(Solution::contains_duplicate(vec![1, 2, 3, 1]), true);
    assert_eq!(Solution::contains_duplicate(vec![1, 2, 3, 4]), false);
    assert_eq!(Solution::contains_duplicate(vec![]), false);
    assert_eq!(Solution::contains_duplicate(vec![42]), false);
    assert_eq!(Solution::contains_duplicate(vec![7, 7, 7, 7]), true);
    assert_eq!(Solution::contains_duplicate(vec![-1, -2, -3, -1]), true);
    assert_eq!(Solution::contains_duplicate(vec![-1, 2, -3, 4]), false);

    let nums = vec![1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
    assert_eq!(Solution::contains_duplicate(nums), true);
}
```

## Prototype

```rust
pub fn contains_duplicate(nums: Vec<i32>) -> bool {
    todo!()
}
```

## Solutions

### Brute force

Although my brute-force solution wasn't accepted because it exceeded the time limit, it's still good to practice it. It's never a bad idea to refresh your knowledge on iterating with nested loops or, for example, how to solve it using only iterators.

#### Nested loops

```rust
pub fn contains_duplicate(nums: Vec<i32>) -> bool {
    for i in 0..nums.len() {
        // iterate on sub-array with offeset to check until the end.
        for y in (i + 1)..nums.len() {
            if nums[i] == nums[y] {
                return true;
            }
        }
    }
    false
}
```

#### Iterators (brute force)

Exactly same logic that we used with nested loops, but using only iterators.

```rust
pub fn contains_duplicate(nums: Vec<i32>) -> bool {
    nums.iter()
        .enumerate()
        .any(|(i, n)| nums.iter().skip(i + 1).any(|v| v == n))
}
```

- **Time Complexity:** O(n²)  
- **Space Complexity:** O(1)

### Sorting

This sorting solution is quite simple and straightforward. After sorting, duplicates appear consecutively, making them easy to spot. We have to check only adjacent elements to be different.

#### Loop (sorting)

```rust
pub fn contains_duplicate(mut nums: Vec<i32>) -> bool {
    // when the vector is empty, the loop range (0..nums.len() - 1) panics,
    // because of 0 (nums.len()) - 1
    if nums.is_empty() {
        return false;
    }
    nums.sort_unstable();

    for i in 0..nums.len() - 1 {
        if nums[i] == nums[i + 1] {
            return true;
        }
    }
    false
}
```

#### Iterators (sorting)

By using the `windows` iterator, we only need to check if adjacent elements are equal.

```rust
pub fn contains_duplicate(mut nums: Vec<i32>) -> bool {
    nums.sort_unstable();
    nums.windows(2).any(|w| w[0] == w[1])
}
```

- **Time Complexity:** O(n log n)  
- **Space Complexity:** O(1)

### Hash Set

A hash set is a great data structure for storing unique elements, and insertions are very cheap at O(1). Basically, we can iterate over our vector and insert each element into the hash set. When we insert a value into the set, if it did not previously contain that value, the insertion returns true. This allows us to easily detect duplicates during the loop.

#### Loop (hash set)

```rust
pub fn contains_duplicate(nums: Vec<i32>) -> bool {
    let mut storage = HashSet::new();
    for n in nums {
        // If the insertion returns false, it means the element was already present,
        // so we have spotted a duplicate.
        if !storage.insert(n) {
            return true;
        }
    }
    false
}
```

#### Iterators (hash set)

Using iterators, the solution is much shorter. We only need to check `if`, `during iteration` over `nums`, `any insertion returns false`, which indicates that the vector contains a duplicate.

```rust
pub fn contains_duplicate(nums: Vec<i32>) -> bool {
    let mut storage = HashSet::new();
    nums.iter().any(|&v| !storage.insert(v))
}
```

- **Time Complexity:** O(n)  
- **Space Complexity:** O(n)

### Hash Set Lenght

The advantage of the previous solution is that it stops iterating as soon as a duplicate is found. This means that, in most cases, we don't need to check the entire `nums` vector to find a duplicate. Another solution with the same time complexity (in big O notation) is to convert the `nums` array into a hash set (which cannot contain duplicates) and simply compare the lengths.

```rust
pub fn contains_duplicate(nums: Vec<i32>) -> bool {
    // Save the length of `nums` because calling `into_iter()` consumes each number,
    // avoiding the need to clone.
    let len = nums.len();
    let storage: HashSet<_> = nums.into_iter().collect();
    storage.len() != len
}
```

- **Time Complexity:** O(n)  
- **Space Complexity:** O(n)
