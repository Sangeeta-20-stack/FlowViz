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


// src/data/dpCodes.js
export const dpCodes = {
  fibonacci: {
    java: `int fib(int n){
  if(n <= 1) return n;
  int[] dp = new int[n+1];
  dp[0]=0; dp[1]=1;
  for(int i=2;i<=n;i++)
    dp[i]=dp[i-1]+dp[i-2];
  return dp[n];
}`,
    python: `def fib(n):
  if n <= 1: return n
  dp = [0]*(n+1)
  dp[0], dp[1] = 0, 1
  for i in range(2,n+1):
    dp[i] = dp[i-1]+dp[i-2]
  return dp[n]`,
    cpp: `int fib(int n){
  if(n <= 1) return n;
  vector<int> dp(n+1);
  dp[0]=0; dp[1]=1;
  for(int i=2;i<=n;i++) dp[i]=dp[i-1]+dp[i-2];
  return dp[n];
}`,
    javascript: `function fib(n){
  if(n<=1) return n;
  const dp = Array(n+1).fill(0);
  dp[0]=0; dp[1]=1;
  for(let i=2;i<=n;i++) dp[i]=dp[i-1]+dp[i-2];
  return dp[n];
}`
  },

  knapsack01: {
    java: `int knapsack(int W, int[] wt, int[] val, int n){
  int[][] dp = new int[n+1][W+1];
  for(int i=0;i<=n;i++){
    for(int w=0;w<=W;w++){
      if(i==0 || w==0) dp[i][w]=0;
      else if(wt[i-1]<=w) dp[i][w]=Math.max(val[i-1]+dp[i-1][w-wt[i-1]], dp[i-1][w]);
      else dp[i][w]=dp[i-1][w];
    }
  }
  return dp[n][W];
}`,
    python: `def knapsack(W, wt, val, n):
  dp=[[0]*(W+1) for _ in range(n+1)]
  for i in range(n+1):
    for w in range(W+1):
      if i==0 or w==0: dp[i][w]=0
      elif wt[i-1]<=w: dp[i][w]=max(val[i-1]+dp[i-1][w-wt[i-1]], dp[i-1][w])
      else: dp[i][w]=dp[i-1][w]
  return dp[n][W]`,
    cpp: `int knapsack(int W, vector<int> &wt, vector<int> &val, int n){
  vector<vector<int>> dp(n+1, vector<int>(W+1,0));
  for(int i=0;i<=n;i++){
    for(int w=0;w<=W;w++){
      if(i==0||w==0) dp[i][w]=0;
      else if(wt[i-1]<=w) dp[i][w]=max(val[i-1]+dp[i-1][w-wt[i-1]], dp[i-1][w]);
      else dp[i][w]=dp[i-1][w];
    }
  }
  return dp[n][W];
}`,
    javascript: `function knapsack(W, wt, val, n){
  const dp = Array.from({length:n+1},()=>Array(W+1).fill(0));
  for(let i=0;i<=n;i++){
    for(let w=0;w<=W;w++){
      if(i===0||w===0) dp[i][w]=0;
      else if(wt[i-1]<=w) dp[i][w]=Math.max(val[i-1]+dp[i-1][w-wt[i-1]], dp[i-1][w]);
      else dp[i][w]=dp[i-1][w];
    }
  }
  return dp[n][W];
}`
  },

  longestCommonSubsequence: {
    java: `int lcs(String X, String Y){
  int m=X.length(), n=Y.length();
  int[][] dp = new int[m+1][n+1];
  for(int i=0;i<=m;i++){
    for(int j=0;j<=n;j++){
      if(i==0 || j==0) dp[i][j]=0;
      else if(X.charAt(i-1)==Y.charAt(j-1)) dp[i][j]=1+dp[i-1][j-1];
      else dp[i][j]=Math.max(dp[i-1][j], dp[i][j-1]);
    }
  }
  return dp[m][n];
}`,
    python: `def lcs(X,Y):
  m,n=len(X),len(Y)
  dp=[[0]*(n+1) for _ in range(m+1)]
  for i in range(m+1):
    for j in range(n+1):
      if i==0 or j==0: dp[i][j]=0
      elif X[i-1]==Y[j-1]: dp[i][j]=1+dp[i-1][j-1]
      else: dp[i][j]=max(dp[i-1][j], dp[i][j-1])
  return dp[m][n]`,
    cpp: `int lcs(string X, string Y){
  int m=X.size(), n=Y.size();
  vector<vector<int>> dp(m+1, vector<int>(n+1,0));
  for(int i=0;i<=m;i++){
    for(int j=0;j<=n;j++){
      if(i==0||j==0) dp[i][j]=0;
      else if(X[i-1]==Y[j-1]) dp[i][j]=1+dp[i-1][j-1];
      else dp[i][j]=max(dp[i-1][j], dp[i][j-1]);
    }
  }
  return dp[m][n];
}`,
    javascript: `function lcs(X,Y){
  const m=X.length, n=Y.length;
  const dp=Array.from({length:m+1},()=>Array(n+1).fill(0));
  for(let i=0;i<=m;i++){
    for(let j=0;j<=n;j++){
      if(i===0||j===0) dp[i][j]=0;
      else if(X[i-1]===Y[j-1]) dp[i][j]=1+dp[i-1][j-1];
      else dp[i][j]=Math.max(dp[i-1][j], dp[i][j-1]);
    }
  }
  return dp[m][n];
}`
  },

  coinChange: {
    java: `int coinChange(int[] coins, int amount){
  int[] dp = new int[amount+1];
  Arrays.fill(dp, amount+1);
  dp[0]=0;
  for(int i=1;i<=amount;i++){
    for(int coin: coins){
      if(coin<=i) dp[i]=Math.min(dp[i],1+dp[i-coin]);
    }
  }
  return dp[amount]>amount?-1:dp[amount];
}`,
    python: `def coin_change(coins, amount):
  dp=[amount+1]*(amount+1)
  dp[0]=0
  for i in range(1,amount+1):
    for coin in coins:
      if coin<=i: dp[i]=min(dp[i],1+dp[i-coin])
  return -1 if dp[amount]>amount else dp[amount]`,
    cpp: `int coinChange(vector<int> &coins, int amount){
  vector<int> dp(amount+1, amount+1);
  dp[0]=0;
  for(int i=1;i<=amount;i++){
    for(int coin: coins){
      if(coin<=i) dp[i]=min(dp[i],1+dp[i-coin]);
    }
  }
  return dp[amount]>amount?-1:dp[amount];
}`,
    javascript: `function coinChange(coins, amount){
  const dp=Array(amount+1).fill(amount+1);
  dp[0]=0;
  for(let i=1;i<=amount;i++){
    for(const coin of coins){
      if(coin<=i) dp[i]=Math.min(dp[i], 1+dp[i-coin]);
    }
  }
  return dp[amount]>amount?-1:dp[amount];
}`
  },

  editDistance: {
    java: `int editDistance(String s1, String s2){
  int m=s1.length(), n=s2.length();
  int[][] dp = new int[m+1][n+1];
  for(int i=0;i<=m;i++){
    for(int j=0;j<=n;j++){
      if(i==0) dp[i][j]=j;
      else if(j==0) dp[i][j]=i;
      else if(s1.charAt(i-1)==s2.charAt(j-1)) dp[i][j]=dp[i-1][j-1];
      else dp[i][j]=1+Math.min(dp[i-1][j-1], Math.min(dp[i-1][j], dp[i][j-1]));
    }
  }
  return dp[m][n];
}`,
    python: `def edit_distance(s1,s2):
  m,n=len(s1),len(s2)
  dp=[[0]*(n+1) for _ in range(m+1)]
  for i in range(m+1):
    for j in range(n+1):
      if i==0: dp[i][j]=j
      elif j==0: dp[i][j]=i
      elif s1[i-1]==s2[j-1]: dp[i][j]=dp[i-1][j-1]
      else: dp[i][j]=1+min(dp[i-1][j-1], dp[i-1][j], dp[i][j-1])
  return dp[m][n]`,
    cpp: `int editDistance(string s1, string s2){
  int m=s1.size(), n=s2.size();
  vector<vector<int>> dp(m+1, vector<int>(n+1,0));
  for(int i=0;i<=m;i++){
    for(int j=0;j<=n;j++){
      if(i==0) dp[i][j]=j;
      else if(j==0) dp[i][j]=i;
      else if(s1[i-1]==s2[j-1]) dp[i][j]=dp[i-1][j-1];
      else dp[i][j]=1+min({dp[i-1][j-1], dp[i-1][j], dp[i][j-1]});
    }
  }
  return dp[m][n];
}`,
    javascript: `function editDistance(s1,s2){
  const m=s1.length, n=s2.length;
  const dp=Array.from({length:m+1},()=>Array(n+1).fill(0));
  for(let i=0;i<=m;i++){
    for(let j=0;j<=n;j++){
      if(i===0) dp[i][j]=j;
      else if(j===0) dp[i][j]=i;
      else if(s1[i-1]===s2[j-1]) dp[i][j]=dp[i-1][j-1];
      else dp[i][j]=1+Math.min(dp[i-1][j-1], dp[i-1][j], dp[i][j-1]);
    }
  }
  return dp[m][n];
}`
  },
    matrixChainMultiplication: {
    java: `int matrixChainOrder(int[] p){
  int n = p.length;
  int[][] dp = new int[n][n];
  for(int l=2;l<n;l++){
    for(int i=1;i<n-l+1;i++){
      int j=i+l-1;
      dp[i][j]=Integer.MAX_VALUE;
      for(int k=i;k<j;k++){
        dp[i][j]=Math.min(dp[i][j], dp[i][k]+dp[k+1][j]+p[i-1]*p[k]*p[j]);
      }
    }
  }
  return dp[1][n-1];
}`,
    python: `def matrix_chain_order(p):
  n=len(p)
  dp=[[0]*n for _ in range(n)]
  for l in range(2,n):
    for i in range(1,n-l+1):
      j=i+l-1
      dp[i][j]=float('inf')
      for k in range(i,j):
        dp[i][j]=min(dp[i][j], dp[i][k]+dp[k+1][j]+p[i-1]*p[k]*p[j])
  return dp[1][n-1]`,
    cpp: `int matrixChainOrder(vector<int> &p){
  int n=p.size();
  vector<vector<int>> dp(n, vector<int>(n,0));
  for(int l=2;l<n;l++){
    for(int i=1;i<n-l+1;i++){
      int j=i+l-1;
      dp[i][j]=INT_MAX;
      for(int k=i;k<j;k++){
        dp[i][j]=min(dp[i][j], dp[i][k]+dp[k+1][j]+p[i-1]*p[k]*p[j]);
      }
    }
  }
  return dp[1][n-1];
}`,
    javascript: `function matrixChainOrder(p){
  const n = p.length;
  const dp = Array.from({length:n},()=>Array(n).fill(0));
  for(let l=2;l<n;l++){
    for(let i=1;i<n-l+1;i++){
      let j=i+l-1;
      dp[i][j]=Infinity;
      for(let k=i;k<j;k++){
        dp[i][j]=Math.min(dp[i][j], dp[i][k]+dp[k+1][j]+p[i-1]*p[k]*p[j]);
      }
    }
  }
  return dp[1][n-1];
}`
  }
};


// src/data/greedyCodes.js
export const greedyCodes = {
  activitySelection: {
    java: `int activitySelection(int start[], int end[], int n){
  int count = 1, last = end[0];
  for(int i=1; i<n; i++){
    if(start[i] >= last){
      count++;
      last = end[i];
    }
  }
  return count;
}`,
    python: `def activity_selection(start, end):
  count = 1
  last = end[0]
  for i in range(1, len(start)):
    if start[i] >= last:
      count += 1
      last = end[i]
  return count`,
    cpp: `int activitySelection(vector<int> &start, vector<int> &end){
  int count = 1, last = end[0];
  for(int i=1; i<start.size(); i++){
    if(start[i] >= last){
      count++;
      last = end[i];
    }
  }
  return count;
}`,
    javascript: `function activitySelection(start, end){
  let count = 1, last = end[0];
  for(let i=1;i<start.length;i++){
    if(start[i] >= last){
      count++;
      last = end[i];
    }
  }
  return count;
}`
  },

  fractionalKnapsack: {
    java: `class Item {
  int weight, value;
  Item(int w, int v){ weight=w; value=v; }
}
double fractionalKnapsack(int W, Item arr[], int n){
  Arrays.sort(arr,(a,b)->Double.compare((double)b.value/a.weight, (double)a.value/b.weight));
  double res=0;
  for(int i=0;i<n;i++){
    if(arr[i].weight<=W){
      W-=arr[i].weight;
      res+=arr[i].value;
    } else {
      res+=arr[i].value*((double)W/arr[i].weight);
      break;
    }
  }
  return res;
}`,
    python: `def fractional_knapsack(W, wt, val):
  items = sorted(zip(wt, val), key=lambda x: x[1]/x[0], reverse=True)
  res = 0
  for w,v in items:
    if W >= w:
      W -= w
      res += v
    else:
      res += v*W/w
      break
  return res`,
    cpp: `struct Item { int weight, value; };
double fractionalKnapsack(int W, vector<Item> &arr){
  sort(arr.begin(), arr.end(), [](Item a, Item b){ return (double)a.value/a.weight > (double)b.value/b.weight; });
  double res=0;
  for(auto &it: arr){
    if(W >= it.weight){
      W -= it.weight;
      res += it.value;
    } else {
      res += it.value*((double)W/it.weight);
      break;
    }
  }
  return res;
}`,
    javascript: `function fractionalKnapsack(W, items){
  items.sort((a,b)=>(b.value/b.weight)-(a.value/a.weight));
  let res=0;
  for(let it of items){
    if(W >= it.weight){
      W -= it.weight;
      res += it.value;
    } else {
      res += it.value*(W/it.weight);
      break;
    }
  }
  return res;
}`
  },

  coinChangeGreedy: {
    java: `int minCoins(int coins[], int amount){
  Arrays.sort(coins);
  int res=0;
  for(int i=coins.length-1;i>=0;i--){
    while(amount >= coins[i]){
      amount -= coins[i];
      res++;
    }
  }
  return res;
}`,
    python: `def min_coins(coins, amount):
  coins.sort(reverse=True)
  res = 0
  for c in coins:
    while amount >= c:
      amount -= c
      res += 1
  return res`,
    cpp: `int minCoins(vector<int> &coins, int amount){
  sort(coins.rbegin(), coins.rend());
  int res=0;
  for(int c: coins){
    while(amount>=c){
      amount -= c;
      res++;
    }
  }
  return res;
}`,
    javascript: `function minCoins(coins, amount){
  coins.sort((a,b)=>b-a);
  let res=0;
  for(let c of coins){
    while(amount >= c){
      amount -= c;
      res++;
    }
  }
  return res;
}`
  },

  jobSequencing: {
    java: `class Job {
  int id, deadline, profit;
  Job(int i,int d,int p){ id=i; deadline=d; profit=p; }
}
int jobSequencing(Job jobs[], int n){
  Arrays.sort(jobs, (a,b)->b.profit-a.profit);
  int result[]=new int[n];
  Arrays.fill(result,-1);
  int count=0, totalProfit=0;
  for(int i=0;i<n;i++){
    for(int j=Math.min(n,jobs[i].deadline)-1;j>=0;j--){
      if(result[j]==-1){
        result[j]=i;
        totalProfit+=jobs[i].profit;
        count++;
        break;
      }
    }
  }
  return totalProfit;
}`,
    python: `def job_sequencing(jobs):
  jobs.sort(key=lambda x: x[2], reverse=True)
  n = len(jobs)
  result = [-1]*n
  profit = 0
  for i in range(n):
    for j in range(min(n, jobs[i][1])-1, -1, -1):
      if result[j]==-1:
        result[j]=i
        profit += jobs[i][2]
        break
  return profit`,
    cpp: `struct Job { int id, deadline, profit; };
int jobSequencing(vector<Job> &jobs){
  sort(jobs.begin(), jobs.end(), [](Job a, Job b){ return a.profit>b.profit; });
  int n=jobs.size(), totalProfit=0;
  vector<int> result(n,-1);
  for(int i=0;i<n;i++){
    for(int j=min(n,jobs[i].deadline)-1;j>=0;j--){
      if(result[j]==-1){
        result[j]=i;
        totalProfit += jobs[i].profit;
        break;
      }
    }
  }
  return totalProfit;
}`,
    javascript: `function jobSequencing(jobs){
  jobs.sort((a,b)=>b.profit-a.profit);
  let n=jobs.length, result=Array(n).fill(-1), profit=0;
  for(let i=0;i<n;i++){
    for(let j=Math.min(n,jobs[i].deadline)-1;j>=0;j--){
      if(result[j]==-1){
        result[j]=i;
        profit += jobs[i].profit;
        break;
      }
    }
  }
  return profit;
}`
  },
kruskalMST: {
    java: `class Edge implements Comparable<Edge> {
  int src, dest, weight;
  Edge(int s,int d,int w){ src=s; dest=d; weight=w; }
  public int compareTo(Edge e){ return this.weight - e.weight; }
}
int kruskalMST(int V, Edge[] edges){
  Arrays.sort(edges);
  int[] parent = new int[V];
  for(int i=0;i<V;i++) parent[i]=i;

  int find(int i){ while(parent[i]!=i) i=parent[i]; return i; }
  void union(int i,int j){ parent[find(i)] = find(j); }

  int mstWeight=0;
  for(Edge e: edges){
    int x=find(e.src), y=find(e.dest);
    if(x!=y){ mstWeight += e.weight; union(x,y); }
  }
  return mstWeight;
}`,
    python: `def kruskal_mst(V, edges):
  edges.sort(key=lambda x:x[2])
  parent = list(range(V))
  def find(i):
    while parent[i]!=i: i=parent[i]
    return i
  def union(i,j):
    parent[find(i)] = find(j)
  mst_weight = 0
  for u,v,w in edges:
    x,y = find(u), find(v)
    if x!=y:
      mst_weight += w
      union(x,y)
  return mst_weight`,
    cpp: `struct Edge { int src,dest,weight; };
int find(int i, vector<int>& parent){ while(parent[i]!=i) i=parent[i]; return i; }
void unionSet(int i,int j, vector<int>& parent){ parent[find(i,parent)] = find(j,parent); }
int kruskalMST(int V, vector<Edge> &edges){
  sort(edges.begin(),edges.end(),[](Edge a, Edge b){ return a.weight < b.weight; });
  vector<int> parent(V);
  for(int i=0;i<V;i++) parent[i]=i;
  int mstWeight=0;
  for(auto e:edges){
    int x=find(e.src,parent), y=find(e.dest,parent);
    if(x!=y){ mstWeight+=e.weight; unionSet(x,y,parent); }
  }
  return mstWeight;
}`,
    javascript: `function kruskalMST(V, edges){
  edges.sort((a,b)=>a.weight-b.weight);
  const parent = Array.from({length:V}, (_,i)=>i);
  const find = (i)=>{ while(parent[i]!==i) i=parent[i]; return i; }
  const union = (i,j)=>{ parent[find(i)] = find(j); }
  let mstWeight=0;
  for(const e of edges){
    const x=find(e.src), y=find(e.dest);
    if(x!==y){ mstWeight += e.weight; union(x,y); }
  }
  return mstWeight;
}`
  },

  primMST: {
    java: `int primMST(int V, int[][] graph){
  boolean[] inMST = new boolean[V];
  int[] key = new int[V];
  Arrays.fill(key, Integer.MAX_VALUE);
  key[0]=0;
  int res=0;
  for(int count=0;count<V;count++){
    int u=-1;
    for(int i=0;i<V;i++) if(!inMST[i] && (u==-1 || key[i]<key[u])) u=i;
    inMST[u]=true;
    res += key[u];
    for(int v=0;v<V;v++)
      if(graph[u][v]!=0 && !inMST[v] && graph[u][v]<key[v]) key[v]=graph[u][v];
  }
  return res;
}`,
    python: `import sys
def prim_mst(V, graph):
  in_mst = [False]*V
  key = [sys.maxsize]*V
  key[0]=0
  res=0
  for _ in range(V):
    u = min((k for k in range(V) if not in_mst[k]), key=lambda x:key[x])
    in_mst[u]=True
    res += key[u]
    for v in range(V):
      if graph[u][v] != 0 and not in_mst[v] and graph[u][v] < key[v]:
        key[v]=graph[u][v]
  return res`,
    cpp: `int primMST(int V, vector<vector<int>> &graph){
  vector<bool> inMST(V,false);
  vector<int> key(V,INT_MAX);
  key[0]=0;
  int res=0;
  for(int count=0;count<V;count++){
    int u=-1;
    for(int i=0;i<V;i++) if(!inMST[i]&&(u==-1||key[i]<key[u])) u=i;
    inMST[u]=true;
    res+=key[u];
    for(int v=0;v<V;v++)
      if(graph[u][v]!=0 && !inMST[v] && graph[u][v]<key[v]) key[v]=graph[u][v];
  }
  return res;
}`,
    javascript: `function primMST(V, graph){
  const inMST = Array(V).fill(false);
  const key = Array(V).fill(Infinity);
  key[0]=0;
  let res=0;
  for(let count=0;count<V;count++){
    let u=-1;
    for(let i=0;i<V;i++) if(!inMST[i] && (u===-1 || key[i]<key[u])) u=i;
    inMST[u]=true;
    res += key[u];
    for(let v=0;v<V;v++)
      if(graph[u][v]!=0 && !inMST[v] && graph[u][v]<key[v]) key[v]=graph[u][v];
  }
  return res;
}`
  },

  huffmanCoding: {
    java: `class Node {
  char ch; int freq;
  Node left,right;
  Node(char c,int f){ ch=c; freq=f; left=right=null; }
}
class HuffmanComparator implements Comparator<Node>{
  public int compare(Node a, Node b){ return a.freq-b.freq; }
}
Node buildHuffman(char[] chars,int[] freq){
  PriorityQueue<Node> pq = new PriorityQueue<>(new HuffmanComparator());
  for(int i=0;i<chars.length;i++) pq.add(new Node(chars[i],freq[i]));
  while(pq.size()>1){
    Node x=pq.poll(), y=pq.poll();
    Node sum = new Node('-', x.freq+y.freq);
    sum.left=x; sum.right=y;
    pq.add(sum);
  }
  return pq.poll();
}`,
    python: `import heapq
class Node:
  def __init__(self,c,f): self.ch=c; self.freq=f; self.left=None; self.right=None
def build_huffman(chars,freq):
  heap = [ (f,Node(c,f)) for c,f in zip(chars,freq) ]
  heapq.heapify(heap)
  while len(heap)>1:
    f1,n1 = heapq.heappop(heap)
    f2,n2 = heapq.heappop(heap)
    sum_node = Node('-', f1+f2); sum_node.left=n1; sum_node.right=n2
    heapq.heappush(heap, (f1+f2, sum_node))
  return heap[0][1]`,
    cpp: `struct Node { char ch; int freq; Node *left,*right; };
struct Compare { bool operator()(Node* a, Node* b){ return a->freq>b->freq; } };
Node* buildHuffman(vector<char> &chars, vector<int> &freq){
  priority_queue<Node*, vector<Node*>, Compare> pq;
  for(int i=0;i<chars.size();i++) pq.push(new Node{chars[i],freq[i],nullptr,nullptr});
  while(pq.size()>1){
    Node* x=pq.top(); pq.pop();
    Node* y=pq.top(); pq.pop();
    Node* sum = new Node{'-', x->freq+y->freq, x, y};
    pq.push(sum);
  }
  return pq.top();
}`,
    javascript: `class Node {
  constructor(ch,freq){ this.ch=ch; this.freq=freq; this.left=null; this.right=null; }
}
function buildHuffman(chars,freq){
  const heap = chars.map((c,i)=>({node:new Node(c,freq[i]),freq:freq[i]}));
  heap.sort((a,b)=>a.freq-b.freq);
  while(heap.length>1){
    const x=heap.shift();
    const y=heap.shift();
    const sum = {node:{ch:'-',freq:x.freq+y.freq,left:x.node,right:y.node}, freq:x.freq+y.freq};
    heap.push(sum);
    heap.sort((a,b)=>a.freq-b.freq);
  }
  return heap[0].node;
}`
  }
};

