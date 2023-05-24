import React, { useState } from 'react'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import { toast } from 'react-toastify'

const ToysCategories = () => {
    const [tabIndex, setTabIndex] = useState(0);
  return (
    <div>
    <div>Toys by Categories</div>
    <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Kids plug & play</Tab>
          <Tab>Kids Tablets</Tab>
          <Tab>Kids Music & Karaoke</Tab>
        </TabList>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
      </Tabs>
    </div>
  )
}

export default ToysCategories