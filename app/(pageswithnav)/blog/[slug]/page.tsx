import { notFound } from 'next/navigation'
import blogPosts from "./data.json"
import BlogDetailContent from './_components/BlogSection'
import { Metadata } from 'next'
// const sections = [
//   { id: "intro", title: "What is SEEP Innov8on?" },
//   { id: "institutions", title: "Institutions Engaged" },
//   { id: "campus", title: "What Happened on Campus" },
//   { id: "impact", title: "Outcomes & Early Impact" },
//   { id: "why", title: "Why This Matters" },
// ]
interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {

     const { slug } = await params; 

    const post = blogPosts.find(
        (project) => project.slug === slug
      );;
    const displayTitle = post?.title || slug || "Project Details";
    // const slug = post?.slug || slug || "Project Details"

    return {
     title: `${displayTitle.toLocaleUpperCase()} | SEE SUPPORT CENTRE`,
      description: post ? (post.title) : `Read more about this insightful post on SEE SUPPORT CENTER.`,
      keywords: ["Rent", "Booking", "SEE", "AirBnB", "Apartments", "Houses", "Hotels"],
      openGraph: {
        title: displayTitle,
        description: `Read more about ${displayTitle} insightful post on SEE SUPPORT CENTRE.`,
        // images: [{ url: `${BASE_URL}/blacklogo.png` }],
        // url: `${BASE_URL}/${slug}`,
        type: "website"
      },
      twitter:{
        card: "summary_large_image",
        title: `${displayTitle} | SEE SUPPORT CENTRE`,
        description: "We believe in booking the right apartments",
        // images: [`${BASE_URL}/blacklogo.png`],
      },
      other: {
        "application/ld+json": JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "headline": `${displayTitle} | SEE SUPPORT CENTRE`,
          "description": "We believe in booking the right apartments",
          "author": {
            "@type": "Person",
            "name": "SEE SUPPORT CENTRE",
          },
          "publisher": {
            "@type": "Organization",
            "name": "SEE SUPPORT CENTRE",
            "logo": {
              "@type": "ImageObject",
              // "url": `${BASE_URL}/blacklogo.png`,
            },
          },
          // "image": `${BASE_URL}/blacklogo.png`,
          // "url": `${BASE_URL}/${slug}`,
          "mainEntityOfPage": {
            "@type": "WebPage",
            // "@id": BASE_URL
          }
        })
      }
    };
  }

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params

   const blog  = blogPosts.find(
    (item) => item.slug === slug
  );

  if (!blog) {
    notFound();
  }

  const sections = blog.sections.map((section) => ({
    id: section.id,
    title: section.title,
  }));



  return (
    <BlogDetailContent blog={blog as any} sections={sections} />
  )
}
