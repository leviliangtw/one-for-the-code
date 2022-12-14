import React from "react"
import { Link } from "gatsby"
import Button from "../components/Button/Button"
import { PostSingleStyles } from "../components/Post/PostStyles"
import LatestPosts from "../components/Post/LatestPosts"
// import RichText from "../components/RichText"

const PostTemplate = (contentfulPost) => {
  const { title, createdAt, contentMd } = contentfulPost
  return (
    <>
      <section>
        <PostSingleStyles>
          {title && <h1 className="blogsingle__title">{title}</h1>}
          {createdAt && (
            <p className="blogsingle__date">Posted on {createdAt}</p>
          )}
          {/* {content && (
            <article className="blogsingle__content">
              <RichText richText={content} />
              <div className="blogsingle__back">
                <Button to="/blogs" text="Back to blogs" as={Link} />
              </div>
            </article>
          )} */}
          {contentMd && (
            <article className="blogsingle__content">
              <div className="markdown"
                dangerouslySetInnerHTML={{
                  __html: contentMd.childMarkdownRemark.html,
                }}
              />
              <div className="blogsingle__back">
                <Button to="/blogs" text="Back to blogs" as={Link} />
              </div>
            </article>
          )}
        </PostSingleStyles>
      </section>
      <LatestPosts title="Further reading from One For The Code" />
    </>
  )
}

export default PostTemplate
