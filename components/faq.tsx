"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What does Synto do?",
    answer:
      "Synto is a collection of fun and engaging challenges for the mind, that help you read some of the greatest books ever written in more depth. Our challenges have been designed to be taken before reading the book and after reading the book. While you read it, we give daily tips on things you may have missed in the book as well as specific tips for Active Reading.",
  },
  {
    question: "What is Active Reading?",
    answer:
      "Do you ever finish a book and think to yourself if you can actually remember anything you read? That's what it's like to be a passive reader. Active Readers engage deeply with any book they read - they remember what they read and they apply the lessons to their life moving forward. We believe we can help you become an Active Reader.",
  },
  {
    question: "Do I read the books on Synto?",
    answer:
      "No, we are just a layer of challenges, note-taking and a community on top of reading. That is, you read the book as per normal and check in on Synto when you want to increase your understanding.",
  },
  {
    question: "What books can I use with Synto?",
    answer:
      "You can use Synto with 15 of the greatest books ever written. From Meditations by Marcus Aurelius to Leviathan by Thomas Hobbes. From Epectitus to Albert Camus and Charles Darwin to Richard Dawkins. Our challenges are carefully crafted alongside the book so it takes time to develop. But if you want a book added, drop us a note and we'll try to add it quickly.",
  },
  {
    question: "How much does it cost?",
    answer:
      "It's free! We're a new product looking to find people that want to improve their reading through reading some of the best philosophical books ever written. If you'd like to join, click on the Get Started button or feel free to email us to say 'hi!'",
  },
]

export default function FAQ() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-serif font-bold tracking-tighter text-primary sm:text-5xl">Have Questions?</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Find answers to common questions about Synto
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-[800px] mt-8">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-medium hover:text-primary">{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

