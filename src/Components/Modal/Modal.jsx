function PurchaseModal({isOpen, setIsOpen}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 max-w-sm w-full text-center relative">
            {/* Success Icon */}
            <div className="flex justify-center mb-4">
              <div className="bg-green-100 text-green-600 rounded-full p-3">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>

            {/* Title & Message */}
            <h2 className="text-xl font-semibold text-gray-800">Payment successful</h2>
            <p className="text-gray-500 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.
            </p>

            {/* Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="mt-6 px-5 py-2.5 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition"
            >
              Go back to dashboard
            </button>

            {/* Close button (optional) */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PurchaseModal;
