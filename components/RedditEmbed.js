export default function RedditEmbed({ embedCode }) {
  return (
    <iframe
      srcDoc={embedCode}
      style={{ border: "0", width: "100%", height: "440px" }}
    />
  );
}
