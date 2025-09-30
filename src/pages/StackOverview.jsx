// src/pages/StackOverview.jsx
import React from "react";
import { motion } from "framer-motion";
import { Cpu, Layers, Info, Clock, Sparkles, BarChart } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const StackOverview = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const stackOperations = [
    {
      name: "Push",
      desc: "Adds an element to the top of the stack. Throws 'Stack Overflow' if the stack is full. Essential for adding elements in LIFO order.",
      code: `// Java
void push(int value) {
    if(isFull()) {
        System.out.println("Stack Overflow");
        return;
    }
    top++;
    arr[top] = value;
}

// Python
def push(stack, value, max_size):
    if len(stack) == max_size:
        print("Stack Overflow")
        return
    stack.append(value)`,
    },
    {
      name: "Pop",
      desc: "Removes and returns the top element. Throws 'Stack Underflow' if empty. Useful for undo operations or managing function calls.",
      code: `// Java
int pop() {
    if(isEmpty()) {
        System.out.println("Stack Underflow");
        return -1;
    }
    int val = arr[top];
    top--;
    return val;
}

// Python
def pop(stack):
    if not stack:
        print("Stack Underflow")
        return None
    return stack.pop()`,
    },
    {
      name: "Peek / Top",
      desc: "Returns the top element without removing it. Useful to check the last inserted element.",
      code: `// Java
int peek() {
    if(isEmpty()) return -1;
    return arr[top];
}

// Python
def peek(stack):
    if not stack:
        return None
    return stack[-1]`,
    },
    {
      name: "isEmpty",
      desc: "Checks if the stack has no elements. Often used to prevent underflow before popping.",
      code: `// Java
boolean isEmpty() {
    return top == -1;
}

// Python
def isEmpty(stack):
    return len(stack) == 0`,
    },
    {
      name: "isFull",
      desc: "Checks if the stack has reached its maximum size. Helps prevent overflow errors.",
      code: `// Java
boolean isFull() {
    return top == max_size - 1;
}

// Python
def isFull(stack, max_size):
    return len(stack) == max_size`,
    },
    {
      name: "Show / Display",
      desc: "Prints all elements from top to bottom. Useful for debugging and understanding stack content at any point.",
      code: `// Java
void show() {
    for(int i=top; i>=0; i--)
        System.out.println(arr[i]);
}

// Python
def show(stack):
    for i in reversed(stack):
        print(i)`,
    },
  ];

  const applications = [
    "Expression evaluation: converting infix to postfix/prefix and evaluating them.",
    "Undo/Redo in text editors and applications.",
    "Function call management using the call stack.",
    "Backtracking problems like maze solving or N-Queens.",
    "Parsing syntax in compilers or interpreters.",
    "Browser history management (back/forward navigation).",
    "Memory management in recursion.",
  ];

  return (
    <>
      <Navbar />
      <section className="px-8 md:px-20 py-20 bg-[#FFFFFF] text-[#1A1A1A]">
        {/* Header */}
        <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-[#1A1A1A]">
            Complete Guide to <span className="text-blue-600">Stack</span> Data Structure
          </h1>
          <p className="mt-6 text-xl text-[#555555] max-w-3xl mx-auto">
            A <strong>stack</strong> is a linear data structure that follows <strong>Last In First Out (LIFO)</strong>. Elements are inserted and removed from the <strong>top</strong> only.
          </p>
        </motion.div>

        {/* Stack Brief & Type */}
        <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-xl mb-12 shadow-sm">
          <h2 className="text-3xl font-semibold mb-3 text-blue-600 flex items-center gap-2 border-b-2 border-blue-200 pb-2">
            <Cpu size={26} /> Stack Overview
          </h2>
          <p className="text-[#333333] text-xl mb-3">
            Stack is a <strong>linear data structure</strong> where operations are performed at one end (top). Memory can be allocated statically (array) or dynamically (linked list).
          </p>
          <p className="text-[#333333] text-xl">
            Key concept: <strong>Last In First Out (LIFO)</strong>. The last element added is the first to be removed.
          </p>
          <p className="text-[#333333] text-xl mt-2">
            Common types:
          </p>
          <ul className="list-disc list-inside text-[#333333]">
            <li>Array-based Stack (fixed size)</li>
            <li>Linked List-based Stack (dynamic size)</li>
          </ul>
        </motion.div>

        {/* Stack Operations with video embed */}
<motion.div
  variants={fadeInUp}
  initial="hidden"
  animate="visible"
  className="mb-12"
>
  <h2 className="text-3xl font-semibold mb-6 text-green-600 flex items-center gap-2 border-b-2 border-green-200 pb-2">
    <Sparkles size={26} /> Stack Operations
  </h2>

  <p className="text-[#333333] text-lg mb-4">
    Below are the main operations performed on a stack. The video demonstrates Push, Pop, Peek, isEmpty, isFull, and Display in action.
  </p>

 <div className="w-full h-96 rounded-xl overflow-hidden mb-8 border border-gray-300 shadow-sm flex items-center justify-center bg-gray-100">
  <iframe
  width="100%"
  height="100%"
  src="https://www.youtube.com/embed/toRJakeYIKA?modestbranding=1&rel=0"
  title="Stack Operations Video"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
  className="rounded-xl"
/>

</div>

{/* Key Takeaways */}
<motion.div
  variants={fadeInUp}
  initial="hidden"
  animate="visible"
  className="bg-green-50 border-l-4 border-green-500 p-6 rounded-xl mb-12 shadow-sm"
>
  <h2 className="text-3xl font-semibold mb-3 text-green-600 flex items-center gap-2 border-b-2 border-green-200 pb-2">
    <Sparkles size={26} /> Key Takeaways
  </h2>
  <ul className="list-disc list-inside space-y-3 text-[#333333] text-xl">
    <li>Stacks follow <strong>LIFO (Last In First Out)</strong> principle, meaning the last element added is the first to be removed.</li>
    <li>Core operations include <strong>push</strong>, <strong>pop</strong>, <strong>peek/top</strong>, and <strong>isEmpty</strong>.</li>
    <li>Used in function call management, recursion, expression evaluation, and undo mechanisms.</li>
    <li>Supports efficient O(1) time complexity for push and pop operations.</li>
    <li>Stacks are foundational for implementing other data structures like syntax parsers, backtracking algorithms, and certain graph algorithms (DFS).</li>
  </ul>
</motion.div>


  <div className="grid gap-10 md:grid-cols-2">
    {stackOperations.map((op, idx) => (
      <motion.div
        key={idx}
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{ delay: idx * 0.1 }}
        className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl p-6"
      >
        <h3 className="text-2xl md:text-3xl font-semibold mb-2 text-blue-600">{op.name}</h3>
        <p className="text-[#555555] mb-3 text-lg">{op.desc}</p>
        <pre className="bg-gray-100 p-3 rounded-lg overflow-auto text-sm text-[#111111]">
          {op.code}
        </pre>
      </motion.div>
    ))}
  </div>
</motion.div>


        {/* Detailed explanations */}
<motion.div variants={fadeInUp} initial="hidden" animate="visible" className="bg-gray-50 border-l-4 border-gray-400 p-6 rounded-xl mb-12 shadow-sm">
  <h2 className="text-3xl font-semibold mb-4 text-gray-700 flex items-center gap-2 border-b-2 border-gray-300 pb-2">
    <Layers size={26} /> Detailed Explanation & LIFO Concept
  </h2>

  <p className="text-[#333333] text-lg mb-3">
    A <strong>stack</strong> is a <strong>linear data structure</strong> where insertion and deletion occur at the same end called the <strong>top</strong>. The key principle it follows is <strong>Last In, First Out (LIFO)</strong>. This means the most recently added element is the first to be removed.
  </p>

  <h3 className="text-xl font-semibold mt-3 mb-2 text-blue-600">Why LIFO?</h3>
  <ul className="list-disc list-inside space-y-2 text-[#333333] text-lg">
    <li><strong>Single access point:</strong> Elements can only be added/removed from the top, so the last inserted element is the first accessible.</li>
    <li><strong>Function calls / Call stack:</strong> Functions are pushed when called and popped when completed. Last called function executes first.</li>
    <li><strong>Undo/Redo operations:</strong> Most recent action is undone first, naturally following LIFO.</li>
    <li><strong>Expression evaluation:</strong> Postfix or prefix expression evaluation relies on LIFO order.</li>
    <li><strong>Backtracking:</strong> In algorithms like maze solving, the most recent path choice is reverted first if it fails.</li>
  </ul>

  <h3 className="text-xl font-semibold mt-4 mb-2 text-green-600">Real-world Examples</h3>
  <ul className="list-disc list-inside space-y-2 text-[#333333] text-lg">
    <li>Browser history (back button)</li>
    <li>Undo/redo in text editors like MS Word or Photoshop</li>
    <li>Parsing nested structures (HTML tags, parentheses in math expressions)</li>
    <li>Recursive function calls in programming languages</li>
  </ul>
</motion.div>


        {/* Applications */}
        <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-xl mt-12 shadow-sm">
          <h2 className="text-3xl font-semibold mb-3 text-yellow-600 flex items-center gap-2 border-b-2 border-yellow-200 pb-2">
            <Info size={26} /> Applications of Stack
          </h2>
          <ul className="list-disc list-inside space-y-3 text-[#333333] text-xl">
            {applications.map((app, idx) => (
              <li key={idx}>{app}</li>
            ))}
          </ul>
        </motion.div>
      </section>
      <Footer />
    </>
  );
};

export default StackOverview;
