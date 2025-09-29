// src/data/codes.js
export const sortingCodes = {
  bubble: {
    java: `public void bubbleSort(int[] arr) {
  int n = arr.length;
  for (int i = 0; i < n - 1; i++) {
    for (int j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        int temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}`,
    python: `def bubble_sort(arr):
  n = len(arr)
  for i in range(n):
    for j in range(0, n - i - 1):
      if arr[j] > arr[j+1]:
        arr[j], arr[j+1] = arr[j+1], arr[j]`,
    cpp: `void bubbleSort(int arr[], int n) {
  for (int i = 0; i < n-1; i++) {
    for (int j = 0; j < n-i-1; j++) {
      if (arr[j] > arr[j+1]) {
        swap(arr[j], arr[j+1]);
      }
    }
  }
}`,
    javascript: `function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j+1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
      }
    }
  }
  return arr;
}`,
  },

  selection: {
    java: `public void selectionSort(int[] arr) {
  int n = arr.length;
  for (int i = 0; i < n-1; i++) {
    int minIdx = i;
    for (int j = i+1; j < n; j++)
      if (arr[j] < arr[minIdx])
        minIdx = j;
    int temp = arr[minIdx];
    arr[minIdx] = arr[i];
    arr[i] = temp;
  }
}`,
    python: `def selection_sort(arr):
  for i in range(len(arr)):
    min_idx = i
    for j in range(i+1, len(arr)):
      if arr[j] < arr[min_idx]:
        min_idx = j
    arr[i], arr[min_idx] = arr[min_idx], arr[i]`,
    cpp: `void selectionSort(int arr[], int n) {
  for(int i = 0; i < n-1; i++) {
    int minIdx = i;
    for(int j = i+1; j < n; j++)
      if(arr[j] < arr[minIdx]) minIdx = j;
    swap(arr[i], arr[minIdx]);
  }
}`,
    javascript: `function selectionSort(arr) {
  for(let i = 0; i < arr.length; i++){
    let minIdx = i;
    for(let j = i+1; j < arr.length; j++){
      if(arr[j] < arr[minIdx]) minIdx = j;
    }
    [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
  }
  return arr;
}`,
  },

  insertion: {
    java: `public void insertionSort(int[] arr) {
  int n = arr.length;
  for (int i = 1; i < n; i++) {
    int key = arr[i];
    int j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
}`,
    python: `def insertion_sort(arr):
  for i in range(1, len(arr)):
    key = arr[i]
    j = i-1
    while j >= 0 and arr[j] > key:
      arr[j+1] = arr[j]
      j -= 1
    arr[j+1] = key`,
    cpp: `void insertionSort(int arr[], int n) {
  for(int i=1; i<n; i++){
    int key = arr[i];
    int j = i-1;
    while(j>=0 && arr[j]>key){
      arr[j+1]=arr[j];
      j--;
    }
    arr[j+1]=key;
  }
}`,
    javascript: `function insertionSort(arr){
  for(let i=1;i<arr.length;i++){
    let key=arr[i];
    let j=i-1;
    while(j>=0 && arr[j]>key){
      arr[j+1]=arr[j];
      j--;
    }
    arr[j+1]=key;
  }
  return arr;
}`,
  },

  merge: {
    java: `public void mergeSort(int[] arr, int l, int r) {
  if (l < r) {
    int m = (l+r)/2;
    mergeSort(arr, l, m);
    mergeSort(arr, m+1, r);
    merge(arr, l, m, r);
  }
}

public void merge(int[] arr, int l, int m, int r) {
  int n1 = m - l + 1;
  int n2 = r - m;
  int[] L = new int[n1];
  int[] R = new int[n2];
  for(int i=0;i<n1;i++) L[i]=arr[l+i];
  for(int j=0;j<n2;j++) R[j]=arr[m+1+j];
  int i=0,j=0,k=l;
  while(i<n1 && j<n2){
    if(L[i]<=R[j]) arr[k++] = L[i++];
    else arr[k++] = R[j++];
  }
  while(i<n1) arr[k++] = L[i++];
  while(j<n2) arr[k++] = R[j++];
}`,
    python: `def merge_sort(arr):
  if len(arr) > 1:
    mid = len(arr)//2
    L = arr[:mid]
    R = arr[mid:]
    merge_sort(L)
    merge_sort(R)
    i=j=k=0
    while i<len(L) and j<len(R):
      if L[i]<=R[j]:
        arr[k]=L[i]
        i+=1
      else:
        arr[k]=R[j]
        j+=1
      k+=1
    while i<len(L):
      arr[k]=L[i]; i+=1; k+=1
    while j<len(R):
      arr[k]=R[j]; j+=1; k+=1`,
    cpp: `void merge(int arr[], int l, int m, int r){
  int n1 = m-l+1, n2 = r-m;
  int L[n1], R[n2];
  for(int i=0;i<n1;i++) L[i]=arr[l+i];
  for(int i=0;i<n2;i++) R[i]=arr[m+1+i];
  int i=0,j=0,k=l;
  while(i<n1 && j<n2){
    if(L[i]<=R[j]) arr[k++] = L[i++];
    else arr[k++] = R[j++];
  }
  while(i<n1) arr[k++] = L[i++];
  while(j<n2) arr[k++] = R[j++];
}

void mergeSort(int arr[], int l, int r){
  if(l<r){
    int m = l + (r-l)/2;
    mergeSort(arr,l,m);
    mergeSort(arr,m+1,r);
    merge(arr,l,m,r);
  }
}`,
    javascript: `function mergeSort(arr){
  if(arr.length<=1) return arr;
  const mid=Math.floor(arr.length/2);
  const L=arr.slice(0,mid);
  const R=arr.slice(mid);
  return merge(mergeSort(L), mergeSort(R));
}
function merge(L,R){
  let result=[],i=0,j=0;
  while(i<L.length && j<R.length){
    if(L[i]<=R[j]) result.push(L[i++]);
    else result.push(R[j++]);
  }
  return result.concat(L.slice(i)).concat(R.slice(j));
}`,
  },

  quick: {
    java: `public void quickSort(int[] arr, int low, int high){
  if(low<high){
    int pi = partition(arr, low, high);
    quickSort(arr, low, pi-1);
    quickSort(arr, pi+1, high);
  }
}
public int partition(int[] arr,int low,int high){
  int pivot = arr[high];
  int i = (low-1);
  for(int j=low;j<high;j++){
    if(arr[j]<pivot){
      i++;
      int temp=arr[i]; arr[i]=arr[j]; arr[j]=temp;
    }
  }
  int temp=arr[i+1]; arr[i+1]=arr[high]; arr[high]=temp;
  return i+1;
}`,
    python: `def quick_sort(arr):
  if len(arr)<=1: return arr
  pivot=arr[len(arr)//2]
  left=[x for x in arr if x<pivot]
  middle=[x for x in arr if x==pivot]
  right=[x for x in arr if x>pivot]
  return quick_sort(left)+middle+quick_sort(right)`,
    cpp: `int partition(int arr[], int low, int high){
  int pivot = arr[high]; int i = low-1;
  for(int j=low;j<high;j++){
    if(arr[j]<pivot){i++; swap(arr[i], arr[j]);}
  }
  swap(arr[i+1], arr[high]);
  return i+1;
}
void quickSort(int arr[], int low,int high){
  if(low<high){
    int pi = partition(arr,low,high);
    quickSort(arr,low,pi-1);
    quickSort(arr,pi+1,high);
  }
}`,
    javascript: `function quickSort(arr){
  if(arr.length<=1) return arr;
  const pivot=arr[arr.length-1];
  const left=[],right=[],equal=[];
  for(const n of arr){
    if(n<pivot) left.push(n);
    else if(n>pivot) right.push(n);
    else equal.push(n);
  }
  return [...quickSort(left), ...equal, ...quickSort(right)];
}`,
  },

  heap: {
    java: `public void heapSort(int[] arr){
  int n = arr.length;
  for(int i=n/2-1;i>=0;i--) heapify(arr,n,i);
  for(int i=n-1;i>0;i--){
    int temp=arr[0]; arr[0]=arr[i]; arr[i]=temp;
    heapify(arr,i,0);
  }
}
void heapify(int[] arr,int n,int i){
  int largest=i,l=i*2+1,r=i*2+2;
  if(l<n && arr[l]>arr[largest]) largest=l;
  if(r<n && arr[r]>arr[largest]) largest=r;
  if(largest!=i){
    int swap=arr[i]; arr[i]=arr[largest]; arr[largest]=swap;
    heapify(arr,n,largest);
  }
}`,
    python: `def heap_sort(arr):
  import heapq
  h = arr[:]
  heapq.heapify(h)
  arr[:] = [heapq.heappop(h) for _ in range(len(h))]`,
    cpp: `void heapify(int arr[], int n,int i){
  int largest=i,l=2*i+1,r=2*i+2;
  if(l<n && arr[l]>arr[largest]) largest=l;
  if(r<n && arr[r]>arr[largest]) largest=r;
  if(largest!=i){swap(arr[i],arr[largest]); heapify(arr,n,largest);}
}
void heapSort(int arr[], int n){
  for(int i=n/2-1;i>=0;i--) heapify(arr,n,i);
  for(int i=n-1;i>0;i--){
    swap(arr[0],arr[i]);
    heapify(arr,i,0);
  }
}`,
    javascript: `function heapSort(arr){
  let n = arr.length;
  function heapify(arr,n,i){
    let largest=i,l=2*i+1,r=2*i+2;
    if(l<n && arr[l]>arr[largest]) largest=l;
    if(r<n && arr[r]>arr[largest]) largest=r;
    if(largest!==i){[arr[i],arr[largest]]=[arr[largest],arr[i]]; heapify(arr,n,largest);}
  }
  for(let i=Math.floor(n/2)-1;i>=0;i--) heapify(arr,n,i);
  for(let i=n-1;i>0;i--){
    [arr[0],arr[i]]=[arr[i],arr[0]];
    heapify(arr,i,0);
  }
  return arr;
}`,
  },

  counting: {
    java: `public void countingSort(int[] arr){
  int max = Arrays.stream(arr).max().getAsInt();
  int[] count = new int[max+1];
  for(int num: arr) count[num]++;
  int idx=0;
  for(int i=0;i<=max;i++)
    for(int j=0;j<count[i];j++)
      arr[idx++] = i;
}`,
    python: `def counting_sort(arr):
  max_val=max(arr)
  count=[0]*(max_val+1)
  for n in arr: count[n]+=1
  res=[]
  for i,c in enumerate(count):
    res.extend([i]*c)
  return res`,
    cpp: `void countingSort(int arr[], int n){
  int max=*max_element(arr,arr+n);
  int count[max+1]={0};
  for(int i=0;i<n;i++) count[arr[i]]++;
  int idx=0;
  for(int i=0;i<=max;i++)
    for(int j=0;j<count[i];j++)
      arr[idx++]=i;
}`,
    javascript: `function countingSort(arr){
  let max=Math.max(...arr);
  let count=Array(max+1).fill(0);
  arr.forEach(n=>count[n]++);
  let res=[];
  count.forEach((c,i)=>{for(let j=0;j<c;j++) res.push(i)});
  return res;
}`,
  },

  bucket: {
    java: `public void bucketSort(float[] arr){
  int n = arr.length;
  ArrayList<Float>[] buckets = new ArrayList[n];
  for(int i=0;i<n;i++) buckets[i]=new ArrayList<>();
  for(float num: arr){
    int idx=(int)(num*n);
    buckets[idx].add(num);
  }
  for(ArrayList<Float> b: buckets) Collections.sort(b);
  int idx=0;
  for(ArrayList<Float> b: buckets)
    for(float num: b) arr[idx++]=num;
}`,
    python: `def bucket_sort(arr):
  n = len(arr)
  buckets=[[] for _ in range(n)]
  for num in arr:
    idx = int(num*n)
    buckets[idx].append(num)
  arr.clear()
  for b in buckets:
    arr.extend(sorted(b))`,
    cpp: `void bucketSort(float arr[], int n){
  vector<float> b[n];
  for(int i=0;i<n;i++){
    int idx=(int)(arr[i]*n);
    b[idx].push_back(arr[i]);
  }
  int idx=0;
  for(int i=0;i<n;i++){
    sort(b[i].begin(),b[i].end());
    for(float num: b[i]) arr[idx++]=num;
  }
}`,
    javascript: `function bucketSort(arr){
  const n=arr.length;
  const buckets=Array.from({length:n},()=>[]);
  arr.forEach(num=>buckets[Math.floor(num*n)].push(num));
  arr.length=0;
  buckets.forEach(b=>arr.push(...b.sort((a,b)=>a-b)));
  return arr;
}`,
  },

  shell: {
    java: `public void shellSort(int[] arr){
  int n = arr.length;
  for(int gap=n/2;gap>0;gap/=2){
    for(int i=gap;i<n;i++){
      int temp=arr[i];
      int j=i;
      while(j>=gap && arr[j-gap]>temp){
        arr[j]=arr[j-gap];
        j-=gap;
      }
      arr[j]=temp;
    }
  }
}`,
    python: `def shell_sort(arr):
  n=len(arr)
  gap=n//2
  while gap>0:
    for i in range(gap,n):
      temp=arr[i]; j=i
      while j>=gap and arr[j-gap]>temp:
        arr[j]=arr[j-gap]; j-=gap
      arr[j]=temp
    gap//=2`,
    cpp: `void shellSort(int arr[], int n){
  for(int gap=n/2; gap>0; gap/=2){
    for(int i=gap;i<n;i++){
      int temp=arr[i], j=i;
      while(j>=gap && arr[j-gap]>temp){
        arr[j]=arr[j-gap]; j-=gap;
      }
      arr[j]=temp;
    }
  }
}`,
    javascript: `function shellSort(arr){
  let n=arr.length;
  for(let gap=Math.floor(n/2); gap>0; gap=Math.floor(gap/2)){
    for(let i=gap;i<n;i++){
      let temp=arr[i], j=i;
      while(j>=gap && arr[j-gap]>temp){
        arr[j]=arr[j-gap]; j-=gap;
      }
      arr[j]=temp;
    }
  }
  return arr;
}`,
  },

  tim: {
    java: `// TimSort is complex; Java's Arrays.sort uses it internally
int[] arr = {5, 2, 4, 6, 1, 3};
Arrays.sort(arr); // TimSort internally`,
    python: `# Python's sort() uses TimSort
arr = [5, 2, 4, 6, 1, 3]
arr.sort()`,
    cpp: `// C++ std::sort uses IntroSort internally
#include <algorithm>
int arr[] = {5, 2, 4, 6, 1, 3};
std::sort(arr, arr + 6);`,
    javascript: `// JavaScript built-in sort uses efficient hybrid sort
let arr = [5, 2, 4, 6, 1, 3];
arr.sort((a, b) => a - b);`,
  },

  intro: {
    java: `// IntroSort combines Quick, Heap, and Insertion
int[] arr = {5, 2, 4, 6, 1, 3};
Arrays.sort(arr); // Java uses IntroSort internally`,
    python: `# Python uses TimSort which is hybrid
arr = [5, 2, 4, 6, 1, 3]
arr.sort()`,
    cpp: `// IntroSort internally via std::sort
#include <algorithm>
int arr[] = {5, 2, 4, 6, 1, 3};
std::sort(arr, arr + 6);`,
    javascript: `// JavaScript built-in sort as hybrid
let arr = [5, 2, 4, 6, 1, 3];
arr.sort((a, b) => a - b);`,
  },
};


