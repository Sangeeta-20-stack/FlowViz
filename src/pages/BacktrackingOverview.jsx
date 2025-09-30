// src/pages/BacktrackingOverview.jsx
import React from "react";
import { motion } from "framer-motion";
import { Cpu, Layers, Info, Clock, Sparkles, BarChart } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const BacktrackingOverview = () => {
  const algorithms = [
  {
    name: "N-Queens",
    desc: "Place N queens on an N×N chessboard so that no two queens attack each other.",
    time: "O(N!)",
    space: "O(N²)",
    notes: "Classic combinatorial problem demonstrating recursive backtracking.",
    diagram: "https://blogs.mathworks.com/steve/files/queen-solver-animation-6.gif"
  },
  {
    name: "Sudoku Solver",
    desc: "Fills empty cells of a Sudoku grid following rules using trial-and-error.",
    time: "O(9^(N²))",
    space: "O(N²)",
    notes: "Backtracking explores all possibilities until a solution is found.",
    diagram: "https://raw.githubusercontent.com/willtrinh/Sudoku-Solver/master/autosolve.gif"
  },
  {
    name: "Rat in a Maze",
    desc: "Find paths from start to finish in a maze using valid moves.",
    time: "O(2^(N×M))",
    space: "O(N×M)",
    notes: "All possible paths are explored recursively until goal is reached.",
    diagram: "data:image/png;base64,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"
  },
  {
    name: "Subset Sum",
    desc: "Finds subsets of a set whose sum equals a target value.",
    time: "O(2^N)",
    space: "O(N)",
    notes: "Backtracking explores all subset combinations recursively.",
    diagram: "https://image.slidesharecdn.com/daa76to80sumofsubsetproblem-170530170806/85/sum-of-subset-problem-using-Backtracking-6-320.jpg"
  },
  {
    name: "Permutations",
    desc: "Generates all possible orderings of a list of numbers or characters.",
    time: "O(N!)",
    space: "O(N)",
    notes: "Recursive swapping/backtracking produces all permutations.",
    diagram: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/NewPermutation.gif"
  },
  {
    name: "Word Search",
    desc: "Finds a given word in a 2D grid of letters.",
    time: "O(N×M×4^L)",
    space: "O(L)",
    notes: "Backtracking explores all directions from each cell.",
    diagram: "https://zwickypedia.com/img/posts/boggle_solver/example_trie_animation.gif"
  },
  {
    name: "Knight's Tour",
    desc: "Moves a knight on a chessboard visiting every square exactly once.",
    time: "O(8^(N²))",
    space: "O(N²)",
    notes: "Backtracking tries all valid knight moves recursively.",
    diagram: "https://media.geeksforgeeks.org/wp-content/uploads/20250502173112035925/ezg3.gif"
  },
  {
    name: "Graph Coloring",
    desc: "Assigns colors to graph vertices so no adjacent vertices share the same color.",
    time: "O(M^N)",
    space: "O(N)",
    notes: "Explores all coloring combinations using backtracking.",
    diagram: "https://miro.medium.com/v2/resize:fit:1400/1*UwjrAWzxoQhod3uSBQaUcg.gif"
  },
  {
    name: "Hamiltonian Path",
    desc: "Finds a path visiting every vertex exactly once in a graph.",
    time: "O(N!)",
    space: "O(N)",
    notes: "Backtracking tries all vertex orders recursively.",
    diagram: "https://old.nationalcurvebank.org///hamiltoncircuit/hamiltonanimation.gif",
  },
  {
    name: "Palindrome Partitioning",
    desc: "Partitions a string into all possible palindrome partitions.",
    time: "O(2^N × N)",
    space: "O(N)",
    notes: "Backtracking explores all substring combinations recursively.",
    diagram: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQEAAADECAMAAACoYGR8AAABPlBMVEX/////8gDE/w4AAAD/9QD/9gDH/w7/+AD98AD8/Pz36wD06ADNwwD5+fnx5QDC/A7w8PDo6Ojs4AB4cgDKysqBewDh1gDd3d3z8/O78w3CuQDs7OyZkgDZzgDTyABQTACSiwCpoQCs4AzT09OGgACayAun2QxPZgUAABOyqgBkYAAAAAl7dQBwawC37g06TASSvgpzlgi/v78zQgRBVQRPSgCvpgCXl5ewsLBcVwBsbGyoqKhbdgaflwAeKAIeGwBBPQAuKwBcXWQ7OzsVFRWJiYktKgB/f4MgLgBXcQZIXwA8OQAWFAAMCQA/QEkjIyOVwgp6ngg+P0ckJTBHR0cfHx8AABplZWUwMTsiHimErAZmhQAOGQATFCFSU1sOECcuLh81OB5KTRgVERsOGgArOAIjLQIwMDAjIABAQENHGaoAAAAdCklEQVR4nO1dDV/aSrNv3ISEEEACBIgEAgQ0kaCiEF4VaSlV1KPi8QUK5977tKf1+3+Bu5uQAFarFRD0cX4tcQHX3f/Ozs7Mzs5++PBO7/RO7/RO7/RO7zQ/sjs9gUC2oFM2EFhxzrtBL0j25UC2Ub/uHR0d1XTKteCPvfO6lg0E7fNu3czJniiX2j9z6bDMcy4XTuqEsS6Bl8Pe2t51qRx40yB4yn2QE3mWIkiCwHEcGxD8kSBJnGZ5qbbWLy/Pu50zInuiCXIyS5KE1fO7hHBg87X1UmDejZ0FBa6O0wJGPth7CwUSY9Tjpmfe7Z06Ff5ROfzR7puTQoi2s/Nu8XTJ3jjmHxh+ijIeY28SuAzK8270VEnb58gHxptlEDJEjB5/n4wcFebd6ilSAowDgOv/0MDjOMeTcPxJkR68N4Sg94bkYT0/zgG818/HSFpURZnlYmFVdJAi71f5cQjE5rzbPTVa+R/XaN/wiEhRop+UGJxrcez/Crgskl4/7fBGxr7G/XgzylEgNybncNGF47ToEEmMzHNcFT78lMTCCREeYxW6FZx3y6dFnn3HOAIOHKNEF+w6wXMcnCGkBAHBcVYcRQBn99+MuWQ/iRCjXeNlgpD9hJcl6SLH/p+D5NKkN4bj1TFBQPD9eTd8elRujcl5SgyHpTDJqVVvmmVVb1XlSDEtSuLoZMEd+29oOXT2vWMQENAshCshxepdplj4IQ3fG2MUqliad7OnScvnCjvaP7Obv75lCYFi/83IQZ2W65957B4M7u8+icl7pTcjBk0qXOYY6im2EU5E5Fz7DckAizyNdq7KYb8HAScwoQpA/W06STy34ORYiXE0juO/4qC/5xDy0eN+4eKTb96NnQX5Pv2V+BDQ+mt7xSrPuWgKjbhOEA3KwXJyuLjX65ehPeS8Am/MPQDJXgZXK/pPnqxWP7lptRRFgXqBTopSbP38+6Sk+QauIWfpjbkHYJeaoDEi3J3LgURB0+oGlTStnAisjNpB9uYbgyDwEfypcNdA482Yhh8+ZD/9SPzxL2mg+WYg0ED/OatbGbwRrShYei4/Z8HVW9ALAhd/LAIsyoKLlWm2ZS7kAz8mcHgmwMdXvnVi1yZk5MDfkwA4f1qGImDCKjwfP/35MrIw9Awt4FfyXIBXayRkJxIBFgXrr9RIcGqgNJ21DBoJr9FbAEWANi2VzvkajYTAj6mybgNoU6ztJSgLbqe7iGljpuXCE9ICpu3oLYPm64Fg5WoWPAuNhNcCQeLjbFavLOi/DiOhAD7OSI9NgItXYCQ4G6A5s72ewN9/LbyR4JmJCLAo8PGvBTcSEtPVAn6llY+LvZNQmO1EtTuDy4ErUMomEgGPZzm4MEuDc9kTSCR8Pl8DXCRWZhMdvpzIlpv1k+ve2icAjgGk9fZ1v6kVfJ654uD0+Mql/nn7cg0YtHb5z3W/3igkVqaIQ9Cn1dvroKX4w3meEQSB5eALw8dENXcELk+aBc9cfMr2gHbVBuBz0Svm+UhE4DiZESI8X5WU2hFYO2lmp7J4B7OlG9BK5yMspW+x4SbBn0kcc3B8uHgETrQXXyMS2jn4rFR5jsasdhFGuwiccgmylAOXpcKkIAS0NijGOArVfWef1dxqxgnMxfv3wVX2JaeD7wrsSYwL0/c8x6JhjSBh2Fyc5vJF0NYmwSCoXR6FOepOML6DhS80O1KAMLj4Iui/2EIZqIMoTxODhpF+18jIxATjXckF+QHjxKPL8rPnqO/6OOb6dfD5MInhgqrHo+CMSJhhBxHlpWyn7GWLx0jUML1xpOoyuJJCkyAskBTiUK8LR2WSlUDpmWyQBQoHZzruYCkUeI67WJ3DDAQ4lYRlHCHADkYAhaO/SOBFFngdEHe6qvojMm0igHN+b1jgyTBT9fs5HEsLol9icdRG0H/WyPiARCGUq0XVK8skJRZVKcbgJgJKWFW9LpJJS15VGkxEQji+mv2qsLyW1qVQOu9ixZaJAGyR4IgUw2S4KNCcwhGql6MjCsKG5J7lMA9eq2ia4XmvA+NqVVIUaYzZ4y0EAE9hsopFjhmMqkqDmUIKL+BQLB87UMMifjQPoiYChMSQGAnbFubhE36ocgRGyjE0Scnq2jNMJR/g9G4V4Z8j5SoVhQxBikMEFBL+VZVj/LCA5UxRRPpPpt/lO9SMotBfgpfhA087TATSiOO5MFlF7aYVEjEmzkkIATwCnqEqlz8bwZYK+mtMlUY9JvMWAkIaldMCg2KxiShnMoH8z/S7fLdlAAXKQ0kExS+ds3gAjj1OypAH8vDJi6QSgc9YfsADzxAEWf3vQJB5gsC8VbIYIQmqOOSBnyxJslFHpOYgSCFqLhRk+Hr6Xb5Dyz2vLqDCohCRLARwVuE5XoEIKLIgKy5cVXkhr9K6eHqWvbzc0+PMcTZalUUlRgrFmCyNIBD15vNFmYzk0nIsah5LwNm9FziUMVgLKD4c4xjKWgvYWJhnBUJgeTEGZwTD5sUYnMI4wRw/by0oA1mHwCXHBBeL46yc59DCpyMAtWFUxjEXx+VldgAA4YqCq2n39x7K9vZ5aqCfj+gDRtnQjrHBEydY/7M3jhogTBOGxqefSyIM5chAAMMHivLg76GfSKHWTrxILLLnCkRll/mHydjY6YkR5Y2gBBHcPH+zp7wWZahfQpFxjrkvKBWCXQX9l3Ij2qFdsJ9mXL/aK2Zz4IBRXKwIetokbUrUQZG/axbcDzbOhj+vlV/SNgo0TsBRUeQ5F2VYhJbJCkGh2Ugs3QK9q8KkPJmtg5YYcdwXhDtEG4dgqxMaYc+iQLl0fQn2imkxJvN8RNC9FrxcldQWAL1+IzsVHT3RgGa4Px9haUvyWD3XA5GRgwCAi4nBfh4FPT7ku2qvg4HrCoC1635JKySmmFLCmdDqPfA5p4ZlRmBZmqYp+N/BcgIfk4r7AJw3C5/qU/tzzyF7cMXj0QDyXwY8yzOZi84m6JdO2msQ6L29vdY+fDHQbpZ9yEWmLUCMReOvmVZfAgGItCfhyxbKOmWzCV/CQjv48cfcHcdXF7OsPfGYfVkYKJ72ucXhBn9MGjP2O7LXfzWu7vT14tOctxQ9M52I2cdNiwRoGjH7vsJgnhQK2cQLJvlJPMcCfio5P/71eEdKQCtdwOV5jC7bt+jUxktMjTKYMth2Z3AFLjErK8tBWPkjnh+nr9GHfd/dqWx1TpOpeDyegf+Tp52tyuEuAOu3Td/M1YXS1I4IOz2JrNa8um33Li/X1tYuezfn/1lvFHyBh/pgT2jXAGx0N1OhJdsvtBSKb27tHIObRmK2E+LjdOxyT6HZv0Hq1ffDSndr6wxSt7u68y9i6PMr7b5OJK4AOOzE3ai39xL8wB3vrAJQn6Wock7BQ2kPaP11cLzT7STjGffIcC65Q5nU5tbhFwCu77KzpwSOuin3eO9t1otVsC3Ft76Aq9ntrSUmDv11ZuFYbm8lM3rX7xlHmy2U6hweg/PyiAWU/Q/oZu5+PZOEL+5Nt14IndrMKjpdsD4zV3Jh0qXA14djmQyNdF7vgNttFd2oE6F4ZwNageZkKIDvySFgg6ctuQp/yGzojGFL7Vifb8RTGzOLcGlMppRCtf/b2fhYug8zsP1nSbN38Qoa0NUlm/t0x4zW9IGdDPw8nsy44ZeXUsbTljxACOy4YdkGEYDvh2wGArbQ6qw2FK4mcs+t1EEFdkVHwOY2nu7tOHyne4rK6O3UKkJgA35gW+p8XUdCzXn9Hf6Wu7tR2elWbKHKTuWwu2UbIBDaqBxUtk9t8e+Vg4ONlM1AwObevpnJxpr90yTM5ayDjvvs8CDZCdlCW4eVVMdtIrDVOVutpGwWAjvJyuqWG3YLyZ0s6MCvdA7gbx1WbFtd91Jme4gA6EDG2c7EAWSj5PaAB+CHs2GC5YkEoQZ7UqmkUqv/ZpZ2tlLJw29DBL504qfbEIIBArurqfjWIYTg260TKkroKzt6vypLG4iLOl0TASgHIG7dzfgOwu8QoYgQWAp9na4/HcU2Qc0toAU8K8+ObGrv2FIbkPfdu5nNAyi34rsWAskOLJ/uWAh8gTPbtnoK5TrEfASB1CMIrCYtBI6nhkAQqW71/vl1+/Lysnf5T/v6vH/VLGcf1N0eomVwZuts6e3MbEG+XnJvWAh0UMtDXywEDtHXzs5stgwU6j74i7BUgYLioGKDIsDm3hiZBZvwW9/jcZCC4vC725wFm1Mx4ewBqLr1APJcpcVqjEckx6pSWsn9BOCm38j+ydoYhB1J7iAe+DezWUE88K+FQPfsAR6Io2Xt4itkbjeUf6uVii2zetBdPRiRhAeV7vYmFAUHlcp20pSEmd2PE1sIzoR2AkDNm2c4B4YPEgggIgkcpxwcE1NbYL3/B+lGb7+Hlg668VRlN7O0cRZPrX4dIvDvuBz4asgBKCBA4sOHwPq/cICXUptxtAq6U6eZkLUaujPu5ClaKuAzmTFXw/j25KpboQ/20jJH4+SddIO46cAlMAcnq2Dt6qnslgVdWwjKfLQWZLZWu8kzazU8TaL3rbXAfYbWAqg3JY3dMd/a187S/RrRsLw01IhOv0y6EtgL56DI69tFODO+dYNXaQwj8pyxkxVzsfkc6D8R7waohMx1f/A0EBiWDQSQlo9UvU3ww5hngVtwmHT/ohXfZyPZls5WwY8JOWClBFSB1EOIMEKOkYNR14cfR1EMJPxY/zTKwq8xRdB42qRrgO3k0niz3QeZsfbHu+ZPtkx3eITHqfXA6mnmHstovPu2ULIC1psTakOB8z0eZ2MxjnMNEeCrMh1BCEQRAl6BgWUcK3J8lcep/FNDmwo34CA5buG5x/swsBBg/7d2wWhPPI3/gC9dBML95rFuUyW722CtOall6DxvcSSTi8lqDU4AAwHKr8phFQXTGAikFZEXiy68qIR5v0qREfDE0KYV2A8oBR+28o2+ZE4rx6B+h5VXCvU18PVwaxMa1fc4SE7PDnaRaJ7cjacBjqSiHEnSLYYwEMAZFSNIvkVZCIgkQcZEIiqTBCHJJMk8efn1aOcAgpCMh36xj/W+uDOpTuUI3JTui5v0FErnlwB83ahsnXU2k8lUKpnc7JxtVXa+oY2VUmEqjoETP4mzRQJlzzR5gBR5FFhXtHjAq4cTqZjigs+IBLmk+PT9rKAPgQB7cbaJfCRuyz8ST512ushBclMqPDiSwUC23Oy3x1yla+1+SftzHe0Bcl6HScyRQyFdXpMHiBhiBFduiAAKKRNUKAcIDIUTYUT6j4K7nIGBmwx8/fJ95xDR9vdvqNw7L2mJR4WKPbgSSPiyOvkSAc90Q/2volDw+6s0zQNrFrA5gXZJI7Mgx9FclCdyKksLNQHHXZ//fCclGPAVtGap3odYnPfrpaZWzk41XP+5lABV2COpqIiiYEpCPKIoqixZCIRlr1KUMUySVUXhoZKYXnu2ALLbnRcfnc4F6LlFGhApEncZ0YuD1RCnWNrQBhECGDUoUzjN0gThSE+kgwUmTt8wbSqDopV6nZBlYqgNw4fiwkbLGE5SfGttIkOsDBbubJ3vBKjMAAPHnQAqdjwhL+x/EdQn60F/tjvyzyJn+RxEqw+k1xuJb6GFcA30s5PMYbvdA5rwdZHkgE72bKkHaiLPOfSjL/idrqMjNpws7YN281lGiHPZk8iWtUapVL+9Bu2T29uLK7gYaAXfIt314sk2z9HRLynGCyjNoBECTTlcXISP+VFkD2g855jVig+qNOc9tPp/2/2+DdWBg9XDw43tL98M7eYWaTeLAoMzkNX64HIdgKPPrVo0Gs3VWp+PAFi/QTkGs3/uhlj2NZDX6evGQbeTTMVDoZG9klAoE092oIYLtUKANNxFmRhXHz2QYwuQZZuQGlq54Et4lvXWXfzZTrJ+ok7f/TVNm3vsO93KSW6h3fCLlz9bdx/5fmPz/BETeBrX4GtlbPd3bOtzpKwbSKdbG+CyNP/YMeftb0KnnD+enG56WfsP2OlklsbGPeU2X3TKxOFLKGX6vmxJ3Uae9yH0MvhdCwpP1WV8P8BqaukO27t3Q/B1I2P6+TaRBzi1YXHITtyWOfsKtLlKxeVPv914CP71tH2JAtjddNvcceQmXLKFjKeFAHp/iMCOLZMxfIYQAZstfjD9bC9/Qo1Htss18JTl0AfgQNuSO4c7ZwewoxuHO52KzURgp7N6sLNpsxDY3lo9XEV8oW8TIc8nmOMtH4HH9uFXnrRRf7ubQRs7KXeouwu7GHdnVneGCKxmluIbSZuJAOi43Z0dt4kA2hObY8q20l+PMWDj78d9pB5j2wu9ZLZt3U2D1y0E9E2uim1UDtgOza1ChEBmfkzge9zoDTwhk1gCoE53O/oml+0ADXdmBIGMvlVkIYD2QWwHqSEC8HvzuuHAfvGEIOKrj4+KaidYdS9BMQA1gdNdW6cC14SzEQS24BJRObMQOIbyL/49NDILknPL11Z4yvxLPMFL3ABoZ7R72Nla/b7kPjjodEflwEHlbPUgZEnC3dWts+2OJQmXbPHdH3PKZBv8+0nMd3X76FecV6ALF7zk1mYohcK/jOcAgVTo9EwPCNMRgBpRpnOWMlfDJcQ2cxOE2tMCx56iGjub4Pumrg4bm4TG0/0tpGvBAzXZQGBY1gMB4hVwPVOtEMW2FjSt2TRzqyPTJ+sLQMvH88SINPvHAas4lwMBlKoGUSBwJ1lN4RopxXeUwrOxLTNbfHwr1LaZSXW/gpndgGhHZ4f6epD2z/1cVFF1KuZqpvXbB08MUy6AUr/RrPev22vr5h7G+lqvfVJvakP3d0K7Abvd5Jhl8NudM3e8swPA1WwYwL6iOz/2ot4wH+FY/Y4FfHDYk6JdnMDkJaV1BG7q5Uc2Yuwe5EBAYSaKv5rnmYggcEYOHTkmqciLsnbSLCB/RxAax1dr4OtBZ2AbjxoIdzq/FMqcdrcBOJ+Reewp13ugZpxsI+56wAwvGEEQ+vk25Wj9vOF7yFNhD6Ca9tUqL7BGrpqxJDoERrk4Ju/PQRQaOj/ZAwXkIfhyiGKKQ1ZM8VJoPLT47GD7K1i70HyzWQISzd4DiW/uAQIlwPkMTgr3NSVY6APjtpL7UBzWgVMsn94H14NjqUGfVjpHmZ12t3dWu1udzmlSp04HnRLYQP4hyHuN7KyOSyTqoFXlBo7wu82+86YeMEGSNKOCm18Ouga1NlB4F07iv69Gr4Qg6Ij0c3izrXPFPFswlBwo0dXNeb/0uyMGk5NTAzXZYQ0YM37nKIuO91OM1RFGTzzCwq8LErgYl0jZa+AXjCQ1eIQdq4bSw274wa2m5t/ACVlsrY2Z+nY90ZnP2AD1oQ3Q5Vlfhb3SB1WasLYAKMUx4NRBj/3owL9ifkyoEBEixpOIk4XcaMC6vQEUDjd3ldKMGV2ll+koSlvQovWyQ6HN6rwRR/jlTo3fS8HzzxG0C8oKHOYaIkBxgoOmhwhgnKAnxjARcAhIaND+ESupBGIYid53odQMfh0BWC2LOUYQgGUchwiY1XkZkoy0buYJQRMIKJ2JXJRUUbUQoNMqLMuEiUBR8vuLaD4YCOQlr6SmaTifh9vDZSAThFD0p/0Ki5sIVGG1YRHlZ0HRF1RN9EqKjNOKlJaK6AsQAVgdt9+fnw/cs46uYYX8zBKUuG8iQEhhOHwtPVRGRwDwOM7VaAuBGhxB1DOc/jnY4XX2JBJ3RCM4zgMTAYKH7E4rXmKAALYvomQZArWfx3G2Br+mI4AREUuHfnkksgBlGCJFXg8HMRGgajRKBDREAKXFIf08Yc4CGX7iQIiQ0iBMBKUQwiMoTQ5eNBHAUWIigrMQoFoovxAvUgqqHrGYgQBG5ubn8vLpeW/0kCA4gkMEqHsQkO5DwH8yrMj4Mq6MIIAii9JDBGjEGAgBPeBiiMAc73NcuayiRjNFuBzEhrPAm4diLjoyCxiSYGsuSxJGaYKo+mH3XKal5AFwfXDlWJIUjq1ZEEvDFUMazoLPMVitwlD7PEm4apw5C3DHPLPTa7BzsGPVYhjKOhMB3KWkw2o6byFQTEtSjrckoexXRFWBOgSt9EzNsLnHETgTFSU1aklCSlLCXslvSkIsJ3nDxTD8LdUv5mRTEuKYOpvTL08jZ/+YR5HCAh+hOGstwGmGZx0uczWkWFjmrNUQc9Ecz0DFl1WGvqCVdo0jCY7nHdxwNcQivKDnU9RXQ4yjYHmsOi9D4LQ03xQKwRKQXIZGhI9pRPhQI8Jws2wgYNhJGL/fG2l64PqYx0gjf9CYRoRbCJjVDKuD+gAXnfslFYXLvSpracWRca3YJYxr+IJroM9SjAKuxjSZ5SYoMoP8ObjgGvu1oV49RoQgiOB83puAcPSal3sSQ5GEMT6/JcMywtlYFJz8EiiTvQBF2aWn8LzXMrrzFkkx/uMbbSFutfVAo64movSrj1jHumHLyQoKcb7HIe7M9sFPL89ixO9TKaFqHJFwbR6JhB6ioK95baVZIoi7wVKGtwilW8qnW+Cf+sPB2ugmTxCVhvXcWw1TVffQUepFiYsxKJjQ6tcA7Bf91UHyHwqFCVGUngAowuf1NNG9fvMRR4UTpWtah/VIMZnhWBdNG9VQRjUxUa0dgZv+rLw9ExKKESqd9JC7Zq/VykWjxWI02tr/ifycl9f1Zjmx/CTV3emB9Zz31nWXa8uoptbaPzaqaRRm6O+YBtmDnkAiq4GmHiTUNHzlCc8fR7TZlz0BX3YQa4Sq0QrZZ1QzNyqAxR6n2dOME00tPtkv5mevLQYF566rzpsSLx/dvmAyUntCJMw0yW7/4Fks0TtZbo23QH8v2iGXl6bZ5pv7heyLJQIQZWeZb+5VkPZp3i2YN/3X60PLr/B21elS4Lfx8/8NVAYL6b54Qco27c7lFU9gQJ6V5cU6BDxTMjJl1k+u273L9QFd9nrXg2CWp/mIXisFE4Vmvw0A2I+qfrGal3lGJ17Ox0TJW2wdGbkAXiYB7EsT8m/CztdUUY6gM6X3EEazAh9LF3+Cy0X1cz6fPOWTdZATGZbGfhdRNzhaK+SVY3DTTLwdTvCVAFDRPse9fafuwQF3RMQWuC2/DUYIlEAtxum5pqrsGAQOEb2GzSv8cB5dqCPIxs4g4eD3wHnhDfBBee2nTBmJxgiVGwQ76tyAs1E0/oqDJPSEC6See4URSWNPDCeiEeXZt9ctDjWB5GDEMMegOCkvQgB3xSSZRaENAwS4mJRH6TVMBARRNPbQoxTB77UX4hzw86kMYmRV4WX1px7ahQJ/XMUwU416CROBopKPiCplIVDzM3yR12NCaJzg9m8Xz7b/A1ruSSSXowmC3TMRIMUqupZsiECUIXHCLxMmAjmKIFn9RjmUi4h4iUv1Zkg+wJL6PVFk0UKgaEaAWXIARYCliaEc0BPR4QYCGKnM9yaVCSkLERBUlFWvZiHgRdcUMiOzAOWYqoYtBFSUj1K/U89AQJ1a6vp50MoaZIBijHaEgSUHhJxAcyNyIKqwNNNCAWIGAiBPu/QAMWMWcK/claABmXRIiiqHXdZawKhKmo9Za0EVlvUPDAQEuaoUw7qahCQh27p+1ZIQhYSLNElT+Kg+gDmMeCEDAfgzrZd1BFCZNlJRQQQIZv/mla+GH+waqPGDYwG4nxvTCV3KmEZM5PPkWFnh/KD/2gH4oF/iXJNZ/cI+xx0b4E7qKXrkimucoCMqaD//TudFInu2Dn76H7SMfiU98VQ1Cq4XJxJsUrIHGm1wpMQEB6YnX/5N3wkSnRPzt8D6VXaxdjonJXSL3D/gOJeOMRzyEuAj5wQHlxdilIOLyKKyD9ZPms9JPLX4tOJDgWQA7NUU5CTjeSaik351YVhSo/sAoFCw7MJkhpoFOVcC2XLj6rzdGzn1hy7UubnWjwxPOf3nAhM6+OcJJAwKeFaee0HBO73TO73TO73TO73TAtP/A9uk+Hg9jz/3AAAAAElFTkSuQmCC"
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
            Guide to <span className="text-blue-600">Backtracking Algorithms</span>
          </h1>
          <p className="mt-6 text-xl text-[#555555] max-w-3xl mx-auto">
            Backtracking algorithms solve constraint satisfaction problems by exploring all possible configurations recursively and undoing choices when necessary.
            They are widely used in puzzles, combinatorial problems, and search problems.
          </p>
        </motion.div>

        {/* What is Backtracking? */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-xl mb-12 shadow-sm"
        >
          <h2 className="text-3xl font-semibold mb-3 text-blue-600 flex items-center gap-2 border-b-2 border-blue-200 pb-2">
            <Cpu size={26} /> What is Backtracking?
          </h2>
          <p className="text-[#333333] text-xl mb-3">
            Backtracking is a recursive algorithmic technique for solving problems incrementally, trying partial solutions and abandoning them if they fail to satisfy constraints.
          </p>
          <p className="text-[#333333] text-xl">
            Common backtracking problems include N-Queens, Sudoku solving, maze pathfinding, Hamiltonian paths, and subset sums.
          </p>
        </motion.div>

        {/* Key Takeaways */}
        <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="bg-green-50 border-l-4 border-green-500 p-6 rounded-xl mb-12 shadow-sm">
          <h2 className="text-3xl font-semibold mb-3 text-green-600 flex items-center gap-2 border-b-2 border-green-200 pb-2">
            <Sparkles size={26} /> Key Takeaways
          </h2>
          <ul className="list-disc list-inside space-y-3 text-[#333333] text-xl">
            <li>Backtracking explores all possible solutions recursively and abandons invalid paths.</li>
            <li>It is commonly used for puzzles, combinatorial problems, and constraint satisfaction problems.</li>
            <li>Efficiency comes from pruning paths early that violate constraints.</li>
            <li>Understanding recursion and constraints is key to designing backtracking solutions.</li>
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
            ✨ Master backtracking to solve complex problems efficiently by exploring all possibilities intelligently.
          </p>
        </motion.div>
      </section>
      <Footer />
    </>
  );
};

export default BacktrackingOverview;