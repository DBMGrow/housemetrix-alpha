import { Spacer } from "./divider"

export default function H1({ children }) {
  return (
    <>
      <h1 className="font-semibold text-3xl text-center">{children}</h1>
      <Spacer />
    </>
  )
}

export function HColor({ children }) {
  return (
    <>
      <h2 className="text-cyan-600 font-semibold text-5xl text-center">{children}</h2>
      <Spacer />
    </>
  )
}

export function H3({ children }) {
  return (
    <>
      <h3 className="font-semibold text-5xl text-center">{children}</h3>
      <Spacer />
    </>
  )
}

export function H4({ children }) {
  return (
    <>
      <h3 className="text-slate-600 font-semibold text-3xl">{children}</h3>
      <Spacer />
    </>
  )
}
