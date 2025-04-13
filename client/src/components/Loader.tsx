export default function Loader({ label }: { label?: string }) {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="flex flex-col items-center gap-8">
        <p className="text-gray-800 text-4xl font-medium">
          {label || "Loading..."}
        </p>
        <div className="flex flex-row gap-3">
          <div className="w-3 h-8 rounded-full bg-blue-500 animate-bounce"></div>
          <div className="w-3 h-8 rounded-full bg-blue-500 animate-bounce [animation-delay:-.2s]"></div>
          <div className="w-3 h-8 rounded-full bg-blue-500 animate-bounce [animation-delay:-.5s]"></div>
          <div className="w-3 h-8 rounded-full bg-blue-500 animate-bounce [animation-delay:-.8s]"></div>
        </div>
      </div>
    </div>
  );
}
