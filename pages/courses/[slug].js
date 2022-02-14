const course = require("../../components/jsondata/Course.json");
export async function getStaticPaths() {
  const paths = course.map((item) => {
    const url = item.Course_title.split(" ").join("-").toLowerCase();
    return {
      params: {
        slug: url,
      },
    };
  });
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const url = params.slug;
  console.log(url);

  return {
    props: { data: blogdata[url], url: url},
  };
}

export default function CourseDetail({ data }) {
  console.log(data);
  return <div></div>;
}
