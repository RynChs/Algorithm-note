/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isScramble = function (s1, s2) {
    if (s1.length !== s2.length) return false
    if (s1.length == 0) return true
  
    // 出口
    if (s1.length === 1) return s1 === s2
    if (!compareMap(s1, s2)) return false
  
    let splitCount = s1.length - 1
    for (let i = 1; i <= splitCount; i++) {
      let s1_head = [s1.slice(0, i), s1.slice(i)]
      let s2_head = [s2.slice(0, i), s2.slice(i)]
  
      let s1_last = [s1.slice(-i), s1.slice(0, -i)]
      let s2_last = [s2.slice(-i), s2.slice(0, -i)]
  
      let go = true
      // 头头比较
      if (go) go = isScramble(s1_head[0], s2_head[0])
      if (go) go = isScramble(s1_head[1], s2_head[1])
      if (go) return true
  
      go = true
      // 尾尾比较
      if (go) go = isScramble(s1_last[0], s2_last[0])
      if (go) go = isScramble(s1_last[1], s2_last[1])
      if (go) return true
  
      // 头尾比较
      go = true
      if (go) go = isScramble(s1_head[0], s2_last[0])
      if (go) go = isScramble(s1_head[1], s2_last[1])
      if (go) return true
    }
  
    return false
  }
  /**
   * 判断两个字符串字符个数是否相同
   */
  var compareMap = (s1, s2) => {
    let map = new Map()
    for (const s of s1) {
      let v = map.get(s)
      map.set(s, v ? v + 1 : 1)
    }
  
    for (const s of s2) {
      if (!map.has(s)) {
        return false
      } else {
        let v = map.get(s)
        if (v == 1) map.delete(s)
        else map.set(s, v - 1)
      }
    }
  
    return map.size === 0
  }