export function Text({ className, children, tag, weight, error}) {
  switch (tag) {
    case "label":
      return <label className={className}>{children}</label>;
    case "span":
      return (
        <span className={className} error={error} weight={weight}>
          {children}
        </span>
      );
  }
}
