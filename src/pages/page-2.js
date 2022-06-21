import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Waves from "../components/birds"

const SecondPage = () => (
  <div className="h-full">
    <Waves className="absolute h-1000">
      <div class="grid place-items-center h-screen">
        <div class="w-full md:w-96 md:max-w-full mx-auto">
          <div className="p-6 border border-gray-600 sm:rounded-md bg-gradient-to-r from-sky-500 to-indigo-500">
          <h3 className="mb-6 text-2xl font-extrabold tracking-tight text-violet-800 sm:text-3xl">
                Contact Robin!
              </h3>
            <form name="contact"
                form
                id="robinandeddy-netlify-form"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field">
                <input type="hidden" name="form-name" value="contact" />
                <p hidden>
                  <label>
                    Don’t fill this out: <input name="bot-field" />
                  </label>
                </p>
              <label className="block mb-6">
                <span className="text-indigo-700">name:</span>
                <input
                  name="name"
                  type="text"
                  className="
            block
            w-full
            mt-1
            border-gray-600
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
            
            placeholder-gray-600
            text-indigo-700
          "
                />
              </label>
              <label className="block mb-6">
                <span className="text-indigo-700">email:</span>
                <input
                  name="email"
                  type="email"
                  className="
            block
            w-full
            mt-1
            border-gray-600
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
            
            placeholder-gray-600
            text-indigo-700
          "
                  required
                />
              </label>
              <label className="block mb-6">
                <span className="text-indigo-700">message:</span>
                <textarea
                  name="message"
                  className="
            block
            w-full
            mt-1
            border-gray-600
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
            
            placeholder-gray-600
            text-indigo-700
          "
                  rows="3"
                ></textarea>
              </label>
              <div className="mb-6">
                <button
                  type="submit"
                  className="
            h-10
            px-5
            text-indigo-100
            bg-indigo-700
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-indigo-800
          "
                >
                  Send it...
                </button>
              </div>
              <div>
                <div className="mt-2 text-gray-300 text-right text-xs">
                  <a
                    href="/"
                    className="hover:underline"
                  >
                    TakeMeHome
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Waves>
  </div>
)

export default SecondPage
