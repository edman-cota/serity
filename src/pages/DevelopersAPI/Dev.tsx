import React from "react"
import { Flex } from "@chakra-ui/react"
import "./Dev.scss"
import Navbar from "../../components/Home/Navbar/Navbar"

const Dev = (): JSX.Element => {
  return (
    <Flex w="100%" direction="column" border="1px">
      <Navbar />
      <Flex h="1000px" bg="white" w="100%">
        <Flex className="sidebar" h="calc(100vh-80px)" w="350px"></Flex>
        <Flex className="docs" flex="1" mt="90px">
          <article className="docs-article">
            <h1 className="doc-title">Cota API</h1>
            <div className="introduction">
              <div className="doc-row">
                <div className="doc-content">
                  <h1>Introduction</h1>

                  <p>Welcome to the reference for the Cota REST API</p>
                  <p>
                    The Cota REST API provides a broad set of operations and
                    resources that:
                  </p>
                  <ul>
                    <li>Consistently do repetitive or tedious tasks</li>
                    <li>
                      Chain a process together for your team's process and
                      workflow.
                      <ul>
                        <li>
                          Pull information from other locations such as email
                          and Evernote into Cota.
                        </li>
                        <li>
                          Push information from Quire to other locations such as
                          email and Zapier.
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <p>
                    Want to share your thoughts on how Cota API works for you?
                    Tell us how you feel about using our API and what we can do
                    to make it better
                  </p>
                </div>
                <div className="doc-example"></div>
              </div>
            </div>
          </article>
        </Flex>
        Dev
      </Flex>
    </Flex>
  )
}

export default Dev
