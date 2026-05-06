class Solution {
    encode(strs) {
        let encoded = '';

        for (let str of strs) {
            encoded += str.length + '+' + str;
        }

        return encoded;
    }

    decode(str) {
        let result = [];
        let i = 0;

        while (i < str.length) {
            let j = i;

            while (str[j] !== '+') {
                j++;
            }

            let len = parseInt(str.substring(i, j));
            let word = str.substring(j + 1, j + 1 + len);

            result.push(word);

            i = j + 1 + len;
        }

        return result;
    }
}