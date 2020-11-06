package leetcode;

//Given two words (beginWord and endWord), and a dictionary's word list, find th
//e length of shortest transformation sequence from beginWord to endWord, such tha
//t:
//
//
// Only one letter can be changed at a time.
// Each transformed word must exist in the word list.
//
//
// Note:
//
//
// Return 0 if there is no such transformation sequence.
// All words have the same length.
// All words contain only lowercase alphabetic characters.
// You may assume no duplicates in the word list.
// You may assume beginWord and endWord are non-empty and are not the same.
//
//
// Example 1:
//
//
//Input:
//beginWord = "hit",
//endWord = "cog",
//wordList = ["hot","dot","dog","lot","log","cog"]
//
//Output: 5
//
//Explanation: As one shortest transformation is "hit" -> "hot" -> "dot" -> "dog
//" -> "cog",
//return its length 5.
//
//
// Example 2:
//
//
//Input:
//beginWord = "hit"
//endWord = "cog"
//wordList = ["hot","dot","dog","lot","log"]
//
//Output: 0
//
//Explanation: The endWord "cog" is not in wordList, therefore no possible trans
//formation.
//
//
//
//
// Related Topics 广度优先搜索
// 👍 608 👎 0


import java.util.List;

//leetcode submit region begin(Prohibit modification and deletion)
class WordLadder {
    public int ladderLength(String beginWord, String endWord, List<String> wordList) {
        wordList.add(beginWord);
        wordList.add(endWord);
        int[][] transMatrix = new int[wordList.size()][wordList.size()];
        for (int i = 0; i < wordList.size(); ++i) {
            for (int j = 0; j < wordList.size(); ++j) {
                transMatrix[i][j] = canTrans(wordList.get(i), wordList.get(j)) ? 1 : 0;
            }
        }
        boolean[][] visit = new boolean[wordList.size()][wordList.size()];
        for (int i = 0; i < visit.length; ++i) {
            for (int j = 0; j < visit[i].length; ++j) {
                visit[i][j] = false;
            }
        }

        return 0;
    }

    public static int bfs(int[][] m, boolean[][] vist, int start, int end) {
        if (start == end) {
            return 0;
        }
        for (int i = 0; i < m.length; ++i) {
            if (m[start][i] == 1 && !vist[start][i]) {
                vist[start][i] = true;
                return 1 + bfs(m, vist, i, end);
            }
        }
        return 0;
    }

    public static boolean canTrans(String beginWord, String endWord) {
        int count = 0;
        for (int i = 0; i < beginWord.length(); ++i) {
            if (beginWord.charAt(i) != endWord.charAt(i)) {
                count++;
            }
        }
        return count == 1;
    }
}
//leetcode submit region end(Prohibit modification and deletion)
