---
num: 128
title: "Longest Consecutive Sequence"
category: "Arrays & Hashing"
subcategories: 
        - "Array"
        - "Hash Table"
        - "Union Find"
difficulty: "Medium"
url: "https://leetcode.com/problems/longest-consecutive-sequence/description/"
draft: false
---

## Description

Given an unsorted array of integers `nums`, return *the length of the longest consecutive elements sequence*.

You must write an algorithm that runs in `O(n)` time.

### Examples

- **Example 1:**
  - **Input:** `nums = [100,4,200,1,3,2]`
  - **Output:** `4`
  - **Explanation:** The longest consecutive elements sequence is `[1, 2, 3, 4]`. Therefore its length is `4`.
- **Example 2:**
  - **Input:** `nums = [0,3,7,2,5,8,4,6,0,1]`
  - **Output:** `9`
- **Example 3:**
  - **Input:** `nums = [1,0,1,2]`
  - **Output:** `3`

### Constraints

- 0 <= s.length <= 10<sup>5</sup>
- -10<sup>9</sup> <= nums[i] <= 10<sup>9</sup>

## Test

```rust
#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test1() {
        let nums = vec![100, 4, 200, 1, 3, 2];
        assert_eq!(longest_consecutive(nums), 4);
    }

    #[test]
    fn test2() {
        let nums = vec![0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
        assert_eq!(longest_consecutive(nums), 9);
    }

    #[test]
    fn test3() {
        let nums = vec![1, 0, 1, 2];
        assert_eq!(longest_consecutive(nums), 3);
    }

    #[test]
    fn test_empty_array() {
        let nums: Vec<i32> = vec![];
        assert_eq!(longest_consecutive(nums), 0);
    }

    #[test]
    fn test_single_element() {
        let nums = vec![42];
        assert_eq!(longest_consecutive(nums), 1);
    }

    #[test]
    fn test_with_duplicates() {
        let nums = vec![1, 2, 2, 3, 4];
        assert_eq!(longest_consecutive(nums), 4);
    }
}
```

## Prototype

```rust
pub fn longest_consecutive(nums: Vec<i32>) -> i32 {
    todo!()
}
```

## Solutions

### Sorting

The problem requires an `O(n)` solution, but *let's also explore other solution*.
The sorting solution is pretty straightforward. We first sort the array, then iterate over the sorted array to determine the longest consecutive sequence. The logic is as follows:

- If the current element is equal to the previous element, we simply continue iterating.
- If the current element is exactly one greater than the previous element (i.e., `prev + 1`), we increment the current sequence count.
- In any other case, we check if the current sequence is longer than the longest sequence found so far, update it if necessary, and then start a new sequence count.

```rust
pub fn longest_consecutive(mut nums: Vec<i32>) -> i32 {
    if nums.is_empty() {
        return 0;
    }
    nums.sort_unstable();

    let mut longest = 1;
    let mut current_seq = 1;
    let mut prev = nums[0];

    for &num in nums.iter().skip(1) {
        if num == prev + 1 {
            current_seq += 1;
        } else if num == prev {
            continue;
        } else {
            longest = longest.max(current_seq);
            current_seq = 1;
        }
        prev = num;
    }

    longest.max(current_seq)
}
```

- **Time Complexity:** O(n log n)  
- **Space Complexity:** O(1) - (if we ignore the space used for sorting)

### Hash Set

We can simplify the logic and make the solution much more efficient by fully understanding the problem. The two key insights are:

- **Duplicates are unnecessary:**  
  Removing duplicates does not change the final result.

- **Efficient sequence checking:**  
  Consider the array `vec![100, 4, 200, 1, 3, 2]`. This array contains three sequences:  
  - `1, 2, 3, 4`  
  - `100`  
  - `200`

A **sequence** is a set of numbers where each number is exactly one greater than the previous one. The **beginning of a sequence** is simply a number that does not have a predecessor (i.e., its value minus one is not present in the array).

Since we want to eliminate duplicates and efficiently check for the presence of `value + 1` or `value - 1`, a **HashSet** is ideal.

Basically, the approach is:

- **Step 1:** Iterate over the array to add all numbers to a HashSet.
- **Step 2:** Iterate through the HashSet to find the beginning of each sequence (a number that does not have a predecessor).
- **Step 3:** For each sequence beginning, iterate to count the consecutive numbers.

```rust
pub fn longest_consecutive(nums: Vec<i32>) -> i32 {
    let set = nums.into_iter().collect::<HashSet<_>>();
    let mut res = 0;

    for &num in set.iter() {
        // Only consider `num` as a sequence start if `num - 1` is not in the set.
        if !set.contains(&(num - 1)) {
            let mut current_seq_len = 1;
            // Count consecutive numbers starting from `num`.
            while set.contains(&(num + current_seq_len)) {
                current_seq_len += 1;
            }
            res = res.max(current_seq_len);
        }
    }
    res
}
```

- **Time Complexity:** O(n)  
- **Space Complexity:** O(n)
