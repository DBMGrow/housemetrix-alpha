export default function Button({ text }) {
  return (
    <>
      <button type="button" className="w-full m-1 rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
        {text}
      </button>
    </>
  )
}
