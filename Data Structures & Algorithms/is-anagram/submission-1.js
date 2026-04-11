class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length != t.length) return false
        let slettermap = {}
        let tlettermap = {}

        for(let i = 0; i<s.length; i++){
                if(slettermap[s[i]]){
                    slettermap[s[i]] = slettermap[s[i]] + 1
                }else{
                    slettermap[s[i]] = 1
                }
        }

                for(let i = 0; i<t.length; i++){
                if(tlettermap[t[i]]){
                    tlettermap[t[i]] = tlettermap[t[i]] + 1
                }else{
                    tlettermap[t[i]] = 1
                }
        }


        for(let key in slettermap){
            if(slettermap[key] !== tlettermap[key]){
                return false
            }
        }

        return true

    }
}
