// src/pages/LLOverview.jsx
import React from "react";
import { motion } from "framer-motion";
import { Cpu, Layers, Info, Sparkles } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const LLOverview = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const llTypes = [
    {
      type: "Singly Linked List",
      desc: "Each node contains data and a pointer to the next node. Traversal is one-way.",
    },
    {
      type: "Doubly Linked List",
      desc: "Each node has pointers to both previous and next nodes. Allows bidirectional traversal.",
    },
    {
      type: "Circular Linked List",
      desc: "Last node points back to the head node. Can be singly or doubly circular.",
    },
  ];

  const llOperations = [
    {
      name: "Insert at Head",
      desc: "Adds a new node at the beginning of the list. O(1) operation.",
      code: `// Java
void insertAtHead(int value) {
    Node newNode = new Node(value);
    newNode.next = head;
    head = newNode;
}

// Python
def insert_at_head(head, value):
    new_node = Node(value)
    new_node.next = head
    head = new_node
    return head`,
    },
    {
      name: "Insert at Tail",
      desc: "Adds a new node at the end. Traverses the list to find the last node. O(n) operation.",
      code: `// Java
void insertAtTail(int value) {
    Node newNode = new Node(value);
    if(head == null) {
        head = newNode;
        return;
    }
    Node temp = head;
    while(temp.next != null) temp = temp.next;
    temp.next = newNode;
}

// Python
def insert_at_tail(head, value):
    new_node = Node(value)
    if not head:
        return new_node
    temp = head
    while temp.next:
        temp = temp.next
    temp.next = new_node
    return head`,
    },
    {
      name: "Delete Node",
      desc: "Deletes a node with given value. Updates pointers to maintain list integrity.",
      code: `// Java
void deleteNode(int key) {
    if(head == null) return;
    if(head.data == key) {
        head = head.next;
        return;
    }
    Node temp = head;
    while(temp.next != null && temp.next.data != key) temp = temp.next;
    if(temp.next != null) temp.next = temp.next.next;
}

// Python
def delete_node(head, key):
    if not head:
        return None
    if head.data == key:
        return head.next
    temp = head
    while temp.next and temp.next.data != key:
        temp = temp.next
    if temp.next:
        temp.next = temp.next.next
    return head`,
    },
    {
      name: "Search",
      desc: "Finds if a value exists in the list. Traverses node by node. O(n).",
      code: `// Java
boolean search(int key) {
    Node temp = head;
    while(temp != null) {
        if(temp.data == key) return true;
        temp = temp.next;
    }
    return false;
}

// Python
def search(head, key):
    temp = head
    while temp:
        if temp.data == key:
            return True
        temp = temp.next
    return False`,
    },
    {
      name: "Display",
      desc: "Prints all nodes in order. Useful for debugging.",
      code: `// Java
void display() {
    Node temp = head;
    while(temp != null) {
        System.out.print(temp.data + " -> ");
        temp = temp.next;
    }
    System.out.println("NULL");
}

// Python
def display(head):
    temp = head
    while temp:
        print(temp.data, end=" -> ")
        temp = temp.next
    print("NULL")`,
    },
  ];

  const applications = [
    "Implementing stacks and queues dynamically.",
    "Handling memory efficiently in dynamic data sets.",
    "Adjacency lists for graph representations.",
    "Undo/Redo operations in editors.",
    "Browser history and navigation.",
    "Polynomial arithmetic and manipulation.",
  ];

  return (
    <>
      <Navbar />
      <section className="px-8 md:px-20 py-20 bg-[#FFFFFF] text-[#1A1A1A]">
        {/* Header */}
        <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-[#1A1A1A]">
            Complete Guide to <span className="text-blue-600">Linked List</span> Data Structure
          </h1>
          <p className="mt-6 text-xl text-[#555555] max-w-3xl mx-auto">
            A <strong>linked list</strong> is a linear data structure where elements are stored in nodes containing data and pointers to the next (or previous) node.
          </p>
        </motion.div>

        {/* LL Overview & Types */}
        <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-xl mb-12 shadow-sm">
          <h2 className="text-3xl font-semibold mb-3 text-blue-600 flex items-center gap-2 border-b-2 border-blue-200 pb-2">
            <Cpu size={26} /> Linked List Overview
          </h2>
          <p className="text-[#333333] text-xl mb-3">
            Linked Lists allow dynamic memory allocation. They provide efficient insertions/deletions compared to arrays but lack direct indexing.
          </p>

          <h3 className="text-2xl font-semibold mb-2 text-blue-600">Types of Linked Lists:</h3>
          <ul className="list-disc list-inside space-y-2 text-[#333333] text-lg">
            {llTypes.map((ll, idx) => (
              <li key={idx}>
                <strong>{ll.type}:</strong> {ll.desc}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* LL Operations */}
        <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-green-600 flex items-center gap-2 border-b-2 border-green-200 pb-2">
            <Sparkles size={26} /> Linked List Operations
          </h2>
          <div className="w-full h-96 rounded-xl overflow-hidden mb-8 border border-gray-300 shadow-sm flex items-center justify-center bg-gray-100">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/qE4dyOKX0gw?si=WkT2GDXRoOdaJXxa"
              title="Array Operations Video"
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
    <li>Linked Lists are <strong>dynamic linear data structures</strong> where elements are connected via pointers.</li>
    <li>Core operations include <strong>insertion</strong>, <strong>deletion</strong>, <strong>traversal</strong>, and <strong>searching</strong>.</li>
    <li>Unlike arrays, linked lists do not require contiguous memory, making them memory-efficient for dynamic datasets.</li>
    <li>Variants include <strong>Singly Linked List</strong>, <strong>Doubly Linked List</strong>, and <strong>Circular Linked List</strong> for specialized use cases.</li>
    <li>Useful for implementing stacks, queues, adjacency lists in graphs, and other complex data structures.</li>
  </ul>
</motion.div>

          <div className="grid gap-10 md:grid-cols-2">
            {llOperations.map((op, idx) => (
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
            <Info size={26} /> Applications of Linked List
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

export default LLOverview;
