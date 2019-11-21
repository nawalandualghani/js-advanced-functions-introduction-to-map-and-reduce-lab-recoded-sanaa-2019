// Your code here
function mapToNegativize(arr) {
  let r = []
  for (let i = 0; i < arr.length; i++ ) {
    r.push(-1 * arr[i])
  }
  return r
}

function mapToNoChange(src) {
  let r = []
  for (let i = 0; i < src.length; i++ ) {
    r.push(src[i])
  }
  return r
}
