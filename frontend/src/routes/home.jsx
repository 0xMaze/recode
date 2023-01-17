const style = {
  fontFamily: "monospace",
  fontSize: "1rem",
  lineHeight: "1.5",
  borderRadius: "4px",
  padding: "1rem 5rem 1rem 5rem",
};

export default function Home() {
  return (
    <div style={style}>
      <h1>What is &lt;RE:CODE&gt;?</h1>
      <p>
        Introducing &lt;RE:CODE&gt;, the advanced artificial intelligence
        programming assistant that streamlines the software development process.
        Our state-of-the-art application offers a comprehensive suite of tools
        to aid software developers of all levels of experience.
      </p>
      <p>
        The list of features includes:
        <ul>
          <li>Python DocString generator</li>
          <li>Code translation capabilities</li>
          <li>Advanced debugging functionality</li>
          <li>Code explanation feature</li>
        </ul>
        Debugging feature is specifically designed to identify and correct
        coding errors, allowing for the efficient rectification of bugs.
        Additionally, the code explanation feature provides users with a deeper
        understanding of any given codebase, even if the user is unfamiliar with
        its structure or syntax.
      </p>
      <p>
        The Python DocString generator helps developers to write clear and
        informative documentation for the code. The Code Translation feature
        allows developers to convert the code to another programming language.
        The debugging feature makes it easy for developers to identify and fix
        bugs in the code. The code explanation feature provides an easy way to
        understand and modify any code, even if the user is not familiar with
        it.
      </p>
      <p>
        &lt;RE:CODE&gt; is designed to enhance the productivity and proficiency
        of any developer. The software is continually updated and improved to
        meet the ever-evolving needs of the programming community.
      </p>
    </div>
  );
}
