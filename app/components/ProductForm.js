import { useState } from 'react';

const steps = ["Basic Info", "Ingredients", "Certifications", "Review"];

export default function ProductForm({ onFeedback }) {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const feedback = {
    explanation: "Moderate transparency. Please review suggested improvements.",
    suggestions: ["Provide more ingredient detail.", "Attach certification proof."]
  };

  const nextStep = () => setStep((s) => s + 1);
  const prevStep = () => setStep((s) => s - 1);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
    onFeedback && onFeedback(feedback);
  };

  if (submitted) {
    return (
      <div className="p-4 mt-4 bg-green-50 border border-green-200 rounded">
        <div className="font-bold mb-2">Mock AI Feedback</div>
        <div>{feedback.explanation}</div>
        <ul className="pl-4 list-disc">
          {feedback.suggestions.map((s, i) => <li key={i}>{s}</li>)}
        </ul>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded shadow p-6 max-w-lg mx-auto my-8">
      <div className="flex justify-between mb-4">
        {steps.map((label, i) => (
          <div key={i} className={`font-bold px-2 py-1 rounded ${step === i ? 'bg-blue-100' : 'bg-gray-50'}`}>
            {label}
          </div>
        ))}
      </div>
      {step === 0 && (
        <input name="name" onChange={handleChange} className="w-full mb-2" placeholder="Product Name" required />
      )}
      {step === 1 && (
        <input name="ingredients" onChange={handleChange} className="w-full mb-2" placeholder="Ingredients" required />
      )}
      {step === 2 && (
        <input name="certifications" onChange={handleChange} className="w-full mb-2" placeholder="Certifications" required />
      )}
      {step === 3 && (<div>Review your data and submit your product.</div>)}
      <div className="flex justify-end gap-2 mt-4">
        {step > 0 && <button type="button" onClick={prevStep} className="px-4 py-2 bg-gray-200 rounded">Back</button>}
        {step < steps.length - 1 ?
          <button type="button" onClick={nextStep} className="px-4 py-2 bg-blue-600 text-white rounded">Next</button>
          :
          <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded">Submit</button>
        }
      </div>
    </form>
  );
}
