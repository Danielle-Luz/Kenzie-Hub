export function Text({ className, children, tag, weight }) {
  switch (tag) {
    case "label":
      return <label className={className}>{children}</label>;
    case "span":
      return (
        <span className={className} weight={weight}>
          {children}
        </span>
      );
  }
}
