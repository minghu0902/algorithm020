// https://leetcode-cn.com/problems/lemonade-change/submissions/

/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
  let five = 0
  let ten = 0

  for (let bill of bills) {
    if (bill === 5) {
      five++
    } else if (bill === 10) {
      if (five <= 0) return false
      five--
      ten++
    } else {
      // 此处实际上是利用了贪心算法，先减10，在减5
      bill -= 5
      while(ten > 0 && bill >= 10) {
        bill -= 10
        ten--
      }
      while(five > 0 && bill >= 5) {
        bill -= 5
        five--
      }
      if (bill > 0) return false
    }
  }

  return true
};