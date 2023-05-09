import Header from "@/components/header"
import Footer from "@/components/footer"
import Section from "@/components/section"
import H1 from "@/components/heading1"
import { HColor, H3, H4 } from "@/components/heading1"
import Hr from "@/components/divider"
import { Spacer } from "@/components/divider"
import Button from "@/components/button"
import Contact from "@/components/contact"
import Head from "next/head"

export default function Page() {
  return (
    <>
      <Header className="mb-8" />
      <Section>
        <p className="text-center w-96">
          Hello Daniel & Rebecca C Houglum! <br />
          Below is an updated myHomeIQ report for 28192 North Quartz Drive
        </p>
        <Hr />
        <H1>The estimated equity in your home is</H1>
        <HColor>$285,102</HColor>
        <div className="bg-center bg-cover shadow w-full rounded-lg h-96 bg-[url('/testimg.jpg')]"></div>
        <Spacer />
        <H1>We estimate your home to be worth</H1>
        <HColor>$363,078</HColor>
        <H1>Which is an increase of</H1>
        <H3>$4324</H3>
        <p>Since last month</p>
        <Spacer></Spacer>
        <H1>Questions?</H1>
        <p>Click on a button below to submit your question</p>
        <Spacer></Spacer>
        <Button text="Is now a good time to sell my home?" />
        <Button text="How accurate is my home value?" />
      </Section>
      <Section>
        <div className="text-left">
          <H1>My Loans</H1>
          <H4>$83,000</H4>
          <p>Conventional Financing</p>
          <p>Fixed 30 years at 3.03% interest rate</p>
          <p>Loan Date: Jul 2020</p>
          <Spacer />
          <p className="font-bold text-black">Are the above numbers correct?</p>
          <Spacer />
          <Button text="Yes" />
          <Button text="No" />
        </div>
      </Section>

      <Section>
        <H1>Estimated rental value</H1>
        <p className="w-2/3">Renting your home or purchasing a rental property can be a great way to build long term wealth</p>
        <Spacer />
        <HColor>$1,834/month</HColor>
        <H1>Questions?</H1>
        <Button text="How can I learn more about making money from real estate?" />
        <Button text="How can I find a tenant for my home?" />
      </Section>

      <Section>
        <H1>Get notified when your home value updates</H1>
        <Button text="Get Updates" />
      </Section>

      <H1>Your Report is Provided By:</H1>

      <Section>
        <Contact />
      </Section>

      <Footer />
    </>
  )
}
