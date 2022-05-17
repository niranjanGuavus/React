class TrieNode {
    parent = null;
    children = {};
    end = true;
    constructor(key) {
      this.key = key;
    }
  
    getWord() {
      let result = [];
      let node = this;
      while (node != null) {
        result.unshift(node.key);
        node = node.parent;
      }
      return result.join("");
    }
  }
  
  class Trie {
    root = new TrieNode(null);
    constructor() {}
  
    insert(value) {
      let parent = this.root;
      for (const ch of value) {
        if (ch in parent.children) {
          parent = parent.children[ch];
        } else {
          let child = new TrieNode(ch);
          child.parent = parent;
          parent.children[ch] = child;
          parent.end = false;
          parent = child;
        }
      }
    }
  
    remove(value) {
      //check if the value not present then return false
      if (!this.contains(value)) {
        return false;
      }
  
      let node = this.root;
      for (const ch of value) {
        if (ch in node.children) {
          node = node.children[ch];
        }
      }
  
      // if the node is any intermediate node and not finish then return false.
      if(!node.end) {
          return false
      }
  
     
      while(node.parent != null) {
          let parent = node.parent
          if(Object.keys(parent.children).length >=2){
              delete parent.children[node.key]
              break;
          } 
          node = node.parent;
      }
    }
  
    contains(value) {
      let parent = this.root;
      for (const ch of value) {
        if (ch in parent.children) {
          parent = parent.children[ch];
        } else {
          return false;
        }
      }
      return true;
    }
  
    findAllWords(node, result) {
      if (node.end) {
        result.unshift(node.getWord());
      }
  
      for (const key in node.children) {
        if (Object.hasOwnProperty.call(node.children, key)) {
          this.findAllWords(node.children[key], result);
        }
      }
    }
  
    find(value) {
      let result = [];
      let parent = this.root;
      for (const ch of value) {
        if (ch in parent.children) {
          parent = parent.children[ch];
        } else {
          return [];
        }
      }
  
      this.findAllWords(parent, result);
      return result;
    }
  }
  
  const trie = new Trie();
  trie.insert("peter");
  trie.insert("piper");
  trie.insert("picked");
  trie.insert("pickled");
  trie.insert("pepper");
  
  // check contains method
  console.log(trie.contains("picked"));
  console.log(trie.contains("pepper"));
  trie.remove("pepper");
  // check find method
  console.log(trie.find("pi"));
  console.log(trie.find("pe"));
  