// src/data/backtrackingCodes.js
export const backtrackingCodes = {
  nQueens: {
    java: `boolean isSafe(int row, int col, int[] board, int n){
  for(int i=0;i<row;i++){
    if(board[i]==col || Math.abs(board[i]-col)==row-i) return false;
  }
  return true;
}
void solveNQueens(int row, int[] board, int n){
  if(row==n){
    // Print or store solution
    return;
  }
  for(int col=0;col<n;col++){
    if(isSafe(row,col,board,n)){
      board[row]=col;
      solveNQueens(row+1, board, n);
    }
  }
}`,
    python: `def is_safe(row, col, board):
  for i in range(row):
    if board[i]==col or abs(board[i]-col)==row-i:
      return False
  return True

def solve_n_queens(row, board, n):
  if row==n:
    # print(board) or store solution
    return
  for col in range(n):
    if is_safe(row, col, board):
      board[row]=col
      solve_n_queens(row+1, board, n)`,
    cpp: `bool isSafe(int row, int col, vector<int> &board){
  for(int i=0;i<row;i++){
    if(board[i]==col || abs(board[i]-col)==row-i) return false;
  }
  return true;
}
void solveNQueens(int row, vector<int> &board, int n){
  if(row==n){
    // print/store solution
    return;
  }
  for(int col=0;col<n;col++){
    if(isSafe(row,col,board)){
      board[row]=col;
      solveNQueens(row+1, board, n);
    }
  }
}`,
    javascript: `function isSafe(row, col, board){
  for(let i=0;i<row;i++){
    if(board[i]===col || Math.abs(board[i]-col)===row-i) return false;
  }
  return true;
}
function solveNQueens(row, board, n){
  if(row===n){
    // print/store solution
    return;
  }
  for(let col=0;col<n;col++){
    if(isSafe(row,col,board)){
      board[row]=col;
      solveNQueens(row+1, board, n);
    }
  }
}`
  },

  sudokuSolver: {
    java: `boolean solveSudoku(int[][] board){
  for(int i=0;i<9;i++){
    for(int j=0;j<9;j++){
      if(board[i][j]==0){
        for(int num=1;num<=9;num++){
          if(isSafe(board,i,j,num)){
            board[i][j]=num;
            if(solveSudoku(board)) return true;
            board[i][j]=0;
          }
        }
        return false;
      }
    }
  }
  return true;
}`,
    python: `def solve_sudoku(board):
  for i in range(9):
    for j in range(9):
      if board[i][j]==0:
        for num in range(1,10):
          if is_safe(board,i,j,num):
            board[i][j]=num
            if solve_sudoku(board):
              return True
            board[i][j]=0
        return False
  return True`,
    cpp: `bool solveSudoku(vector<vector<int>> &board){
  for(int i=0;i<9;i++){
    for(int j=0;j<9;j++){
      if(board[i][j]==0){
        for(int num=1;num<=9;num++){
          if(isSafe(board,i,j,num)){
            board[i][j]=num;
            if(solveSudoku(board)) return true;
            board[i][j]=0;
          }
        }
        return false;
      }
    }
  }
  return true;
}`,
    javascript: `function solveSudoku(board){
  for(let i=0;i<9;i++){
    for(let j=0;j<9;j++){
      if(board[i][j]===0){
        for(let num=1;num<=9;num++){
          if(isSafe(board,i,j,num)){
            board[i][j]=num;
            if(solveSudoku(board)) return true;
            board[i][j]=0;
          }
        }
        return false;
      }
    }
  }
  return true;
}`
  },

  ratInMaze: {
    java: `boolean solveMaze(int[][] maze, int x, int y, int[][] sol){
  int n=maze.length;
  if(x==n-1 && y==n-1 && maze[x][y]==1){
    sol[x][y]=1;
    return true;
  }
  if(isSafe(maze,x,y)){
    sol[x][y]=1;
    if(solveMaze(maze,x+1,y,sol)) return true;
    if(solveMaze(maze,x,y+1,sol)) return true;
    sol[x][y]=0;
  }
  return false;
}`,
    python: `def solve_maze(maze, x, y, sol):
  n = len(maze)
  if x==n-1 and y==n-1 and maze[x][y]==1:
    sol[x][y]=1
    return True
  if is_safe(maze,x,y):
    sol[x][y]=1
    if solve_maze(maze,x+1,y,sol): return True
    if solve_maze(maze,x,y+1,sol): return True
    sol[x][y]=0
  return False`,
    cpp: `bool solveMaze(vector<vector<int>> &maze, int x, int y, vector<vector<int>> &sol){
  int n=maze.size();
  if(x==n-1 && y==n-1 && maze[x][y]==1){
    sol[x][y]=1;
    return true;
  }
  if(isSafe(maze,x,y)){
    sol[x][y]=1;
    if(solveMaze(maze,x+1,y,sol)) return true;
    if(solveMaze(maze,x,y+1,sol)) return true;
    sol[x][y]=0;
  }
  return false;
}`,
    javascript: `function solveMaze(maze, x, y, sol){
  const n=maze.length;
  if(x===n-1 && y===n-1 && maze[x][y]===1){
    sol[x][y]=1;
    return true;
  }
  if(isSafe(maze,x,y)){
    sol[x][y]=1;
    if(solveMaze(maze,x+1,y,sol)) return true;
    if(solveMaze(maze,x,y+1,sol)) return true;
    sol[x][y]=0;
  }
  return false;
}`
  },

  subsetSum: {
    java: `void findSubsets(int[] arr, int index, List<Integer> subset, int target){
  if(target==0){
    // store subset
    return;
  }
  if(index>=arr.length || target<0) return;
  subset.add(arr[index]);
  findSubsets(arr,index+1,subset,target-arr[index]);
  subset.remove(subset.size()-1);
  findSubsets(arr,index+1,subset,target);
}`,
    python: `def find_subsets(arr, index, subset, target):
  if target==0:
    # store subset
    return
  if index>=len(arr) or target<0:
    return
  subset.append(arr[index])
  find_subsets(arr,index+1,subset,target-arr[index])
  subset.pop()
  find_subsets(arr,index+1,subset,target)`,
    cpp: `void findSubsets(vector<int> &arr, int index, vector<int> &subset, int target){
  if(target==0){
    // store subset
    return;
  }
  if(index>=arr.size() || target<0) return;
  subset.push_back(arr[index]);
  findSubsets(arr,index+1,subset,target-arr[index]);
  subset.pop_back();
  findSubsets(arr,index+1,subset,target);
}`,
    javascript: `function findSubsets(arr, index, subset, target){
  if(target===0){
    // store subset
    return;
  }
  if(index>=arr.length || target<0) return;
  subset.push(arr[index]);
  findSubsets(arr,index+1,subset,target-arr[index]);
  subset.pop();
  findSubsets(arr,index+1,subset,target);
}`
  },

  permutations: {
    java: `void permute(char[] arr, int l, int r){
  if(l==r){
    // print/store permutation
    return;
  }
  for(int i=l;i<=r;i++){
    swap(arr[l],arr[i]);
    permute(arr,l+1,r);
    swap(arr[l],arr[i]);
  }
}`,
    python: `def permute(arr,l,r):
  if l==r:
    # print/store permutation
    return
  for i in range(l,r+1):
    arr[l],arr[i]=arr[i],arr[l]
    permute(arr,l+1,r)
    arr[l],arr[i]=arr[i],arr[l]`,
    cpp: `void permute(vector<char> &arr, int l, int r){
  if(l==r){
    // print/store permutation
    return;
  }
  for(int i=l;i<=r;i++){
    swap(arr[l],arr[i]);
    permute(arr,l+1,r);
    swap(arr[l],arr[i]);
  }
}`,
    javascript: `function permute(arr,l,r){
  if(l===r){
    // print/store permutation
    return;
  }
  for(let i=l;i<=r;i++){
    [arr[l],arr[i]]=[arr[i],arr[l]];
    permute(arr,l+1,r);
    [arr[l],arr[i]]=[arr[i],arr[l]];
  }
}`
  },

    wordSearch: {
    java: `boolean exist(char[][] board, String word, int i, int j, int index){
  if(index==word.length()) return true;
  if(i<0||i>=board.length||j<0||j>=board[0].length||board[i][j]!=word.charAt(index)) return false;
  char temp = board[i][j];
  board[i][j] = '#';
  boolean found = exist(board,word,i+1,j,index+1) ||
                  exist(board,word,i-1,j,index+1) ||
                  exist(board,word,i,j+1,index+1) ||
                  exist(board,word,i,j-1,index+1);
  board[i][j] = temp;
  return found;
}`,
    python: `def exist(board, word, i, j, index):
  if index==len(word): return True
  if i<0 or i>=len(board) or j<0 or j>=len(board[0]) or board[i][j]!=word[index]:
    return False
  temp = board[i][j]
  board[i][j] = '#'
  found = (exist(board, word, i+1,j,index+1) or
           exist(board, word, i-1,j,index+1) or
           exist(board, word, i,j+1,index+1) or
           exist(board, word, i,j-1,index+1))
  board[i][j] = temp
  return found`,
    cpp: `bool exist(vector<vector<char>> &board, string &word, int i, int j, int index){
  if(index==word.size()) return true;
  if(i<0||i>=board.size()||j<0||j>=board[0].size()||board[i][j]!=word[index]) return false;
  char temp = board[i][j];
  board[i][j]='#';
  bool found = exist(board,word,i+1,j,index+1) ||
               exist(board,word,i-1,j,index+1) ||
               exist(board,word,i,j+1,index+1) ||
               exist(board,word,i,j-1,index+1);
  board[i][j]=temp;
  return found;
}`,
    javascript: `function exist(board, word, i, j, index){
  if(index===word.length) return true;
  if(i<0||i>=board.length||j<0||j>=board[0].length||board[i][j]!==word[index]) return false;
  const temp = board[i][j];
  board[i][j]='#';
  const found = exist(board,word,i+1,j,index+1) ||
                exist(board,word,i-1,j,index+1) ||
                exist(board,word,i,j+1,index+1) ||
                exist(board,word,i,j-1,index+1);
  board[i][j]=temp;
  return found;
}`
  },

  knightsTour: {
    java: `boolean solveKT(int x, int y, int movei, int[][] sol, int[] dx, int[] dy){
  int n=sol.length;
  if(movei==n*n) return true;
  for(int k=0;k<8;k++){
    int nx=x+dx[k], ny=y+dy[k];
    if(nx>=0 && nx<n && ny>=0 && ny<n && sol[nx][ny]==-1){
      sol[nx][ny]=movei;
      if(solveKT(nx,ny,movei+1,sol,dx,dy)) return true;
      sol[nx][ny]=-1;
    }
  }
  return false;
}`,
    python: `def solveKT(x,y,movei,sol,dx,dy):
  n=len(sol)
  if movei==n*n: return True
  for k in range(8):
    nx,ny = x+dx[k], y+dy[k]
    if 0<=nx<n and 0<=ny<n and sol[nx][ny]==-1:
      sol[nx][ny]=movei
      if solveKT(nx,ny,movei+1,sol,dx,dy):
        return True
      sol[nx][ny]=-1
  return False`,
    cpp: `bool solveKT(int x,int y,int movei, vector<vector<int>> &sol, int dx[], int dy[]){
  int n=sol.size();
  if(movei==n*n) return true;
  for(int k=0;k<8;k++){
    int nx=x+dx[k], ny=y+dy[k];
    if(nx>=0 && nx<n && ny>=0 && ny<n && sol[nx][ny]==-1){
      sol[nx][ny]=movei;
      if(solveKT(nx,ny,movei+1,sol,dx,dy)) return true;
      sol[nx][ny]=-1;
    }
  }
  return false;
}`,
    javascript: `function solveKT(x,y,movei,sol,dx,dy){
  const n=sol.length;
  if(movei===n*n) return true;
  for(let k=0;k<8;k++){
    let nx=x+dx[k], ny=y+dy[k];
    if(nx>=0 && nx<n && ny>=0 && ny<n && sol[nx][ny]===-1){
      sol[nx][ny]=movei;
      if(solveKT(nx,ny,movei+1,sol,dx,dy)) return true;
      sol[nx][ny]=-1;
    }
  }
  return false;
}`
  },

  graphColoring: {
    java: `boolean graphColoring(int[][] graph, int m, int[] color, int v){
  int n=graph.length;
  if(v==n) return true;
  for(int c=1;c<=m;c++){
    boolean safe=true;
    for(int i=0;i<n;i++){
      if(graph[v][i]==1 && color[i]==c){ safe=false; break; }
    }
    if(safe){
      color[v]=c;
      if(graphColoring(graph,m,color,v+1)) return true;
      color[v]=0;
    }
  }
  return false;
}`,
    python: `def graph_coloring(graph, m, color, v):
  n=len(graph)
  if v==n: return True
  for c in range(1,m+1):
    if all(not(graph[v][i]==1 and color[i]==c) for i in range(n)):
      color[v]=c
      if graph_coloring(graph,m,color,v+1):
        return True
      color[v]=0
  return False`,
    cpp: `bool graphColoring(vector<vector<int>> &graph,int m, vector<int> &color,int v){
  int n=graph.size();
  if(v==n) return true;
  for(int c=1;c<=m;c++){
    bool safe=true;
    for(int i=0;i<n;i++){
      if(graph[v][i]==1 && color[i]==c){ safe=false; break; }
    }
    if(safe){
      color[v]=c;
      if(graphColoring(graph,m,color,v+1)) return true;
      color[v]=0;
    }
  }
  return false;
}`,
    javascript: `function graphColoring(graph,m,color,v){
  const n=graph.length;
  if(v===n) return true;
  for(let c=1;c<=m;c++){
    let safe=true;
    for(let i=0;i<n;i++){
      if(graph[v][i]===1 && color[i]===c){ safe=false; break; }
    }
    if(safe){
      color[v]=c;
      if(graphColoring(graph,m,color,v+1)) return true;
      color[v]=0;
    }
  }
  return false;
}`
  },

  hamiltonianPath: {
    java: `boolean hamiltonian(int[][] graph, int[] path, int pos){
  int n=graph.length;
  if(pos==n) return graph[path[pos-1]][path[0]]==1;
  for(int v=1;v<n;v++){
    if(isSafe(v,graph,path,pos)){
      path[pos]=v;
      if(hamiltonian(graph,path,pos+1)) return true;
      path[pos]=-1;
    }
  }
  return false;
}`,
    python: `def hamiltonian(graph,path,pos):
  n=len(graph)
  if pos==n: return graph[path[pos-1]][path[0]]==1
  for v in range(1,n):
    if is_safe(v,graph,path,pos):
      path[pos]=v
      if hamiltonian(graph,path,pos+1): return True
      path[pos]=-1
  return False`,
    cpp: `bool hamiltonian(vector<vector<int>> &graph, vector<int> &path,int pos){
  int n=graph.size();
  if(pos==n) return graph[path[pos-1]][path[0]]==1;
  for(int v=1;v<n;v++){
    if(isSafe(v,graph,path,pos)){
      path[pos]=v;
      if(hamiltonian(graph,path,pos+1)) return true;
      path[pos]=-1;
    }
  }
  return false;
}`,
    javascript: `function hamiltonian(graph,path,pos){
  const n=graph.length;
  if(pos===n) return graph[path[pos-1]][path[0]]===1;
  for(let v=1;v<n;v++){
    if(isSafe(v,graph,path,pos)){
      path[pos]=v;
      if(hamiltonian(graph,path,pos+1)) return true;
      path[pos]=-1;
    }
  }
  return false;
}`
  },

  palindromePartitioning: {
    java: `void partition(String s, List<String> current, int index){
  if(index==s.length()){
    // store current partition
    return;
  }
  for(int i=index;i<s.length();i++){
    if(isPalindrome(s,index,i)){
      current.add(s.substring(index,i+1));
      partition(s,current,i+1);
      current.remove(current.size()-1);
    }
  }
}`,
    python: `def partition(s,current,index):
  if index==len(s):
    # store current partition
    return
  for i in range(index,len(s)):
    if s[index:i+1]==s[index:i+1][::-1]:
      current.append(s[index:i+1])
      partition(s,current,i+1)
      current.pop()`,
    cpp: `void partition(string s, vector<string> &current,int index){
  if(index==s.size()){
    // store current partition
    return;
  }
  for(int i=index;i<s.size();i++){
    if(isPalindrome(s,index,i)){
      current.push_back(s.substr(index,i-index+1));
      partition(s,current,i+1);
      current.pop_back();
    }
  }
}`,
    javascript: `function partition(s,current,index){
  if(index===s.length){
    // store current partition
    return;
  }
  for(let i=index;i<s.length;i++){
    if(isPalindrome(s,index,i)){
      current.push(s.substring(index,i+1));
      partition(s,current,i+1);
      current.pop();
    }
  }
}`
  }
};
// src/data/codes.js

