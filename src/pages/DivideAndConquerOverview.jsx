// src/pages/DivideAndConquerOverview.jsx
import React from "react";
import { motion } from "framer-motion";
import { Cpu, Layers, Info, Clock, Sparkles, BarChart } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const DivideAndConquerOverview = () => {
  const algorithms = [
  {
    name: "Merge Sort",
    desc: "Splits the array into halves, recursively sorts them, and merges the sorted halves.",
    time: "O(n log n)",
    space: "O(n)",
    notes: "Stable sort, good for large datasets and linked lists.",
    diagram: "https://miro.medium.com/v2/resize:fit:1358/format:webp/1*-SvbPjyoV0NyGyfF5uZbEA.gif"
  },
  {
    name: "Quick Sort",
    desc: "Uses a pivot to partition the array into two halves and recursively sorts them.",
    time: "O(n log n), Worst: O(n²)",
    space: "O(log n)",
    notes: "Very efficient in practice; performance depends on pivot selection.",
    diagram: "https://www.tutorialspoint.com/data_structures_algorithms/images/quick_sort_partition_animation.gif"
  },
  {
    name: "Binary Search",
    desc: "Searches for an element in a sorted array by repeatedly dividing the search interval in half.",
    time: "O(log n)",
    space: "O(1)",
    notes: "Requires a sorted array; extremely efficient for large datasets.",
    diagram: "https://d18l82el6cdm1i.cloudfront.net/uploads/bePceUMnSG-binary_search_gif.gif"
  },
  {
    name: "Fast Fourier Transform (FFT)",
    desc: "Computes the Discrete Fourier Transform efficiently using divide-and-conquer.",
    time: "O(n log n)",
    space: "O(n)",
    notes: "Widely used in signal processing, image processing, and polynomial multiplication.",
    diagram: "data:image/png;base64,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"
  },
  {
    name: "Closest Pair of Points",
    desc: "Finds the pair of points with minimum distance using divide-and-conquer.",
    time: "O(n log n)",
    space: "O(n)",
    notes: "Faster than brute-force O(n²) method; uses recursive splitting and strip checking.",
    diagram: "https://miro.medium.com/v2/resize:fit:1280/1*jfQ9SGN4jGzBVs1eOX-Ypw.gif"
  },
  {
    name: "Karatsuba Multiplication",
    desc: "Multiplies large numbers by splitting them into halves and recursively combining products.",
    time: "O(n^log2 3) ≈ O(n^1.585)",
    space: "O(n)",
    notes: "Faster than standard O(n²) multiplication for very large numbers.",
    diagram: "https://www.cs.cmu.edu/~cburch/pgss99/lecture/0721tree.gif"
  },
  {
    name: "Strassen's Matrix Multiplication",
    desc: "Multiplies matrices by dividing them into submatrices and reducing the number of multiplications recursively.",
    time: "O(n^2.807)",
    space: "O(n²)",
    notes: "More efficient than naive O(n³) multiplication for large matrices.",
    diagram: "https://www.interviewbit.com/blog/wp-content/uploads/2021/12/New-quadrants-1024x642.png"
  },
  {
    name: "Maximum Subarray (Kadane's via Divide & Conquer)",
    desc: "Finds the contiguous subarray with the maximum sum by dividing the array and combining results.",
    time: "O(n log n)",
    space: "O(log n)",
    notes: "Divide-and-conquer approach; linear O(n) solution exists using Kadane's algorithm.",
    diagram: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASYAAACsCAMAAADhRvHiAAAA2FBMVEX////p6eng4eJvb2+Wlpbt7e2jo6PAwMDU1NS6urra2tqDg4POzs62traNjY37+/toaGhdXV2wsLDz8/NjY2NYWFgAAADGxsZUVFRzc3Obm5uIiIh6enpPT0+goKDKyspCQkLg4P8AAP/o6P/4+P/Jyf/U1P9tbf+Skv/19f+oqP+fn//ExP+Xl//u7v9jY/81NTU+Pj6ysv9XV//Z2f+urv+Cgv92dv9GRv8YGBguLi69vf8lJf9QUP+IiP9iYv89Pf8zM/9xcf9KSv8REREmJiYpKf8XF/8czkVNAAAPv0lEQVR4nO2dfV+iTBfHAQERlWdUFJRKs7Iye7TaHnb3bvf9v6PbbCvgHOCAqF27/D77xzbODIcvwwBzzswwTKl0cYQ8qkStzaRUxzASS6uOlakHZqgmmlLDJFf6Kcp5eYpLtEGfUbL1e2cCJR9rOSLtwIzRImYc2FXSsSMiYDI95o5Ym0rCxJh3tCvKesRGYjo+LSPTPtOJTTkkSmuaqWfE2miYWJ92QQXZUGjHdZT/NWg5WcHgaTlDomBS/BqtMlO/7ROyOb5O6sME32/TDiywxPbJyDOf1n+GlafMP6gIpqZWockh5iNndMgZiz5yhXBnRzDxA1OgyOzQ8gmmTqyw2idmrEvEI9ssLSOnZcdEfVPRifkYgg1LNQxiRoXaT1gqLZ9ZSc9TYiox0fIVhWl0NARpGKbDoxFMRDAdHh3DRAzTzmQHJqKY7vdgGorp6h4kFYRp5+kcWothmtx/h9YimB7P57BCDNP1/m+YiGHa30UuEIbpeDIFl6ggTOc/L/ZBInrT7T/DNATT6PscJqI33cMJTMMwTU+ImJjD36fRpEIwnV5cPx4fgHIQ0/HF/QNyAATTxekYckcwDSfMLiyNYLqfP09hRojpaHr6DfYfRfVNj2NwBdDWdDC9IN10l9NreKGx1nR0cQUT0b7p/BKmYa3pfHoB2l35pCOpxERSHkxkG4j56JiaxIwKdbyIaqKaHZPSr5LUnrWJGX1axkFfN9qUrG1LJB55VqNlbBLujAgmqVmjiZqPlLFa7b7cieLLi9iubvbISxEGtb7EeFPNdpd9ouxYg23bgmv7mGTH++yW1P6Mz+P5WLe2jMns+0pkYLxhWcRx7Q1qq5jaGnqTmV2v/8Wa1PYwsUonHsbAqpB9qJvQljCpNd1N5rCgKH6dJrUVTHLdNgivyFXdpXvH16vNY1JFr0c9KtvzqN8w69WmMTU0vZqpQNNzt//SsllMAu93s/c3nOsRvc7r0wYx1ezcTy/Dq+cJkChOm8LE1TuUXjtWsmtnu1mL1UYwmYZdX/lAqtghj6EUrg1gkhyrukpDCtRU0bb0abxuTIsPD77ANmD2vRwPgdW1XkyDilP4N4e0hjpTFcHUqxPlpmfpOa2Wo1BrdFDz+ki1itZ6AYcn2JNN4be1CCaPk0lqaOkZqwOO4/oirULORrsvHT0Mx1UbkaQO0XCjR8vIhT85I5ioDhOzTsxYJYYFMg6KqXDPhESNDQ77mPJiIoZAM5SB5qVKTCT99zEhcTYopssJ9I1jmC6xeBw6pvMrJCuG6fAIpqGYsAChzJgOro6AXSim8eg7SMMw/dr/BRPJmC4n10hkAYZpjIT9oJhu9mFIR2ZMDzcXIIwDv+muYZwNhulmDiNcMrSm/d9IzBeC6fgIiZDBb7rJDUjKiOl++rT3AOxCMD0eXCONHMF0+B2LxyFj2t8/RygjmJ7HSHAYxDSc3p88wtKZW9PpE2wkWGsajqdjkIi1pqPpOUwkYzocj2mtaXHlYBLamn6ML0Ba+aQjqcREUjGY/u23cE+WSBpYiRll+fXf63+6fVqNcgf/piPaI6cYLktvBslGnWiPk/RNJ1LVT/rRqLf4uxZvvOZLzBgQPsutWYw9fEvxWz0jNWNA3dAo2VrGm7oVk2Eaej3PdNF1qKkvLJErTv6TXQMm6X2yIFexv0IgAPvuEhVcP+8YceGYVCfQu5s9f5v+kKV6lc9eT+3O8nmRi8ZUi84R7ftbdW83/EiwlOF3c/gvisXEWshc36a3tQA4E5t52baz+0YLxdTX8E67obtb8bA1bfz0ZK2SMdSlQExyJ74fkivaxmNwWD3+dmddPVNvXhymupt4zwv1DvWFvBjxWuKtbvIeNWCfKQ5T209tLWp3g725TFjCYNGbU6srBpOp05aKaM74YtzkaXJo35xtv057uhSCSbTJ79sNbwO9OXgriZesa5S8BWCSs0VpcRVrve/mrE4dBXjL7trpvfnqmHrJXTcioWevsTfvJnfdiBa9edqFjmASWJre8wmDl5qZWMiENQsm5740YkqFz9HMao90JibbI8CTFUxWua3Gl1IBprMuT5Hyma+fUuJ9YO0ulNrvx2TvhgcGOzR7+FuqPd3PNZbYu8+s3YRiTjfv6KVKHeP9HFa0ifmthL/iRZ4sGrBDII7Avg545sNEHgrfFCZq7SWmzDkLx3QaXTYAx3Q4gpP8EzHtwOUIKJiQYiimU8Sfl4rpEkzVp2I6nR9EDMMx/Zwg3ugETDvzxwlITMe0M/0BgghQTL8R73Aapv3pUzSwhIrp+Oc4ErERc9Od/4BpCZiG8yfovaa0pjm44himgxNk6ZD0mw5UTsN0/HB/PboOpyGYTn+OrmDAQiKm0fXxNUhMx7R3eQTOH6l979cjDBFJwXT1k/kJ7mhy3zSNlkVb03B3mq01nV5cwMgpAqb5T9AIkdrVvXMkhiCtNV19m0aXLiqfdCSVmEgqMZGUH5NKjbT4PNEOMX/Ygq/wsSJDTL6Wrorjnd2e2U6FkFfT3tudpuPSvFbwTzvsMaIco+J0zl7I9nifmLwYk97s8t/t6jRzjTdJtmIyUiWrDydGVeoqzrFiKy7LyI5W7GBf2HmVGZOs996GhNievfrcUraTZ73lUA1O5e0chCLs+ajVC3sTMmKS9cAYu2p40ZU7MoqnD6LjElzr8wwW9hQ0i6zvRQbsM2H6aEkfkiwr/73XmK0Yh2HWoytqDzoFzDPnoKMsQ6VyJwrpVYKSM8hDteiPS7yCuo1cItbxVpzBqdjwNOmeGq8X5xpo+r3s944xW+2yqz0M0vKX7iyTayUs6Qxr4kRbJTsW0qvkip5tMSGkXWeSqsRBWqrm5bhwS7n49EcSJslS0rpGk/cyTKDvVVbqalVeT3v6y5U8LwiDWUwhAiYCpKVq1LihtrfSOlZql9R0BaWT8QXBdHpxP6VikomQlnkpa8MJ2mqvSn1yyM3iBSFLAFrNi7+PUzDJWrYQPFXspHQ6orXSq5KRbUW1hkWNjDMrSZt6cEyjGaua1TKqtT9/hK9hTKlataa3+rXPhLfHBvvxu9+p1rCCf/R+8bmY6ut6uHgtEH5axQq0+VYnkhZoM/JHPrHFY+Xff+YYqxEvSfr8r8cEpUuEMgu9OVkNXkJ/jRb9CKkTRUrlC6MC3wQeXrUk9avBv4Nb3CjGe+og0S6fYwhLrb6BCf1FHeF4Gz9pEkMrPtbbFYmPqWAwM3HaChfoGqlLEGt0TOGRr4yYiF8lJSaS/muYRieH0SQCpssDMAM7HtPpCXSrJGI6PYHbNaRigtswpGLah2cRg+lwfgzcVQRMN3CLhnhM49E3sKh9Iqaj/V+gQBqmy12ANhXTzf63aBKOSR19h9NxUzENX6dFRxPjMZ3P4QTb5JvuAPre0zA9wTUUUjANh8gEeBTT8ObkYgfMbk7DdDgeXcOQgHhM35k5CIVIxDQZQqd4CqbjZ3gtUjAdnNzAs4jrm46m4BTSbzr15geAG49pfwxd/ImYLqcwdCK1b4KdR9pNtzgL4Lwun3QklZhIyoBppbfw/z4mKyYwOBIAbIbdtjqMD37dEQ+k+cvchoGFE0cPwQofSxWLNbxA1Cg98E1no9HR0TLCIPBNx7fBYcAxXg9jc4yhoPLOFD6UEB4gaUay87zbas1gNW+XTkYOwPN2S4smvg+yNFCbrFaHDxsVGAtTeVhgkXvWuoskBr4v2zD/XctH6okdbzK7tkgfahIMza1mG7htW73Ms1dYRc80Itl2NTHLQeSeZaDDYUnDcg1NJ33ZN+pePeOwrcn7OdeebVKX5zUNPeacYyS5Xjeu6uTRS1X0Uy65aVh2pgu2NEjL6IgJiXPS5xJxvOdkmhcj1f2kZUzTx8Kd+FmMMt9xsjtuDbAZRo4qkhxMi9atZHKryL20pV4pDqimjSyWb7Zdm7yx1qfYXpa5o/GSHbxDMKuOnq11y0onffctmjuT64X3X2BFS8t03/9Rw3IKmxlt9j0+YsKrWc1MDxJuwYhiEdlDXbX+rEGjSopeH+Tof1WxEz2vFdXQtM8+juN1t53JLLZr14lXLYMjX+jafaHqWv1czn+2l3ETA5LMbmf52iL19Iw9gCBadXoHlnTKbeCjUO7cmhz1QQy4xFJLte1bMVxwkOfuE0DlklRv9Z2XjhGqvR248waYPYb/wkfcNInMEjCZd2AGXreLzM5zw17cW3QCHygYs6Rzsqo2WjMwKxioCM8CtUdJDAZOwETZBXBZRTj+jvgFyuaJbmoT41iCX87UIN9Eu5MwEU9YDmMijh1wXwxT8tmWmP6oYEx7wLtBwIRMACwM097OHngNSMV0CAwqFtPoAozbp2M6fYbD8IVhOp/sgiuXhkn9fhMdiC8W05B5jjr70jENH26gu6ywm24E54Ol33STqPuhSEw788sHMJctHdP+j3swv7A4TM9wq+9kTJfzvQmwp9jWdLI7jXKi3HQPYHZuYZhOkcXH01rT3u54na0JVfmkI6nERFI+TF/tLXwVTCpBUUw6KIVVk7M1ieG6Xq3EKu8HMNmUk1goNyavQpIVvsR+9HfnzHIdWCpP2POgE6zXdbzbFxszKRi6jGaA0hLn5W5if7qqRh39yqR2z1IGG1p4dDO7HQpd+u6rJDUUr2JscMnRje2dKdf9gnbIlrue3d/wYqOb3Im1oXWaK67nyBmWr2xh5/YN75nb1PNv6yjUHN8taHvJrNr41sKqYaW7xYDMhmI72XxLhWq9mFQN2a2w12lF05x3bzeHFFj8PGu1PDe4cWJBs/vJWi8m0zEFINOMJpq199lHXB0rwL2WCf5gGptdBnndmIiv2o33ybkcsgw6JvIuNwXpa2AalJgoKjEBDQ+uwXyYREyTHzdggP/vxzS6noB97JJb03AOXpb+fkynz3BORTKmAzjz6e/HdHVyBSZVJGP6Bhcc/PsxMRM4Vy8RE7ah6j+ACVH5pCOpxERS5rdw8iaKBWnNmPymgakZTm723r0OcidaoFlrwjqa7l+FSW3WMFXvPKNdDSR8rDRhhgpUq21Ra53VYQ3NDe8QuPHxpqXUquakD8+pEq+5te0NMgW0HUwLmaKdGEnL9TVN3Jp1UW3TEI7v4HMgWKOi89J2hnNxbfl6ya4nRnZWqbl2vf0l7rSAtt+s25r9MYtl0POc2lfZvzWo7WNiXid6LN6v5L5V2fQDjKytYFJvw8sMO05Fsy2t4kSWH9aJL5vr13ZaEzG4x4xdEm/T+tKYhBITRSUmoCGjHkbHoUpMUV3t7hxMTyLDlCWmqIY3O49P0akIJSagHzs7w4vIKkIlpqjOf48fn54jnVOJKarhcMgAB0qJiaQSE0klJpL+8Y8V9Y62w85X+vTltiDqLsvsNozDJPwfy7yPn87olycAAAAASUVORK5CYII="
  }
];

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <>
      <Navbar />
      <section className="px-8 md:px-20 py-20 bg-[#FFFFFF] text-[#1A1A1A]">
        {/* Header */}
        <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-[#1A1A1A]">
            Guide to <span className="text-blue-600">Divide & Conquer Algorithms</span>
          </h1>
          <p className="mt-6 text-xl text-[#555555] max-w-3xl mx-auto">
            Divide-and-conquer algorithms break a problem into smaller subproblems, solve them recursively, 
            and combine the results to solve the original problem efficiently.
          </p>
        </motion.div>

        {/* What is Divide & Conquer? */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-xl mb-12 shadow-sm"
        >
          <h2 className="text-3xl font-semibold mb-3 text-blue-600 flex items-center gap-2 border-b-2 border-blue-200 pb-2">
            <Cpu size={26} /> What is Divide & Conquer?
          </h2>
          <p className="text-[#333333] text-xl mb-3">
            Divide & Conquer is an algorithmic paradigm that breaks a problem into smaller subproblems, 
            solves each subproblem independently, and combines their solutions to solve the original problem.
          </p>
          <p className="text-[#333333] text-xl">
            It is widely used in sorting, searching, numerical algorithms, and computational geometry.
          </p>
        </motion.div>

        {/* Key Takeaways */}
        <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="bg-green-50 border-l-4 border-green-500 p-6 rounded-xl mb-12 shadow-sm">
          <h2 className="text-3xl font-semibold mb-3 text-green-600 flex items-center gap-2 border-b-2 border-green-200 pb-2">
            <Sparkles size={26} /> Key Takeaways
          </h2>
          <ul className="list-disc list-inside space-y-3 text-[#333333] text-xl">
            <li>Divide & Conquer solves problems by dividing them into smaller, manageable subproblems.</li>
            <li>Combining solutions of subproblems efficiently leads to overall optimized performance.</li>
            <li>Algorithms like Merge Sort, Quick Sort, Binary Search, FFT, Closest Pair, Karatsuba, Strassen, and Maximum Subarray are classic examples.</li>
            <li>Time complexity usually improves over naive approaches by using recursion strategically.</li>
          </ul>
        </motion.div>

        {/* Algorithm Cards */}
                                             <div className="grid gap-10 md:grid-cols-2">
                                               {algorithms.map((algo, idx) => (
                                                 <motion.div
                                                   key={idx}
                                                   variants={fadeInUp}
                                                   initial="hidden"
                                                   animate="visible"
                                                   transition={{ delay: idx * 0.1 }}
                                                   className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl p-6"
                                                 >
                                                   <h2 className="text-2xl md:text-3xl font-semibold mb-2">{algo.name}</h2>
                                                   <img src={algo.diagram} alt={`${algo.name} diagram`} className="w-full h-48 object-contain mb-4 rounded-lg border" />
                                                   <p className="text-[#555555] mb-3 text-lg">{algo.desc}</p>
                                                   <div className="flex flex-col gap-2 text-lg">
                                                     <span className="flex items-center gap-2">
                                                       <Clock size={18} className="text-blue-500" /> <strong>Time Complexity:</strong> {algo.time}
                                                     </span>
                                                     <span className="flex items-center gap-2">
                                                       <Layers size={18} className="text-green-500" /> <strong>Space Complexity:</strong> {algo.space}
                                                     </span>
                                                     <span className="flex items-center gap-2">
                                                       <Info size={18} className="text-orange-500" /> <strong>Notes:</strong> {algo.notes}
                                                     </span>
                                                   </div>
                                                 </motion.div>
                                               ))}
                                             </div>

        {/* Complexity Analysis Table */}
        <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="mt-20">
          <h2 className="text-3xl font-semibold mb-4 text-cyan-600 flex items-center gap-2 border-b-2 border-cyan-200 pb-2">
            <BarChart size={26} /> Complexity Analysis
          </h2>
          <div className="bg-cyan-50 border-l-4 border-cyan-500 rounded-2xl shadow-md p-6">
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
                <thead className="bg-cyan-100 text-cyan-800 font-semibold text-lg">
                  <tr>
                    <th className="px-6 py-3 border">Algorithm</th>
                    <th className="px-6 py-3 border">Time Complexity</th>
                    <th className="px-6 py-3 border">Space Complexity</th>
                    <th className="px-6 py-3 border">Notes</th>
                  </tr>
                </thead>
                <tbody className="text-center text-lg">
                  {algorithms.map((algo, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "" : "bg-gray-50"}>
                      <td className="border px-4 py-3">{algo.name}</td>
                      <td>{algo.time}</td>
                      <td>{algo.space}</td>
                      <td>{algo.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        {/* Footer Note */}
        <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="mt-20 text-center">
          <p className="text-[#555555] text-xl">
            ✨ Master divide & conquer to solve complex problems efficiently by breaking them into smaller subproblems.
          </p>
        </motion.div>
      </section>
      <Footer />
    </>
  );
};

export default DivideAndConquerOverview;
