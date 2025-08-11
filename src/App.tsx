import { useState } from 'react';
import './App.css'
import { add } from './utils/StringCalculator';
import { testCases } from './utils/constants';

function App() {
  const [input, setInput] = useState<string>('');
  const [result, setResult] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleCalculate = () => {
    try {
      setError('');
      const sum = add(input);
      setResult(sum.toString());
    } catch (err) {
      setError(err instanceof Error ? err?.message : String(err));
      setResult('');
    }
  };

  return (
  <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 py-12 px-4 sm:px-6 lg:px-8">
  <div className="max-w-md mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
    <div className="p-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 bg-clip-text bg-gradient-to-r from-indigo-500 to-blue-600">
          String Calculator
        </h1>
        <p className="mt-2 text-sm text-gray-500">
          Add numbers separated by commas or custom delimiters
        </p>
      </div>

      <div className="space-y-3">
        <div>
          <textarea
            value={input}
            autoFocus
            id='calculator-input'
            onChange={(e) => setInput(e.target.value)}
            placeholder="Examples: '1,2,3' or '//;\n1;2'"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none h-32"
          />
        </div>

        <button
          onClick={handleCalculate}
          className="w-full bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-600 hover:to-blue-700 text-white font-medium py-3 px-4 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-800"
          data-testid="calculate-button"
        >
          Calculate Sum
        </button>

        {result && (
          <div className="p-4 bg-green-200 rounded-lg border border-green-100" data-testid="result">
            <p className="text-green-800 flex items-center">
              <span className="font-medium text-1xl">Result: </span> <span className="pl-1">{result}</span>
            </p>
          </div>
        )}

        {error && (
          <div className="p-4 bg-red-200 rounded-lg border border-red-100" data-testid="error">
            <p className="text-red-800 font-medium">Error: {error}</p>
          </div>
        )}
      </div>

      <div className="mt-5">
        <h3 className="text-lg font-medium text-gray-700 mb-3">Examples:</h3>
        <ul className="space-y-2 text-sm text-gray-600">
          {testCases?.map(test => (
            <li key={test.id} className="flex items-center">
            <span className="inline-block mr-2 bg-blue-100 text-blue-800 px-2 py-1 rounded">
              {test.input}
            </span>
            <span className="text-gray-400 mx-2">→</span>
            <span>{test.output}</span>
          </li>
        ))}
      </ul>
      </div>
    </div>
  </div>
</div>
)
}

export default App