// src/data/searchingCodes.js
export const searchingCodes = {
  linear: {
    java: `int linearSearch(int[] arr, int key){
  for(int i=0;i<arr.length;i++){
    if(arr[i]==key) return i;
  }
  return -1;
}`,
    python: `def linear_search(arr, key):
  for i, val in enumerate(arr):
    if val == key:
      return i
  return -1`,
    cpp: `int linearSearch(int arr[], int n, int key){
  for(int i=0;i<n;i++)
    if(arr[i]==key) return i;
  return -1;
}`,
    javascript: `function linearSearch(arr, key){
  for(let i=0;i<arr.length;i++){
    if(arr[i]===key) return i;
  }
  return -1;
}`,
  },
  binary: {
    java: `int binarySearch(int[] arr, int key){
  int l=0, r=arr.length-1;
  while(l<=r){
    int m=(l+r)/2;
    if(arr[m]==key) return m;
    else if(arr[m]<key) l=m+1;
    else r=m-1;
  }
  return -1;
}`,
    python: `def binary_search(arr, key):
  l, r = 0, len(arr)-1
  while l<=r:
    m = (l+r)//2
    if arr[m]==key: return m
    elif arr[m]<key: l=m+1
    else: r=m-1
  return -1`,
    cpp: `int binarySearch(int arr[], int n, int key){
  int l=0, r=n-1;
  while(l<=r){
    int m=(l+r)/2;
    if(arr[m]==key) return m;
    else if(arr[m]<key) l=m+1;
    else r=m-1;
  }
  return -1;
}`,
    javascript: `function binarySearch(arr, key){
  let l=0,r=arr.length-1;
  while(l<=r){
    let m=Math.floor((l+r)/2);
    if(arr[m]===key) return m;
    else if(arr[m]<key) l=m+1;
    else r=m-1;
  }
  return -1;
}`,
  },
  jump: {
    java: `int jumpSearch(int[] arr, int key){
  int n = arr.length;
  int step = (int)Math.sqrt(n);
  int prev = 0;
  while(arr[Math.min(step,n)-1]<key){
    prev = step;
    step += (int)Math.sqrt(n);
    if(prev>=n) return -1;
  }
  for(int i=prev;i<Math.min(step,n);i++)
    if(arr[i]==key) return i;
  return -1;
}`,
    python: `import math
def jump_search(arr, key):
  n = len(arr)
  step = int(math.sqrt(n))
  prev = 0
  while arr[min(step,n)-1]<key:
    prev = step
    step += int(math.sqrt(n))
    if prev>=n: return -1
  for i in range(prev, min(step,n)):
    if arr[i]==key: return i
  return -1`,
    cpp: `#include <cmath>
int jumpSearch(int arr[], int n, int key){
  int step = sqrt(n);
  int prev = 0;
  while(arr[std::min(step,n)-1]<key){
    prev = step;
    step += sqrt(n);
    if(prev>=n) return -1;
  }
  for(int i=prev;i<std::min(step,n);i++)
    if(arr[i]==key) return i;
  return -1;
}`,
    javascript: `function jumpSearch(arr, key){
  let n = arr.length;
  let step = Math.floor(Math.sqrt(n));
  let prev = 0;
  while(arr[Math.min(step,n)-1]<key){
    prev = step;
    step += Math.floor(Math.sqrt(n));
    if(prev>=n) return -1;
  }
  for(let i=prev;i<Math.min(step,n);i++)
    if(arr[i]===key) return i;
  return -1;
}`,
  },
  interpolation: {
    java: `int interpolationSearch(int[] arr, int key){
  int low=0, high=arr.length-1;
  while(low<=high && key>=arr[low] && key<=arr[high]){
    int pos = low + ((key-arr[low])*(high-low)/(arr[high]-arr[low]));
    if(arr[pos]==key) return pos;
    if(arr[pos]<key) low=pos+1;
    else high=pos-1;
  }
  return -1;
}`,
    python: `def interpolation_search(arr, key):
  low, high = 0, len(arr)-1
  while low<=high and key>=arr[low] and key<=arr[high]:
    pos = low + ((key-arr[low])*(high-low)//(arr[high]-arr[low]))
    if arr[pos]==key: return pos
    if arr[pos]<key: low=pos+1
    else: high=pos-1
  return -1`,
    cpp: `int interpolationSearch(int arr[], int n, int key){
  int low=0, high=n-1;
  while(low<=high && key>=arr[low] && key<=arr[high]){
    int pos = low + ((key-arr[low])*(high-low)/(arr[high]-arr[low]));
    if(arr[pos]==key) return pos;
    if(arr[pos]<key) low=pos+1;
    else high=pos-1;
  }
  return -1;
}`,
    javascript: `function interpolationSearch(arr, key){
  let low=0, high=arr.length-1;
  while(low<=high && key>=arr[low] && key<=arr[high]){
    let pos = low + Math.floor(((key-arr[low])*(high-low)/(arr[high]-arr[low])));
    if(arr[pos]===key) return pos;
    if(arr[pos]<key) low=pos+1;
    else high=pos-1;
  }
  return -1;
}`,
  },
  exponential: {
    java: `int exponentialSearch(int[] arr, int key){
  if(arr[0]==key) return 0;
  int i=1;
  while(i<arr.length && arr[i]<=key) i*=2;
  int l = i/2, r = Math.min(i, arr.length-1);
  while(l<=r){
    int m = (l+r)/2;
    if(arr[m]==key) return m;
    else if(arr[m]<key) l=m+1;
    else r=m-1;
  }
  return -1;
}`,
    python: `def exponential_search(arr, key):
  if arr[0]==key: return 0
  i=1
  while i<len(arr) and arr[i]<=key: i*=2
  l, r = i//2, min(i,len(arr)-1)
  while l<=r:
    m = (l+r)//2
    if arr[m]==key: return m
    elif arr[m]<key: l=m+1
    else: r=m-1
  return -1`,
    cpp: `int exponentialSearch(int arr[], int n, int key){
  if(arr[0]==key) return 0;
  int i=1;
  while(i<n && arr[i]<=key) i*=2;
  int l=i/2, r = std::min(i,n-1);
  while(l<=r){
    int m = (l+r)/2;
    if(arr[m]==key) return m;
    else if(arr[m]<key) l=m+1;
    else r=m-1;
  }
  return -1;
}`,
    javascript: `function exponentialSearch(arr, key){
  if(arr[0]===key) return 0;
  let i=1;
  while(i<arr.length && arr[i]<=key) i*=2;
  let l=i/2, r=Math.min(i, arr.length-1);
  while(l<=r){
    let m = Math.floor((l+r)/2);
    if(arr[m]===key) return m;
    else if(arr[m]<key) l=m+1;
    else r=m-1;
  }
  return -1;
}`,
  },
  ternary: {
    java: `int ternarySearch(int[] arr, int l, int r, int key){
  if(r>=l){
    int mid1 = l + (r-l)/3;
    int mid2 = r - (r-l)/3;
    if(arr[mid1]==key) return mid1;
    if(arr[mid2]==key) return mid2;
    if(key<arr[mid1]) return ternarySearch(arr,l,mid1-1,key);
    else if(key>arr[mid2]) return ternarySearch(arr,mid2+1,r,key);
    else return ternarySearch(arr,mid1+1,mid2-1,key);
  }
  return -1;
}`,
    python: `def ternary_search(arr, l, r, key):
  if r>=l:
    mid1 = l + (r-l)//3
    mid2 = r - (r-l)//3
    if arr[mid1]==key: return mid1
    if arr[mid2]==key: return mid2
    if key<arr[mid1]: return ternary_search(arr,l,mid1-1,key)
    elif key>arr[mid2]: return ternary_search(arr,mid2+1,r,key)
    else: return ternary_search(arr,mid1+1,mid2-1,key)
  return -1`,
    cpp: `int ternarySearch(int arr[], int l, int r, int key){
  if(r>=l){
    int mid1 = l + (r-l)/3;
    int mid2 = r - (r-l)/3;
    if(arr[mid1]==key) return mid1;
    if(arr[mid2]==key) return mid2;
    if(key<arr[mid1]) return ternarySearch(arr,l,mid1-1,key);
    else if(key>arr[mid2]) return ternarySearch(arr,mid2+1,r,key);
    else return ternarySearch(arr,mid1+1,mid2-1,key);
  }
  return -1;
}`,
    javascript: `function ternarySearch(arr, l, r, key){
  if(r>=l){
    let mid1 = l + Math.floor((r-l)/3);
    let mid2 = r - Math.floor((r-l)/3);
    if(arr[mid1]===key) return mid1;
    if(arr[mid2]===key) return mid2;
    if(key<arr[mid1]) return ternarySearch(arr,l,mid1-1,key);
    else if(key>arr[mid2]) return ternarySearch(arr,mid2+1,r,key);
    else return ternarySearch(arr,mid1+1,mid2-1,key);
  }
  return -1;
}`,
  },
};