export const stringCodes = {
  naive: {
    java: `public class NaiveSearch {
    public static void search(String text, String pattern) {
        int n = text.length();
        int m = pattern.length();
        for (int i = 0; i <= n - m; i++) {
            int j;
            for (j = 0; j < m; j++) {
                if (text.charAt(i + j) != pattern.charAt(j))
                    break;
            }
            if (j == m) System.out.println("Pattern found at index " + i);
        }
    }
}`,
    python: `def naive_search(text, pattern):
    n, m = len(text), len(pattern)
    for i in range(n - m + 1):
        j = 0
        while j < m and text[i + j] == pattern[j]:
            j += 1
        if j == m:
            print("Pattern found at index", i)`,
    cpp: `#include <iostream>
using namespace std;
void naiveSearch(string text, string pattern) {
    int n = text.size(), m = pattern.size();
    for (int i = 0; i <= n - m; i++) {
        int j;
        for (j = 0; j < m; j++) {
            if (text[i + j] != pattern[j])
                break;
        }
        if (j == m) cout << "Pattern found at index " << i << endl;
    }
}`,
    javascript: `function naiveSearch(text, pattern) {
    const n = text.length, m = pattern.length;
    for (let i = 0; i <= n - m; i++) {
        let j;
        for (j = 0; j < m; j++) {
            if (text[i + j] !== pattern[j]) break;
        }
        if (j === m) console.log("Pattern found at index", i);
    }
}`,
  },

  kmp: {
    java: `public class KMP {
    void computeLPSArray(String pat, int M, int lps[]) {
        int len = 0, i = 1;
        lps[0] = 0;
        while (i < M) {
            if (pat.charAt(i) == pat.charAt(len)) {
                len++;
                lps[i] = len;
                i++;
            } else {
                if (len != 0) len = lps[len - 1];
                else {
                    lps[i] = 0;
                    i++;
                }
            }
        }
    }
    void KMPSearch(String pat, String txt) {
        int M = pat.length();
        int N = txt.length();
        int lps[] = new int[M];
        computeLPSArray(pat, M, lps);
        int i = 0, j = 0;
        while (i < N) {
            if (pat.charAt(j) == txt.charAt(i)) { j++; i++; }
            if (j == M) { System.out.println("Found pattern at " + (i - j)); j = lps[j - 1]; }
            else if (i < N && pat.charAt(j) != txt.charAt(i)) {
                if (j != 0) j = lps[j - 1];
                else i++;
            }
        }
    }
}`,
    python: `def computeLPS(pattern):
    lps = [0] * len(pattern)
    length = 0
    i = 1
    while i < len(pattern):
        if pattern[i] == pattern[length]:
            length += 1
            lps[i] = length
            i += 1
        else:
            if length != 0:
                length = lps[length - 1]
            else:
                lps[i] = 0
                i += 1
    return lps

def KMP(text, pattern):
    lps = computeLPS(pattern)
    i = j = 0
    while i < len(text):
        if pattern[j] == text[i]:
            i += 1
            j += 1
        if j == len(pattern):
            print("Pattern found at index", i - j)
            j = lps[j - 1]
        elif i < len(text) and pattern[j] != text[i]:
            if j != 0:
                j = lps[j - 1]
            else:
                i += 1`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;
void computeLPS(string pat, vector<int>& lps) {
    int length = 0, i = 1;
    lps[0] = 0;
    while (i < pat.size()) {
        if (pat[i] == pat[length]) { length++; lps[i] = length; i++; }
        else { if (length != 0) length = lps[length - 1]; else { lps[i] = 0; i++; } }
    }
}
void KMPSearch(string pat, string txt) {
    vector<int> lps(pat.size());
    computeLPS(pat, lps);
    int i = 0, j = 0;
    while (i < txt.size()) {
        if (pat[j] == txt[i]) { i++; j++; }
        if (j == pat.size()) { cout << "Found pattern at " << i - j << endl; j = lps[j - 1]; }
        else if (i < txt.size() && pat[j] != txt[i]) {
            if (j != 0) j = lps[j - 1]; else i++;
        }
    }
}`,
    javascript: `function computeLPS(pattern) {
    const lps = Array(pattern.length).fill(0);
    let length = 0, i = 1;
    while (i < pattern.length) {
        if (pattern[i] === pattern[length]) { length++; lps[i] = length; i++; }
        else { if (length !== 0) length = lps[length - 1]; else { lps[i] = 0; i++; } }
    }
    return lps;
}
function KMPSearch(text, pattern) {
    const lps = computeLPS(pattern);
    let i = 0, j = 0;
    while (i < text.length) {
        if (pattern[j] === text[i]) { i++; j++; }
        if (j === pattern.length) { console.log("Found pattern at index", i - j); j = lps[j - 1]; }
        else if (i < text.length && pattern[j] !== text[i]) {
            if (j !== 0) j = lps[j - 1]; else i++;
        }
    }
}`,
  },

  rabinKarp: {
    java: `public class RabinKarp {
    int d = 256;
    int q = 101;
    void search(String pat, String txt) {
        int M = pat.length(), N = txt.length();
        int p = 0, t = 0, h = 1;
        for (int i = 0; i < M - 1; i++) h = (h * d) % q;
        for (int i = 0; i < M; i++) { p = (d*p + pat.charAt(i)) % q; t = (d*t + txt.charAt(i)) % q; }
        for (int i = 0; i <= N - M; i++) {
            if (p == t) {
                int j = 0;
                for (j = 0; j < M; j++)
                    if (txt.charAt(i+j) != pat.charAt(j)) break;
                if (j == M) System.out.println("Pattern found at index " + i);
            }
            if (i < N - M) t = (d*(t - txt.charAt(i)*h) + txt.charAt(i+M)) % q;
        }
    }
}`,
    python: `def rabin_karp(text, pattern):
    d, q = 256, 101
    M, N = len(pattern), len(text)
    h = pow(d, M-1) % q
    p = t = 0
    for i in range(M):
        p = (d*p + ord(pattern[i])) % q
        t = (d*t + ord(text[i])) % q
    for i in range(N - M + 1):
        if p == t:
            if text[i:i+M] == pattern:
                print("Pattern found at index", i)
        if i < N - M:
            t = (d*(t - ord(text[i])*h) + ord(text[i+M])) % q`,
    cpp: `#include <iostream>
using namespace std;
void RabinKarp(string txt, string pat) {
    int d = 256, q = 101;
    int N = txt.size(), M = pat.size();
    int p = 0, t = 0, h = 1;
    for (int i = 0; i < M - 1; i++) h = (h*d) % q;
    for (int i = 0; i < M; i++) { p = (d*p + pat[i]) % q; t = (d*t + txt[i]) % q; }
    for (int i = 0; i <= N - M; i++) {
        if (p == t) {
            int j = 0;
            for (j = 0; j < M; j++) if (txt[i+j] != pat[j]) break;
            if (j == M) cout << "Pattern found at index " << i << endl;
        }
        if (i < N - M) t = (d*(t - txt[i]*h) + txt[i+M]) % q;
    }
}`,
    javascript: `function rabinKarp(text, pattern) {
    const d = 256, q = 101;
    const N = text.length, M = pattern.length;
    let p = 0, t = 0, h = 1;
    for (let i = 0; i < M - 1; i++) h = (h * d) % q;
    for (let i = 0; i < M; i++) { p = (d*p + pattern.charCodeAt(i)) % q; t = (d*t + text.charCodeAt(i)) % q; }
    for (let i = 0; i <= N - M; i++) {
        if (p === t) {
            let match = true;
            for (let j = 0; j < M; j++) if (text[i+j] !== pattern[j]) match = false;
            if (match) console.log("Pattern found at index", i);
        }
        if (i < N - M) t = (d*(t - text.charCodeAt(i)*h) + text.charCodeAt(i+M)) % q;
    }
}`,
  },

  zAlgorithm: {
    java: `public class ZAlgorithm {
    int[] computeZ(String s) {
        int n = s.length();
        int[] Z = new int[n];
        int L = 0, R = 0;
        for (int i = 1; i < n; i++) {
            if (i > R) {
                L = R = i;
                while (R < n && s.charAt(R-L) == s.charAt(R)) R++;
                Z[i] = R - L;
                R--;
            } else {
                int k = i - L;
                if (Z[k] < R-i+1) Z[i] = Z[k];
                else {
                    L = i;
                    while (R < n && s.charAt(R-L) == s.charAt(R)) R++;
                    Z[i] = R - L;
                    R--;
                }
            }
        }
        return Z;
    }
}`,
    python: `def computeZ(s):
    n = len(s)
    Z = [0]*n
    L = R = 0
    for i in range(1,n):
        if i>R:
            L=R=i
            while R<n and s[R-L]==s[R]: R+=1
            Z[i] = R-L
            R-=1
        else:
            k = i-L
            if Z[k]<R-i+1: Z[i]=Z[k]
            else:
                L=i
                while R<n and s[R-L]==s[R]: R+=1
                Z[i]=R-L
                R-=1
    return Z`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;
vector<int> computeZ(string s) {
    int n = s.size(), L = 0, R = 0;
    vector<int> Z(n,0);
    for(int i=1;i<n;i++){
        if(i>R){
            L=R=i;
            while(R<n && s[R-L]==s[R]) R++;
            Z[i]=R-L; R--;
        } else{
            int k=i-L;
            if(Z[k]<R-i+1) Z[i]=Z[k];
            else{
                L=i;
                while(R<n && s[R-L]==s[R]) R++;
                Z[i]=R-L; R--;
            }
        }
    }
    return Z;
}`,
    javascript: `function computeZ(s) {
    const n = s.length;
    const Z = Array(n).fill(0);
    let L = 0, R = 0;
    for (let i = 1; i < n; i++) {
        if (i > R) {
            L = R = i;
            while (R < n && s[R-L] === s[R]) R++;
            Z[i] = R - L;
            R--;
        } else {
            const k = i - L;
            if (Z[k] < R-i+1) Z[i] = Z[k];
            else {
                L = i;
                while (R < n && s[R-L] === s[R]) R++;
                Z[i] = R - L;
                R--;
            }
        }
    }
    return Z;
}`,
  },

  boyerMoore: {
    java: `// Implementation of Boyer-Moore algorithm in Java (Bad character heuristic)
public class BoyerMoore {
    final int NO_OF_CHARS = 256;
    void badCharHeuristic(String str, int[] badChar) {
        for(int i=0;i<NO_OF_CHARS;i++) badChar[i]=-1;
        for(int i=0;i<str.length();i++) badChar[(int)str.charAt(i)] = i;
    }
    void search(String txt, String pat){
        int m = pat.length(), n = txt.length();
        int[] badChar = new int[NO_OF_CHARS];
        badCharHeuristic(pat,badChar);
        int s = 0;
        while(s <= n - m){
            int j = m-1;
            while(j>=0 && pat.charAt(j) == txt.charAt(s+j)) j--;
            if(j<0){
                System.out.println("Pattern found at index "+s);
                s += (s+m<n)? m-badChar[txt.charAt(s+m)] : 1;
            } else s += Math.max(1,j-badChar[txt.charAt(s+j)]);
        }
    }
}`,
    python: `# Simplified Boyer-Moore with bad character heuristic
def badCharHeuristic(pat):
    NO_OF_CHARS = 256
    badChar = [-1]*NO_OF_CHARS
    for i, c in enumerate(pat): badChar[ord(c)] = i
    return badChar

def boyerMoore(txt, pat):
    m, n = len(pat), len(txt)
    badChar = badCharHeuristic(pat)
    s = 0
    while s <= n - m:
        j = m-1
        while j>=0 and pat[j]==txt[s+j]: j-=1
        if j<0:
            print("Pattern found at index", s)
            s += m-badChar[ord(txt[s+m])] if s+m<n else 1
        else: s += max(1,j-badChar[ord(txt[s+j]]) )`,
    cpp: `#include <bits/stdc++.h>
using namespace std;
void badCharHeuristic(string str, vector<int>& badChar){
    int NO_OF_CHARS = 256;
    fill(badChar.begin(),badChar.end(),-1);
    for(int i=0;i<str.size();i++) badChar[(int)str[i]]=i;
}
void boyerMoore(string txt, string pat){
    int m=pat.size(), n=txt.size();
    vector<int> badChar(256);
    badCharHeuristic(pat,badChar);
    int s=0;
    while(s<=n-m){
        int j=m-1;
        while(j>=0 && pat[j]==txt[s+j]) j--;
        if(j<0){
            cout<<"Pattern found at index "<<s<<endl;
            s += (s+m<n)? m-badChar[txt[s+m]] : 1;
        } else s += max(1,j-badChar[txt[s+j]]);
    }
}`,
    javascript: `function badCharHeuristic(str){
    const NO_OF_CHARS = 256;
    const badChar = Array(NO_OF_CHARS).fill(-1);
    for(let i=0;i<str.length;i++) badChar[str.charCodeAt(i)] = i;
    return badChar;
}
function boyerMoore(txt, pat){
    const m = pat.length, n = txt.length;
    const badChar = badCharHeuristic(pat);
    let s = 0;
    while(s <= n-m){
        let j = m-1;
        while(j>=0 && pat[j] === txt[s+j]) j--;
        if(j<0){
            console.log("Pattern found at index", s);
            s += (s+m<n)? m-badChar[txt.charCodeAt(s+m)] : 1;
        } else s += Math.max(1,j-badChar[txt.charCodeAt(s+j)]);
    }
}`,
  },
};
// src/data/divideAndConquerCodes.js
export const dacCodes = {
  mergeSort: {
    java: `public class MergeSort {
    void merge(int arr[], int l, int m, int r) {
        int n1 = m - l + 1;
        int n2 = r - m;
        int L[] = new int[n1];
        int R[] = new int[n2];
        for (int i = 0; i < n1; i++) L[i] = arr[l + i];
        for (int j = 0; j < n2; j++) R[j] = arr[m + 1 + j];
        int i = 0, j = 0, k = l;
        while (i < n1 && j < n2) {
            if (L[i] <= R[j]) arr[k++] = L[i++];
            else arr[k++] = R[j++];
        }
        while (i < n1) arr[k++] = L[i++];
        while (j < n2) arr[k++] = R[j++];
    }
    void sort(int arr[], int l, int r) {
        if (l < r) {
            int m = l + (r - l) / 2;
            sort(arr, l, m);
            sort(arr, m + 1, r);
            merge(arr, l, m, r);
        }
    }
}`,
    python: `def merge_sort(arr):
    if len(arr) > 1:
        mid = len(arr)//2
        L = arr[:mid]
        R = arr[mid:]
        merge_sort(L)
        merge_sort(R)
        i = j = k = 0
        while i < len(L) and j < len(R):
            if L[i] <= R[j]:
                arr[k] = L[i]; i += 1
            else:
                arr[k] = R[j]; j += 1
            k += 1
        while i < len(L): arr[k] = L[i]; i += 1; k += 1
        while j < len(R): arr[k] = R[j]; j += 1; k += 1`,
    cpp: `#include <iostream>
using namespace std;
void merge(int arr[], int l, int m, int r){
    int n1 = m-l+1, n2=r-m;
    int L[n1], R[n2];
    for(int i=0;i<n1;i++) L[i]=arr[l+i];
    for(int j=0;j<n2;j++) R[j]=arr[m+1+j];
    int i=0,j=0,k=l;
    while(i<n1 && j<n2) arr[k++] = (L[i]<=R[j])? L[i++] : R[j++];
    while(i<n1) arr[k++]=L[i++];
    while(j<n2) arr[k++]=R[j++];
}
void mergeSort(int arr[], int l, int r){
    if(l<r){
        int m = l + (r-l)/2;
        mergeSort(arr,l,m);
        mergeSort(arr,m+1,r);
        merge(arr,l,m,r);
    }
}`,
    javascript: `function merge(arr,l,m,r){
    let n1=m-l+1, n2=r-m;
    let L=arr.slice(l,m+1), R=arr.slice(m+1,r+1);
    let i=0,j=0,k=l;
    while(i<n1 && j<n2) arr[k++] = (L[i]<=R[j])? L[i++] : R[j++];
    while(i<n1) arr[k++] = L[i++];
    while(j<n2) arr[k++] = R[j++];
}
function mergeSort(arr,l,r){
    if(l<r){
        let m = l+Math.floor((r-l)/2);
        mergeSort(arr,l,m);
        mergeSort(arr,m+1,r);
        merge(arr,l,m,r);
    }
}`  
  },

  quickSort: {
    java: `public class QuickSort {
    int partition(int arr[], int low, int high){
        int pivot = arr[high], i = (low-1);
        for(int j=low;j<high;j++){
            if(arr[j] <= pivot){ i++; int temp=arr[i]; arr[i]=arr[j]; arr[j]=temp; }
        }
        int temp=arr[i+1]; arr[i+1]=arr[high]; arr[high]=temp;
        return i+1;
    }
    void sort(int arr[], int low, int high){
        if(low<high){
            int pi = partition(arr, low, high);
            sort(arr, low, pi-1);
            sort(arr, pi+1, high);
        }
    }
}`,
    python: `def quick_sort(arr):
    if len(arr)<=1: return arr
    pivot=arr[len(arr)//2]
    left=[x for x in arr if x<pivot]
    middle=[x for x in arr if x==pivot]
    right=[x for x in arr if x>pivot]
    return quick_sort(left)+middle+quick_sort(right)`,
    cpp: `#include <iostream>
using namespace std;
int partition(int arr[], int low, int high){
    int pivot=arr[high], i=low-1;
    for(int j=low;j<high;j++){
        if(arr[j]<=pivot){ i++; swap(arr[i],arr[j]); }
    }
    swap(arr[i+1],arr[high]);
    return i+1;
}
void quickSort(int arr[], int low, int high){
    if(low<high){
        int pi = partition(arr,low,high);
        quickSort(arr,low,pi-1);
        quickSort(arr,pi+1,high);
    }
}`,
    javascript: `function partition(arr,low,high){
    let pivot=arr[high], i=low-1;
    for(let j=low;j<high;j++){
        if(arr[j]<=pivot){ i++; [arr[i],arr[j]]=[arr[j],arr[i]]; }
    }
    [arr[i+1],arr[high]]=[arr[high],arr[i+1]];
    return i+1;
}
function quickSort(arr,low,high){
    if(low<high){
        let pi=partition(arr,low,high);
        quickSort(arr,low,pi-1);
        quickSort(arr,pi+1,high);
    }
}`
  },

  binarySearch: {
    java: `public class BinarySearch {
    int search(int arr[], int l, int r, int x){
        if(r>=l){
            int mid = l + (r-l)/2;
            if(arr[mid]==x) return mid;
            if(arr[mid]>x) return search(arr,l,mid-1,x);
            return search(arr,mid+1,r,x);
        }
        return -1;
    }
}`,
    python: `def binary_search(arr,x):
    l,r=0,len(arr)-1
    while l<=r:
        mid = (l+r)//2
        if arr[mid]==x: return mid
        elif arr[mid]<x: l=mid+1
        else: r=mid-1
    return -1`,
    cpp: `int binarySearch(int arr[], int l, int r, int x){
    if(r>=l){
        int mid=l+(r-l)/2;
        if(arr[mid]==x) return mid;
        if(arr[mid]>x) return binarySearch(arr,l,mid-1,x);
        return binarySearch(arr,mid+1,r,x);
    }
    return -1;
}`,
    javascript: `function binarySearch(arr,l,r,x){
    if(r>=l){
        let mid = l+Math.floor((r-l)/2);
        if(arr[mid]===x) return mid;
        if(arr[mid]>x) return binarySearch(arr,l,mid-1,x);
        return binarySearch(arr,mid+1,r,x);
    }
    return -1;
}`
  },

  karatsuba: {
    java: `public class Karatsuba {
    public static long multiply(long x, long y){
        if(x<10 || y<10) return x*y;
        int n = Math.max(Long.toString(x).length(), Long.toString(y).length());
        int m = n/2;
        long a = x/(long)Math.pow(10,m);
        long b = x%(long)Math.pow(10,m);
        long c = y/(long)Math.pow(10,m);
        long d = y%(long)Math.pow(10,m);
        long ac = multiply(a,c);
        long bd = multiply(b,d);
        long ad_plus_bc = multiply(a,d)+multiply(b,c);
        return ac*(long)Math.pow(10,2*m)+ad_plus_bc*(long)Math.pow(10,m)+bd;
    }
}`,
    python: `def karatsuba(x,y):
    if x<10 or y<10: return x*y
    n=max(len(str(x)),len(str(y)))
    m=n//2
    a,b=divmod(x,10**m)
    c,d=divmod(y,10**m)
    return karatsuba(a,c)*10**(2*m) + (karatsuba(a,d)+karatsuba(b,c))*10**m + karatsuba(b,d)`,
    cpp: `long karatsuba(long x,long y){
    if(x<10 || y<10) return x*y;
    int n=max(to_string(x).size(),to_string(y).size());
    int m=n/2;
    long a=x/pow(10,m), b=x%long(pow(10,m));
    long c=y/pow(10,m), d=y%long(pow(10,m));
    return karatsuba(a,c)*pow(10,2*m) + (karatsuba(a,d)+karatsuba(b,c))*pow(10,m) + karatsuba(b,d);
}`,
    javascript: `function karatsuba(x,y){
    if(x<10 || y<10) return x*y;
    const n=Math.max(x.toString().length,y.toString().length);
    const m=Math.floor(n/2);
    const a=Math.floor(x/10**m), b=x%10**m;
    const c=Math.floor(y/10**m), d=y%10**m;
    return karatsuba(a,c)*10**(2*m) + (karatsuba(a,d)+karatsuba(b,c))*10**m + karatsuba(b,d);
}`
  },
   strassen: {
    java: `public class Strassen {
    int[][] add(int[][] A, int[][] B){
        int n=A.length;
        int[][] C = new int[n][n];
        for(int i=0;i<n;i++) for(int j=0;j<n;j++) C[i][j]=A[i][j]+B[i][j];
        return C;
    }
    int[][] subtract(int[][] A, int[][] B){
        int n=A.length;
        int[][] C = new int[n][n];
        for(int i=0;i<n;i++) for(int j=0;j<n;j++) C[i][j]=A[i][j]-B[i][j];
        return C;
    }
    int[][] multiply(int[][] A,int[][] B){
        int n=A.length;
        if(n==1) return new int[][]{{A[0][0]*B[0][0]}};
        int newSize=n/2;
        int[][] A11 = new int[newSize][newSize];
        int[][] A12 = new int[newSize][newSize];
        int[][] A21 = new int[newSize][newSize];
        int[][] A22 = new int[newSize][newSize];
        int[][] B11 = new int[newSize][newSize];
        int[][] B12 = new int[newSize][newSize];
        int[][] B21 = new int[newSize][newSize];
        int[][] B22 = new int[newSize][newSize];
        for(int i=0;i<newSize;i++){
            for(int j=0;j<newSize;j++){
                A11[i][j]=A[i][j]; A12[i][j]=A[i][j+newSize];
                A21[i][j]=A[i+newSize][j]; A22[i][j]=A[i+newSize][j+newSize];
                B11[i][j]=B[i][j]; B12[i][j]=B[i][j+newSize];
                B21[i][j]=B[i+newSize][j]; B22[i][j]=B[i+newSize][j+newSize];
            }
        }
        int[][] M1 = multiply(add(A11,A22),add(B11,B22));
        int[][] M2 = multiply(add(A21,A22),B11);
        int[][] M3 = multiply(A11,subtract(B12,B22));
        int[][] M4 = multiply(A22,subtract(B21,B11));
        int[][] M5 = multiply(add(A11,A12),B22);
        int[][] M6 = multiply(subtract(A21,A11),add(B11,B12));
        int[][] M7 = multiply(subtract(A12,A22),add(B21,B22));
        int[][] C = new int[n][n];
        for(int i=0;i<newSize;i++){
            for(int j=0;j<newSize;j++){
                C[i][j]=M1[i][j]+M4[i][j]-M5[i][j]+M7[i][j];
                C[i][j+newSize]=M3[i][j]+M5[i][j];
                C[i+newSize][j]=M2[i][j]+M4[i][j];
                C[i+newSize][j+newSize]=M1[i][j]-M2[i][j]+M3[i][j]+M6[i][j];
            }
        }
        return C;
    }
}`,
    python: `def add(A,B): return [[A[i][j]+B[i][j] for j in range(len(A))] for i in range(len(A))]
def subtract(A,B): return [[A[i][j]-B[i][j] for j in range(len(A))] for i in range(len(A))]
def strassen(A,B):
    n=len(A)
    if n==1: return [[A[0][0]*B[0][0]]]
    mid=n//2
    A11=[row[:mid] for row in A[:mid]]; A12=[row[mid:] for row in A[:mid]]
    A21=[row[:mid] for row in A[mid:]]; A22=[row[mid:] for row in A[mid:]]
    B11=[row[:mid] for row in B[:mid]]; B12=[row[mid:] for row in B[:mid]]
    B21=[row[:mid] for row in B[mid:]]; B22=[row[mid:] for row in B[mid:]]
    M1=strassen(add(A11,A22),add(B11,B22))
    M2=strassen(add(A21,A22),B11)
    M3=strassen(A11,subtract(B12,B22))
    M4=strassen(A22,subtract(B21,B11))
    M5=strassen(add(A11,A12),B22)
    M6=strassen(subtract(A21,A11),add(B11,B12))
    M7=strassen(subtract(A12,A22),add(B21,B22))
    C=[[0]*n for _ in range(n)]
    for i in range(mid):
        for j in range(mid):
            C[i][j]=M1[i][j]+M4[i][j]-M5[i][j]+M7[i][j]
            C[i][j+mid]=M3[i][j]+M5[i][j]
            C[i+mid][j]=M2[i][j]+M4[i][j]
            C[i+mid][j+mid]=M1[i][j]-M2[i][j]+M3[i][j]+M6[i][j]
    return C`,
    cpp: `// Strassen Algorithm in C++
#include <iostream>
#include <vector>
using namespace std;
vector<vector<int>> add(vector<vector<int>> &A, vector<vector<int>> &B){
    int n=A.size();
    vector<vector<int>> C(n,vector<int>(n));
    for(int i=0;i<n;i++) for(int j=0;j<n;j++) C[i][j]=A[i][j]+B[i][j];
    return C;
}
vector<vector<int>> subtract(vector<vector<int>> &A, vector<vector<int>> &B){
    int n=A.size();
    vector<vector<int>> C(n,vector<int>(n));
    for(int i=0;i<n;i++) for(int j=0;j<n;j++) C[i][j]=A[i][j]-B[i][j];
    return C;
}
vector<vector<int>> strassen(vector<vector<int>> &A, vector<vector<int>> &B){
    int n=A.size();
    if(n==1) return {{A[0][0]*B[0][0]}};
    int mid=n/2;
    vector<vector<int>> A11(mid,vector<int>(mid)),A12(mid,vector<int>(mid)),A21(mid,vector<int>(mid)),A22(mid,vector<int>(mid));
    vector<vector<int>> B11(mid,vector<int>(mid)),B12(mid,vector<int>(mid)),B21(mid,vector<int>(mid)),B22(mid,vector<int>(mid));
    for(int i=0;i<mid;i++) for(int j=0;j<mid;j++){
        A11[i][j]=A[i][j]; A12[i][j]=A[i][j+mid]; A21[i][j]=A[i+mid][j]; A22[i][j]=A[i+mid][j+mid];
        B11[i][j]=B[i][j]; B12[i][j]=B[i][j+mid]; B21[i][j]=B[i+mid][j]; B22[i][j]=B[i+mid][j+mid];
    }
    auto M1=strassen(add(A11,A22),add(B11,B22));
    auto M2=strassen(add(A21,A22),B11);
    auto M3=strassen(A11,subtract(B12,B22));
    auto M4=strassen(A22,subtract(B21,B11));
    auto M5=strassen(add(A11,A12),B22);
    auto M6=strassen(subtract(A21,A11),add(B11,B12));
    auto M7=strassen(subtract(A12,A22),add(B21,B22));
    vector<vector<int>> C(n,vector<int>(n));
    for(int i=0;i<mid;i++) for(int j=0;j<mid;j++){
        C[i][j]=M1[i][j]+M4[i][j]-M5[i][j]+M7[i][j];
        C[i][j+mid]=M3[i][j]+M5[i][j];
        C[i+mid][j]=M2[i][j]+M4[i][j];
        C[i+mid][j+mid]=M1[i][j]-M2[i][j]+M3[i][j]+M6[i][j];
    }
    return C;
}`,
    javascript: `function add(A,B){ return A.map((row,i)=>row.map((val,j)=>val+B[i][j])); }
function subtract(A,B){ return A.map((row,i)=>row.map((val,j)=>val-B[i][j])); }
function strassen(A,B){
    const n=A.length;
    if(n===1) return [[A[0][0]*B[0][0]]];
    const mid=Math.floor(n/2);
    const A11=A.slice(0,mid).map(row=>row.slice(0,mid));
    const A12=A.slice(0,mid).map(row=>row.slice(mid));
    const A21=A.slice(mid).map(row=>row.slice(0,mid));
    const A22=A.slice(mid).map(row=>row.slice(mid));
    const B11=B.slice(0,mid).map(row=>row.slice(0,mid));
    const B12=B.slice(0,mid).map(row=>row.slice(mid));
    const B21=B.slice(mid).map(row=>row.slice(0,mid));
    const B22=B.slice(mid).map(row=>row.slice(mid));
    const M1=strassen(add(A11,A22),add(B11,B22));
    const M2=strassen(add(A21,A22),B11);
    const M3=strassen(A11,subtract(B12,B22));
    const M4=strassen(A22,subtract(B21,B11));
    const M5=strassen(add(A11,A12),B22);
    const M6=strassen(subtract(A21,A11),add(B11,B12));
    const M7=strassen(subtract(A12,A22),add(B21,B22));
    const C=Array.from({length:n},()=>Array(n).fill(0));
    for(let i=0;i<mid;i++) for(let j=0;j<mid;j++){
        C[i][j]=M1[i][j]+M4[i][j]-M5[i][j]+M7[i][j];
        C[i][j+mid]=M3[i][j]+M5[i][j];
        C[i+mid][j]=M2[i][j]+M4[i][j];
        C[i+mid][j+mid]=M1[i][j]-M2[i][j]+M3[i][j]+M6[i][j];
    }
    return C;
}` 
  },

  maximumSubarray: {
    java: `public class MaxSubarray {
    int maxCrossingSum(int arr[], int l, int m, int h){
        int sum=0,leftSum=Integer.MIN_VALUE;
        for(int i=m;i>=l;i--){ sum+=arr[i]; if(sum>leftSum) leftSum=sum; }
        sum=0; int rightSum=Integer.MIN_VALUE;
        for(int i=m+1;i<=h;i++){ sum+=arr[i]; if(sum>rightSum) rightSum=sum; }
        return leftSum+rightSum;
    }
    int maxSubArraySum(int arr[], int l, int h){
        if(l==h) return arr[l];
        int m=l+(h-l)/2;
        return Math.max(Math.max(maxSubArraySum(arr,l,m),maxSubArraySum(arr,m+1,h)), maxCrossingSum(arr,l,m,h));
    }
}`,
    python: `def max_crossing_sum(arr,l,m,h):
    left_sum=float('-inf'); s=0
    for i in range(m,l-1,-1): s+=arr[i]; left_sum=max(left_sum,s)
    right_sum=float('-inf'); s=0
    for i in range(m+1,h+1): s+=arr[i]; right_sum=max(right_sum,s)
    return left_sum+right_sum
def max_subarray(arr,l,h):
    if l==h: return arr[l]
    m=(l+h)//2
    return max(max_subarray(arr,l,m), max_subarray(arr,m+1,h), max_crossing_sum(arr,l,m,h))`,
    cpp: `int maxCrossingSum(int arr[], int l, int m, int h){
    int sum=0,leftSum=INT_MIN;
    for(int i=m;i>=l;i--){ sum+=arr[i]; if(sum>leftSum) leftSum=sum; }
    sum=0; int rightSum=INT_MIN;
    for(int i=m+1;i<=h;i++){ sum+=arr[i]; if(sum>rightSum) rightSum=sum; }
    return leftSum+rightSum;
}
int maxSubArraySum(int arr[], int l, int h){
    if(l==h) return arr[l];
    int m=l+(h-l)/2;
    return max(max(maxSubArraySum(arr,l,m), maxSubArraySum(arr,m+1,h)), maxCrossingSum(arr,l,m,h));
}`,
    javascript: `function maxCrossingSum(arr,l,m,h){
    let sum=0,leftSum=-Infinity;
    for(let i=m;i>=l;i--){ sum+=arr[i]; if(sum>leftSum) leftSum=sum; }
    sum=0; let rightSum=-Infinity;
    for(let i=m+1;i<=h;i++){ sum+=arr[i]; if(sum>rightSum) rightSum=sum; }
    return leftSum+rightSum;
}
function maxSubArray(arr,l,h){
    if(l===h) return arr[l];
    let m=Math.floor((l+h)/2);
    return Math.max(maxSubArray(arr,l,m), maxSubArray(arr,m+1,h), maxCrossingSum(arr,l,m,h));
}`
  },

   closestPair: {
    java: `import java.util.Arrays;

public class ClosestPair {
    static class Point {
        double x, y;
        Point(double x, double y) { this.x = x; this.y = y; }
    }

    static double dist(Point p1, Point p2) {
        return Math.hypot(p1.x - p2.x, p1.y - p2.y);
    }

    static double bruteForce(Point[] P, int n) {
        double min = Double.MAX_VALUE;
        for (int i = 0; i < n; ++i)
            for (int j = i+1; j < n; ++j)
                min = Math.min(min, dist(P[i], P[j]));
        return min;
    }

    static double stripClosest(Point[] strip, int size, double d) {
        double min = d;
        Arrays.sort(strip, 0, size, (a,b) -> Double.compare(a.y, b.y));
        for (int i = 0; i < size; ++i)
            for (int j = i+1; j < size && (strip[j].y - strip[i].y) < min; ++j)
                min = Math.min(min, dist(strip[i], strip[j]));
        return min;
    }

    static double closestUtil(Point[] Px, Point[] Py, int n) {
        if (n <= 3) return bruteForce(Px, n);
        int mid = n/2;
        Point midPoint = Px[mid];
        Point[] Pyl = new Point[mid];
        Point[] Pyr = new Point[n - mid];
        int li = 0, ri = 0;
        for (int i = 0; i < n; i++) {
            if (Py[i].x <= midPoint.x) Pyl[li++] = Py[i];
            else Pyr[ri++] = Py[i];
        }
        double dl = closestUtil(Arrays.copyOfRange(Px,0,mid), Pyl, mid);
        double dr = closestUtil(Arrays.copyOfRange(Px,mid,n), Pyr, n - mid);
        double d = Math.min(dl, dr);
        Point[] strip = new Point[n];
        int j = 0;
        for (int i = 0; i < n; i++)
            if (Math.abs(Py[i].x - midPoint.x) < d) strip[j++] = Py[i];
        return Math.min(d, stripClosest(strip, j, d));
    }

    static double closest(Point[] P, int n) {
        Point[] Px = P.clone();
        Point[] Py = P.clone();
        Arrays.sort(Px, (a,b) -> Double.compare(a.x, b.x));
        Arrays.sort(Py, (a,b) -> Double.compare(a.y, b.y));
        return closestUtil(Px, Py, n);
    }

    public static void main(String[] args) {
        Point[] P = { new Point(2,3), new Point(12,30), new Point(40,50), new Point(5,1), new Point(12,10), new Point(3,4) };
        System.out.println("The smallest distance is " + closest(P, P.length));
    }
}`,
    python: `import math

def dist(p1, p2):
    return math.hypot(p1[0]-p2[0], p1[1]-p2[1])

def bruteForce(P):
    min_val = float('inf')
    n = len(P)
    for i in range(n):
        for j in range(i+1, n):
            min_val = min(min_val, dist(P[i], P[j]))
    return min_val

def stripClosest(strip, d):
    strip.sort(key=lambda p: p[1])
    min_val = d
    for i in range(len(strip)):
        j = i + 1
        while j < len(strip) and (strip[j][1] - strip[i][1]) < min_val:
            min_val = min(min_val, dist(strip[i], strip[j]))
            j += 1
    return min_val

def closestUtil(Px, Py):
    n = len(Px)
    if n <= 3:
        return bruteForce(Px)
    mid = n//2
    midPoint = Px[mid]
    Pyl = [p for p in Py if p[0] <= midPoint[0]]
    Pyr = [p for p in Py if p[0] > midPoint[0]]
    dl = closestUtil(Px[:mid], Pyl)
    dr = closestUtil(Px[mid:], Pyr)
    d = min(dl, dr)
    strip = [p for p in Py if abs(p[0] - midPoint[0]) < d]
    return min(d, stripClosest(strip, d))

def closest(P):
    Px = sorted(P, key=lambda p: p[0])
    Py = sorted(P, key=lambda p: p[1])
    return closestUtil(Px, Py)

# Example usage
P = [(2,3),(12,30),(40,50),(5,1),(12,10),(3,4)]
print("The smallest distance is", closest(P))`,
    cpp: `#include <bits/stdc++.h>
using namespace std;

struct Point { double x, y; };

double dist(Point p1, Point p2) {
    return hypot(p1.x - p2.x, p1.y - p2.y);
}

double bruteForce(vector<Point>& P) {
    double min_val = DBL_MAX;
    int n = P.size();
    for(int i=0;i<n;i++)
        for(int j=i+1;j<n;j++)
            min_val = min(min_val, dist(P[i], P[j]));
    return min_val;
}

double stripClosest(vector<Point>& strip, double d) {
    sort(strip.begin(), strip.end(), [](Point a, Point b){ return a.y < b.y; });
    double min_val = d;
    int n = strip.size();
    for(int i=0;i<n;i++)
        for(int j=i+1;j<n && (strip[j].y - strip[i].y) < min_val;j++)
            min_val = min(min_val, dist(strip[i], strip[j]));
    return min_val;
}

double closestUtil(vector<Point>& Px, vector<Point>& Py) {
    int n = Px.size();
    if (n <= 3) return bruteForce(Px);
    int mid = n/2;
    Point midPoint = Px[mid];
    vector<Point> Pyl, Pyr;
    for (auto p : Py)
        if (p.x <= midPoint.x) Pyl.push_back(p);
        else Pyr.push_back(p);
    vector<Point> PxLeft(Px.begin(), Px.begin()+mid);
    vector<Point> PxRight(Px.begin()+mid, Px.end());
    double dl = closestUtil(PxLeft, Pyl);
    double dr = closestUtil(PxRight, Pyr);
    double d = min(dl, dr);
    vector<Point> strip;
    for(auto p:Py) if (abs(p.x - midPoint.x) < d) strip.push_back(p);
    return min(d, stripClosest(strip, d));
}

double closest(vector<Point>& P) {
    vector<Point> Px = P, Py = P;
    sort(Px.begin(), Px.end(), [](Point a, Point b){ return a.x < b.x; });
    sort(Py.begin(), Py.end(), [](Point a, Point b){ return a.y < b.y; });
    return closestUtil(Px, Py);
}

int main() {
    vector<Point> P = {{2,3},{12,30},{40,50},{5,1},{12,10},{3,4}};
    cout << "The smallest distance is " << closest(P) << endl;
}`,
    javascript: `function dist(p1,p2){
    return Math.hypot(p1.x-p2.x, p1.y-p2.y);
}

function bruteForce(P){
    let min_val = Infinity;
    for(let i=0;i<P.length;i++)
        for(let j=i+1;j<P.length;j++)
            min_val = Math.min(min_val, dist(P[i], P[j]));
    return min_val;
}

function stripClosest(strip, d){
    strip.sort((a,b)=>a.y-b.y);
    let min_val = d;
    for(let i=0;i<strip.length;i++){
        for(let j=i+1;j<strip.length && (strip[j].y - strip[i].y)<min_val;j++)
            min_val = Math.min(min_val, dist(strip[i], strip[j]));
    }
    return min_val;
}

function closestUtil(Px, Py){
    if(Px.length <= 3) return bruteForce(Px);
    let mid = Math.floor(Px.length/2);
    let midPoint = Px[mid];
    let Pyl = Py.filter(p=>p.x <= midPoint.x);
    let Pyr = Py.filter(p=>p.x > midPoint.x);
    let dl = closestUtil(Px.slice(0,mid), Pyl);
    let dr = closestUtil(Px.slice(mid), Pyr);
    let d = Math.min(dl, dr);
    let strip = Py.filter(p=>Math.abs(p.x - midPoint.x) < d);
    return Math.min(d, stripClosest(strip, d));
}

function closest(P){
    let Px = [...P].sort((a,b)=>a.x-b.x);
    let Py = [...P].sort((a,b)=>a.y-b.y);
    return closestUtil(Px, Py);
}

// Example usage
let P = [{x:2,y:3},{x:12,y:30},{x:40,y:50},{x:5,y:1},{x:12,y:10},{x:3,y:4}];
console.log("The smallest distance is", closest(P));`
  },
 fft: {
    java: `import java.util.Arrays;

public class FFT {
    static class Complex {
        double re, im;
        Complex(double re, double im) { this.re = re; this.im = im; }
        Complex add(Complex other) { return new Complex(this.re + other.re, this.im + other.im); }
        Complex sub(Complex other) { return new Complex(this.re - other.re, this.im - other.im); }
        Complex mul(Complex other) {
            return new Complex(this.re*other.re - this.im*other.im, this.re*other.im + this.im*other.re);
        }
    }

    public static Complex[] fft(Complex[] a) {
        int n = a.length;
        if (n == 1) return new Complex[]{ a[0] };
        Complex[] even = new Complex[n/2];
        Complex[] odd = new Complex[n/2];
        for (int i = 0; i < n/2; i++) {
            even[i] = a[2*i];
            odd[i] = a[2*i+1];
        }
        Complex[] Feven = fft(even);
        Complex[] Fodd = fft(odd);
        Complex[] y = new Complex[n];
        for (int k = 0; k < n/2; k++) {
            double angle = -2 * Math.PI * k / n;
            Complex wk = new Complex(Math.cos(angle), Math.sin(angle));
            y[k] = Feven[k].add(wk.mul(Fodd[k]));
            y[k + n/2] = Feven[k].sub(wk.mul(Fodd[k]));
        }
        return y;
    }

    public static void main(String[] args) {
        Complex[] input = { new Complex(1,0), new Complex(2,0), new Complex(3,0), new Complex(4,0) };
        Complex[] result = fft(input);
        for (Complex c : result) System.out.println(c.re + " + " + c.im + "i");
    }
}`,
    python: `import cmath

def fft(a):
    n = len(a)
    if n == 1:
        return a
    even = fft(a[0::2])
    odd = fft(a[1::2])
    y = [0]*n
    for k in range(n//2):
        wk = cmath.exp(-2j*cmath.pi*k/n)
        y[k] = even[k] + wk*odd[k]
        y[k + n//2] = even[k] - wk*odd[k]
    return y

# Example usage
a = [1, 2, 3, 4]
result = fft([complex(x,0) for x in a])
for c in result:
    print(c)`,
    cpp: `#include <bits/stdc++.h>
using namespace std;
typedef complex<double> cd;
const double PI = acos(-1);

void fft(vector<cd> &a) {
    int n = a.size();
    if (n == 1) return;
    vector<cd> even(n/2), odd(n/2);
    for (int i = 0; i < n/2; i++) {
        even[i] = a[i*2];
        odd[i] = a[i*2 + 1];
    }
    fft(even);
    fft(odd);
    for (int k = 0; k < n/2; k++) {
        cd wk = polar(1.0, -2*PI*k/n);
        a[k] = even[k] + wk*odd[k];
        a[k + n/2] = even[k] - wk*odd[k];
    }
}

int main() {
    vector<cd> a = {1,2,3,4};
    for (auto &x : a) x = cd(x,0);
    fft(a);
    for (auto &c : a) cout << c << "\\n";
}`,
    javascript: `function fft(a) {
    const n = a.length;
    if (n === 1) return [a[0]];
    const even = fft(a.filter((_, i) => i % 2 === 0));
    const odd = fft(a.filter((_, i) => i % 2 === 1));
    const y = Array(n).fill(0);
    for (let k = 0; k < n/2; k++) {
        const angle = -2 * Math.PI * k / n;
        const wk = { re: Math.cos(angle), im: Math.sin(angle) };
        const oddk = odd[k];
        y[k] = { re: even[k].re + wk.re*oddk.re - wk.im*oddk.im,
                 im: even[k].im + wk.re*oddk.im + wk.im*oddk.re };
        y[k + n/2] = { re: even[k].re - wk.re*oddk.re + wk.im*oddk.im,
                        im: even[k].im - wk.re*oddk.im - wk.im*oddk.re };
    }
    return y;
}

// Example usage
const a = [{re:1,im:0},{re:2,im:0},{re:3,im:0},{re:4,im:0}];
console.log(fft(a));`
  }
};



