import React from "react";

interface Props {
  children: string;
  maxChars?: number;
  className?: string;
}

const ExpandableText = ({
  children,
  maxChars = 100,
  className = "",
}: Props) => {
  const [expanded, setExpanded] = React.useState(false);

  if (children.length <= maxChars)
    return <span className={className}>{children}</span>;

  const summary = children.substring(0, maxChars) + "...";

  return (
    <span className={className}>
      {expanded ? children : summary}
      <button
        onClick={() => setExpanded(!expanded)}
        className="btn btn-link btn-sm ps-2"
        style={{ fontSize: "1.4rem" }}
      >
        {expanded ? "Show Less" : "Read More"}
      </button>
    </span>
  );
};

export default ExpandableText;
