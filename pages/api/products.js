// pages/api/products.js
export default function handler(req, res) {
  res.status(200).json([
    {
      productName: "Organic Herbal Tea",
      score: 72,
      explanation: "Moderate transparency. Missing sourcing details for 2 ingredients.",
      suggestions: [
        "Add sourcing details for green tea leaves.",
        "Include certification ID for 'organic' claim.",
        "Clarify packaging recyclability."
      ],
      flags: ["Incomplete sourcing", "Unverified organic claim"],
      status: "pending"
    },
    {
      productName: "Bamboo Toothbrush",
      score: 84,
      explanation: "High transparency. All sourcing details available.",
      suggestions: ["Confirm biodegradability labeling."],
      flags: [],
      status: "approved"
    },
    {
  productName: "Fair Trade Dark Chocolate",
  score: 90,
  explanation: "Excellent transparency. Sourced from certified farms with clear documentation.",
  suggestions: ["Highlight carbon neutral shipping option."],
  flags: [],
  status: "approved"
},
{
  productName: "Reusable Steel Water Bottle",
  score: 65,
  explanation: "Transparency is good, but missing recycling program information.",
  suggestions: [
    "Add details about manufacturer carbon offsets.",
    "Provide information about end-of-life recycling program."
  ],
  flags: ["Recycling info incomplete"],
  status: "pending"
},
{
  productName: "Compostable Trash Bags",
  score: 78,
  explanation: "Most certifications verified. Sourcing for resin component not found.",
  suggestions: [
    "Submit resin sourcing certificate.",
    "Clarify composting facility compatibility."
  ],
  flags: ["Unverified resin sourcing"],
  status: "pending"
},
{
  productName: "Organic Cotton T-Shirt",
  score: 55,
  explanation: "Low transparency. Supply chain audits missing for two regions.",
  suggestions: [
    "Upload recent audit reports.",
    "Clarify worker welfare initiatives.",
    "Specify fabric dye sources."
  ],
  flags: ["Missing audits", "No dye sourcing"],
  status: "review"
}

    
  ]);
}