export const bnbCodes = {
  knapsack01: {
    java: `import java.util.*;
class Knapsack {
    static class Node {
        int level, profit, weight;
        Node(int l, int p, int w){ level=l; profit=p; weight=w; }
    }
    static int knapsack(int W, int[] wt, int[] val){
        int n = wt.length, maxProfit=0;
        Queue<Node> q = new LinkedList<>();
        q.add(new Node(0,0,0));
        while(!q.isEmpty()){
            Node node = q.poll();
            if(node.level==n) continue;
            // include
            int w = node.weight + wt[node.level];
            int p = node.profit + val[node.level];
            if(w<=W && p>maxProfit) maxProfit=p;
            q.add(new Node(node.level+1, p, w));
            // exclude
            q.add(new Node(node.level+1, node.profit, node.weight));
        }
        return maxProfit;
    }
}`,
    python: `from queue import Queue
class Node:
    def __init__(self, level, profit, weight):
        self.level = level
        self.profit = profit
        self.weight = weight
def knapsack01(W, wt, val):
    n = len(wt)
    maxProfit=0
    q = Queue()
    q.put(Node(0,0,0))
    while not q.empty():
        node = q.get()
        if node.level==n: continue
        # include
        w = node.weight + wt[node.level]
        p = node.profit + val[node.level]
        if w<=W and p>maxProfit: maxProfit=p
        q.put(Node(node.level+1, p, w))
        # exclude
        q.put(Node(node.level+1, node.profit, node.weight))
    return maxProfit`,
    cpp: `#include <bits/stdc++.h>
using namespace std;
struct Node{ int level, profit, weight; };
int knapsack01(int W, vector<int>& wt, vector<int>& val){
    int n=wt.size(), maxProfit=0;
    queue<Node> q;
    q.push({0,0,0});
    while(!q.empty()){
        Node node = q.front(); q.pop();
        if(node.level==n) continue;
        int w = node.weight + wt[node.level];
        int p = node.profit + val[node.level];
        if(w<=W && p>maxProfit) maxProfit=p;
        q.push({node.level+1, p, w});
        q.push({node.level+1, node.profit, node.weight});
    }
    return maxProfit;
}`,
    javascript: `class Node{ constructor(level, profit, weight){ this.level=level; this.profit=profit; this.weight=weight; } }
function knapsack01(W, wt, val){
  let n = wt.length, maxProfit=0;
  let queue=[new Node(0,0,0)];
  while(queue.length){
    let node = queue.shift();
    if(node.level===n) continue;
    let w = node.weight + wt[node.level];
    let p = node.profit + val[node.level];
    if(w<=W && p>maxProfit) maxProfit=p;
    queue.push(new Node(node.level+1, p, w));
    queue.push(new Node(node.level+1, node.profit, node.weight));
  }
  return maxProfit;
}`
  },

  maximumSubarray: {
    java: `class MaxSubarray{
    static int maxSubarray(int[] arr){
        class Node{
            int start, end, sum;
            Node(int s,int e,int sum){ this.start=s; this.end=e; this.sum=sum; }
        }
        Node res=new Node(0,0,Integer.MIN_VALUE);
        for(int i=0;i<arr.length;i++){
            int sum=0;
            for(int j=i;j<arr.length;j++){
                sum+=arr[j];
                if(sum>res.sum) res=new Node(i,j,sum);
            }
        }
        return res.sum;
    }
}`,
    python: `def maxSubarray(arr):
    maxSum = float('-inf')
    n = len(arr)
    for i in range(n):
        s=0
        for j in range(i,n):
            s+=arr[j]
            if s>maxSum: maxSum=s
    return maxSum`,
    cpp: `int maxSubarray(vector<int>& arr){
    int maxSum=INT_MIN;
    for(int i=0;i<arr.size();i++){
        int sum=0;
        for(int j=i;j<arr.size();j++){
            sum+=arr[j];
            if(sum>maxSum) maxSum=sum;
        }
    }
    return maxSum;
}`,
    javascript: `function maxSubarray(arr){
  let maxSum = -Infinity;
  for(let i=0;i<arr.length;i++){
    let s=0;
    for(let j=i;j<arr.length;j++){
      s+=arr[j];
      if(s>maxSum) maxSum=s;
    }
  }
  return maxSum;
}`
  },

  subsetSum: {
    java: `class SubsetSum{
    static boolean subsetSum(int[] arr, int sum){
        class Node{ int idx, s; Node(int i,int s){ this.idx=i; this.s=s; } }
        Queue<Node> q=new LinkedList<>();
        q.add(new Node(0,0));
        while(!q.isEmpty()){
            Node node=q.poll();
            if(node.s==sum) return true;
            if(node.idx>=arr.length) continue;
            q.add(new Node(node.idx+1, node.s+arr[node.idx]));
            q.add(new Node(node.idx+1, node.s));
        }
        return false;
    }
}`,
    python: `from queue import Queue
def subsetSum(arr, target):
    class Node:
        def __init__(self,i,s): self.idx=i; self.s=s
    n=len(arr)
    q=Queue()
    q.put(Node(0,0))
    while not q.empty():
        node=q.get()
        if node.s==target: return True
        if node.idx>=n: continue
        q.put(Node(node.idx+1,node.s+arr[node.idx]))
        q.put(Node(node.idx+1,node.s))
    return False`,
    cpp: `bool subsetSum(vector<int>& arr,int target){
    struct Node{ int idx,s; };
    queue<Node> q;
    q.push({0,0});
    while(!q.empty()){
        Node node=q.front(); q.pop();
        if(node.s==target) return true;
        if(node.idx>=arr.size()) continue;
        q.push({node.idx+1,node.s+arr[node.idx]});
        q.push({node.idx+1,node.s});
    }
    return false;
}`,
    javascript: `class Node{ constructor(idx,s){ this.idx=idx; this.s=s; } }
function subsetSum(arr,target){
  let queue=[new Node(0,0)];
  while(queue.length){
    let node=queue.shift();
    if(node.s==target) return true;
    if(node.idx>=arr.length) continue;
    queue.push(new Node(node.idx+1,node.s+arr[node.idx]));
    queue.push(new Node(node.idx+1,node.s));
  }
  return false;
}`
  },

   travelingSalesman: {
    java: `import java.util.*;
class TSP{
    static int tsp(int[][] dist){
        int n = dist.length;
        int[] bestPath = new int[n];
        boolean[] visited = new boolean[n];
        int minCost = Integer.MAX_VALUE;

        // Simple recursive B&B
        minCost = tspHelper(dist, visited, 0, 0, 0, n, minCost);
        return minCost;
    }
    static int tspHelper(int[][] dist, boolean[] visited, int currPos, int count, int cost, int n, int minCost){
        if(count==n && dist[currPos][0]>0) return Math.min(minCost, cost + dist[currPos][0]);
        for(int i=0;i<n;i++){
            if(!visited[i] && dist[currPos][i]>0){
                visited[i]=true;
                minCost = tspHelper(dist, visited, i, count+1, cost+dist[currPos][i], n, minCost);
                visited[i]=false;
            }
        }
        return minCost;
    }
}`,
    python: `def tsp(dist):
    n = len(dist)
    visited = [False]*n
    minCost = float('inf')
    def helper(currPos, count, cost):
        nonlocal minCost
        if count==n and dist[currPos][0]>0:
            minCost = min(minCost, cost+dist[currPos][0])
            return
        for i in range(n):
            if not visited[i] and dist[currPos][i]>0:
                visited[i]=True
                helper(i,count+1,cost+dist[currPos][i])
                visited[i]=False
    helper(0,1,0)
    return minCost`,
    cpp: `#include <bits/stdc++.h>
using namespace std;
int tspHelper(vector<vector<int>>& dist, vector<bool>& visited, int currPos, int count, int cost, int n, int minCost){
    if(count==n && dist[currPos][0]>0) return min(minCost, cost + dist[currPos][0]);
    for(int i=0;i<n;i++){
        if(!visited[i] && dist[currPos][i]>0){
            visited[i]=true;
            minCost = tspHelper(dist, visited, i, count+1, cost+dist[currPos][i], n, minCost);
            visited[i]=false;
        }
    }
    return minCost;
}
int tsp(vector<vector<int>>& dist){
    int n = dist.size();
    vector<bool> visited(n,false);
    return tspHelper(dist, visited, 0, 1, 0, n, INT_MAX);
}`,
    javascript: `function tsp(dist){
  const n = dist.length;
  let minCost = Infinity;
  const visited = Array(n).fill(false);
  function helper(currPos, count, cost){
    if(count===n && dist[currPos][0]>0){
      minCost = Math.min(minCost, cost+dist[currPos][0]);
      return;
    }
    for(let i=0;i<n;i++){
      if(!visited[i] && dist[currPos][i]>0){
        visited[i]=true;
        helper(i,count+1,cost+dist[currPos][i]);
        visited[i]=false;
      }
    }
  }
  visited[0]=true;
  helper(0,1,0);
  return minCost;
}`
  },

  jobScheduling: {
    java: `class JobScheduling{
    static class Job{ int deadline, profit; Job(int d,int p){ deadline=d; profit=p; } }
    static int maxProfit(Job[] jobs){
        Arrays.sort(jobs, (a,b)->b.profit-a.profit);
        int n = jobs.length;
        int maxDeadline = 0;
        for(Job j:jobs) maxDeadline=Math.max(maxDeadline,j.deadline);
        boolean[] slot = new boolean[maxDeadline];
        int profit=0;
        for(Job j: jobs){
            for(int k=Math.min(maxDeadline-1,j.deadline-1); k>=0; k--){
                if(!slot[k]){
                    slot[k]=true;
                    profit+=j.profit;
                    break;
                }
            }
        }
        return profit;
    }
}`,
    python: `def jobScheduling(jobs):
    jobs.sort(key=lambda x: x[1], reverse=True)
    maxDeadline = max(job[0] for job in jobs)
    slot = [False]*maxDeadline
    profit=0
    for deadline, p in jobs:
        for j in range(min(maxDeadline, deadline)-1, -1, -1):
            if not slot[j]:
                slot[j]=True
                profit+=p
                break
    return profit`,
    cpp: `struct Job{ int deadline, profit; };
int jobScheduling(vector<Job>& jobs){
    sort(jobs.begin(),jobs.end(),[](Job a, Job b){return a.profit>b.profit;});
    int n=jobs.size();
    int maxDeadline=0;
    for(auto j:jobs) maxDeadline=max(maxDeadline,j.deadline);
    vector<bool> slot(maxDeadline,false);
    int profit=0;
    for(auto j:jobs){
        for(int k=min(maxDeadline-1,j.deadline-1); k>=0; k--){
            if(!slot[k]){ slot[k]=true; profit+=j.profit; break; }
        }
    }
    return profit;
}`,
    javascript: `function jobScheduling(jobs){
  jobs.sort((a,b)=>b.profit-a.profit);
  let maxDeadline = Math.max(...jobs.map(j=>j.deadline));
  const slot = Array(maxDeadline).fill(false);
  let profit=0;
  for(const {deadline,profit:p} of jobs){
    for(let j=Math.min(maxDeadline,deadline)-1;j>=0;j--){
      if(!slot[j]){ slot[j]=true; profit+=p; break; }
    }
  }
  return profit;
}`
  },

  graphColoring: {
    java: `class GraphColoring{
    static boolean isSafe(int v, int[] color, int c, int[][] graph){
        for(int i=0;i<graph.length;i++) if(graph[v][i]==1 && color[i]==c) return false;
        return true;
    }
    static boolean graphColoring(int[][] graph, int m){
        int[] color = new int[graph.length];
        return coloringHelper(graph,m,color,0);
    }
    static boolean coloringHelper(int[][] graph,int m,int[] color,int v){
        if(v==graph.length) return true;
        for(int c=1;c<=m;c++){
            if(isSafe(v,color,c,graph)){
                color[v]=c;
                if(coloringHelper(graph,m,color,v+1)) return true;
                color[v]=0;
            }
        }
        return false;
    }
}`,
    python: `def isSafe(v,color,c,graph):
    return all(graph[v][i]!=1 or color[i]!=c for i in range(len(graph)))
def graphColoring(graph,m):
    color=[0]*len(graph)
    def helper(v):
        if v==len(graph): return True
        for c in range(1,m+1):
            if isSafe(v,color,c,graph):
                color[v]=c
                if helper(v+1): return True
                color[v]=0
        return False
    return helper(0)`,
    cpp: `bool isSafe(int v, vector<int>& color, int c, vector<vector<int>>& graph){
    for(int i=0;i<graph.size();i++) if(graph[v][i]==1 && color[i]==c) return false;
    return true;
}
bool coloringHelper(vector<vector<int>>& graph,int m,vector<int>& color,int v){
    if(v==graph.size()) return true;
    for(int c=1;c<=m;c++){
        if(isSafe(v,color,c,graph)){
            color[v]=c;
            if(coloringHelper(graph,m,color,v+1)) return true;
            color[v]=0;
        }
    }
    return false;
}
bool graphColoring(vector<vector<int>>& graph,int m){
    vector<int> color(graph.size(),0);
    return coloringHelper(graph,m,color,0);
}`,
    javascript: `function isSafe(v,color,c,graph){
  for(let i=0;i<graph.length;i++) if(graph[v][i]===1 && color[i]===c) return false;
  return true;
}
function graphColoring(graph,m){
  const color = Array(graph.length).fill(0);
  function helper(v){
    if(v===graph.length) return true;
    for(let c=1;c<=m;c++){
      if(isSafe(v,color,c,graph)){
        color[v]=c;
        if(helper(v+1)) return true;
        color[v]=0;
      }
    }
    return false;
  }
  return helper(0);
}`
  },

  assignmentProblem: {
    java: `class Assignment{
    static int assignmentCost(int[][] cost){
        int n=cost.length;
        int[] result = new int[n];
        Arrays.fill(result,-1);
        return assignmentHelper(cost,result,0,n,Integer.MAX_VALUE);
    }
    static int assignmentHelper(int[][] cost,int[] result,int row,int n,int minCost){
        if(row==n){
            int sum=0;
            for(int i=0;i<n;i++) sum+=cost[i][result[i]];
            return Math.min(minCost,sum);
        }
        for(int j=0;j<n;j++){
            boolean used=false;
            for(int k=0;k<row;k++) if(result[k]==j) used=true;
            if(!used){
                result[row]=j;
                minCost=assignmentHelper(cost,result,row+1,n,minCost);
                result[row]=-1;
            }
        }
        return minCost;
    }
}`,
    python: `def assignmentCost(cost):
    n=len(cost)
    result=[-1]*n
    minCost=float('inf')
    def helper(row):
        nonlocal minCost
        if row==n:
            minCost=min(minCost,sum(cost[i][result[i]] for i in range(n)))
            return
        for j in range(n):
            if j not in result[:row]:
                result[row]=j
                helper(row+1)
                result[row]=-1
    helper(0)
    return minCost`,
    cpp: `int assignmentHelper(vector<vector<int>>& cost, vector<int>& result, int row,int n,int minCost){
    if(row==n){
        int sum=0;
        for(int i=0;i<n;i++) sum+=cost[i][result[i]];
        return min(minCost,sum);
    }
    for(int j=0;j<n;j++){
        if(find(result.begin(),result.begin()+row,j)==result.begin()+row) {
            result[row]=j;
            minCost=assignmentHelper(cost,result,row+1,n,minCost);
            result[row]=-1;
        }
    }
    return minCost;
}
int assignmentCost(vector<vector<int>>& cost){
    int n=cost.size();
    vector<int> result(n,-1);
    return assignmentHelper(cost,result,0,n,INT_MAX);
}`,
    javascript: `function assignmentCost(cost){
  const n = cost.length;
  const result = Array(n).fill(-1);
  let minCost = Infinity;
  function helper(row){
    if(row===n){
      minCost = Math.min(minCost,result.reduce((sum,i)=>sum+cost[row][i],0));
      return;
    }
    for(let j=0;j<n;j++){
      if(!result.slice(0,row).includes(j)){
        result[row]=j;
        helper(row+1);
        result[row]=-1;
      }
    }
  }
  helper(0);
  return minCost;
}`
  },

  hamiltonianPath: {
    java: `class Hamiltonian{
    static boolean isSafe(int v,int pos,int[] path,int[][] graph){
        if(graph[path[pos-1]][v]==0) return false;
        for(int i=0;i<pos;i++) if(path[i]==v) return false;
        return true;
    }
    static boolean hamiltonian(int[][] graph){
        int n=graph.length;
        int[] path=new int[n];
        Arrays.fill(path,-1);
        path[0]=0;
        return hamHelper(graph,path,1,n);
    }
    static boolean hamHelper(int[][] graph,int[] path,int pos,int n){
        if(pos==n) return graph[path[pos-1]][path[0]]==1;
        for(int v=1;v<n;v++){
            if(isSafe(v,pos,path,graph)){
                path[pos]=v;
                if(hamHelper(graph,path,pos+1,n)) return true;
                path[pos]=-1;
            }
        }
        return false;
    }
}`,
    python: `def isSafe(v,pos,path,graph):
    if graph[path[pos-1]][v]==0: return False
    return v not in path[:pos]
def hamiltonian(graph):
    n=len(graph)
    path=[-1]*n
    path[0]=0
    def helper(pos):
        if pos==n: return graph[path[pos-1]][path[0]]==1
        for v in range(1,n):
            if isSafe(v,pos,path,graph):
                path[pos]=v
                if helper(pos+1): return True
                path[pos]=-1
        return False
    return helper(1)`,
    cpp: `bool isSafe(int v,int pos,vector<int>& path,vector<vector<int>>& graph){
    if(graph[path[pos-1]][v]==0) return false;
    for(int i=0;i<pos;i++) if(path[i]==v) return false;
    return true;
}
bool hamHelper(vector<vector<int>>& graph, vector<int>& path,int pos,int n){
    if(pos==n) return graph[path[pos-1]][path[0]]==1;
    for(int v=1;v<n;v++){
        if(isSafe(v,pos,path,graph)){
            path[pos]=v;
            if(hamHelper(graph,path,pos+1,n)) return true;
            path[pos]=-1;
        }
    }
    return false;
}
bool hamiltonian(vector<vector<int>>& graph){
    int n=graph.size();
    vector<int> path(n,-1);
    path[0]=0;
    return hamHelper(graph,path,1,n);
}`,
    javascript: `function isSafe(v,pos,path,graph){
  if(graph[path[pos-1]][v]===0) return false;
  return !path.slice(0,pos).includes(v);
}
function hamiltonian(graph){
  const n=graph.length;
  const path=Array(n).fill(-1);
  path[0]=0;
  function helper(pos){
    if(pos===n) return graph[path[pos-1]][path[0]]===1;
    for(let v=1;v<n;v++){
      if(isSafe(v,pos,path,graph)){
        path[pos]=v;
        if(helper(pos+1)) return true;
        path[pos]=-1;
      }
    }
    return false;
  }
  return helper(1);
}`
  }

};


