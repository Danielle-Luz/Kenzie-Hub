export const Text = ({ className, children, color, tag, size, weight }) => {
  switch (tag) {
    case "label":
      return (
        <label className={className} color={color} size={size} weight={weight}>
          {children}
        </label>
      );
    case "span":
      return (
        <span className={className} color={color} size={size} weight={weight}>
          {children}
        </span>
      );
  }
};

export const Title = ({ className, tag }) => {
  switch (tag) {
    case "h1":
      return <h1 className={className}>{children}</h1>;
    case "h2":
      return <h2 className={className}>{children}</h2>;
  }
};
