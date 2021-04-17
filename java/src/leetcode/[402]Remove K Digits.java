package leetcode;

//Given a non-negative integer num represented as a string, remove k digits from
// the number so that the new number is the smallest possible.
//
//
// Note:
//
// The length of num is less than 10002 and will be ≥ k.
// The given num does not contain any leading zero.
//
//
//
//
// Example 1:
//
//Input: num = "1432219", k = 3
//Output: "1219"
//Explanation: Remove the three digits 4, 3, and 2 to form the new number 1219 w
//hich is the smallest.
//
//
//
// Example 2:
//
//Input: num = "10200", k = 1
//Output: "200"
//Explanation: Remove the leading 1 and the number is 200. Note that the output
//must not contain leading zeroes.
//
//
//
// Example 3:
//
//Input: num = "10", k = 2
//Output: "0"
//Explanation: Remove all the digits from the number and it is left with nothing
// which is 0.
//
// Related Topics 栈 贪心算法
// 👍 371 👎 0


import java.util.Stack;

//leetcode submit region begin(Prohibit modification and deletion)
class RemoveKDigits {
    public String removeKdigits(String num, int k) {
        //特殊情况全部删除
        if(num.length() == k){
            return "0";
        }
        char[] s = num.toCharArray();
        Stack<Character> stack = new Stack<>();
        //遍历数组
        for(Character i : s){
            //移除元素的情况，k--
            while(!stack.isEmpty() && i < stack.peek() && k > 0){
                stack.pop();
                k--;
            }
            //栈为空，且当前位为0时，我们不需要将其入栈
            if(stack.isEmpty() && i == '0'){
                continue;
            }
            stack.push(i);
        }
        while(k > 0){
            stack.pop();
            k--;
        }
        //这个是最后栈为空时，删除一位，比如我们的10，删除一位为0，按上面逻辑我们会返回""，所以我们让其返回"0"
        if(stack.isEmpty()){
            return "0";
        }
        //反转并返回字符串
        StringBuilder str = new StringBuilder();
        while(!stack.isEmpty()){
            str.append(stack.pop());
        }
        return str.reverse().toString();
    }
}
//leetcode submit region end(Prohibit modification and deletion)
