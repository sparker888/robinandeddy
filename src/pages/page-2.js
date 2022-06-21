import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <main
            className="h-screen bg-cover bg-top sm:bg-top"
            style={{
              backgroundImage:
                'url("https://res.cloudinary.com/gravital-digital/image/upload/v1655821187/mesh-gradient-green-brown-cropped_eu9n4k.jpg")',
            }}
          >
      <div class="grid place-items-center h-screen">
        <div class="w-full md:w-96 md:max-w-full mx-auto">
          <div className="p-6 border border-gray-600 sm:rounded-md bg-orange-200">
          <h3 className="mb-6 text-2xl bg-gradient-to-br from-orange-400 to-yellow-800 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-3xl">
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
                <span className="text-black text-opacity-75">name:</span>
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
            text-black text-opacity-75
            focus:outline-none
          "
                />
              </label>
              <label className="block mb-6">
                <span className="text-black text-opacity-75">email:</span>
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
            text-black text-opacity-75
            focus:outline-none
          "
                  required
                />
              </label>
              <label className="block mb-6">
                <span className="text-black text-opacity-75">message:</span>
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
            text-black text-opacity-75
            focus:outline-none
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
            text-black text-opacity-75
            bg-orange-400
            bg-opacity-75
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-orange-500
          "
                >
                  Send it...
                </button>
              </div>
              <div>
                <div className="mt-2 text-black text-opacity-75 text-right text-xs">
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
  </main>
)

export default SecondPage
