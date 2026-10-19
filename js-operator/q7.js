const feedback = "Great product! Fast delivery and amazing sound quality!";

const wordCount = feedback.trim().split(" ").length;
const lowerFeedback = feedback.toLowerCase();
const hasNegativeWords = lowerFeedback.includes("bad") || lowerFeedback.includes("poor");

console.log(`Feedback: ${feedback}`);
console.log(`Word count: ${wordCount}`);

if (!hasNegativeWords) {
  console.log("Positive Feedback");
} else {
  console.log("Needs Improvement");
}