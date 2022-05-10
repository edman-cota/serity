/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from "react";
import { ModalBody } from "@chakra-ui/react";

import { motion, AnimatePresence } from "framer-motion";
import { initialTabs as tabs } from "../ingredients";

const Body = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <ModalBody px="40px" h="100%" paddingBottom="0px">
      <div className="window">
        <nav>
          <ul>
            {tabs.map((item) => (
              <li
                key={item.label}
                className={item === selectedTab ? "selected" : null}
                onClick={() => setSelectedTab(item)}
              >
                {`${item.icon} ${item.label}`}
                {item === selectedTab ? (
                  <motion.div className="underline" layoutId="underline" />
                ) : null}
              </li>
            ))}
          </ul>
        </nav>
        <main style={{ overflowY: "auto" }}>
          <AnimatePresence exitBeforeEnter>
            <motion.div
              key={selectedTab ? selectedTab.label : "empty"}
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.15 }}
            >
              {selectedTab ? selectedTab.component : null}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </ModalBody>
  );
};

export default Body;