// src/data/graphCodes.js
export const graphCodes = {
  bfs: {
    java: `void BFS(int start, List<Integer>[] adj, boolean[] visited) {
  Queue<Integer> q = new LinkedList<>();
  visited[start] = true;
  q.add(start);
  while(!q.isEmpty()) {
    int node = q.poll();
    System.out.print(node + " ");
    for(int neighbor : adj[node]) {
      if(!visited[neighbor]) {
        visited[neighbor] = true;
        q.add(neighbor);
      }
    }
  }
}`,
    python: `from collections import deque
def bfs(start, adj):
  visited = [False] * len(adj)
  q = deque([start])
  visited[start] = True
  while q:
    node = q.popleft()
    print(node, end=" ")
    for neighbor in adj[node]:
      if not visited[neighbor]:
        visited[neighbor] = True
        q.append(neighbor)`,
    cpp: `#include <queue>
void BFS(int start, vector<int> adj[], vector<bool> &visited) {
  queue<int> q;
  visited[start] = true;
  q.push(start);
  while(!q.empty()) {
    int node = q.front(); q.pop();
    cout << node << " ";
    for(int neighbor : adj[node]) {
      if(!visited[neighbor]) {
        visited[neighbor] = true;
        q.push(neighbor);
      }
    }
  }
}`,
    javascript: `function BFS(start, adj) {
  const visited = Array(adj.length).fill(false);
  const q = [start];
  visited[start] = true;
  while(q.length) {
    const node = q.shift();
    console.log(node);
    for(const neighbor of adj[node]) {
      if(!visited[neighbor]) {
        visited[neighbor] = true;
        q.push(neighbor);
      }
    }
  }
}`,
  },

  dfs: {
    java: `void DFS(int node, List<Integer>[] adj, boolean[] visited) {
  visited[node] = true;
  System.out.print(node + " ");
  for(int neighbor : adj[node]) {
    if(!visited[neighbor]) DFS(neighbor, adj, visited);
  }
}`,
    python: `def dfs(node, adj, visited):
  visited[node] = True
  print(node, end=" ")
  for neighbor in adj[node]:
    if not visited[neighbor]:
      dfs(neighbor, adj, visited)`,
    cpp: `void DFS(int node, vector<int> adj[], vector<bool> &visited) {
  visited[node] = true;
  cout << node << " ";
  for(int neighbor : adj[node]) {
    if(!visited[neighbor])
      DFS(neighbor, adj, visited);
  }
}`,
    javascript: `function DFS(node, adj, visited) {
  visited[node] = true;
  console.log(node);
  for(const neighbor of adj[node]) {
    if(!visited[neighbor]) DFS(neighbor, adj, visited);
  }
}`,
  },

  dijkstra: {
    java: `int[] dijkstra(int src, int V, List<int[]>[] adj) {
  int[] dist = new int[V];
  Arrays.fill(dist, Integer.MAX_VALUE);
  dist[src] = 0;
  PriorityQueue<int[]> pq = new PriorityQueue<>(Comparator.comparingInt(a -> a[1]));
  pq.add(new int[]{src, 0});
  while(!pq.isEmpty()) {
    int[] curr = pq.poll();
    int u = curr[0], d = curr[1];
    if(d > dist[u]) continue;
    for(int[] edge : adj[u]) {
      int v = edge[0], w = edge[1];
      if(dist[u] + w < dist[v]) {
        dist[v] = dist[u] + w;
        pq.add(new int[]{v, dist[v]});
      }
    }
  }
  return dist;
}`,
    python: `import heapq
def dijkstra(src, adj):
  dist = [float('inf')]*len(adj)
  dist[src] = 0
  pq = [(0, src)]
  while pq:
    d, u = heapq.heappop(pq)
    if d > dist[u]: continue
    for v, w in adj[u]:
      if dist[u] + w < dist[v]:
        dist[v] = dist[u] + w
        heapq.heappush(pq, (dist[v], v))
  return dist`,
    cpp: `#include <queue>
vector<int> dijkstra(int src, int V, vector<pair<int,int>> adj[]) {
  vector<int> dist(V, INT_MAX);
  dist[src] = 0;
  priority_queue<pair<int,int>, vector<pair<int,int>>, greater<>> pq;
  pq.push({0, src});
  while(!pq.empty()) {
    auto [d,u] = pq.top(); pq.pop();
    if(d>dist[u]) continue;
    for(auto [v,w]: adj[u]) {
      if(dist[u]+w < dist[v]) {
        dist[v] = dist[u]+w;
        pq.push({dist[v], v});
      }
    }
  }
  return dist;
}`,
    javascript: `function dijkstra(src, adj) {
  const dist = Array(adj.length).fill(Infinity);
  dist[src] = 0;
  const pq = [[0, src]];
  while(pq.length) {
    pq.sort((a,b)=>a[0]-b[0]);
    const [d, u] = pq.shift();
    if(d > dist[u]) continue;
    for(const [v, w] of adj[u]) {
      if(dist[u]+w < dist[v]) {
        dist[v] = dist[u]+w;
        pq.push([dist[v], v]);
      }
    }
  }
  return dist;
}`,
  },

  prim: {
    java: `int prim(int V, List<int[]>[] adj) {
  boolean[] visited = new boolean[V];
  PriorityQueue<int[]> pq = new PriorityQueue<>(Comparator.comparingInt(a->a[1]));
  pq.add(new int[]{0,0});
  int sum=0;
  while(!pq.isEmpty()) {
    int[] curr = pq.poll();
    int u=curr[0], w=curr[1];
    if(visited[u]) continue;
    visited[u]=true;
    sum += w;
    for(int[] e: adj[u]) {
      if(!visited[e[0]]) pq.add(e);
    }
  }
  return sum;
}`,
    python: `import heapq
def prim(adj):
  V = len(adj)
  visited = [False]*V
  pq = [(0,0)]
  total = 0
  while pq:
    w,u = heapq.heappop(pq)
    if visited[u]: continue
    visited[u]=True
    total += w
    for v,weight in adj[u]:
      if not visited[v]:
        heapq.heappush(pq, (weight, v))
  return total`,
    cpp: `#include <queue>
int prim(int V, vector<pair<int,int>> adj[]) {
  vector<bool> visited(V, false);
  priority_queue<pair<int,int>, vector<pair<int,int>>, greater<>> pq;
  pq.push({0,0});
  int sum=0;
  while(!pq.empty()) {
    auto [w,u] = pq.top(); pq.pop();
    if(visited[u]) continue;
    visited[u]=true;
    sum += w;
    for(auto [v,weight]: adj[u]) {
      if(!visited[v]) pq.push({weight,v});
    }
  }
  return sum;
}`,
    javascript: `function prim(adj) {
  const V = adj.length;
  const visited = Array(V).fill(false);
  const pq = [[0,0]];
  let total = 0;
  while(pq.length) {
    pq.sort((a,b)=>a[0]-b[0]);
    const [w,u] = pq.shift();
    if(visited[u]) continue;
    visited[u] = true;
    total += w;
    for(const [v,weight] of adj[u]) {
      if(!visited[v]) pq.push([weight,v]);
    }
  }
  return total;
}`,
  },

  kruskal: {
    java: `class DSU {
  int[] parent, rank;
  DSU(int n) { parent = new int[n]; rank = new int[n]; for(int i=0;i<n;i++) parent[i]=i; }
  int find(int x) { return parent[x]==x?x:(parent[x]=find(parent[x])); }
  boolean union(int x,int y) {
    int px=find(x), py=find(y);
    if(px==py) return false;
    if(rank[px]<rank[py]) parent[px]=py;
    else if(rank[px]>rank[py]) parent[py]=px;
    else { parent[py]=px; rank[px]++; }
    return true;
  }
}
int kruskal(int V, List<int[]> edges) {
  Collections.sort(edges, Comparator.comparingInt(a->a[2]));
  DSU dsu = new DSU(V);
  int sum=0;
  for(int[] e: edges) if(dsu.union(e[0], e[1])) sum+=e[2];
  return sum;
}`,
    python: `class DSU:
  def __init__(self, n): self.parent = list(range(n)); self.rank=[0]*n
  def find(self,x):
    if self.parent[x]!=x: self.parent[x]=self.find(self.parent[x])
    return self.parent[x]
  def union(self,x,y):
    px, py = self.find(x), self.find(y)
    if px==py: return False
    if self.rank[px]<self.rank[py]: self.parent[px]=py
    elif self.rank[px]>self.rank[py]: self.parent[py]=px
    else: self.parent[py]=px; self.rank[px]+=1
    return True
def kruskal(V, edges):
  edges.sort(key=lambda x:x[2])
  dsu=DSU(V)
  total=0
  for u,v,w in edges:
    if dsu.union(u,v): total+=w
  return total`,
    cpp: `struct DSU{
  vector<int> parent, rank;
  DSU(int n){ parent.resize(n); rank.resize(n,0); for(int i=0;i<n;i++) parent[i]=i; }
  int find(int x){ return parent[x]==x?x:(parent[x]=find(parent[x])); }
  bool unite(int x,int y){
    int px=find(x), py=find(y);
    if(px==py) return false;
    if(rank[px]<rank[py]) parent[px]=py;
    else if(rank[px]>rank[py]) parent[py]=px;
    else{ parent[py]=px; rank[px]++; }
    return true;
  }
};
int kruskal(int V, vector<tuple<int,int,int>> edges){
  sort(edges.begin(),edges.end(),[](auto &a,auto &b){ return get<2>(a)<get<2>(b); });
  DSU dsu(V);
  int total=0;
  for(auto [u,v,w]: edges) if(dsu.unite(u,v)) total+=w;
  return total;
}`,
    javascript: `class DSU{
  constructor(n){ this.parent=[...Array(n).keys()]; this.rank=Array(n).fill(0); }
  find(x){ if(this.parent[x]!=x) this.parent[x]=this.find(this.parent[x]); return this.parent[x]; }
  union(x,y){
    let px=this.find(x), py=this.find(y);
    if(px===py) return false;
    if(this.rank[px]<this.rank[py]) this.parent[px]=py;
    else if(this.rank[px]>this.rank[py]) this.parent[py]=px;
    else{ this.parent[py]=px; this.rank[px]++; }
    return true;
  }
}
function kruskal(V, edges){
  edges.sort((a,b)=>a[2]-b[2]);
  const dsu=new DSU(V);
  let total=0;
  for(const [u,v,w] of edges) if(dsu.union(u,v)) total+=w;
  return total;
}`,
  },

  bellmanFord: {
    java: `int[] bellmanFord(int V, int[][] edges, int src) {
  int[] dist = new int[V];
  Arrays.fill(dist, Integer.MAX_VALUE);
  dist[src] = 0;
  for(int i=0;i<V-1;i++){
    for(int[] edge : edges){
      int u=edge[0], v=edge[1], w=edge[2];
      if(dist[u]!=Integer.MAX_VALUE && dist[u]+w<dist[v])
        dist[v] = dist[u]+w;
    }
  }
  // Detect negative cycles
  for(int[] edge : edges){
    int u=edge[0], v=edge[1], w=edge[2];
    if(dist[u]!=Integer.MAX_VALUE && dist[u]+w<dist[v])
      throw new RuntimeException("Graph contains negative cycle");
  }
  return dist;
}`,
    python: `def bellman_ford(V, edges, src):
  dist = [float('inf')]*V
  dist[src]=0
  for _ in range(V-1):
    for u,v,w in edges:
      if dist[u]+w < dist[v]:
        dist[v] = dist[u]+w
  for u,v,w in edges:
    if dist[u]+w < dist[v]:
      raise Exception("Graph contains negative cycle")
  return dist`,
    cpp: `vector<int> bellmanFord(int V, vector<tuple<int,int,int>> edges, int src){
  vector<int> dist(V, INT_MAX); dist[src]=0;
  for(int i=0;i<V-1;i++)
    for(auto [u,v,w]: edges)
      if(dist[u]!=INT_MAX && dist[u]+w<dist[v])
        dist[v]=dist[u]+w;
  for(auto [u,v,w]: edges)
    if(dist[u]!=INT_MAX && dist[u]+w<dist[v])
      throw runtime_error("Graph contains negative cycle");
  return dist;
}`,
    javascript: `function bellmanFord(V, edges, src){
  const dist = Array(V).fill(Infinity); dist[src]=0;
  for(let i=0;i<V-1;i++)
    for(const [u,v,w] of edges)
      if(dist[u]+w<dist[v]) dist[v]=dist[u]+w;
  for(const [u,v,w] of edges)
    if(dist[u]+w<dist[v]) throw new Error("Graph contains negative cycle");
  return dist;
}`,
  },

  floydWarshall: {
    java: `void floydWarshall(int V, int[][] dist) {
  for(int k=0;k<V;k++)
    for(int i=0;i<V;i++)
      for(int j=0;j<V;j++)
        if(dist[i][k]!=Integer.MAX_VALUE && dist[k][j]!=Integer.MAX_VALUE)
          dist[i][j] = Math.min(dist[i][j], dist[i][k]+dist[k][j]);
}`,
    python: `def floyd_warshall(V, dist):
  for k in range(V):
    for i in range(V):
      for j in range(V):
        if dist[i][k]!=float('inf') and dist[k][j]!=float('inf'):
          dist[i][j] = min(dist[i][j], dist[i][k]+dist[k][j])`,
    cpp: `void floydWarshall(int V, vector<vector<int>> &dist){
  for(int k=0;k<V;k++)
    for(int i=0;i<V;i++)
      for(int j=0;j<V;j++)
        if(dist[i][k]!=INT_MAX && dist[k][j]!=INT_MAX)
          dist[i][j]=min(dist[i][j], dist[i][k]+dist[k][j]);
}`,
    javascript: `function floydWarshall(V, dist){
  for(let k=0;k<V;k++)
    for(let i=0;i<V;i++)
      for(let j=0;j<V;j++)
        if(dist[i][k]!==Infinity && dist[k][j]!==Infinity)
          dist[i][j] = Math.min(dist[i][j], dist[i][k]+dist[k][j]);
}`,
  },

  topologicalSort: {
    java: `void topoSort(int V, List<Integer>[] adj) {
  boolean[] visited = new boolean[V];
  Stack<Integer> stack = new Stack<>();
  for(int i=0;i<V;i++)
    if(!visited[i]) dfsTopo(i, adj, visited, stack);
  while(!stack.isEmpty()) System.out.print(stack.pop()+" ");
}
void dfsTopo(int u, List<Integer>[] adj, boolean[] visited, Stack<Integer> stack) {
  visited[u]=true;
  for(int v: adj[u])
    if(!visited[v]) dfsTopo(v, adj, visited, stack);
  stack.push(u);
}`,
    python: `def topo_sort(V, adj):
  visited = [False]*V
  stack = []
  def dfs(u):
    visited[u]=True
    for v in adj[u]:
      if not visited[v]: dfs(v)
    stack.append(u)
  for i in range(V):
    if not visited[i]: dfs(i)
  return stack[::-1]`,
    cpp: `void dfsTopo(int u, vector<int> adj[], vector<bool> &visited, stack<int> &st){
  visited[u]=true;
  for(int v: adj[u])
    if(!visited[v]) dfsTopo(v, adj, visited, st);
  st.push(u);
}
void topoSort(int V, vector<int> adj[]){
  vector<bool> visited(V,false);
  stack<int> st;
  for(int i=0;i<V;i++)
    if(!visited[i]) dfsTopo(i, adj, visited, st);
  while(!st.empty()){ cout<<st.top()<<" "; st.pop(); }
}`,
    javascript: `function topoSort(V, adj){
  const visited = Array(V).fill(false), stack=[];
  function dfs(u){
    visited[u]=true;
    for(const v of adj[u]) if(!visited[v]) dfs(v);
    stack.push(u);
  }
  for(let i=0;i<V;i++) if(!visited[i]) dfs(i);
  return stack.reverse();
}`,
  },

  cycleDetection: {
    java: `boolean hasCycle(int V, List<Integer>[] adj){
  boolean[] visited = new boolean[V];
  boolean[] recStack = new boolean[V];
  for(int i=0;i<V;i++)
    if(!visited[i] && dfsCycle(i, adj, visited, recStack)) return true;
  return false;
}
boolean dfsCycle(int u, List<Integer>[] adj, boolean[] visited, boolean[] recStack){
  visited[u]=true; recStack[u]=true;
  for(int v: adj[u])
    if(!visited[v] && dfsCycle(v, adj, visited, recStack) || recStack[v]) return true;
  recStack[u]=false; return false;
}`,
    python: `def has_cycle(V, adj):
  visited = [False]*V
  recStack = [False]*V
  def dfs(u):
    visited[u]=True; recStack[u]=True
    for v in adj[u]:
      if (not visited[v] and dfs(v)) or recStack[v]: return True
    recStack[u]=False; return False
  for i in range(V):
    if not visited[i] and dfs(i): return True
  return False`,
    cpp: `bool dfsCycle(int u, vector<int> adj[], vector<bool> &visited, vector<bool> &recStack){
  visited[u]=true; recStack[u]=true;
  for(int v: adj[u])
    if((!visited[v] && dfsCycle(v, adj, visited, recStack)) || recStack[v]) return true;
  recStack[u]=false; return false;
}
bool hasCycle(int V, vector<int> adj[]){
  vector<bool> visited(V,false), recStack(V,false);
  for(int i=0;i<V;i++) if(!visited[i] && dfsCycle(i, adj, visited, recStack)) return true;
  return false;
}`,
    javascript: `function hasCycle(V, adj){
  const visited=Array(V).fill(false), recStack=Array(V).fill(false);
  function dfs(u){
    visited[u]=true; recStack[u]=true;
    for(const v of adj[u])
      if((!visited[v] && dfs(v)) || recStack[v]) return true;
    recStack[u]=false; return false;
  }
  for(let i=0;i<V;i++) if(!visited[i] && dfs(i)) return true;
  return false;
}`,
  },

  stronglyConnectedComponents: {
    java: `void kosaraju(int V, List<Integer>[] adj){
  boolean[] visited = new boolean[V];
  Stack<Integer> stack = new Stack<>();
  for(int i=0;i<V;i++) if(!visited[i]) dfs1(i, adj, visited, stack);
  List<Integer>[] transpose = new List[V];
  for(int i=0;i<V;i++) transpose[i]=new ArrayList<>();
  for(int u=0;u<V;u++) for(int v: adj[u]) transpose[v].add(u);
  Arrays.fill(visited,false);
  while(!stack.isEmpty()){
    int u=stack.pop();
    if(!visited[u]){
      dfs2(u, transpose, visited);
      System.out.println();
    }
  }
}
void dfs1(int u, List<Integer>[] adj, boolean[] visited, Stack<Integer> stack){
  visited[u]=true;
  for(int v: adj[u]) if(!visited[v]) dfs1(v, adj, visited, stack);
  stack.push(u);
}
void dfs2(int u, List<Integer>[] adj, boolean[] visited){
  visited[u]=true; System.out.print(u+" ");
  for(int v: adj[u]) if(!visited[v]) dfs2(v, adj, visited);
}`,
    python: `def kosaraju(V, adj):
  visited=[False]*V; stack=[]
  def dfs1(u):
    visited[u]=True
    for v in adj[u]:
      if not visited[v]: dfs1(v)
    stack.append(u)
  for i in range(V): 
    if not visited[i]: dfs1(i)
  transpose=[[] for _ in range(V)]
  for u in range(V):
    for v in adj[u]: transpose[v].append(u)
  visited=[False]*V
  def dfs2(u):
    visited[u]=True; print(u, end=" ")
    for v in transpose[u]:
      if not visited[v]: dfs2(v)
  while stack:
    u=stack.pop()
    if not visited[u]:
      dfs2(u); print()`,
    cpp: `void dfs1(int u, vector<int> adj[], vector<bool> &visited, stack<int> &st){
  visited[u]=true;
  for(int v: adj[u]) if(!visited[v]) dfs1(v, adj, visited, st);
  st.push(u);
}
void dfs2(int u, vector<int> adj[], vector<bool> &visited){
  visited[u]=true; cout<<u<<" ";
  for(int v: adj[u]) if(!visited[v]) dfs2(v, adj, visited);
}
void kosaraju(int V, vector<int> adj[]){
  vector<bool> visited(V,false); stack<int> st;
  for(int i=0;i<V;i++) if(!visited[i]) dfs1(i, adj, visited, st);
  vector<int> transpose[V];
  for(int u=0;u<V;u++) for(int v: adj[u]) transpose[v].push_back(u);
  fill(visited.begin(), visited.end(), false);
  while(!st.empty()){
    int u=st.top(); st.pop();
    if(!visited[u]) { dfs2(u, transpose, visited); cout<<endl; }
  }
}`,
    javascript: `function kosaraju(V, adj){
  const visited=Array(V).fill(false), stack=[];
  function dfs1(u){
    visited[u]=true;
    for(const v of adj[u]) if(!visited[v]) dfs1(v);
    stack.push(u);
  }
  for(let i=0;i<V;i++) if(!visited[i]) dfs1(i);
  const transpose = Array.from({length:V},()=>[]);
  for(let u=0;u<V;u++) for(const v of adj[u]) transpose[v].push(u);
  visited.fill(false);
  function dfs2(u){
    visited[u]=true; console.log(u);
    for(const v of transpose[u]) if(!visited[v]) dfs2(v);
  }
  while(stack.length){
    const u = stack.pop();
    if(!visited[u]) dfs2(u);
  }
}`,
  },

  networkFlow: {
    java: `boolean bfs(int[][] rGraph, int s, int t, int[] parent){
  boolean[] visited = new boolean[rGraph.length];
  Queue<Integer> q = new LinkedList<>();
  q.add(s); visited[s]=true; parent[s]=-1;
  while(!q.isEmpty()){
    int u=q.poll();
    for(int v=0;v<rGraph.length;v++){
      if(!visited[v] && rGraph[u][v]>0){
        q.add(v); parent[v]=u; visited[v]=true;
      }
    }
  }
  return visited[t];
}
int fordFulkerson(int[][] graph, int s, int t){
  int u,v; int[][] rGraph = new int[graph.length][graph.length];
  for(u=0;u<graph.length;u++) for(v=0;v<graph.length;v++) rGraph[u][v]=graph[u][v];
  int[] parent = new int[graph.length];
  int max_flow=0;
  while(bfs(rGraph,s,t,parent)){
    int path_flow=Integer.MAX_VALUE;
    for(v=t;v!=s;v=parent[v]){
      u=parent[v]; path_flow=Math.min(path_flow,rGraph[u][v]);
    }
    for(v=t;v!=s;v=parent[v]){
      u=parent[v]; rGraph[u][v]-=path_flow; rGraph[v][u]+=path_flow;
    }
    max_flow+=path_flow;
  }
  return max_flow;
}`,
    python: `from collections import deque
def bfs(rGraph,s,t,parent):
  visited=[False]*len(rGraph)
  q=deque([s]); visited[s]=True; parent[s]=-1
  while q:
    u=q.popleft()
    for v,c in enumerate(rGraph[u]):
      if not visited[v] and c>0:
        q.append(v); parent[v]=u; visited[v]=True
  return visited[t]
def ford_fulkerson(graph,s,t):
  V=len(graph)
  rGraph=[row[:] for row in graph]
  parent=[-1]*V
  max_flow=0
  while bfs(rGraph,s,t,parent):
    path_flow=float('inf')
    v=t
    while v!=s:
      u=parent[v]; path_flow=min(path_flow,rGraph[u][v]); v=u
    v=t
    while v!=s:
      u=parent[v]; rGraph[u][v]-=path_flow; rGraph[v][u]+=path_flow; v=u
    max_flow+=path_flow
  return max_flow`,
    cpp: `bool bfs(vector<vector<int>> &rGraph,int s,int t, vector<int> &parent){
  vector<bool> visited(rGraph.size(),false);
  queue<int> q; q.push(s); visited[s]=true; parent[s]=-1;
  while(!q.empty()){
    int u=q.front(); q.pop();
    for(int v=0;v<rGraph.size();v++){
      if(!visited[v] && rGraph[u][v]>0){ q.push(v); parent[v]=u; visited[v]=true; }
    }
  }
  return visited[t];
}
int fordFulkerson(vector<vector<int>> graph,int s,int t){
  int V=graph.size(); vector<vector<int>> rGraph=graph;
  vector<int> parent(V); int max_flow=0;
  while(bfs(rGraph,s,t,parent)){
    int path_flow=INT_MAX;
    for(int v=t;v!=s;v=parent[v]){
      int u=parent[v]; path_flow=min(path_flow,rGraph[u][v]);
    }
    for(int v=t;v!=s;v=parent[v]){
      int u=parent[v]; rGraph[u][v]-=path_flow; rGraph[v][u]+=path_flow;
    }
    max_flow+=path_flow;
  }
  return max_flow;
}`,
    javascript: `function bfs(rGraph,s,t,parent){
  const visited = Array(rGraph.length).fill(false);
  const q=[s]; visited[s]=true; parent[s]=-1;
  while(q.length){
    const u=q.shift();
    for(let v=0;v<rGraph.length;v++){
      if(!visited[v] && rGraph[u][v]>0){
        q.push(v); parent[v]=u; visited[v]=true;
      }
    }
  }
  return visited[t];
}
function fordFulkerson(graph,s,t){
  const V=graph.length;
  const rGraph=graph.map(r=>r.slice());
  const parent=Array(V).fill(-1);
  let max_flow=0;
  while(bfs(rGraph,s,t,parent)){
    let path_flow=Infinity;
    for(let v=t;v!=s;v=parent[v]){
      let u=parent[v]; path_flow=Math.min(path_flow,rGraph[u][v]);
    }
    for(let v=t;v!=s;v=parent[v]){
      let u=parent[v]; rGraph[u][v]-=path_flow; rGraph[v][u]+=path_flow;
    }
    max_flow+=path_flow;
  }
  return max_flow;
}`,
  },
};
