// src/pages/QueueOverview.jsx
import React from "react";
import { motion } from "framer-motion";
import { Cpu, Layers, Info, Sparkles } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const QueueOverview = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const queueTypes = [
    {
      type: "Simple Queue",
      desc: "Elements are inserted at the rear and removed from the front in FIFO order. Can suffer from wasted space in array implementation.",
    },
    {
      type: "Circular Queue",
      desc: "Overcomes wasted space by treating the array as circular. Rear wraps around to start when space is available.",
    },
    {
      type: "Priority Queue",
      desc: "Each element has a priority. Dequeue removes the element with highest priority first.",
    },
    {
      type: "Double-Ended Queue (Deque)",
      desc: "Insertion and deletion can happen at both ends (front and rear). Useful for sliding window algorithms.",
    },
  ];

  const queueOperations = [
    {
      name: "Enqueue",
      desc: "Adds an element to the rear of the queue. Throws 'Queue Overflow' if full. Maintains FIFO order.",
      code: `// Java
void enqueue(int value) {
    if(isFull()) {
        System.out.println("Queue Overflow");
        return;
    }
    rear = (rear + 1) % max_size;
    arr[rear] = value;
    size++;
}

// Python
def enqueue(queue, value, max_size):
    if len(queue) == max_size:
        print("Queue Overflow")
        return
    queue.append(value)`,
    },
    {
      name: "Dequeue",
      desc: "Removes and returns the front element. Throws 'Queue Underflow' if empty. Maintains FIFO order.",
      code: `// Java
int dequeue() {
    if(isEmpty()) {
        System.out.println("Queue Underflow");
        return -1;
    }
    int val = arr[front];
    front = (front + 1) % max_size;
    size--;
    return val;
}

// Python
def dequeue(queue):
    if not queue:
        print("Queue Underflow")
        return None
    return queue.pop(0)`,
    },
    {
      name: "Front / Peek",
      desc: "Returns the front element without removing it. Useful to see the next element to dequeue.",
      code: `// Java
int front() {
    if(isEmpty()) return -1;
    return arr[front];
}

// Python
def front(queue):
    if not queue:
        return None
    return queue[0]`,
    },
    {
      name: "isEmpty",
      desc: "Checks if the queue has no elements.",
      code: `// Java
boolean isEmpty() {
    return size == 0;
}

// Python
def isEmpty(queue):
    return len(queue) == 0`,
    },
    {
      name: "isFull",
      desc: "Checks if the queue has reached maximum size.",
      code: `// Java
boolean isFull() {
    return size == max_size;
}

// Python
def isFull(queue, max_size):
    return len(queue) == max_size`,
    },
    {
      name: "Display",
      desc: "Prints all elements from front to rear. Useful for debugging and understanding queue content.",
      code: `// Java
void display() {
    for(int i = 0; i < size; i++) {
        System.out.println(arr[(front + i) % max_size]);
    }
}

// Python
def display(queue):
    for item in queue:
        print(item)`,
    },
  ];

  const applications = [
    "Job scheduling in operating systems.",
    "Handling requests in CPU or printer queues.",
    "Breadth-First Search (BFS) in graph algorithms.",
    "Call center or ticket management systems.",
    "Asynchronous data transfer (e.g., IO Buffers).",
    "Sliding window problems in competitive programming.",
  ];

  return (
    <>
      <Navbar />
      <section className="px-8 md:px-20 py-20 bg-[#FFFFFF] text-[#1A1A1A]">
        {/* Header */}
        <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-[#1A1A1A]">
            Complete Guide to <span className="text-blue-600">Queue</span> Data Structure
          </h1>
          <p className="mt-6 text-xl text-[#555555] max-w-3xl mx-auto">
            A <strong>queue</strong> is a linear data structure that follows <strong>First In First Out (FIFO)</strong>. Elements are inserted at the rear and removed from the front.
          </p>
        </motion.div>

        {/* Queue Overview & Types */}
        <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-xl mb-12 shadow-sm">
          <h2 className="text-3xl font-semibold mb-3 text-blue-600 flex items-center gap-2 border-b-2 border-blue-200 pb-2">
            <Cpu size={26} /> Queue Overview
          </h2>
          <p className="text-[#333333] text-xl mb-3">
            Queue is a <strong>linear data structure</strong> where insertion happens at the rear and deletion happens at the front. The main principle it follows is <strong>First In, First Out (FIFO)</strong>, meaning the element that enters first is removed first.
          </p>
          <p className="text-[#333333] text-xl mb-4">
            This FIFO behavior ensures fairness in processing elements in the order they arrived, making queues ideal for scheduling and buffering tasks.
          </p>

          <h3 className="text-2xl font-semibold mb-2 text-blue-600">Types of Queue:</h3>
          <ul className="list-disc list-inside space-y-2 text-[#333333] text-lg">
            {queueTypes.map((q, idx) => (
              <li key={idx}>
                <strong>{q.type}:</strong> {q.desc}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Queue Operations */}
        <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-green-600 flex items-center gap-2 border-b-2 border-green-200 pb-2">
            <Sparkles size={26} /> Queue Operations
          </h2>
          <p className="text-[#333333] text-lg mb-4">
    Below are the main operations performed on a stack. The video demonstrates Push, Pop, Peek, isEmpty, isFull, and Display in action.
  </p>

 <div className="w-full h-96 rounded-xl overflow-hidden mb-8 border border-gray-300 shadow-sm flex items-center justify-center bg-gray-100">
  <iframe
  width="100%"
  height="100%"
  src="https://www.youtube.com/embed/ojGf3SH7n48?si=mnjlYqnPhgPGG5IX"
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
    <li>Queues follow <strong>FIFO (First In First Out)</strong> principle, meaning the first element added is the first to be removed.</li>
    <li>Core operations include <strong>enqueue</strong>, <strong>dequeue</strong>, <strong>peek/front</strong>, and <strong>isEmpty</strong>.</li>
    <li>Used in scheduling systems, buffers, breadth-first search (BFS), and task management.</li>
    <li>Standard queues allow O(1) enqueue and dequeue operations using linked lists or circular arrays.</li>
    <li>Variants like <strong>circular queue</strong>, <strong>priority queue</strong>, and <strong>deque</strong> provide additional functionality for specific use cases.</li>
  </ul>
</motion.div>

          <div className="grid gap-10 md:grid-cols-2">
            {queueOperations.map((op, idx) => (
              <motion.div key={idx} variants={fadeInUp} initial="hidden" animate="visible" transition={{ delay: idx * 0.1 }} className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl p-6">
                <h3 className="text-2xl md:text-3xl font-semibold mb-2 text-blue-600">{op.name}</h3>
                <p className="text-[#555555] mb-3 text-lg">{op.desc}</p>
                <pre className="bg-gray-100 p-3 rounded-lg overflow-auto text-sm text-[#111111]">
                  {op.code}
                </pre>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Applications */}
        <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-xl mt-12 shadow-sm">
          <h2 className="text-3xl font-semibold mb-3 text-yellow-600 flex items-center gap-2 border-b-2 border-yellow-200 pb-2">
            <Info size={26} /> Applications of Queue
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

export default QueueOverview;
