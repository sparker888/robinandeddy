import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

/* This example requires Tailwind CSS v2.0+ */

/* I fixed this by replacing className="min-h-full bg-cover bg-top sm:bg-top" with className="h-screen bg-cover bg-top sm:bg-top" */

export default function IndexPage() {
  return (
    <>
          <main
            className="h-screen bg-cover bg-top sm:bg-top"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1545972154-9bb223aac798?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3050&q=80&exp=8&con=-15&sat=-75")',
            }}
          >
            <div className="max-w-7xl mx-auto px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8 lg:py-48">
              <p className="text-2xl font-semibold text-black text-opacity-50 uppercase tracking-wide">
                ROBINANDEDDY.COM
              </p>
              <h1 className="mt-8 text-4xl font-extrabold text-white tracking-tight sm:text-7xl">
                Hi! You're not lost...
              </h1>
              <p className="mt-8 text-xl font-medium text-black text-opacity-50">
                We're designing a new website.
              </p>
              <div className="mt-12">
                <Link
                  href="./page-2"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-black text-opacity-75 bg-white bg-opacity-75 sm:bg-opacity-25 sm:hover:bg-opacity-50"
                >
                  Contact Robin
                </Link>
              </div>
            </div>
          </main>
    </>
  )
}
