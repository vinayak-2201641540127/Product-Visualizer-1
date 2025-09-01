// export const euclideanDistance = (a, b) => {
//   let sum = 0;
//   for (let i = 0; i < a.length; i++) {
//     sum += Math.pow(a[i] - b[i], 2);
//   }
//   return Math.sqrt(sum);
// };


export function cosineSimilarity(vecA, vecB) {
  let dot = 0.0, normA = 0.0, normB = 0.0;
  for (let i = 0; i < vecA.length; i++) {
    dot += vecA[i] * vecB[i];
    normA += vecA[i] * vecA[i];
    normB += vecB[i] * vecB[i];
  }
  return dot / (Math.sqrt(normA) * Math.sqrt(normB));
}
