export function PostContent({ content }) {
  return (
    <section className="w-full max-w-md">
      {content ? <article className="">{content}</article> : null}
    </section>
  );
}
