import { ProficiencyLevel, Question } from '../types'

export const questions: Record<ProficiencyLevel, Question[]> = {
  beginner: [
    {
      question: "What is the difference between arrays and strings in Python?",
      options: [
        "Arrays can store only one data type, but strings store multiple data types.",
        "Strings are immutable, but arrays can be modified after creation.",
        "Arrays cannot store numbers, but strings can.",
        "Strings are faster than arrays."
      ],
      correct_option: "a"
    },
    {
      question: "What is the output of the following code? print(3 * 'Hello')",
      options: [
        "'HelloHelloHello'",
        "'Hello*3'",
        "Error",
        "'3Hello'"
      ],
      correct_option: "a"
    },
    {
      question: "Which of the following is used to create a list in Python?",
      options: [
        "Curly braces {}",
        "Parentheses ()",
        "Square brackets []",
        "Angle brackets <>"
      ],
      correct_option: "c"
    },
    {
      question: "What is the difference between a list and a tuple in Python?",
      options: [
        "Lists are immutable, but tuples are mutable.",
        "Lists are created using () and tuples with [].",
        "Lists are mutable, but tuples are immutable.",
        "Tuples can only store numbers, but lists can store any data type."
      ],
      correct_option: "c"
    },
    {
      question: "What will len([1, 2, 3, 4]) return?",
      options: [
        "4",
        "3",
        "5",
        "Error"
      ],
      correct_option: "a"
    },
    {
      question: "Which of the following methods is used to add an element to the end of a list?",
      options: [
        "add()",
        "insert()",
        "append()",
        "extend()"
      ],
      correct_option: "c"
    },
    {
      question: "What does print(type('Hello')) output?",
      options: [
        "<class 'string'>",
        "<class 'str'>",
        "<type 'string'>",
        "<type 'str'>"
      ],
      correct_option: "b"
    },
    {
      question: "How do you create a dictionary in Python?",
      options: [
        "Using {} with key-value pairs.",
        "Using [] with key-value pairs.",
        "Using () with key-value pairs.",
        "Using <> with key-value pairs."
      ],
      correct_option: "a"
    },
    {
      question: "Which of the following is the correct way to declare a variable in Python?",
      options: [
        "int x = 5",
        "x: int = 5",
        "x = 5",
        "declare x = 5"
      ],
      correct_option: "c"
    }
  ],
  intermediate: [
    {
      question: "Which of the following best describes a Python dictionary?",
      options: [
        "A collection of key-value pairs that is unordered and mutable.",
        "A collection of key-value pairs that is ordered and immutable.",
        "A collection that only stores strings.",
        "A collection of items accessed by their index."
      ],
      correct_option: "a"
    },
    {
      question: "What is the average time complexity to insert a key in a hash map?",
      options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
      correct_option: "a"
    },
    {
      question: "Which of the following data structures does not allow duplicates?",
      options: ["List", "Dictionary", "Set", "Tuple"],
      correct_option: "c"
    },
    {
      question: "What is the use of a set in Python?",
      options: [
        "To store only strings.",
        "To store a collection of unique items.",
        "To store a fixed number of items.",
        "To maintain an ordered list of elements."
      ],
      correct_option: "b"
    },
    {
      question: "What is the time complexity of searching for an item in a hash map?",
      options: ["O(n)", "O(log n)", "O(1)", "O(n log n)"],
      correct_option: "c"
    },
    {
      question: "Which data structure is best suited for implementing a priority queue?",
      options: [
        "Array",
        "Linked List",
        "Heap",
        "Stack"
      ],
      correct_option: "c"
    },
    {
      question: "What is the time complexity of searching for an element in a balanced binary search tree (BST)?",
      options: [
        "O(1)",
        "O(log n)",
        "O(n)",
        "O(n^2)"
      ],
      correct_option: "b"
    },
    {
      question: "Which Python module provides a built-in implementation of a heap?",
      options: [
        "heaplib",
        "heapify",
        "heapq",
        "collections"
      ],
      correct_option: "c"
    },
    {
      question: "What is the difference between a stack and a queue?",
      options: [
        "A stack is FIFO (First In, First Out), while a queue is LIFO (Last In, First Out).",
        "A stack is LIFO (Last In, First Out), while a queue is FIFO (First In, First Out).",
        "Both stack and queue are FIFO.",
        "Both stack and queue are LIFO."
      ],
      correct_option: "b"
    },
    {
      question: "What is the main advantage of using a linked list over an array?",
      options: [
        "Faster access time for elements",
        "Easier to reverse",
        "Dynamic memory allocation and ease of insertion/deletion",
        "Linked lists require less memory than arrays"
      ],
      correct_option: "c"
    },
    {
      question: "Which data structure is most appropriate for implementing a depth-first search (DFS)?",
      options: [
        "Queue",
        "Stack",
        "Heap",
        "Array"
      ],
      correct_option: "b"
    },
    {
      question: "What is the best-case time complexity of the Quicksort algorithm?",
      options: [
        "O(n)",
        "O(n log n)",
        "O(n^2)",
        "O(log n)"
      ],
      correct_option: "b"
    },
    {
      question: "Which data structure is used for BFS (Breadth-First Search)?",
      options: [
        "Queue",
        "Stack",
        "Array",
        "Heap"
      ],
      correct_option: "a"
    },
    {
      question: "What is the output of `sorted([3, 1, 4, 1, 5], reverse=True)` in Python?",
      options: [
        "[1, 1, 3, 4, 5]",
        "[5, 4, 3, 1, 1]",
        "[5, 4, 1, 3, 1]",
        "[3, 1, 4, 1, 5]"
      ],
      correct_option: "b"
    },
    {
      question: "Which of the following operations has the worst-case time complexity of O(1) in a hash table?",
      options: [
        "Insertion",
        "Deletion",
        "Searching",
        "All of the above"
      ],
      correct_option: "d"
    }
  ],
  advanced: 
    [
      {
        "question": "What is the time complexity of inserting an element into a Python heap implemented with the `heapq` module?",
        "options": [
          "O(1)",
          "O(log n)",
          "O(n)",
          "O(n log n)"
        ],
        "correct_option": "b"
      },
      {
        "question": "Which data structure is the most efficient for implementing Dijkstra's algorithm for shortest path?",
        "options": [
          "Binary Heap",
          "Hash Table",
          "Array",
          "Stack"
        ],
        "correct_option": "a"
      },
      {
        "question": "What is the primary use of the `collections.deque` data structure in Python?",
        "options": [
          "Implementing heaps",
          "Efficient append and pop operations from both ends",
          "Sorting elements",
          "Hash-based lookup"
        ],
        "correct_option": "b"
      },
      {
        "question": "What is the best-case time complexity of finding the maximum element in a Python binary search tree (BST)?",
        "options": [
          "O(1)",
          "O(log n)",
          "O(n)",
          "O(n log n)"
        ],
        "correct_option": "b"
      },
      {
        "question": "How does Python’s `bisect` module achieve efficient insertion in a sorted list?",
        "options": [
          "It uses binary search to find the insertion point.",
          "It sorts the list after every insertion.",
          "It maintains a balanced tree internally.",
          "It uses hash-based indexing."
        ],
        "correct_option": "a"
      },
      {
        "question": "Which data structure is most suitable for implementing LRU (Least Recently Used) caching in Python?",
        "options": [
          "List",
          "Dictionary",
          "OrderedDict",
          "Heap"
        ],
        "correct_option": "c"
      },
      {
        "question": "What is the average-case time complexity for searching an element in a hash table?",
        "options": [
          "O(1)",
          "O(log n)",
          "O(n)",
          "O(n^2)"
        ],
        "correct_option": "a"
      },
      {
        "question": "Which algorithm is used for finding strongly connected components (SCC) in a directed graph?",
        "options": [
          "Kruskal’s algorithm",
          "Dijkstra's algorithm",
          "Tarjan’s algorithm",
          "Prim’s algorithm"
        ],
        "correct_option": "c"
      },
      {
        "question": "What is the key advantage of using a trie (prefix tree) for string searching?",
        "options": [
          "Faster hash lookups",
          "Efficient prefix-based search",
          "O(1) insertion and deletion",
          "Reduced memory usage compared to arrays"
        ],
        "correct_option": "b"
      },
      {
        "question": "What is the space complexity of a graph represented as an adjacency matrix?",
        "options": [
          "O(V + E)",
          "O(V^2)",
          "O(E)",
          "O(V)"
        ],
        "correct_option": "b"
      }
    
    
  ],
  expert: [
    {
      "question": "What is the amortized time complexity of operations on a Fibonacci heap?",
      "options": [
        "O(log n) for all operations",
        "O(1) for insert and decrease-key, O(log n) for delete",
        "O(n) for all operations",
        "O(n log n) for all operations"
      ],
      "correct_option": "b"
    },
    {
      "question": "Which algorithm is the most efficient for finding the minimum spanning tree in a dense graph?",
      "options": [
        "Prim's algorithm with an adjacency matrix",
        "Kruskal's algorithm with a union-find structure",
        "Prim's algorithm with a Fibonacci heap",
        "Boruvka’s algorithm"
      ],
      "correct_option": "c"
    },
    {
      "question": "What is the main benefit of using a segment tree over a binary indexed tree (BIT)?",
      "options": [
        "Segment trees use less space.",
        "Segment trees support efficient range queries and updates for arbitrary functions.",
        "Binary indexed trees are slower for point updates.",
        "Segment trees can be used for graph traversal."
      ],
      "correct_option": "b"
    },
    {
      "question": "How does Python's `defaultdict` optimize algorithms using dynamic programming?",
      "options": [
        "By precomputing results in a dictionary",
        "By avoiding key errors and allowing lazy initialization of values",
        "By providing O(1) time complexity for lookups",
        "By reducing space complexity"
      ],
      "correct_option": "b"
    },
    {
      "question": "What is the key difference between a Fenwick Tree (Binary Indexed Tree) and a Segment Tree?",
      "options": [
        "Fenwick Trees are better for dynamic data structures.",
        "Segment Trees allow lazy propagation for range updates, whereas Fenwick Trees do not.",
        "Segment Trees are faster for point updates.",
        "Fenwick Trees support a wider range of operations."
      ],
      "correct_option": "b"
    },
    {
      "question": "What is the worst-case time complexity of the Hopcroft-Karp algorithm for maximum bipartite matching?",
      "options": [
        "O(V^2)",
        "O(V + E)",
        "O(E * sqrt(V))",
        "O(V^3)"
      ],
      "correct_option": "c"
    },
    {
      "question": "What is the purpose of Z-algorithm in string processing?",
      "options": [
        "Finding all occurrences of a pattern in a text in linear time",
        "Constructing suffix arrays efficiently",
        "Finding the longest palindromic substring",
        "Sorting strings lexicographically"
      ],
      "correct_option": "a"
    },
    {
      "question": "What is the expected time complexity of Quickselect for finding the k-th smallest element in an unsorted list?",
      "options": [
        "O(n)",
        "O(n log n)",
        "O(n^2)",
        "O(log n)"
      ],
      "correct_option": "a"
    },
    {
      "question": "Which data structure is the most efficient for maintaining the median of a dynamic stream of numbers?",
      "options": [
        "Heap (min-heap and max-heap)",
        "Balanced Binary Search Tree (BST)",
        "Queue",
        "Array with sorting"
      ],
      "correct_option": "a"
    },
    {
      "question": "What is the time complexity of constructing a suffix array using the DC3 algorithm (Kärkkäinen-Sanders)?",
      "options": [
        "O(n log n)",
        "O(n^2)",
        "O(n)",
        "O(n log^2 n)"
      ],
      "correct_option": "c"
    }
  ]
  
}

