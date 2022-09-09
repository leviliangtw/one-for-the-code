import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import BannerModule from "../components/BannerModule/BannerModule"
import BasicTextModule from "../components/BasicTextModule/BasicTextModule"
import PerksModule from "../components/PerksModule/PerksModule"
import Perk from "../components/PerksModule/Perk"
// import Features from "../components/Features/Features"
import Projects from "../components/Projects/Projects"
import LatestPosts from "../components/Post/LatestPosts"

const Index = () => {
  return (
    <>
      <Seo title="Home" />
      <Layout>
        <BannerModule
          title="One more shot for the code"
          subTitle="Software Engineering | Cloud Computing | Cyber Security"
        />
        <BasicTextModule
          title="Cloud Computing and Cyber Security have become the trend around the world"
          content="Using modern programming languages such as Golang, and combining cloud engineering technologies, kinds of projects are developed for innovation and convenience. Giving excellent experience on varieties of platforms."
          link="/projects"
          linkText="View Projects"
        />
        {/* <PerksModule>
          <Perk title="The Title" content="The content" />
        </PerksModule> */}
        <Projects
          title="Popular Projects"
          introduction="Featuring useful and powerful functions in different areas, these projects are under well development and maintenance. Aiming to provide great features for anybody, all the projects are developed with an explicit and specific goal. Please feel free to check them out for more information!"
        />
        {/* <Features
          title="Featured Products from Barcadia."
          introduction="Vivamus quam mauris, pulvinar vel mauris id, interdum semper neque. Proin malesuada libero eget tellus scelerisque, id egestas tortor egestas."
        /> */}
        <LatestPosts
          title="The Latest Posts"
          introduction="Recording and sharing of knowledge are quite significant and precious. Though the information might be very simple, the experience still could help others who are blocked or stuck here. "
        />
      </Layout>
    </>
  )
}

export default Index
