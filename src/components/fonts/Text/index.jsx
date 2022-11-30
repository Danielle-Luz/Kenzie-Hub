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