export const hashingAlgorithms = {
  hashTableChaining: {
    java: `// Hash Table using Chaining
class HashNode {
    String key;
    int value;
    HashNode next;
    public HashNode(String key, int value) { this.key = key; this.value = value; }
}

class HashTable {
    private final int SIZE = 16;
    private HashNode[] table = new HashNode[SIZE];

    private int hash(String key) { return key.hashCode() % SIZE; }

    public void put(String key, int value) {
        int index = hash(key);
        HashNode newNode = new HashNode(key, value);
        newNode.next = table[index];
        table[index] = newNode;
    }

    public Integer get(String key) {
        int index = hash(key);
        HashNode node = table[index];
        while(node != null) {
            if(node.key.equals(key)) return node.value;
            node = node.next;
        }
        return null;
    }
}`,
    python: `# Hash Table using Chaining
class HashNode:
    def __init__(self, key, value):
        self.key = key
        self.value = value
        self.next = None

class HashTable:
    def __init__(self, size=16):
        self.size = size
        self.table = [None]*size

    def hash(self, key):
        return hash(key) % self.size

    def put(self, key, value):
        index = self.hash(key)
        node = HashNode(key, value)
        node.next = self.table[index]
        self.table[index] = node

    def get(self, key):
        index = self.hash(key)
        node = self.table[index]
        while node:
            if node.key == key: return node.value
            node = node.next
        return None`,
    cpp: `// Hash Table using Chaining
#include <iostream>
#include <list>
#include <string>
using namespace std;

class HashNode {
public:
    string key;
    int value;
    HashNode(string k, int v): key(k), value(v) {}
};

class HashTable {
    int SIZE = 16;
    list<HashNode> table[16];
    int hash(string key) { return key.length() % SIZE; }

public:
    void put(string key, int value) {
        int idx = hash(key);
        table[idx].push_back(HashNode(key, value));
    }

    int get(string key) {
        int idx = hash(key);
        for(auto &node: table[idx])
            if(node.key == key) return node.value;
        return -1;
    }
};`,
    javascript: `// Hash Table using Chaining
class HashNode {
  constructor(key, value) { this.key = key; this.value = value; this.next = null; }
}

class HashTable {
  constructor(size=16) { this.size = size; this.table = Array(size).fill(null); }
  hash(key) { return key.length % this.size; }

  put(key, value) {
    const idx = this.hash(key);
    const newNode = new HashNode(key, value);
    newNode.next = this.table[idx];
    this.table[idx] = newNode;
  }

  get(key) {
    const idx = this.hash(key);
    let node = this.table[idx];
    while(node) { if(node.key === key) return node.value; node = node.next; }
    return null;
  }
}`
  },

  hashTableOpenAddressing: {
    java: `// Hash Table using Linear Probing
class HashTable {
    private int SIZE = 16;
    private String[] keys = new String[SIZE];
    private int[] values = new int[SIZE];

    private int hash(String key) { return key.hashCode() % SIZE; }

    public void put(String key, int value) {
        int idx = hash(key);
        while(keys[idx] != null && !keys[idx].equals(key)) idx = (idx + 1) % SIZE;
        keys[idx] = key; values[idx] = value;
    }

    public Integer get(String key) {
        int idx = hash(key);
        while(keys[idx] != null) {
            if(keys[idx].equals(key)) return values[idx];
            idx = (idx + 1) % SIZE;
        }
        return null;
    }
}`,
    python: `# Hash Table using Linear Probing
class HashTable:
    def __init__(self, size=16):
        self.size = size
        self.keys = [None]*size
        self.values = [None]*size

    def hash(self, key):
        return hash(key) % self.size

    def put(self, key, value):
        idx = self.hash(key)
        while self.keys[idx] is not None and self.keys[idx] != key:
            idx = (idx + 1) % self.size
        self.keys[idx] = key
        self.values[idx] = value

    def get(self, key):
        idx = self.hash(key)
        while self.keys[idx] is not None:
            if self.keys[idx] == key: return self.values[idx]
            idx = (idx + 1) % self.size
        return None`,
    cpp: `// Hash Table using Linear Probing
#include <iostream>
#include <string>
using namespace std;

class HashTable {
    int SIZE = 16;
    string keys[16];
    int values[16];
    int hash(string key) { return key.length() % SIZE; }

public:
    void put(string key, int value) {
        int idx = hash(key);
        while(!keys[idx].empty() && keys[idx] != key) idx = (idx + 1) % SIZE;
        keys[idx] = key; values[idx] = value;
    }

    int get(string key) {
        int idx = hash(key);
        while(!keys[idx].empty()) {
            if(keys[idx] == key) return values[idx];
            idx = (idx + 1) % SIZE;
        }
        return -1;
    }
};`,
    javascript: `// Hash Table using Linear Probing
class HashTable {
  constructor(size=16) {
    this.size = size;
    this.keys = Array(size).fill(null);
    this.values = Array(size).fill(null);
  }

  hash(key) { return key.length % this.size; }

  put(key, value) {
    let idx = this.hash(key);
    while(this.keys[idx] !== null && this.keys[idx] !== key) idx = (idx + 1) % this.size;
    this.keys[idx] = key; this.values[idx] = value;
  }

  get(key) {
    let idx = this.hash(key);
    while(this.keys[idx] !== null) {
      if(this.keys[idx] === key) return this.values[idx];
      idx = (idx + 1) % this.size;
    }
    return null;
  }
}`
  },

  rollingHash: {
    java: `// Rolling Hash for Rabin-Karp
int p = 31, m = 1e9 + 9;
long[] pPow = new long[s.length()];
pPow[0] = 1;
for(int i=1; i<s.length(); i++) pPow[i] = (pPow[i-1] * p) % m;
long hash_s = 0;
for(int i=0; i<s.length(); i++)
    hash_s = (hash_s + (s.charAt(i)-'a'+1)*pPow[i]) % m;`,
    python: `# Rolling Hash for Rabin-Karp
p = 31; m = int(1e9 + 9)
p_pow = [1]*len(s)
for i in range(1,len(s)): p_pow[i] = (p_pow[i-1]*p)%m
hash_s = sum((ord(s[i])-ord('a')+1)*p_pow[i] for i in range(len(s)))%m`,
    cpp: `// Rolling Hash for Rabin-Karp
#include <iostream>
#include <string>
using namespace std;

int rollingHash(string s) {
    const int p = 31;
    const long long m = 1e9 + 9;
    long long pPow[s.size()];
    pPow[0] = 1;
    for(size_t i=1;i<s.size();i++) pPow[i]=(pPow[i-1]*p)%m;
    long long hash_s = 0;
    for(size_t i=0;i<s.size();i++) hash_s=(hash_s+(s[i]-'a'+1)*pPow[i])%m;
    return hash_s;
}`,
    javascript: `// Rolling Hash for Rabin-Karp
const p = 31, m = 1e9+9;
let pPow = Array(s.length).fill(1);
for(let i=1;i<s.length;i++) pPow[i] = (pPow[i-1]*p)%m;
let hash_s = 0;
for(let i=0;i<s.length;i++) hash_s = (hash_s + (s.charCodeAt(i)-97+1)*pPow[i])%m;`
  },

  setMapOps: {
    java: `// Using HashSet / HashMap
Set<Integer> set = new HashSet<>();
set.add(5);
boolean exists = set.contains(5);

Map<String,Integer> map = new HashMap<>();
map.put("key",10);
int val = map.get("key");`,
    python: `# Using set / dict
s = set()
s.add(5)
exists = 5 in s

d = {"key":10}
val = d["key"]`,
    cpp: `// Using unordered_set / unordered_map
#include <unordered_set>
#include <unordered_map>
#include <string>
using namespace std;

unordered_set<int> s;
s.insert(5);
bool exists = s.find(5) != s.end();

unordered_map<string,int> m;
m["key"]=10;
int val = m["key"];`,
    javascript: `// Using Set / Map
let s = new Set();
s.add(5);
let exists = s.has(5);

let m = new Map();
m.set("key",10);
let val = m.get("key");`
  }
};

