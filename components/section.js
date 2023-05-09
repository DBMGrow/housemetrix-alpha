export default function Section({ children }) {
  return (
    <>
      <section className="mx-9 my-6 flex w-full place-content-center">
        <div className="w-128 overflow-hidden bg-white shadow sm:rounded-lg">
          <div className="px-9 py-9 sm:p-12 text-center flex flex-col items-center justify-center">{children}</div>
        </div>
      </section>
    </>
  )
}
