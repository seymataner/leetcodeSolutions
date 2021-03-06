/*
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

Follow up: The overall run time complexity should be O(log (m+n)).

 

Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
Example 2:

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
Example 3:

Input: nums1 = [0,0], nums2 = [0,0]
Output: 0.00000
Example 4:

Input: nums1 = [], nums2 = [1]
Output: 1.00000
Example 5:

Input: nums1 = [2], nums2 = []
Output: 2.00000
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
   
    var firstNumber = 0;
    var secondNumber = 0; 
    var median = 0;
    var sum = nums1;
    sum =sum.concat(nums2);
    sum.sort(function(a, b){return a-b});
    
    if(sum.length % 2 == 0){
        var result =(sum.length)/2;
        
        firstNumber = sum[result];
        secondNumber = sum[result-1];
        median = (firstNumber + secondNumber)/2;
    }
    else{
        var result = parseInt(sum.length/2)

        median = sum[result];
    }
    
    return median;
};