export const bitCodes= {
  checkBit: {
    java: `// Check if the ith bit is set
int n = 5; // 0101
int i = 2;
boolean isSet = (n & (1 << i)) != 0;`,
    python: `# Check if ith bit is set
n = 5  # 0101
i = 2
is_set = (n & (1 << i)) != 0`,
    cpp: `// Check if ith bit is set
int n = 5, i = 2;
bool isSet = (n & (1 << i)) != 0;`,
    javascript: `// Check if ith bit is set
let n = 5, i = 2;
let isSet = (n & (1 << i)) !== 0;`,
  },

  setBit: {
    java: `// Set the ith bit
int n = 5;
int i = 1;
n = n | (1 << i);`,
    python: `# Set the ith bit
n = 5
i = 1
n = n | (1 << i)`,
    cpp: `// Set the ith bit
int n = 5, i = 1;
n = n | (1 << i);`,
    javascript: `// Set the ith bit
let n = 5, i = 1;
n = n | (1 << i);`,
  },

  clearBit: {
    java: `// Clear the ith bit
int n = 5;
int i = 0;
n = n & ~(1 << i);`,
    python: `# Clear the ith bit
n = 5
i = 0
n = n & ~(1 << i)`,
    cpp: `// Clear the ith bit
int n = 5, i = 0;
n = n & ~(1 << i);`,
    javascript: `// Clear the ith bit
let n = 5, i = 0;
n = n & ~(1 << i);`,
  },

  toggleBit: {
    java: `// Toggle the ith bit
int n = 5;
int i = 2;
n = n ^ (1 << i);`,
    python: `# Toggle the ith bit
n = 5
i = 2
n = n ^ (1 << i)`,
    cpp: `// Toggle the ith bit
int n = 5, i = 2;
n = n ^ (1 << i);`,
    javascript: `// Toggle the ith bit
let n = 5, i = 2;
n = n ^ (1 << i);`,
  },

  countSetBits: {
    java: `// Count set bits in a number
int n = 13;
int count = 0;
while(n > 0){
    n = n & (n - 1);
    count++;
}`,
    python: `# Count set bits
n = 13
count = 0
while n:
    n = n & (n - 1)
    count += 1`,
    cpp: `// Count set bits
int n = 13, count = 0;
while(n){
    n = n & (n - 1);
    count++;
}`,
    javascript: `// Count set bits
let n = 13, count = 0;
while(n){
    n = n & (n - 1);
    count++;
}`,
  },

  singleNumberXOR: {
    java: `// Find single non-repeating number
int[] arr = {2, 3, 2, 4, 3};
int res = 0;
for(int num : arr) res ^= num;`,
    python: `# Find single non-repeating number
arr = [2, 3, 2, 4, 3]
res = 0
for num in arr:
    res ^= num`,
    cpp: `// Find single non-repeating number
int arr[] = {2,3,2,4,3}, res = 0;
for(int num : arr) res ^= num;`,
    javascript: `// Find single non-repeating number
let arr = [2,3,2,4,3], res = 0;
for(let num of arr) res ^= num;`,
  },

  powerOfTwoCheck: {
    java: `// Check if number is power of 2
int n = 16;
boolean isPower = n > 0 && (n & (n - 1)) == 0;`,
    python: `# Check if number is power of 2
n = 16
is_power = n > 0 and (n & (n - 1)) == 0`,
    cpp: `// Check if number is power of 2
int n = 16;
bool isPower = n > 0 && (n & (n - 1)) == 0;`,
    javascript: `// Check if number is power of 2
let n = 16;
let isPower = n > 0 && (n & (n - 1)) === 0;`,
  },

  generateSubsets: {
    java: `// Generate all subsets using bitmask
int[] arr = {1,2,3};
int n = arr.length;
for(int mask=0; mask<(1<<n); mask++){
    for(int i=0; i<n; i++){
        if((mask & (1<<i)) != 0) System.out.print(arr[i] + " ");
    }
    System.out.println();
}`,
    python: `# Generate all subsets using bitmask
arr = [1,2,3]
n = len(arr)
for mask in range(1<<n):
    subset = [arr[i] for i in range(n) if mask & (1<<i)]
    print(subset)`,
    cpp: `// Generate all subsets using bitmask
int arr[] = {1,2,3}, n = 3;
for(int mask=0; mask<(1<<n); mask++){
    for(int i=0;i<n;i++){
        if(mask & (1<<i)) cout << arr[i] << " ";
    }
    cout << endl;
}`,
    javascript: `// Generate all subsets using bitmask
let arr = [1,2,3], n = arr.length;
for(let mask=0; mask<(1<<n); mask++){
    let subset = [];
    for(let i=0;i<n;i++){
        if(mask & (1<<i)) subset.push(arr[i]);
    }
    console.log(subset);
}`,
  },
};


// src/data/codes.js

export const numberAlgorithms = {
  sieve: {
    java: `// Sieve of Eratosthenes
int N = 100;
boolean[] prime = new boolean[N + 1];
Arrays.fill(prime, true);
prime[0] = prime[1] = false;
for(int i = 2; i*i <= N; i++){
    if(prime[i]){
        for(int j = i*i; j <= N; j += i) prime[j] = false;
    }
}`,
    python: `# Sieve of Eratosthenes
N = 100
prime = [True]*(N+1)
prime[0] = prime[1] = False
for i in range(2, int(N**0.5)+1):
    if prime[i]:
        for j in range(i*i, N+1, i):
            prime[j] = False`,
    cpp: `// Sieve of Eratosthenes
int N = 100;
vector<bool> prime(N+1, true);
prime[0] = prime[1] = false;
for(int i=2; i*i<=N; i++){
    if(prime[i]){
        for(int j=i*i; j<=N; j+=i) prime[j]=false;
    }
}`,
    javascript: `// Sieve of Eratosthenes
let N = 100;
let prime = Array(N+1).fill(true);
prime[0] = prime[1] = false;
for(let i=2; i*i<=N; i++){
  if(prime[i]){
    for(let j=i*i; j<=N; j+=i) prime[j]=false;
  }
}`
  },

  gcd: {
    java: `// Euclidean Algorithm
int gcd(int a, int b){
    if(b==0) return a;
    return gcd(b, a%b);
}`,
    python: `# Euclidean Algorithm
def gcd(a,b):
    if b==0: return a
    return gcd(b,a%b)`,
    cpp: `// Euclidean Algorithm
int gcd(int a, int b){
    return b==0 ? a : gcd(b, a%b);
}`,
    javascript: `// Euclidean Algorithm
function gcd(a,b){
    return b==0 ? a : gcd(b, a%b);
}`
  },

  extendedGCD: {
    java: `// Extended Euclidean Algorithm
int[] extendedGCD(int a,int b){
    if(b==0) return new int[]{a,1,0};
    int[] vals = extendedGCD(b, a%b);
    int d = vals[0], x1 = vals[2], y1 = vals[1] - (a/b)*vals[2];
    return new int[]{d,x1,y1};
}`,
    python: `# Extended Euclidean Algorithm
def extendedGCD(a,b):
    if b==0: return (a,1,0)
    d,x1,y1 = extendedGCD(b,a%b)
    x = y1
    y = x1 - (a//b)*y1
    return (d,x,y)`,
    cpp: `// Extended Euclidean Algorithm
tuple<long long,long long,long long> extendedGCD(long long a,long long b){
    if(b==0) return {a,1,0};
    auto [d,x1,y1]=extendedGCD(b,a%b);
    return {d,y1,x1-(a/b)*y1};
}`,
    javascript: `// Extended Euclidean Algorithm
function extendedGCD(a,b){
  if(b==0) return [a,1,0];
  let [d,x1,y1] = extendedGCD(b,a%b);
  return [d, y1, x1 - Math.floor(a/b)*y1];
}`
  },

  modularExp: {
    java: `// Modular Exponentiation
long modPow(long a,long b,long mod){
    long res = 1;
    a %= mod;
    while(b>0){
        if((b&1)==1) res = (res*a)%mod;
        a = (a*a)%mod;
        b >>= 1;
    }
    return res;
}`,
    python: `# Modular Exponentiation
def modPow(a,b,mod):
    res = 1
    a %= mod
    while b>0:
        if b&1: res = (res*a)%mod
        a = (a*a)%mod
        b >>= 1
    return res`,
    cpp: `// Modular Exponentiation
long long modPow(long long a,long long b,long long mod){
    long long res=1;
    a %= mod;
    while(b>0){
        if(b&1) res=(res*a)%mod;
        a=(a*a)%mod;
        b>>=1;
    }
    return res;
}`,
    javascript: `// Modular Exponentiation
function modPow(a,b,mod){
  let res = 1;
  a %= mod;
  while(b>0){
    if(b&1) res=(res*a)%mod;
    a=(a*a)%mod;
    b>>=1;
  }
  return res;
}`
  },

  modInverse: {
    java: `// Modular Inverse (Fermat)
long modInverse(long a,long mod){
    return modPow(a,mod-2,mod);
}`,
    python: `# Modular Inverse (Fermat)
def modInverse(a,mod):
    return modPow(a,mod-2,mod)`,
    cpp: `// Modular Inverse (Fermat)
long long modInverse(long long a,long long mod){
    return modPow(a,mod-2,mod);
}`,
    javascript: `// Modular Inverse (Fermat)
function modInverse(a,mod){
  return modPow(a,mod-2,mod);
}`
  },

  totient: {
    java: `// Euler's Totient Function
int phi(int n){
    int res = n;
    for(int i=2;i*i<=n;i++){
        if(n%i==0){
            while(n%i==0) n/=i;
            res -= res/i;
        }
    }
    if(n>1) res -= res/n;
    return res;
}`,
    python: `# Euler's Totient Function
def phi(n):
    res = n
    i = 2
    while i*i <= n:
        if n%i==0:
            while n%i==0:
                n//=i
            res -= res//i
        i += 1
    if n>1: res -= res//n
    return res`,
    cpp: `// Euler's Totient Function
int phi(int n){
    int res = n;
    for(int i=2;i*i<=n;i++){
        if(n%i==0){
            while(n%i==0) n/=i;
            res -= res/i;
        }
    }
    if(n>1) res -= res/n;
    return res;
}`,
    javascript: `// Euler's Totient Function
function phi(n){
  let res = n;
  for(let i=2;i*i<=n;i++){
    if(n%i===0){
      while(n%i===0) n/=i;
      res -= res/i;
    }
  }
  if(n>1) res -= res/n;
  return res;
}`
  },

  crt: {
    java: `// Chinese Remainder Theorem
int CRT(int[] num,int[] rem){
    int prod=1;
    for(int n:num) prod*=n;
    int result=0;
    for(int i=0;i<num.length;i++){
        int pp=prod/num[i];
        result += rem[i]*modInverse(pp,num[i])*pp;
    }
    return result%prod;
}`,
    python: `# Chinese Remainder Theorem
def CRT(num,rem):
    prod = 1
    for n in num: prod *= n
    result = 0
    for i in range(len(num)):
        pp = prod//num[i]
        result += rem[i]*modInverse(pp,num[i])*pp
    return result%prod`,
    cpp: `// Chinese Remainder Theorem
int CRT(vector<int> num,vector<int> rem){
    int prod=1;
    for(int n:num) prod*=n;
    int result=0;
    for(int i=0;i<num.size();i++){
        int pp=prod/num[i];
        result += rem[i]*modInverse(pp,num[i])*pp;
    }
    return result%prod;
}`,
    javascript: `// Chinese Remainder Theorem
function CRT(num,rem){
  let prod = 1;
  for(let n of num) prod *= n;
  let result = 0;
  for(let i=0;i<num.length;i++){
    let pp = Math.floor(prod/num[i]);
    result += rem[i]*modInverse(pp,num[i])*pp;
  }
  return result%prod;
}`
  },

  pollardsRho: {
    java: `// Pollard's Rho Factorization
long pollardsRho(long n){
    if(n%2==0) return 2;
    long x=2,y=2,d=1;
    long f;
    while(d==1){
        x=(x*x+1)%n;
        y=(y*y+1)%n;
        y=(y*y+1)%n;
        d=gcd(Math.abs(x-y),n);
    }
    return d;
}`,
    python: `# Pollard's Rho Factorization
def pollardsRho(n):
    if n%2==0: return 2
    x=y=2
    d=1
    while d==1:
        x=(x*x+1)%n
        y=(y*y+1)%n
        y=(y*y+1)%n
        d=gcd(abs(x-y),n)
    return d`,
    cpp: `// Pollard's Rho Factorization
long long pollardsRho(long long n){
    if(n%2==0) return 2;
    long long x=2,y=2,d=1;
    while(d==1){
        x=(x*x+1)%n;
        y=(y*y+1)%n;
        y=(y*y+1)%n;
        d=gcd(abs(x-y),n);
    }
    return d;
}`,
    javascript: `// Pollard's Rho Factorization
function pollardsRho(n){
  if(n%2===0) return 2;
  let x=2,y=2,d=1;
  while(d===1){
    x=(x*x+1)%n;
    y=(y*y+1)%n;
    y=(y*y+1)%n;
    d=gcd(Math.abs(x-y),n);
  }
  return d;
}`
  }
};
export const gameCodes = {
  aStar: {
    java: `// A* Pathfinding (simplified)
class Node {
    int x, y, g, h;
    Node parent;
    Node(int x, int y){ this.x = x; this.y = y; }
}
int heuristic(Node a, Node b){ return Math.abs(a.x-b.x)+Math.abs(a.y-b.y); }
// Use PriorityQueue with f = g + h for open list
// Expand nodes until target reached
`,
    python: `# A* Pathfinding (simplified)
class Node:
    def __init__(self, x, y):
        self.x = x
        self.y = y
        self.g = 0
        self.h = 0
        self.parent = None
def heuristic(a, b):
    return abs(a.x-b.x) + abs(a.y-b.y)
# Use heapq for open list
`,
    cpp: `// A* Pathfinding (simplified)
struct Node { int x, y, g, h; Node* parent; };
int heuristic(Node* a, Node* b){ return abs(a->x-b->x)+abs(a->y-b->y); }
// Use priority_queue for open list
`,
    javascript: `// A* Pathfinding (simplified)
class Node { constructor(x,y){ this.x=x; this.y=y; this.g=0; this.h=0; this.parent=null; } }
function heuristic(a,b){ return Math.abs(a.x-b.x)+Math.abs(a.y-b.y); }
// Use open/closed sets to implement A*`
  },

  bfs: {
    java: `// Breadth-First Search
void BFS(int start, List<List<Integer>> adj){
    boolean[] visited = new boolean[adj.size()];
    Queue<Integer> q = new LinkedList<>();
    visited[start] = true;
    q.add(start);
    while(!q.isEmpty()){
        int node = q.poll();
        for(int neigh : adj.get(node)){
            if(!visited[neigh]){
                visited[neigh] = true;
                q.add(neigh);
            }
        }
    }
}`,
    python: `# Breadth-First Search
from collections import deque
def BFS(start, adj):
    visited = [False]*len(adj)
    q = deque([start])
    visited[start]=True
    while q:
        node = q.popleft()
        for neigh in adj[node]:
            if not visited[neigh]:
                visited[neigh] = True
                q.append(neigh)
`,
    cpp: `// Breadth-First Search
void BFS(int start, vector<vector<int>>& adj){
    vector<bool> visited(adj.size(), false);
    queue<int> q;
    visited[start]=true; q.push(start);
    while(!q.empty()){
        int node=q.front(); q.pop();
        for(int neigh: adj[node]){
            if(!visited[neigh]){
                visited[neigh]=true;
                q.push(neigh);
            }
        }
    }
}`,
    javascript: `// Breadth-First Search
function BFS(start, adj){
    let visited = Array(adj.length).fill(false);
    let q = [start]; visited[start]=true;
    while(q.length){
        let node = q.shift();
        for(let neigh of adj[node]){
            if(!visited[neigh]){
                visited[neigh]=true; q.push(neigh);
            }
        }
    }
}`
  },

  dfs: {
    java: `// Depth-First Search
void DFS(int node, boolean[] visited, List<List<Integer>> adj){
    visited[node] = true;
    for(int neigh : adj.get(node)){
        if(!visited[neigh]) DFS(neigh, visited, adj);
    }
}`,
    python: `# Depth-First Search
def DFS(node, visited, adj):
    visited[node]=True
    for neigh in adj[node]:
        if not visited[neigh]:
            DFS(neigh, visited, adj)
`,
    cpp: `// Depth-First Search
void DFS(int node, vector<bool>& visited, vector<vector<int>>& adj){
    visited[node]=true;
    for(int neigh: adj[node]){
        if(!visited[neigh]) DFS(neigh, visited, adj);
    }
}`,
    javascript: `// Depth-First Search
function DFS(node, visited, adj){
    visited[node]=true;
    for(let neigh of adj[node]){
        if(!visited[neigh]) DFS(neigh, visited, adj);
    }
}`
  },

  minimax: {
    java: `// Minimax (two-player game)
int minimax(int depth, boolean isMax, int[] board){
    if(isGameOver(board)) return evaluate(board);
    if(isMax){
        int best = Integer.MIN_VALUE;
        for(int move: getMoves(board)){
            best = Math.max(best, minimax(depth+1, false, makeMove(board, move)));
        }
        return best;
    } else {
        int best = Integer.MAX_VALUE;
        for(int move: getMoves(board)){
            best = Math.min(best, minimax(depth+1, true, makeMove(board, move)));
        }
        return best;
    }
}`,
    python: `# Minimax
def minimax(depth, isMax, board):
    if gameOver(board): return evaluate(board)
    if isMax:
        return max(minimax(depth+1, False, makeMove(board, m)) for m in getMoves(board))
    else:
        return min(minimax(depth+1, True, makeMove(board, m)) for m in getMoves(board))
`,
    cpp: `// Minimax
int minimax(int depth, bool isMax, vector<int> board){
    if(gameOver(board)) return evaluate(board);
    if(isMax){
        int best = INT_MIN;
        for(int move: getMoves(board)){
            best = max(best, minimax(depth+1,false, makeMove(board, move)));
        }
        return best;
    } else {
        int best = INT_MAX;
        for(int move: getMoves(board)){
            best = min(best, minimax(depth+1,true, makeMove(board, move)));
        }
        return best;
    }
}`,
    javascript: `// Minimax
function minimax(depth, isMax, board){
    if(gameOver(board)) return evaluate(board);
    if(isMax){
        return Math.max(...getMoves(board).map(m => minimax(depth+1, false, makeMove(board, m))));
    } else {
        return Math.min(...getMoves(board).map(m => minimax(depth+1, true, makeMove(board, m))));
    }
}`
  },

  alphaBeta: {
    java: `// Alpha-Beta Pruning
int alphaBeta(int depth, int alpha, int beta, boolean isMax, int[] board){
    if(isGameOver(board)) return evaluate(board);
    if(isMax){
        int best = Integer.MIN_VALUE;
        for(int move: getMoves(board)){
            best = Math.max(best, alphaBeta(depth+1, alpha, beta, false, makeMove(board, move)));
            alpha = Math.max(alpha, best);
            if(beta <= alpha) break;
        }
        return best;
    } else {
        int best = Integer.MAX_VALUE;
        for(int move: getMoves(board)){
            best = Math.min(best, alphaBeta(depth+1, alpha, beta, true, makeMove(board, move)));
            beta = Math.min(beta, best);
            if(beta <= alpha) break;
        }
        return best;
    }
}`,
    python: `# Alpha-Beta Pruning
def alphaBeta(depth, alpha, beta, isMax, board):
    if gameOver(board): return evaluate(board)
    if isMax:
        best = float('-inf')
        for m in getMoves(board):
            best = max(best, alphaBeta(depth+1, alpha, beta, False, makeMove(board,m)))
            alpha = max(alpha, best)
            if beta <= alpha: break
        return best
    else:
        best = float('inf')
        for m in getMoves(board):
            best = min(best, alphaBeta(depth+1, alpha, beta, True, makeMove(board,m)))
            beta = min(beta, best)
            if beta <= alpha: break
        return best
`,
    cpp: `// Alpha-Beta Pruning
int alphaBeta(int depth,int alpha,int beta,bool isMax, vector<int> board){
    if(gameOver(board)) return evaluate(board);
    if(isMax){
        int best=INT_MIN;
        for(int move: getMoves(board)){
            best=max(best, alphaBeta(depth+1, alpha, beta,false, makeMove(board,move)));
            alpha=max(alpha,best);
            if(beta<=alpha) break;
        }
        return best;
    } else {
        int best=INT_MAX;
        for(int move: getMoves(board)){
            best=min(best, alphaBeta(depth+1, alpha, beta,true, makeMove(board,move)));
            beta=min(beta,best);
            if(beta<=alpha) break;
        }
        return best;
    }
}`,
    javascript: `// Alpha-Beta Pruning
function alphaBeta(depth, alpha, beta, isMax, board){
    if(gameOver(board)) return evaluate(board);
    if(isMax){
        let best = -Infinity;
        for(let m of getMoves(board)){
            best = Math.max(best, alphaBeta(depth+1, alpha, beta, false, makeMove(board,m)));
            alpha = Math.max(alpha,best);
            if(beta<=alpha) break;
        }
        return best;
    } else {
        let best = Infinity;
        for(let m of getMoves(board)){
            best = Math.min(best, alphaBeta(depth+1, alpha, beta, true, makeMove(board,m)));
            beta = Math.min(beta,best);
            if(beta<=alpha) break;
        }
        return best;
    }
}`
  },

  monteCarlo: {
    java: `// Monte Carlo Tree Search (simplified)
class Node { int wins, visits; List<Node> children; }
Node MCTS(Node root){
    for(int i=0;i<1000;i++){
        Node node = select(root);
        int result = simulate(node);
        backpropagate(node, result);
    }
    return bestChild(root);
}`,
    python: `# Monte Carlo Tree Search (simplified)
class Node:
    def __init__(self): self.wins=0; self.visits=0; self.children=[]
def MCTS(root):
    for _ in range(1000):
        node = select(root)
        result = simulate(node)
        backpropagate(node,result)
    return bestChild(root)
`,
    cpp: `// Monte Carlo Tree Search (simplified)
struct Node { int wins, visits; vector<Node*> children; };
Node* MCTS(Node* root){
    for(int i=0;i<1000;i++){
        Node* node = select(root);
        int result = simulate(node);
        backpropagate(node,result);
    }
    return bestChild(root);
}`,
    javascript: `// Monte Carlo Tree Search (simplified)
class Node{ constructor(){ this.wins=0; this.visits=0; this.children=[]; } }
function MCTS(root){
    for(let i=0;i<1000;i++){
        let node = select(root);
        let result = simulate(node);
        backpropagate(node,result);
    }
    return bestChild(root);
}`
  },
 bestFirstSearch: {
    java: `// Best-First Search
class Node {
    int x, y;
    int h; // heuristic
    Node parent;
}
void bestFirstSearch(Node start, Node goal, List<List<Node>> graph){
    PriorityQueue<Node> open = new PriorityQueue<>((a,b) -> a.h - b.h);
    Set<Node> closed = new HashSet<>();
    open.add(start);
    while(!open.isEmpty()){
        Node current = open.poll();
        if(current.equals(goal)) break;
        closed.add(current);
        for(Node neighbor : graph.get(current.x)){
            if(!closed.contains(neighbor)) open.add(neighbor);
        }
    }
}`,
    python: `# Best-First Search
import heapq
def best_first_search(start, goal, graph):
    open_set = []
    heapq.heappush(open_set, (start.h, start))
    closed_set = set()
    while open_set:
        _, current = heapq.heappop(open_set)
        if current == goal:
            break
        closed_set.add(current)
        for neighbor in graph[current]:
            if neighbor not in closed_set:
                heapq.heappush(open_set, (neighbor.h, neighbor))
`,
    cpp: `// Best-First Search
struct Node { int x, y, h; Node* parent; };
void bestFirstSearch(Node* start, Node* goal, vector<vector<Node*>>& graph){
    auto cmp = [](Node* a, Node* b){ return a->h > b->h; };
    priority_queue<Node*, vector<Node*>, decltype(cmp)> open(cmp);
    set<Node*> closed;
    open.push(start);
    while(!open.empty()){
        Node* current = open.top(); open.pop();
        if(current == goal) break;
        closed.insert(current);
        for(Node* neighbor : graph[current->x]){
            if(!closed.count(neighbor)) open.push(neighbor);
        }
    }
}`,
    javascript: `// Best-First Search
class Node { constructor(x,y,h){ this.x=x; this.y=y; this.h=h; this.parent=null; } }
function bestFirstSearch(start, goal, graph){
    let open = [start];
    let closed = new Set();
    while(open.length){
        open.sort((a,b)=>a.h-b.h);
        let current = open.shift();
        if(current === goal) break;
        closed.add(current);
        for(let neighbor of graph[current.x]){
            if(!closed.has(neighbor)) open.push(neighbor);
        }
    }
}`
  },

  hillClimbing: {
    java: `// Hill Climbing
int hillClimb(State start){
    State current = start;
    while(true){
        State next = current.getBestNeighbor();
        if(next.value <= current.value) break;
        current = next;
    }
    return current.value;
}`,
    python: `# Hill Climbing
def hill_climb(start):
    current = start
    while True:
        next = current.get_best_neighbor()
        if next.value <= current.value:
            break
        current = next
    return current.value`,
    cpp: `// Hill Climbing
int hillClimb(State* start){
    State* current = start;
    while(true){
        State* next = current->getBestNeighbor();
        if(next->value <= current->value) break;
        current = next;
    }
    return current->value;
}`,
    javascript: `// Hill Climbing
function hillClimb(start){
    let current = start;
    while(true){
        let next = current.getBestNeighbor();
        if(next.value <= current.value) break;
        current = next;
    }
    return current.value;
}`
  },
  nimGame: {
  java: `// Nim Game Optimal Move
import java.util.*;
class Nim {
    static int nimSum(int[] heaps) {
        int xorSum = 0;
        for(int heap : heaps) xorSum ^= heap;
        return xorSum;
    }
    static int[] optimalMove(int[] heaps) {
        int xorSum = nimSum(heaps);
        if(xorSum == 0) return null; // Losing position
        for(int i=0;i<heaps.length;i++){
            int target = heaps[i] ^ xorSum;
            if(target < heaps[i]){
                int remove = heaps[i]-target;
                return new int[]{i, remove};
            }
        }
        return null;
    }
    public static void main(String[] args){
        int[] heaps = {3, 4, 5};
        int[] move = optimalMove(heaps);
        System.out.println("Remove " + move[1] + " from heap " + move[0]);
    }
}`,

  python: `# Nim Game Optimal Move
def nim_sum(heaps):
    xor_sum = 0
    for h in heaps: xor_sum ^= h
    return xor_sum

def optimal_move(heaps):
    xor_sum_val = nim_sum(heaps)
    if xor_sum_val == 0:
        return None  # Losing position
    for i, heap in enumerate(heaps):
        target = heap ^ xor_sum_val
        if target < heap:
            remove = heap - target
            return (i, remove)

heaps = [3,4,5]
move = optimal_move(heaps)
print(f"Remove {move[1]} from heap {move[0]}")`,

  cpp: `// Nim Game Optimal Move
#include <bits/stdc++.h>
using namespace std;

int nimSum(vector<int>& heaps){
    int xorSum = 0;
    for(int h : heaps) xorSum ^= h;
    return xorSum;
}

pair<int,int> optimalMove(vector<int>& heaps){
    int xorSumVal = nimSum(heaps);
    if(xorSumVal == 0) return {-1,-1}; // Losing position
    for(int i=0;i<heaps.size();i++){
        int target = heaps[i] ^ xorSumVal;
        if(target < heaps[i]){
            return {i, heaps[i]-target};
        }
    }
    return {-1,-1};
}

int main(){
    vector<int> heaps = {3,4,5};
    auto move = optimalMove(heaps);
    cout << "Remove " << move.second << " from heap " << move.first << endl;
}`,

  javascript: `// Nim Game Optimal Move
function nimSum(heaps){
    return heaps.reduce((a,b)=>a^b,0);
}

function optimalMove(heaps){
    const xorSum = nimSum(heaps);
    if(xorSum === 0) return null; // Losing position
    for(let i=0;i<heaps.length;i++){
        let target = heaps[i] ^ xorSum;
        if(target < heaps[i]){
            let remove = heaps[i]-target;
            return {heap: i, remove};
        }
    }
}

const heaps = [3,4,5];
const move = optimalMove(heaps);
console.log(\`Remove \${move.remove} from heap \${move.heap}\`);`
}

};

